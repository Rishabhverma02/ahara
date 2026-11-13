import { beforeEach, describe, expect, it } from "vitest";
import { useCartStore } from "./useCartStore";

const item = { productId: 5, slug: "makhana-tangy-lime", name: "Makhana – Tangy Lime", price: 199, quantity: 1, size: "60g", image: "x.webp" as never };

describe("cart store", () => {
  beforeEach(() => useCartStore.getState().clearCart());

  it("merges the same product + size into one line", () => {
    const { addItem } = useCartStore.getState();
    addItem(item);
    addItem({ ...item, quantity: 2 });
    const { items } = useCartStore.getState();
    expect(items).toHaveLength(1);
    expect(items[0].quantity).toBe(3);
  });

  it("updates immutably (regression: quantity used to be mutated in place)", () => {
    useCartStore.getState().addItem(item);
    const before = useCartStore.getState().items[0];
    useCartStore.getState().addItem(item);
    const after = useCartStore.getState().items[0];
    expect(after).not.toBe(before);
    expect(before.quantity).toBe(1);
  });

  it("keeps different sizes as separate lines", () => {
    useCartStore.getState().addItem(item);
    useCartStore.getState().addItem({ ...item, size: "120g", price: 349 });
    expect(useCartStore.getState().items).toHaveLength(2);
  });

  it("never lets quantity drop below 1", () => {
    useCartStore.getState().addItem(item);
    const id = useCartStore.getState().items[0].id;
    useCartStore.getState().updateQuantity(id, 0);
    expect(useCartStore.getState().items[0].quantity).toBe(1);
  });
});
