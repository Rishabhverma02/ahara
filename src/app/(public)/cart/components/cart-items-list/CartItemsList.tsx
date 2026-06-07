"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Trash2, Plus, Minus, ChevronLeft } from "lucide-react";
import { QtyBtn, QtyValue } from "../../../shop/[slug]/styled";
import { useCartPage } from "../../useCartPage";
import {
  CartItemsSection,
  CartItemCard,
  ItemImageWrapper,
  ItemDetails,
  ItemName,
  ItemVariant,
  QtyAndActions,
  CartQtyBox,
  RemoveButton,
  PriceAndQtyWrapper,
  ItemPrice,
  PriceEachLabel,
  ContinueShoppingLink,
} from "./styled";

export const CartItemsList = () => {
  const {
    items,
    updateQuantity,
    removeItem,
    playClickSound,
  } = useCartPage();

  return (
    <CartItemsSection>
      {items.map((item) => (
        <CartItemCard key={item.id}>
          <ItemImageWrapper>
            <Image
              src={item.image}
              alt={item.name}
              fill
              sizes="96px"
            />
          </ItemImageWrapper>

          <ItemDetails>
            <ItemName>
              <Link href={`/shop/${item.slug}`}>{item.name}</Link>
            </ItemName>
            <ItemVariant>Variant: {item.size}</ItemVariant>

            <QtyAndActions>
              <CartQtyBox>
                <QtyBtn
                  onClick={() => {
                    playClickSound();
                    updateQuantity(item.id, item.quantity - 1);
                  }}
                >
                  <Minus size={14} />
                </QtyBtn>
                <QtyValue>{item.quantity}</QtyValue>
                <QtyBtn
                  onClick={() => {
                    playClickSound();
                    updateQuantity(item.id, item.quantity + 1);
                  }}
                >
                  <Plus size={14} />
                </QtyBtn>
              </CartQtyBox>

              <RemoveButton
                onClick={() => {
                  playClickSound();
                  removeItem(item.id);
                }}
              >
                <Trash2 size={14} />
                <span>Remove</span>
              </RemoveButton>
            </QtyAndActions>
          </ItemDetails>

          <PriceAndQtyWrapper>
            <ItemPrice>₹{item.price * item.quantity}</ItemPrice>
            {item.quantity > 1 && (
              <PriceEachLabel>
                ₹{item.price} each
              </PriceEachLabel>
            )}
          </PriceAndQtyWrapper>
        </CartItemCard>
      ))}

      <ContinueShoppingLink href="/shop">
        <ChevronLeft size={16} />
        <span>Continue Shopping</span>
      </ContinueShoppingLink>
    </CartItemsSection>
  );
};
