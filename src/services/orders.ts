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
import { db } from "./db";
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

/* ---------- storage adapters ---------- */

/** Fields that change after creation. */
export type OrderPatch = Partial<Pick<Order, "status" | "gateway">>;

interface OrderStore {
  save(order: Order): Promise<void>;
  get(id: string): Promise<Order | undefined>;
  getByGatewayOrderId(gatewayOrderId: string): Promise<Order | undefined>;
  update(id: string, patch: OrderPatch): Promise<Order | undefined>;
}

const memory = new Map<string, Order>();
const memoryStore: OrderStore = {
  async save(o) {
    memory.set(o.id, o);
  },
  async get(id) {
    return memory.get(id);
  },
  async getByGatewayOrderId(gid) {
    return [...memory.values()].find((o) => o.gateway?.orderId === gid);
  },
  async update(id, patch) {
    const o = memory.get(id);
    if (!o) return undefined;
    const next = { ...o, ...patch };
    memory.set(id, next);
    return next;
  },
};

type Row = {
  id: string;
  created_at: Date;
  status: OrderStatus;
  promo: string | null;
  subtotal: number;
  discount: number;
  shipping: number;
  cod_fee: number;
  total: number;
  request: OrderRequest;
  lines: PricedLine[];
  gateway_order_id: string | null;
  gateway_payment_id: string | null;
};

const fromRow = (r: Row): Order => ({
  id: r.id,
  createdAt: new Date(r.created_at).toISOString(),
  status: r.status,
  request: r.request,
  lines: r.lines,
  promo: r.promo,
  totals: {
    subtotal: r.subtotal,
    discount: r.discount,
    shipping: r.shipping,
    codFee: r.cod_fee,
    total: r.total,
    freeShipping: r.shipping === 0,
  },
  gateway: r.gateway_order_id
    ? { provider: "razorpay", orderId: r.gateway_order_id, paymentId: r.gateway_payment_id ?? undefined }
    : undefined,
});

/** Postgres adapter — schema in db/schema.sql. Used when DATABASE_URL is set. */
function postgresStore(sql: NonNullable<ReturnType<typeof db>>): OrderStore {
  return {
    async save(o) {
      const t = o.totals;
      await sql`
        insert into orders (id, created_at, status, email, phone, delivery_mode, payment_method, promo,
          subtotal, discount, shipping, cod_fee, total, request, lines, gateway_order_id)
        values (${o.id}, ${o.createdAt}, ${o.status}, ${o.request.contact.email}, ${o.request.address?.phone ?? null},
          ${o.request.deliveryMode}, ${o.request.paymentMethod}, ${o.promo}, ${t.subtotal}, ${t.discount},
          ${t.shipping}, ${t.codFee}, ${t.total}, ${sql.json(o.request)}, ${sql.json(o.lines)},
          ${o.gateway?.orderId ?? null})`;
    },
    async get(id) {
      const [r] = await sql<Row[]>`select * from orders where id = ${id}`;
      return r ? fromRow(r) : undefined;
    },
    async getByGatewayOrderId(gid) {
      const [r] = await sql<Row[]>`select * from orders where gateway_order_id = ${gid}`;
      return r ? fromRow(r) : undefined;
    },
    async update(id, patch) {
      const [r] = await sql<Row[]>`
        update orders set
          status = coalesce(${patch.status ?? null}, status),
          gateway_order_id = coalesce(${patch.gateway?.orderId ?? null}, gateway_order_id),
          gateway_payment_id = coalesce(${patch.gateway?.paymentId ?? null}, gateway_payment_id),
          updated_at = now()
        where id = ${id}
        returning *`;
      return r ? fromRow(r) : undefined;
    },
  };
}

const store = (): OrderStore => {
  const sql = db();
  return sql ? postgresStore(sql) : memoryStore;
};

/** True when orders survive restarts (a database is configured). */
export const isPersistent = () => db() !== null;

export async function createOrder(req: OrderRequest): Promise<Order> {
  const priced = priceOrder(req);
  const order: Order = {
    id: `AHA-${randomUUID().slice(0, 8).toUpperCase()}`,
    createdAt: new Date().toISOString(),
    status: req.paymentMethod === "cod" ? "cod_confirmed" : "pending_payment",
    request: req,
    ...priced,
  };
  await store().save(order);
  return order;
}

export const getOrder = (id: string) => store().get(id);
export const getOrderByGatewayId = (gatewayOrderId: string) => store().getByGatewayOrderId(gatewayOrderId);
export const updateOrder = (id: string, patch: OrderPatch) => store().update(id, patch);
