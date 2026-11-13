import { describe, expect, it } from "vitest";
import {
  COD_FEE,
  EXPRESS_SHIPPING_CHARGE,
  FREE_SHIPPING_THRESHOLD,
  STANDARD_SHIPPING_CHARGE,
  computeTotals,
  formatINR,
  parsePromo,
} from "./pricing";

const base = {
  promo: null,
  deliveryMode: "ship",
  shippingMethod: "standard",
  paymentMethod: "online",
} as const;

describe("parsePromo", () => {
  it("accepts known codes case-insensitively and trims", () => {
    expect(parsePromo(" ahara10 ")).toBe("AHARA10");
    expect(parsePromo("FreeShip")).toBe("FREESHIP");
  });
  it("rejects unknown or empty codes", () => {
    expect(parsePromo("SAVE50")).toBeNull();
    expect(parsePromo("")).toBeNull();
    expect(parsePromo(undefined)).toBeNull();
  });
});

describe("computeTotals", () => {
  it("charges standard shipping below the free threshold", () => {
    const t = computeTotals({ ...base, subtotal: 500 });
    expect(t.shipping).toBe(STANDARD_SHIPPING_CHARGE);
    expect(t.total).toBe(500 + STANDARD_SHIPPING_CHARGE);
  });

  it("makes standard shipping free at the threshold", () => {
    const t = computeTotals({ ...base, subtotal: FREE_SHIPPING_THRESHOLD });
    expect(t.freeShipping).toBe(true);
    expect(t.shipping).toBe(0);
  });

  it("always charges express, even above the threshold", () => {
    const t = computeTotals({ ...base, subtotal: 2000, shippingMethod: "express" });
    expect(t.shipping).toBe(EXPRESS_SHIPPING_CHARGE);
  });

  it("FREESHIP removes standard shipping", () => {
    expect(computeTotals({ ...base, subtotal: 300, promo: "FREESHIP" }).shipping).toBe(0);
  });

  it("AHARA10 takes 10% off the subtotal, rounded", () => {
    const t = computeTotals({ ...base, subtotal: 977, promo: "AHARA10" });
    expect(t.discount).toBe(98);
    expect(t.total).toBe(977 - 98 + STANDARD_SHIPPING_CHARGE);
  });

  it("adds the COD fee and nothing for pickup", () => {
    const t = computeTotals({ ...base, subtotal: 400, deliveryMode: "pickup", paymentMethod: "cod" });
    expect(t.shipping).toBe(0);
    expect(t.codFee).toBe(COD_FEE);
    expect(t.total).toBe(400 + COD_FEE);
  });

  it("an empty cart costs nothing to ship", () => {
    expect(computeTotals({ ...base, subtotal: 0 }).total).toBe(0);
  });
});

it("formatINR uses Indian digit grouping", () => {
  expect(formatINR(123456)).toBe("₹1,23,456");
});
