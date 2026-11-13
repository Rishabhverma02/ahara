"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2, X } from "lucide-react";
import { useCart } from "@/src/hooks/useCart";
import { useDialog } from "@/src/hooks/useDialog";
import { useUiStore } from "@/src/store/useUiStore";
import { FREE_SHIPPING_THRESHOLD, formatINR } from "@/src/lib/pricing";
import { ButtonLink, Mascot } from "@/src/components/ui";
import { Overlay, Panel, Head, IconBtn, Empty, Progress, Bar, List, Row, Thumb, Info, Qty, End, Foot, Subtotal, Actions } from "./styled";

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
