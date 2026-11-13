"use client";

import { ArrowLeft, Banknote, CreditCard, Lock, Package, Zap } from "lucide-react";
import { COD_FEE, EXPRESS_SHIPPING_CHARGE, STANDARD_SHIPPING_CHARGE, formatINR } from "@/src/lib/pricing";
import { GooglePay, Mastercard, PhonePe, Paytm, Visa } from "@/src/components/ui/BrandIcons";
import { useCheckoutForm } from "../../useCheckout";
import { FormCard, CardHeader, CardTitle, CardHeaderBadge, DeliveryCardHeader } from "../step-1-form/styled";
import * as S from "./styled";

/*
 * Payment step. Card / UPI / netbanking details are entered in the payment
 * gateway's own secure window (Razorpay), never in this form — the previous
 * version collected raw card numbers and CVVs into React state, which would put
 * the site in PCI-DSS scope.
 */
export const Step2Form = () => {
  const { form, setField, backToDetails, placeOrder, submitting, submitError, totals } = useCheckoutForm();
  const shipping = form.deliveryMode === "ship";

  return (
    <FormCard>
      <CardHeader>
        <CardTitle>
          <Package size={18} aria-hidden /> {shipping ? "Shipping speed" : "Pickup"}
        </CardTitle>
        <CardHeaderBadge>Step 2 of 2</CardHeaderBadge>
      </CardHeader>

      {shipping ? (
        <S.Options role="radiogroup" aria-label="Shipping speed">
          <Option
            name="shipping"
            checked={form.shippingMethod === "standard"}
            onChange={() => setField("shippingMethod", "standard")}
            icon={<Package size={20} />}
            title="Standard"
            desc="3–5 working days"
            price={totals.freeShipping ? "Free" : formatINR(STANDARD_SHIPPING_CHARGE)}
          />
          <Option
            name="shipping"
            checked={form.shippingMethod === "express"}
            onChange={() => setField("shippingMethod", "express")}
            icon={<Zap size={20} />}
            title="Express"
            desc="24–48 hours in metro cities"
            price={formatINR(EXPRESS_SHIPPING_CHARGE)}
          />
        </S.Options>
      ) : (
        <S.Note>
          Collect your order from Ahara Wellness HQ, Jaora — we&rsquo;ll email you when it&rsquo;s ready.
        </S.Note>
      )}

      <DeliveryCardHeader>
        <CardTitle>
          <CreditCard size={18} aria-hidden /> Payment
        </CardTitle>
      </DeliveryCardHeader>

      <S.Options role="radiogroup" aria-label="Payment method">
        <Option
          name="payment"
          checked={form.paymentMethod === "online"}
          onChange={() => setField("paymentMethod", "online")}
          icon={<CreditCard size={20} />}
          title="Pay online"
          desc="UPI, cards, netbanking and wallets — in a secure Razorpay window"
          extra={
            <S.Marks aria-hidden>
              <GooglePay />
              <PhonePe />
              <Paytm />
              <Visa />
              <Mastercard />
            </S.Marks>
          }
        />
        <Option
          name="payment"
          checked={form.paymentMethod === "cod"}
          onChange={() => setField("paymentMethod", "cod")}
          icon={<Banknote size={20} />}
          title="Cash on delivery"
          desc="Pay in cash or UPI when your order arrives"
          price={`+${formatINR(COD_FEE)}`}
        />
      </S.Options>

      {submitError && <S.ErrorBox role="alert">{submitError}</S.ErrorBox>}

      <S.Actions>
        <S.Back type="button" onClick={backToDetails} disabled={submitting}>
          <ArrowLeft size={16} aria-hidden /> Back to details
        </S.Back>
        <S.Pay type="button" onClick={placeOrder} disabled={submitting} aria-busy={submitting}>
          {submitting ? (
            "Processing…"
          ) : (
            <>
              <Lock size={16} aria-hidden />
              {form.paymentMethod === "cod" ? "Place order" : "Pay"} · {formatINR(totals.total)}
            </>
          )}
        </S.Pay>
      </S.Actions>
    </FormCard>
  );
};

interface OptionProps {
  name: string;
  checked: boolean;
  onChange: () => void;
  icon: React.ReactNode;
  title: string;
  desc: string;
  price?: string;
  extra?: React.ReactNode;
}

function Option({ name, checked, onChange, icon, title, desc, price, extra }: OptionProps) {
  return (
    <S.Option $checked={checked}>
      <input type="radio" name={name} checked={checked} onChange={onChange} />
      <S.OptionIcon aria-hidden>{icon}</S.OptionIcon>
      <S.OptionText>
        <strong>{title}</strong>
        <span>{desc}</span>
        {extra}
      </S.OptionText>
      {price && <S.OptionPrice>{price}</S.OptionPrice>}
    </S.Option>
  );
}
