import { NextResponse } from "next/server";
import { z } from "zod";
import { getOrder, updateOrder } from "@/src/services/orders";
import { isRazorpayConfigured, verifyPaymentSignature } from "@/src/services/payments/razorpay";

const bodySchema = z.object({
  orderId: z.string().min(1),
  razorpay_order_id: z.string().min(1),
  razorpay_payment_id: z.string().min(1),
  razorpay_signature: z.string().min(1),
});

/**
 * POST /api/payments/verify — called by the browser after Razorpay checkout
 * succeeds. The order is only marked paid if the HMAC signature checks out.
 * (Also configure a Razorpay webhook for payments that complete after the
 * customer closes the tab — see README.)
 */
export async function POST(req: Request) {
  if (!isRazorpayConfigured())
    return NextResponse.json({ error: "Payments not configured" }, { status: 501 });

  const parsed = bodySchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  const { orderId, razorpay_order_id, razorpay_payment_id, razorpay_signature } = parsed.data;

  const order = await getOrder(orderId);
  if (!order || order.gateway?.orderId !== razorpay_order_id) {
    return NextResponse.json({ error: "Order not found" }, { status: 404 });
  }
  if (!verifyPaymentSignature(razorpay_order_id, razorpay_payment_id, razorpay_signature)) {
    await updateOrder(orderId, { status: "payment_failed" });
    return NextResponse.json({ error: "Payment verification failed" }, { status: 400 });
  }

  await updateOrder(orderId, {
    status: "paid",
    gateway: { provider: "razorpay", orderId: razorpay_order_id, paymentId: razorpay_payment_id },
  });
  return NextResponse.json({ ok: true, orderId, total: order.totals.total });
}
