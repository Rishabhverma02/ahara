import { describe, expect, it } from "vitest";
import { createOrder, getOrder, priceOrder, OrderError } from "./orders";
import type { OrderRequest } from "@/src/lib/checkout-schema";

const req = (over: Partial<OrderRequest> = {}): OrderRequest => ({
  contact: { email: "a@b.co", marketingOptIn: false },
  deliveryMode: "ship",
  address: {
    firstName: "Asha",
    lastName: "Rao",
    address: "12 MG Road",
    apartment: "",
    city: "Pune",
    state: "Maharashtra",
    pinCode: "411001",
    phone: "9876543210",
  },
  shippingMethod: "standard",
  paymentMethod: "online",
  promo: null,
  lines: [{ productId: 5, size: "120g", quantity: 2 }],
  ...over,
});

describe("priceOrder (server-side, authoritative)", () => {
  it("prices sized products from the catalogue", () => {
    const { lines, totals } = priceOrder(req());
    expect(lines[0].unitPrice).toBe(349); // Makhana 120g
    expect(totals.subtotal).toBe(698);
  });

  it("uses the base price for 'Standard' size", () => {
    const { lines } = priceOrder(req({ lines: [{ productId: 5, size: "Standard", quantity: 1 }] }));
    expect(lines[0].unitPrice).toBe(199);
  });

  it("rejects unknown products and sizes", () => {
    expect(() => priceOrder(req({ lines: [{ productId: 9999, size: "Standard", quantity: 1 }] }))).toThrow(OrderError);
    expect(() => priceOrder(req({ lines: [{ productId: 5, size: "1kg-free", quantity: 1 }] }))).toThrow(OrderError);
  });

  it("normalises and validates promo codes", () => {
    expect(priceOrder(req({ promo: "ahara10" })).promo).toBe("AHARA10");
    expect(priceOrder(req({ promo: "HACKED99" })).promo).toBeNull();
  });
});

describe("createOrder", () => {
  it("stores the order with a status matching the payment method", async () => {
    const online = await createOrder(req());
    const cod = await createOrder(req({ paymentMethod: "cod" }));
    expect(online.status).toBe("pending_payment");
    expect(cod.status).toBe("cod_confirmed");
    expect(online.id).toMatch(/^AHA-[A-Z0-9]{8}$/);
    expect(await getOrder(online.id)).toBeDefined();
  });
});
