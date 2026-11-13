/**
 * Single source of truth for order maths. Used by the cart, the checkout UI
 * and — authoritatively — by the /api/orders route on the server.
 */
export const FREE_SHIPPING_THRESHOLD = 999;
export const STANDARD_SHIPPING_CHARGE = 60;
export const EXPRESS_SHIPPING_CHARGE = 120;
export const COD_FEE = 40;

export const PROMOS = {
  AHARA10: { label: "10% off your order" },
  FREESHIP: { label: "Free standard shipping" },
} as const;
export type PromoCode = keyof typeof PROMOS;

export type DeliveryMode = "ship" | "pickup";
export type ShippingMethod = "standard" | "express";
export type PaymentMethod = "online" | "cod";

export function parsePromo(input: string | null | undefined): PromoCode | null {
  const code = (input ?? "").trim().toUpperCase();
  return code in PROMOS ? (code as PromoCode) : null;
}

export function promoDiscount(subtotal: number, promo: string | null) {
  return promo === "AHARA10" ? Math.round(subtotal * 0.1) : 0;
}

export function qualifiesForFreeShipping(subtotal: number, promo: string | null) {
  return subtotal >= FREE_SHIPPING_THRESHOLD || promo === "FREESHIP";
}

export interface TotalsInput {
  subtotal: number;
  promo: string | null;
  deliveryMode: DeliveryMode;
  shippingMethod: ShippingMethod;
  paymentMethod: PaymentMethod;
}

export interface Totals {
  subtotal: number;
  discount: number;
  shipping: number;
  codFee: number;
  total: number;
  freeShipping: boolean;
}

export function computeTotals({ subtotal, promo, deliveryMode, shippingMethod, paymentMethod }: TotalsInput): Totals {
  const freeShipping = qualifiesForFreeShipping(subtotal, promo);
  const shipping =
    subtotal === 0 || deliveryMode === "pickup"
      ? 0
      : shippingMethod === "express"
        ? EXPRESS_SHIPPING_CHARGE
        : freeShipping
          ? 0
          : STANDARD_SHIPPING_CHARGE;
  const discount = promoDiscount(subtotal, promo);
  const codFee = paymentMethod === "cod" ? COD_FEE : 0;
  return { subtotal, discount, shipping, codFee, total: subtotal - discount + shipping + codFee, freeShipping };
}

export const formatINR = (n: number) => `₹${n.toLocaleString("en-IN")}`;
