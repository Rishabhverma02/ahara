/**
 * Email (server only) via Resend's REST API — no SDK needed.
 * Enabled when RESEND_API_KEY is set; otherwise calls are logged and skipped so
 * checkout never fails because email isn't configured.
 */
import type { Order } from "./orders";
import { formatINR } from "@/src/lib/pricing";
import { SITE_URL } from "@/src/lib/site";

const API_KEY = process.env.RESEND_API_KEY ?? "";
const FROM = process.env.EMAIL_FROM ?? "Ahara <orders@example.com>";
const AUDIENCE = process.env.RESEND_AUDIENCE_ID ?? "";

export const isEmailConfigured = () => Boolean(API_KEY);
export const isNewsletterConfigured = () => Boolean(API_KEY && AUDIENCE);

async function resend(path: string, body: unknown) {
  const res = await fetch(`https://api.resend.com${path}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify(body),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Resend ${path} failed: ${res.status} ${await res.text()}`);
  return res.json();
}

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

export async function sendOrderConfirmation(order: Order) {
  if (!isEmailConfigured()) {
    console.info(`[email] skipped confirmation for ${order.id} (RESEND_API_KEY not set)`);
    return;
  }
  const rows = order.lines
    .map(
      (l) =>
        `<tr><td>${l.quantity} × ${esc(l.name)} (${esc(l.size)})</td><td align="right">${formatINR(l.lineTotal)}</td></tr>`,
    )
    .join("");
  const t = order.totals;
  const html = `
    <div style="font-family:Georgia,serif;max-width:560px;margin:auto;color:#1D2116">
      <h1 style="font-weight:400">Thank you — your order is in.</h1>
      <p style="font-family:Arial,sans-serif">Order <strong>${order.id}</strong></p>
      <table width="100%" style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">
        ${rows}
        <tr><td>Shipping</td><td align="right">${t.shipping ? formatINR(t.shipping) : "Free"}</td></tr>
        ${t.discount ? `<tr><td>Discount</td><td align="right">−${formatINR(t.discount)}</td></tr>` : ""}
        ${t.codFee ? `<tr><td>Cash on delivery fee</td><td align="right">${formatINR(t.codFee)}</td></tr>` : ""}
        <tr><td><strong>Total</strong></td><td align="right"><strong>${formatINR(t.total)}</strong></td></tr>
      </table>
      <p style="font-family:Arial,sans-serif;font-size:13px;color:#686659">Questions? Just reply to this email. <a href="${SITE_URL}">${SITE_URL.replace(/^https?:\/\//, "")}</a></p>
    </div>`;
  await resend("/emails", {
    from: FROM,
    to: [order.request.contact.email],
    subject: `Your Ahara order ${order.id}`,
    html,
  });
}

export async function addNewsletterContact(email: string) {
  return resend(`/audiences/${AUDIENCE}/contacts`, { email, unsubscribed: false });
}
