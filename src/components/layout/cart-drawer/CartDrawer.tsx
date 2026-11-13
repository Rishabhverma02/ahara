"use client";

import Image from "next/image";
import Link from "next/link";
import styled, { keyframes } from "styled-components";
import { Minus, Plus, Trash2, X } from "lucide-react";
import { useCart } from "@/src/hooks/useCart";
import { useDialog } from "@/src/hooks/useDialog";
import { useUiStore } from "@/src/store/useUiStore";
import { FREE_SHIPPING_THRESHOLD, formatINR } from "@/src/lib/pricing";
import { ButtonLink, Mascot } from "@/src/components/ui";

/** Slide-in mini cart so shoppers can review the bag without leaving the page. */
export const CartDrawer = () => {
  const open = useUiStore((s) => s.panel === "cart");
  const close = useUiStore((s) => s.close);
  const { items, cartCount, cartTotal, updateQuantity, removeItem } = useCart();
  useDialog(open, close);

  if (!open) return null;

  const remaining = FREE_SHIPPING_THRESHOLD - cartTotal;
  const pct = Math.min(100, (cartTotal / FREE_SHIPPING_THRESHOLD) * 100);

  return (
    <Overlay onClick={close}>
      <Panel role="dialog" aria-modal="true" aria-labelledby="cart-drawer-title" onClick={(e) => e.stopPropagation()}>
        <Head>
          <h2 id="cart-drawer-title">
            Your cart <span>({cartCount})</span>
          </h2>
          <IconBtn type="button" onClick={close} aria-label="Close cart" autoFocus>
            <X size={22} />
          </IconBtn>
        </Head>

        {items.length === 0 ? (
          <Empty>
            <Mascot pose="parachute" width={110} motion="sway" />
            <p>Your cart is empty — Kairo&rsquo;s still floating in.</p>
            <ButtonLink href="/shop" onClick={close}>
              Browse the shop
            </ButtonLink>
          </Empty>
        ) : (
          <>
            <Progress>
              <p>
                {remaining > 0 ? (
                  <>
                    You&rsquo;re <strong>{formatINR(remaining)}</strong> away from free delivery
                  </>
                ) : (
                  <strong>Free delivery unlocked</strong>
                )}
              </p>
              <Bar role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(pct)}>
                <span style={{ width: `${pct}%` }} />
              </Bar>
            </Progress>

            <List>
              {items.map((item) => (
                <Row key={item.id}>
                  <Thumb>
                    <Image src={item.image} alt="" fill sizes="72px" />
                  </Thumb>
                  <Info>
                    <Link href={`/shop/${item.slug}`} onClick={close}>
                      {item.name}
                    </Link>
                    <small>{item.size}</small>
                    <Qty>
                      <button type="button" onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1} aria-label={`Decrease ${item.name} quantity`}>
                        <Minus size={14} />
                      </button>
                      <span aria-live="polite">{item.quantity}</span>
                      <button type="button" onClick={() => updateQuantity(item.id, item.quantity + 1)} aria-label={`Increase ${item.name} quantity`}>
                        <Plus size={14} />
                      </button>
                    </Qty>
                  </Info>
                  <End>
                    <strong>{formatINR(item.price * item.quantity)}</strong>
                    <IconBtn type="button" onClick={() => removeItem(item.id)} aria-label={`Remove ${item.name}`}>
                      <Trash2 size={16} />
                    </IconBtn>
                  </End>
                </Row>
              ))}
            </List>

            <Foot>
              <Subtotal>
                <span>Subtotal</span>
                <strong>{formatINR(cartTotal)}</strong>
              </Subtotal>
              <small>Shipping and promo codes are applied at checkout.</small>
              <Actions>
                <ButtonLink href="/cart" $variant="outline" onClick={close}>
                  View cart
                </ButtonLink>
                <ButtonLink href="/checkout" onClick={close}>
                  Checkout
                </ButtonLink>
              </Actions>
            </Foot>
          </>
        )}
      </Panel>
    </Overlay>
  );
};

const fade = keyframes`from { opacity: 0 } to { opacity: 1 }`;
const slide = keyframes`from { transform: translateX(100%) } to { transform: none }`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 400;
  background: rgb(29 33 22 / 0.4);
  animation: ${fade} 0.2s ease-out;
`;

const Panel = styled.div`
  position: absolute;
  inset: 0 0 0 auto;
  width: min(440px, 100%);
  display: flex;
  flex-direction: column;
  background: var(--paper);
  animation: ${slide} 0.4s var(--ease-out);
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid var(--line);

  h2 {
    font-family: var(--font-display);
    font-weight: 500;
    font-size: 1.5rem;
  }
  span {
    font-family: var(--font-sans);
    font-size: 1rem;
    color: var(--muted);
  }
`;

const IconBtn = styled.button`
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border: 0;
  border-radius: 50%;
  background: none;
  color: var(--ink-2);

  &:hover {
    background: rgb(29 33 22 / 0.06);
    color: var(--ink);
  }
`;

const Empty = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  padding: 2rem;
  text-align: center;
  color: var(--muted);
`;

const Progress = styled.div`
  padding: 1rem 1.5rem;
  background: var(--olive-tint);
  font-size: 0.875rem;
  color: var(--ink-2);

  strong {
    color: var(--olive-600);
  }
`;

const Bar = styled.div`
  height: 4px;
  margin-top: 0.6rem;
  border-radius: 2px;
  background: rgb(var(--olive-rgb) / 0.18);
  overflow: hidden;

  span {
    display: block;
    height: 100%;
    background: var(--olive);
    transition: width 0.5s var(--ease-out);
  }
`;

const List = styled.ul`
  flex: 1;
  overflow-y: auto;
  list-style: none;
  padding: 0 1.5rem;
`;

const Row = styled.li`
  display: grid;
  grid-template-columns: 72px 1fr auto;
  gap: 1rem;
  padding: 1.25rem 0;
  border-bottom: 1px solid var(--line);
`;

const Thumb = styled.div`
  position: relative;
  width: 72px;
  height: 84px;
  border-radius: var(--radius-sm);
  overflow: hidden;
  background: var(--paper-2);

  img {
    object-fit: cover;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  min-width: 0;

  a {
    font-weight: 600;
    color: var(--ink);
    text-decoration: none;
    line-height: 1.3;
    &:hover {
      text-decoration: underline;
    }
  }
  small {
    color: var(--muted);
  }
`;

const Qty = styled.div`
  display: inline-flex;
  align-items: center;
  width: fit-content;
  margin-top: 0.4rem;
  border: 1px solid var(--line-strong);
  border-radius: var(--radius-sm);

  button {
    display: grid;
    place-items: center;
    width: 32px;
    height: 32px;
    border: 0;
    background: none;
    &:disabled {
      opacity: 0.35;
    }
  }
  span {
    min-width: 24px;
    text-align: center;
    font-weight: 600;
    font-size: 0.875rem;
  }
`;

const End = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;

const Foot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.25rem 1.5rem max(1.25rem, env(safe-area-inset-bottom));
  border-top: 1px solid var(--line);
  background: var(--surface);

  small {
    color: var(--muted);
  }
`;

const Subtotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  strong {
    font-family: var(--font-display);
    font-size: 1.5rem;
    font-weight: 500;
  }
`;

const Actions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.6rem;
  margin-top: 0.5rem;
`;
