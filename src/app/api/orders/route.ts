import { NextResponse } from "next/server";
import { orderRequestSchema, fieldErrors } from "@/src/lib/checkout-schema";
import { createOrder, updateOrder, OrderError } from "@/src/services/orders";
import { createRazorpayOrder, isRazorpayConfigured, razorpayKeyId } from "@/src/services/payments/razorpay";

/**
 * POST /api/orders — validates the checkout, re-prices it from the catalogue
 * and creates the order. For online payment it also creates a Razorpay order
 * (or returns `mode: "demo"` when no gateway keys are configured).
 */
export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = orderRequestSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Validation failed", fields: fieldErrors(parsed.error) }, { status: 422 });
  }

  try {
    const order = await createOrder(parsed.data);
    const base = { orderId: order.id, total: order.totals.total, totals: order.totals, status: order.status };

    if (parsed.data.paymentMethod === "cod") {
      return NextResponse.json({ ...base, mode: "cod" });
    }

    if (!isRazorpayConfigured()) {
      // Demo mode is for local development only; never auto-"pay" in production.
      const demoAllowed = process.env.NODE_ENV !== "production" || process.env.ALLOW_DEMO_PAYMENTS === "true";
      if (!demoAllowed) {
        await updateOrder(order.id, { status: "payment_failed" });
        return NextResponse.json(
          { error: "Online payment is temporarily unavailable. Please choose Cash on Delivery." },
          { status: 503 },
        );
      }
      // No gateway keys — mark as paid so the flow can be tested end to end.
      await updateOrder(order.id, { status: "paid" });
      return NextResponse.json({ ...base, status: "paid", mode: "demo" });
    }

    const rzp = await createRazorpayOrder(order.id, order.totals.total);
    await updateOrder(order.id, { gateway: { provider: "razorpay", orderId: rzp.id } });
    return NextResponse.json({
      ...base,
      mode: "razorpay",
      razorpay: { keyId: razorpayKeyId(), orderId: rzp.id, amount: rzp.amount, currency: rzp.currency },
    });
  } catch (err) {
    if (err instanceof OrderError) return NextResponse.json({ error: err.message }, { status: 422 });
    console.error("[orders] create failed", err);
    return NextResponse.json({ error: "Could not create order. Please try again." }, { status: 500 });
  }
}
