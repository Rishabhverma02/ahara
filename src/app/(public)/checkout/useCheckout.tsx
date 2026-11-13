"use client";

import { createContext, useCallback, useContext, useMemo, useReducer } from "react";
import { useCart } from "@/src/hooks/useCart";
import { playClick } from "@/src/lib/sound";
import { computeTotals, parsePromo, type PaymentMethod, type ShippingMethod, type DeliveryMode } from "@/src/lib/pricing";
import { addressSchema, contactSchema, fieldErrors } from "@/src/lib/checkout-schema";
import { loadRazorpay } from "./razorpay-client";

/*
 * Checkout state = one reducer + three narrow contexts:
 *   - FormContext     → step forms (re-render on every keystroke, as they must)
 *   - SummaryContext  → order summary (re-renders only when items/totals/promo change)
 *   - StatusContext   → page shell + timeline (step, hydration, placed order)
 * Previously ~25 useStates were spread through one 70-key context, so every
 * keystroke re-rendered the whole checkout including the summary.
 */

export interface CheckoutForm {
  email: string;
  marketingOptIn: boolean;
  deliveryMode: DeliveryMode;
  firstName: string;
  lastName: string;
  address: string;
  apartment: string;
  city: string;
  state: string;
  pinCode: string;
  phone: string;
  shippingMethod: ShippingMethod;
  paymentMethod: PaymentMethod;
}

export interface PlacedOrder {
  orderId: string;
  total: number;
  mode: "razorpay" | "demo" | "cod";
  form: CheckoutForm;
}

interface State {
  step: 1 | 2 | 3;
  form: CheckoutForm;
  errors: Record<string, string>;
  promoInput: string;
  promoError: string;
  submitting: boolean;
  submitError: string;
  placed: PlacedOrder | null;
}

type Action =
  | { type: "field"; name: keyof CheckoutForm; value: CheckoutForm[keyof CheckoutForm] }
  | { type: "errors"; errors: Record<string, string> }
  | { type: "step"; step: State["step"] }
  | { type: "promoInput"; value: string }
  | { type: "promoError"; value: string }
  | { type: "submitting"; value: boolean; error?: string }
  | { type: "placed"; order: PlacedOrder };

const initialForm: CheckoutForm = {
  email: "",
  marketingOptIn: true,
  deliveryMode: "ship",
  firstName: "",
  lastName: "",
  address: "",
  apartment: "",
  city: "",
  state: "",
  pinCode: "",
  phone: "",
  shippingMethod: "standard",
  paymentMethod: "online",
};

const initialState: State = {
  step: 1,
  form: initialForm,
  errors: {},
  promoInput: "",
  promoError: "",
  submitting: false,
  submitError: "",
  placed: null,
};

function reducer(s: State, a: Action): State {
  switch (a.type) {
    case "field": {
      // editing a field clears its error
      const { [a.name]: _cleared, ...errors } = s.errors;
      void _cleared;
      return { ...s, form: { ...s.form, [a.name]: a.value }, errors };
    }
    case "errors":
      return { ...s, errors: a.errors };
    case "step":
      return { ...s, step: a.step, submitError: "" };
    case "promoInput":
      return { ...s, promoInput: a.value, promoError: "" };
    case "promoError":
      return { ...s, promoError: a.value };
    case "submitting":
      return { ...s, submitting: a.value, submitError: a.error ?? "" };
    case "placed":
      return { ...s, placed: a.order, step: 3, submitting: false, submitError: "" };
  }
}

const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

function useCheckoutState() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const cart = useCart();
  const { items, cartTotal, appliedPromo, setAppliedPromo, clearCart, isHydrated } = cart;
  const { form } = state;

  const setField = useCallback(
    <K extends keyof CheckoutForm>(name: K, value: CheckoutForm[K]) => dispatch({ type: "field", name, value }),
    [],
  );

  const totals = useMemo(
    () =>
      computeTotals({
        subtotal: cartTotal,
        promo: appliedPromo,
        deliveryMode: form.deliveryMode,
        shippingMethod: form.shippingMethod,
        paymentMethod: form.paymentMethod,
      }),
    [cartTotal, appliedPromo, form.deliveryMode, form.shippingMethod, form.paymentMethod],
  );

  const validateDetails = useCallback(() => {
    const errors: Record<string, string> = {};
    const c = contactSchema.safeParse({ email: form.email, marketingOptIn: form.marketingOptIn });
    if (!c.success) Object.assign(errors, fieldErrors(c.error));
    if (form.deliveryMode === "ship") {
      const a = addressSchema.safeParse(form);
      if (!a.success) Object.assign(errors, fieldErrors(a.error));
    }
    dispatch({ type: "errors", errors });
    if (Object.keys(errors).length) {
      // move focus to the first invalid field
      requestAnimationFrame(() => document.getElementById(Object.keys(errors)[0])?.focus());
      return false;
    }
    return true;
  }, [form]);

  const goToPayment = useCallback(
    (e?: React.FormEvent) => {
      e?.preventDefault();
      if (!validateDetails()) return;
      dispatch({ type: "step", step: 2 });
      scrollTop();
    },
    [validateDetails],
  );

  const backToDetails = useCallback(() => {
    dispatch({ type: "step", step: 1 });
    scrollTop();
  }, []);

  const placeOrder = useCallback(async () => {
    dispatch({ type: "submitting", value: true });
    const snapshot = { ...form };
    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contact: { email: form.email, marketingOptIn: form.marketingOptIn },
          deliveryMode: form.deliveryMode,
          address: form.deliveryMode === "ship" ? form : undefined,
          shippingMethod: form.shippingMethod,
          paymentMethod: form.paymentMethod,
          promo: appliedPromo,
          lines: items.map((i) => ({ productId: i.productId, size: i.size, quantity: i.quantity })),
        }),
      });
      const data = await res.json();

      if (!res.ok) {
        if (data.fields) {
          dispatch({ type: "errors", errors: data.fields });
          dispatch({ type: "step", step: 1 });
        }
        dispatch({ type: "submitting", value: false, error: data.error ?? "Something went wrong." });
        return;
      }

      const finish = (mode: PlacedOrder["mode"]) => {
        playClick();
        dispatch({ type: "placed", order: { orderId: data.orderId, total: data.total, mode, form: snapshot } });
        clearCart();
        scrollTop();
      };

      if (data.mode !== "razorpay") return finish(data.mode);

      const Razorpay = await loadRazorpay();
      const rzp = new Razorpay({
        key: data.razorpay.keyId,
        order_id: data.razorpay.orderId,
        amount: data.razorpay.amount,
        currency: data.razorpay.currency,
        name: "Ahara",
        description: `Order ${data.orderId}`,
        prefill: {
          name: `${form.firstName} ${form.lastName}`.trim(),
          email: form.email,
          contact: form.phone,
        },
        theme: { color: "#66711F" },
        handler: async (resp: Record<string, string>) => {
          const v = await fetch("/api/payments/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ orderId: data.orderId, ...resp }),
          });
          if (v.ok) finish("razorpay");
          else dispatch({ type: "submitting", value: false, error: "We couldn't verify your payment. If you were charged, contact support with order " + data.orderId + "." });
        },
        modal: {
          ondismiss: () => dispatch({ type: "submitting", value: false, error: "Payment was cancelled. Your cart is still here." }),
        },
      });
      rzp.open();
    } catch {
      dispatch({ type: "submitting", value: false, error: "Network error — please check your connection and try again." });
    }
  }, [form, appliedPromo, items, clearCart]);

  const applyPromo = useCallback(() => {
    const code = parsePromo(state.promoInput);
    if (code) {
      setAppliedPromo(code);
      dispatch({ type: "promoInput", value: "" });
    } else {
      dispatch({ type: "promoError", value: "That code isn't valid. Check the spelling and try again." });
    }
  }, [state.promoInput, setAppliedPromo]);

  const removePromo = useCallback(() => setAppliedPromo(null), [setAppliedPromo]);
  const setPromoInput = useCallback((value: string) => dispatch({ type: "promoInput", value }), []);

  const formValue = useMemo(
    () => ({
      form,
      errors: state.errors,
      setField,
      goToPayment,
      backToDetails,
      placeOrder,
      submitting: state.submitting,
      submitError: state.submitError,
      totals,
    }),
    [form, state.errors, setField, goToPayment, backToDetails, placeOrder, state.submitting, state.submitError, totals],
  );

  const summaryValue = useMemo(
    () => ({
      items,
      totals,
      appliedPromo,
      promoInput: state.promoInput,
      promoError: state.promoError,
      setPromoInput,
      applyPromo,
      removePromo,
    }),
    [items, totals, appliedPromo, state.promoInput, state.promoError, setPromoInput, applyPromo, removePromo],
  );

  const statusValue = useMemo(
    () => ({ step: state.step, isHydrated, itemCount: items.length, placed: state.placed }),
    [state.step, isHydrated, items.length, state.placed],
  );

  return { formValue, summaryValue, statusValue };
}

type Values = ReturnType<typeof useCheckoutState>;
const FormContext = createContext<Values["formValue"] | null>(null);
const SummaryContext = createContext<Values["summaryValue"] | null>(null);
const StatusContext = createContext<Values["statusValue"] | null>(null);

export function CheckoutProvider({ children }: { children: React.ReactNode }) {
  const { formValue, summaryValue, statusValue } = useCheckoutState();
  return (
    <StatusContext.Provider value={statusValue}>
      <SummaryContext.Provider value={summaryValue}>
        <FormContext.Provider value={formValue}>{children}</FormContext.Provider>
      </SummaryContext.Provider>
    </StatusContext.Provider>
  );
}

const use = <T,>(ctx: React.Context<T | null>, name: string) => {
  const v = useContext(ctx);
  if (!v) throw new Error(`${name} must be used inside <CheckoutProvider>`);
  return v;
};

export const useCheckoutForm = () => use(FormContext, "useCheckoutForm");
export const useCheckoutSummary = () => use(SummaryContext, "useCheckoutSummary");
export const useCheckoutStatus = () => use(StatusContext, "useCheckoutStatus");
