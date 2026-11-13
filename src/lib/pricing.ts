/**
 * Single source of truth for order maths, shared by cart and checkout.
 * (Previously duplicated in useCartPage and useCheckout.)
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

export function parsePromo(input: string): PromoCode | null {
  const code = input.trim().toUpperCase();
  return code in PROMOS ? (code as PromoCode) : null;
}

export function promoDiscount(subtotal: number, promo: string | null) {
  return promo === "AHARA10" ? Math.round(subtotal * 0.1) : 0;
}

export function qualifiesForFreeShipping(subtotal: number, promo: string | null) {
  return subtotal >= FREE_SHIPPING_THRESHOLD || promo === "FREESHIP";
}

export const formatINR = (n: number) => `₹${n.toLocaleString("en-IN")}`;
