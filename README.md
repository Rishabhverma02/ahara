# Ahara

An online store for Indian superfoods: roasted makhana, sattu drinks, millet cookies and moringa.

I built this to practise building a real e-commerce frontend end to end. That meant designing it,
building the shop and checkout flow, and making it fast. The brand has a mascot called Kairo (a makhana
with a face), and I tried to use him in a few fun places without overdoing it.

## What it does

- **Shop page** with filters (category, health goal, ingredient, price), sorting and search. Filters are
  saved in the URL, so you can share a filtered link or hit Back without losing them.
- **Product pages** with pack sizes, nutrition info and related products.
- **Cart and wishlist** saved in the browser. There's a slide-in mini cart, and a little truck that drives
  along the free-delivery progress bar.
- **Two-step checkout** with form validation, promo codes and cash on delivery.
- **Order API** that recalculates prices on the server, so changing the price in the browser does nothing.
- Online payments are wired for **Razorpay**, and orders can be saved to **Postgres**. Both switch on once
  you add API keys; without them the site runs in a demo mode.
- 404 page, error page, sitemap, SEO data for products, and a social share image.

## Tech stack

- **Next.js 16** (App Router) and **React 19**, written in **TypeScript**
- **styled-components** for styling, with a small set of design tokens (colours, fonts, spacing)
- **Zustand** for cart, wishlist and UI state
- **Zod** for validating checkout data on both the client and the server
- **Vitest** for unit tests, plus ESLint and Prettier, all run in GitHub Actions

## Running it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000. No environment variables are needed to try it out.

Other scripts:

```bash
npm run test     # unit tests
npm run check    # lint + type check + tests + formatting
npm run build    # production build
```

To try real payments or a database, copy `.env.example` to `.env.local` and fill in the keys you have.
For the database, run `db/schema.sql` once against your Postgres instance.

## Project structure

```
src/
  app/          pages and API routes
  components/   shared UI (header, footer, product card, cart drawer…)
  services/     catalog, orders, payments, email
  lib/          pricing and validation logic shared by client and server
  hooks/        custom React hooks
  store/        Zustand stores
  data/         product catalog and policy text
```

Each component has its own folder with the component file and a `styled.ts` next to it.

## A few things I focused on

- **Performance.** The original images added up to about 118 MB. I converted them to WebP (down to about
  9 MB) and made sure every image goes through `next/image`. I also removed libraries I wasn't really using
  (MUI, Tailwind, GSAP) and cut down the number of fonts.
- **Pricing on the server.** The cart shows prices, but the order API works the total out again from the
  catalog. That way nobody can change what they pay from the browser.
- **Accessibility.** Proper labels and error messages on forms, everything usable with a keyboard, real
  buttons instead of clickable divs, and animations turn off when the "reduce motion" setting is on.
- **Not handling card details myself.** Payment details go through Razorpay's own window, not my forms.

## What's next

- User accounts (probably Auth.js)
- An admin page to manage orders
- Real product reviews instead of sample data
- More photos per product

## Notes

Product data, reviews and the policy pages are sample content for this project.
