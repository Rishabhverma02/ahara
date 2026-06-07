"use client";

import React from "react";
import LocalOfferTwoToneIcon from "@mui/icons-material/LocalOfferTwoTone";
import AutoAwesomeTwoToneIcon from "@mui/icons-material/AutoAwesomeTwoTone";
import HttpsTwoToneIcon from "@mui/icons-material/HttpsTwoTone";
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
      <SummaryTitle>Order Summary</SummaryTitle>

      <SummaryRowsGroup>
        <SummaryRow>
          <span>Subtotal</span>
          <span>₹{cartTotal}</span>
        </SummaryRow>

        {discountAmount > 0 && (
          <SummaryRow $isDiscount>
            <span>Discount (10% off)</span>
            <span>-₹{discountAmount}</span>
          </SummaryRow>
        )}

        <SummaryRow>
          <span>Delivery Charge</span>
          <span>
            {shippingCharge === 0 ? (
              <span style={{ color: "#496a35", fontWeight: 800 }}>FREE</span>
            ) : (
              `₹${shippingCharge}`
            )}
          </span>
        </SummaryRow>

        <SummaryDivider />

        <SummaryRow $isTotal>
          <span>Total Amount</span>
          <span>₹{finalTotal}</span>
        </SummaryRow>
      </SummaryRowsGroup>

      {/* Promo Code Input */}
      <PromoCodeContainer>
        <PromoLabel htmlFor="promo-input">
          <LocalOfferTwoToneIcon /> Have a Promo Code?
        </PromoLabel>
        {appliedPromo ? (
          <ActivePromoBox>
            <PromoSuccessText>
              <AutoAwesomeTwoToneIcon /> Applied: {appliedPromo}
            </PromoSuccessText>
            <button onClick={handleRemovePromo}>
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
          Proceed to Checkout
        </CheckoutButton>

        <SecureCheckoutText>
          <HttpsTwoToneIcon /> Secure 256-bit SSL Checkout
        </SecureCheckoutText>
      </CheckoutActionsGroup>
    </OrderSummaryCard>
  );
};
