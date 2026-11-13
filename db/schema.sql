-- Ahara database schema (PostgreSQL 14+).
-- Apply once:  psql "$DATABASE_URL" -f db/schema.sql
-- (Supabase: paste into SQL Editor → Run. Neon: SQL Editor.)

create table if not exists orders (
  id                text primary key,              -- e.g. AHA-1A2B3C4D
  created_at        timestamptz not null default now(),
  updated_at        timestamptz not null default now(),
  status            text not null check (status in ('pending_payment','paid','cod_confirmed','payment_failed')),
  email             text not null,
  phone             text,
  delivery_mode     text not null check (delivery_mode in ('ship','pickup')),
  payment_method    text not null check (payment_method in ('online','cod')),
  promo             text,
  subtotal          integer not null,              -- whole rupees
  discount          integer not null,
  shipping          integer not null,
  cod_fee           integer not null,
  total             integer not null,
  request           jsonb not null,                -- validated checkout payload (address etc.)
  lines             jsonb not null,                -- server-priced lines
  gateway_order_id  text unique,                   -- Razorpay order_…
  gateway_payment_id text
);

create index if not exists orders_email_idx on orders (email);
create index if not exists orders_created_idx on orders (created_at desc);

create table if not exists newsletter_subscribers (
  email       text primary key,
  created_at  timestamptz not null default now(),
  source      text not null default 'site'
);
