/**
 * Orders service (server only).
 *
 * priceOrder() is the authoritative pricing step: it ignores any prices the
 * browser sends and recomputes every line from the catalogue, so a tampered
 * cart or promo can't change what the customer is charged.
 *
 * Storage: until DATABASE_URL is configured, orders are kept in memory (lost on
 * restart, not shared between serverless instances) — fine for local dev and
 * demos only. Replace the `store` below with a real database adapter.
 */
import { randomUUID } from "node:crypto";
import { getProductById, getProductDetail } from "./catalog";
import { computeTotals, parsePromo, type Totals } from "@/src/lib/pricing";
import type { OrderRequest } from "@/src/lib/checkout-schema";

export type OrderStatus = "pending_payment" | "paid" | "cod_confirmed" | "payment_failed";

export interface PricedLine {
  productId: number;
  name: string;
  size: string;
  unitPrice: number;
  quantity: number;
  lineTotal: number;
}

export interface Order {
  id: string;
  createdAt: string;
  status: OrderStatus;
  request: OrderRequest;
  lines: PricedLine[];
  promo: string | null;
  totals: Totals;
  gateway?: { provider: "razorpay"; orderId: string; paymentId?: string };
}

export class OrderError extends Error {}

export function priceOrder(req: OrderRequest) {
  const lines: PricedLine[] = req.lines.map((l) => {
    const product = getProductById(l.productId);
    if (!product) throw new OrderError(`Unknown product ${l.productId}`);
    const sizes = getProductDetail(product.id)?.sizes;
    const unitPrice =
      l.size === "Standard" || !sizes ? product.price : sizes.find((s) => s.label === l.size)?.price;
    if (unitPrice === undefined) throw new OrderError(`Unknown size "${l.size}" for ${product.name}`);
    return {
      productId: product.id,
      name: product.name,
      size: l.size,
      unitPrice,
      quantity: l.quantity,
      lineTotal: unitPrice * l.quantity,
    };
  });

  const promo = parsePromo(req.promo);
  const subtotal = lines.reduce((n, l) => n + l.lineTotal, 0);
  const totals = computeTotals({
    subtotal,
    promo,
    deliveryMode: req.deliveryMode,
    shippingMethod: req.shippingMethod,
    paymentMethod: req.paymentMethod,
  });
  return { lines, promo, totals };
}

/* ---------- storage adapter ---------- */

interface OrderStore {
  save(order: Order): Promise<void>;
  get(id: string): Promise<Order | undefined>;
  update(id: string, patch: Partial<Order>): Promise<Order | undefined>;
}

const memory = new Map<string, Order>();
const memoryStore: OrderStore = {
  async save(o) {
    memory.set(o.id, o);
  },
  async get(id) {
    return memory.get(id);
  },
  async update(id, patch) {
    const o = memory.get(id);
    if (!o) return undefined;
    const next = { ...o, ...patch };
    memory.set(id, next);
    return next;
  },
};

// TODO(database): swap for a Postgres adapter when DATABASE_URL is set.
const store: OrderStore = memoryStore;

export const isPersistent = () => false;

export async function createOrder(req: OrderRequest): Promise<Order> {
  const priced = priceOrder(req);
  const order: Order = {
    id: `AHA-${randomUUID().slice(0, 8).toUpperCase()}`,
    createdAt: new Date().toISOString(),
    status: req.paymentMethod === "cod" ? "cod_confirmed" : "pending_payment",
    request: req,
    ...priced,
  };
  await store.save(order);
  return order;
}

export const getOrder = (id: string) => store.get(id);
export const updateOrder = (id: string, patch: Partial<Order>) => store.update(id, patch);
