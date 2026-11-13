import { NextResponse } from "next/server";
import { createHmac, timingSafeEqual } from "node:crypto";
import { getOrderByGatewayId, updateOrder } from "@/src/services/orders";
import { sendOrderConfirmation } from "@/src/services/email";

/**
 * POST /api/payments/webhook — Razorpay server-to-server events.
 *
 * Catches payments that complete after the customer closes the tab (so the
 * browser never calls /verify). Configure in Razorpay Dashboard → Webhooks:
 *   URL:    https://<your-domain>/api/payments/webhook
 *   Events: payment.captured, payment.failed
 *   Secret: same value as RAZORPAY_WEBHOOK_SECRET
 */
export async function POST(req: Request) {
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
  if (!secret) return NextResponse.json({ error: "Webhook not configured" }, { status: 501 });

  const raw = await req.text(); // signature is over the raw body
  const signature = req.headers.get("x-razorpay-signature") ?? "";
  const expected = createHmac("sha256", secret).update(raw).digest("hex");
  const ok =
    signature.length === expected.length && timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
  if (!ok) return NextResponse.json({ error: "Invalid signature" }, { status: 400 });

  const event = JSON.parse(raw) as {
    event: string;
    payload?: { payment?: { entity?: { id: string; order_id: string } } };
  };
  const payment = event.payload?.payment?.entity;
  if (!payment?.order_id) return NextResponse.json({ ok: true }); // not a payment event we track

  const order = await getOrderByGatewayId(payment.order_id);
  if (!order) return NextResponse.json({ ok: true }); // unknown order — acknowledge so Razorpay stops retrying

  if (event.event === "payment.captured" && order.status !== "paid") {
    const updated = await updateOrder(order.id, {
      status: "paid",
      gateway: { provider: "razorpay", orderId: payment.order_id, paymentId: payment.id },
    });
    if (updated) await sendOrderConfirmation(updated).catch((e) => console.error("[email]", e));
  } else if (event.event === "payment.failed" && order.status === "pending_payment") {
    await updateOrder(order.id, { status: "payment_failed" });
  }
  return NextResponse.json({ ok: true });
}
