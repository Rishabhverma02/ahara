# Ahara

Storefront for Ahara — roasted makhana, sattu, millet cookies and moringa.
Next.js 16 (App Router) · React 19 · styled-components · Zustand · Zod.

```bash
npm install
cp .env.example .env.local   # everything is optional for local dev
npm run dev                  # http://localhost:3000
```

| Script                                                 | What it does                  |
| ------------------------------------------------------ | ----------------------------- |
| `npm run dev` / `build` / `start`                      | Next.js                       |
| `npm run lint` · `typecheck` · `test` · `format:check` | Quality gates (all run in CI) |
| `npm run check`                                        | All of the above in one go    |

Without any environment variables the whole site works locally: online payment runs in a clearly-labelled
**demo mode**, orders are kept in memory, emails are logged instead of sent.

---

## Project structure

```
src/
  app/                    routes (App Router)
    (public)/             storefront pages: home, shop, product, cart, checkout, wishlist, policies
    (auth)/ (user)/ admin/  placeholders — closed until auth exists (see src/proxy.ts)
    api/                  orders, payments/verify, payments/webhook, newsletter
  components/
    layout/               header, footer, cart drawer, search panel
    ui/                   Button, ProductCard, PageHero, SectionHeading, EmptyState, Mascot, BrandIcons
    feedback/             Toaster, 404/error views, ComingSoon
  data/                   static catalogue, product details, policy texts
  services/               server/data access: catalog, orders, payments, email, db
  lib/                    pure logic shared by client + server: pricing, checkout schema, sound, site config
  hooks/ store/           client hooks and Zustand stores (cart, wishlist, UI panels, toasts)
  theme/ style/           design tokens (CSS variables) and shared style fragments
db/schema.sql             Postgres schema
```

**Conventions**

- Each component lives in its own folder: `Component.tsx` + `styled.ts` (+ `index.ts`).
- Colours, type, spacing and radii come from CSS variables defined in `src/style/globalstyle.tsx`. Don't
  hard-code hex values; reusable style fragments live in `src/theme`.
- UI reads products only through `src/services/catalog.ts`.
- Prices are computed in `src/lib/pricing.ts`. The server (`/api/orders`) re-prices every order from the
  catalogue — never trust totals sent by the browser.
- Checkout validation is one Zod schema (`src/lib/checkout-schema.ts`) shared by the form and the API.

## Design system

Editorial, warm and earthy, drawn from the packaging and logo: paper background, forest/olive greens, saffron
accent, roasted-brown details. Fraunces (display serif) + Instrument Sans (UI). Kairo the mascot appears once
per page — Kairo section, empty states, newsletter, 404 and order confirmation.

---

## External setup (go-live checklist)

Each integration is already wired in code and switches on when its environment variables are set.

### 1. Payments — Razorpay (recommended for India)

UPI, cards, netbanking and wallets in one hosted checkout; card data never touches our servers.

1. Create an account at razorpay.com → complete KYC.
2. Settings → API Keys → generate **test** keys → set `RAZORPAY_KEY_ID`, `RAZORPAY_KEY_SECRET`.
3. Settings → Webhooks → add `https://<domain>/api/payments/webhook`, events `payment.captured`,
   `payment.failed`, and set the same secret as `RAZORPAY_WEBHOOK_SECRET`.
4. Test a full order with Razorpay test cards/UPI, then switch to live keys.

Without keys, production builds disable online payment (COD still works) unless `ALLOW_DEMO_PAYMENTS=true`.

### 2. Database — Postgres (Supabase or Neon)

Needed so orders and newsletter sign-ups survive restarts.

1. Create a project on Supabase (free tier) or Neon.
2. Run `db/schema.sql` in its SQL editor.
3. Set `DATABASE_URL` to the **pooled** connection string.

### 3. Email — Resend

Order confirmations and the newsletter audience.

1. Create an account at resend.com, verify your sending domain (DNS records).
2. Set `RESEND_API_KEY`, `EMAIL_FROM` (e.g. `Ahara <orders@yourdomain.com>`).
3. Create an Audience for the newsletter → `RESEND_AUDIENCE_ID`.

### 4. Accounts / admin — not built yet

`/admin` and `/dashboard` return 404 until `AUTH_SECRET` is set (`src/proxy.ts`). Recommended: **Auth.js**
(email magic link + Google) storing users in the same Postgres database, or **Supabase Auth** if you choose
Supabase. Guests can already check out without an account.

### 5. Hosting

Recommended: **Vercel** (zero-config for Next.js) with the region closest to India (`bom1`). Set
`NEXT_PUBLIC_SITE_URL` to the production URL so canonical links, sitemap and social cards are correct.

### Content to supply before launch

- Real reviews/testimonials, ratings and review counts (currently demo data in `src/data/products.ts`).
- Contact email/phone, social links (footer), and the `[TO CONFIRM]` items in `src/data/policies.ts` —
  have the policy pages reviewed by a lawyer (Consumer Protection (E-Commerce) Rules 2020, DPDP Act 2023).
- Extra product photos for the product-page gallery.

## Security notes

- Security headers are set in `next.config.ts`. A strict Content-Security-Policy is not enabled yet:
  styled-components injects runtime `<style>` tags, so a CSP needs per-request nonces — add it once hosting is
  final.
- Payment success is only trusted after HMAC verification (`/api/payments/verify`) or a signed webhook.
