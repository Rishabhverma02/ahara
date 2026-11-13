import { describe, expect, it } from "vitest";
import { addressSchema, fieldErrors, orderRequestSchema } from "./checkout-schema";

const address = {
  firstName: "Asha",
  lastName: "Rao",
  address: "12 MG Road",
  apartment: "",
  city: "Pune",
  state: "Maharashtra",
  pinCode: "411001",
  phone: "9876543210",
};

describe("addressSchema", () => {
  it("accepts a valid Indian address", () => {
    expect(addressSchema.safeParse(address).success).toBe(true);
  });

  it.each([
    ["pinCode", "011001"],
    ["pinCode", "41100"],
    ["phone", "1234567890"],
    ["phone", "98765"],
    ["state", "Atlantis"],
    ["city", "   "],
  ])("rejects invalid %s = %j", (field, value) => {
    const r = addressSchema.safeParse({ ...address, [field]: value });
    expect(r.success).toBe(false);
    if (!r.success) expect(Object.keys(fieldErrors(r.error))).toContain(field);
  });
});

describe("orderRequestSchema", () => {
  const order = {
    contact: { email: "a@b.co", marketingOptIn: true },
    deliveryMode: "ship",
    address,
    shippingMethod: "standard",
    paymentMethod: "cod",
    promo: null,
    lines: [{ productId: 1, size: "60g", quantity: 1 }],
  };

  it("requires an address when shipping, not for pickup", () => {
    expect(orderRequestSchema.safeParse({ ...order, address: undefined }).success).toBe(false);
    expect(
      orderRequestSchema.safeParse({ ...order, deliveryMode: "pickup", address: undefined }).success,
    ).toBe(true);
  });

  it("caps quantities and requires at least one line", () => {
    expect(orderRequestSchema.safeParse({ ...order, lines: [] }).success).toBe(false);
    expect(
      orderRequestSchema.safeParse({ ...order, lines: [{ productId: 1, size: "60g", quantity: 500 }] })
        .success,
    ).toBe(false);
  });

  it("ignores client-sent prices entirely (they are not part of the schema)", () => {
    const r = orderRequestSchema.safeParse({
      ...order,
      lines: [{ productId: 1, size: "60g", quantity: 1, price: 1 }],
    });
    expect(r.success && "price" in r.data.lines[0]).toBe(false);
  });
});
