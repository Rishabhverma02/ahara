/**
 * Razorpay adapter (server only). Uses the REST API directly — no SDK needed.
 *
 * Enabled when RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET are set. Card, UPI and
 * netbanking details are entered in Razorpay's hosted checkout, never in our
 * app, which keeps us out of PCI-DSS card-data scope.
 */
import { createHmac, timingSafeEqual } from "node:crypto";

const KEY_ID = process.env.RAZORPAY_KEY_ID ?? "";
const KEY_SECRET = process.env.RAZORPAY_KEY_SECRET ?? "";

export const isRazorpayConfigured = () => Boolean(KEY_ID && KEY_SECRET);
export const razorpayKeyId = () => KEY_ID;

/** Creates a Razorpay order. Amount is in rupees; Razorpay expects paise. */
export async function createRazorpayOrder(receipt: string, amountInRupees: number) {
  const res = await fetch("https://api.razorpay.com/v1/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${Buffer.from(`${KEY_ID}:${KEY_SECRET}`).toString("base64")}`,
    },
    body: JSON.stringify({ amount: Math.round(amountInRupees * 100), currency: "INR", receipt }),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Razorpay order failed: ${res.status} ${await res.text()}`);
  return (await res.json()) as { id: string; amount: number; currency: string };
}

/** Verifies the signature returned to the browser after a successful payment. */
export function verifyPaymentSignature(razorpayOrderId: string, paymentId: string, signature: string) {
  const expected = createHmac("sha256", KEY_SECRET).update(`${razorpayOrderId}|${paymentId}`).digest("hex");
  const a = Buffer.from(expected);
  const b = Buffer.from(signature);
  return a.length === b.length && timingSafeEqual(a, b);
}
