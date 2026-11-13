"use client";

import React from "react";
import { Check, Lock, Tag } from "lucide-react";
import { formatINR } from "@/src/lib/pricing";
import { useCartPage } from "../../useCartPage";
import {
  OrderSummaryCard,
  SummaryTitle,
  SummaryRowsGroup,
  SummaryRow,
  SummaryDivider,
  PromoCodeContainer,
  PromoLabel,
  ActivePromoBox,
  PromoInputWrapper,
  PromoInput,
  PromoButton,
  PromoSuccessText,
  PromoErrorText,
  CheckoutActionsGroup,
  CheckoutButton,
  SecureCheckoutText,
} from "./styled";

export const CartSummary = () => {
  const {
    cartTotal,
    appliedPromo,
    promoCode,
    setPromoCode,
    promoError,
    shippingCharge,
    discountAmount,
    finalTotal,
    handleApplyPromo,
    handleRemovePromo,
    handleCheckout,
  } = useCartPage();

  return (
    <OrderSummaryCard>
      <SummaryTitle>Order summary</SummaryTitle>

      <SummaryRowsGroup>
        <SummaryRow>
          <span>Subtotal</span>
          <span>{formatINR(cartTotal)}</span>
        </SummaryRow>

        {discountAmount > 0 && (
          <SummaryRow $isDiscount>
            <span>Discount (10% off)</span>
            <span>−{formatINR(discountAmount)}</span>
          </SummaryRow>
        )}

        <SummaryRow>
          <span>Delivery Charge</span>
          <span>
            {shippingCharge === 0 ? (
              <span style={{ color: "var(--success)", fontWeight: 700 }}>Free</span>
            ) : (
              formatINR(shippingCharge)
            )}
          </span>
        </SummaryRow>

        <SummaryDivider />

        <SummaryRow $isTotal>
          <span>Total Amount</span>
          <span>{formatINR(finalTotal)}</span>
        </SummaryRow>
      </SummaryRowsGroup>

      {/* Promo Code Input */}
      <PromoCodeContainer>
        <PromoLabel htmlFor="promo-input">
          <Tag aria-hidden /> Promo code
        </PromoLabel>
        {appliedPromo ? (
          <ActivePromoBox>
            <PromoSuccessText>
              <Check aria-hidden /> Applied: {appliedPromo}
            </PromoSuccessText>
            <button type="button" onClick={handleRemovePromo}>
              Remove
            </button>
          </ActivePromoBox>
        ) : (
          <>
            <PromoInputWrapper>
              <PromoInput
                id="promo-input"
                type="text"
                placeholder="e.g. AHARA10"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
              <PromoButton
                onClick={handleApplyPromo}
                disabled={!promoCode}
              >
                Apply
              </PromoButton>
            </PromoInputWrapper>
            {promoError && (
              <PromoErrorText>
                {promoError}
              </PromoErrorText>
            )}
          </>
        )}
      </PromoCodeContainer>

      <CheckoutActionsGroup>
        <CheckoutButton onClick={handleCheckout}>
          Proceed to checkout
        </CheckoutButton>

        <SecureCheckoutText>
          <Lock aria-hidden /> Secure, encrypted checkout
        </SecureCheckoutText>
      </CheckoutActionsGroup>
    </OrderSummaryCard>
  );
};
