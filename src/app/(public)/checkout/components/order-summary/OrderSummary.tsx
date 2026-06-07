"use client";

import React from "react";
import Image from "next/image";
import { Ticket } from "lucide-react";
import LockTwoToneIcon from "@mui/icons-material/LockTwoTone";
import GppGoodTwoToneIcon from "@mui/icons-material/GppGoodTwoTone";
import { useCheckout } from "../../useCheckout";
import {
  SummaryColumn,
  StickySummaryCard,
  SummarySectionTitle,
  MiniItemList,
  MiniItemRow,
  MiniItemImage,
  MiniItemImageInner,
  MiniItemDetails,
  MiniItemPrice,
  PromoFieldLabel,
  FormInput,
  CostSummaryRow,
  TrustBadgeWrapper,
  TrustBadge,
  PromoCodeBox,
  ActivePromoContainer,
  PromoInputWrapper,
  PromoButton,
  PromoErrorText,
  CostsSection,
  FreeText,
} from "./styled";

export const OrderSummary = () => {
  const {
    items,
    cartTotal,
    appliedPromo,
    promoCode,
    setPromoCode,
    promoError,
    activeShippingCharge,
    discountAmount,
    codFee,
    finalTotal,
    handleApplyPromo,
    handleRemovePromo,
  } = useCheckout();

  return (
    <SummaryColumn>
      <StickySummaryCard>
        <SummarySectionTitle>
          <span>Order Summary</span>
          <span className="item-count">{items.length} items</span>
        </SummarySectionTitle>

        {/* List items mini */}
        <MiniItemList>
          {items.map((item) => (
            <MiniItemRow key={item.id}>
              <MiniItemImage>
                <MiniItemImageInner>
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="48px"
                  />
                </MiniItemImageInner>
                <span className="badge">{item.quantity}</span>
              </MiniItemImage>
              <MiniItemDetails>
                <span className="name">{item.name}</span>
                <span className="variant">Variant: {item.size}</span>
              </MiniItemDetails>
              <MiniItemPrice>₹{item.price * item.quantity}</MiniItemPrice>
            </MiniItemRow>
          ))}
        </MiniItemList>

        {/* Promo Code Fields */}
        <PromoCodeBox>
          <PromoFieldLabel htmlFor="promo-input">
            <Ticket size={12} /> Promo Code
          </PromoFieldLabel>
          {appliedPromo ? (
            <ActivePromoContainer>
              <span>Active: {appliedPromo}</span>
              <button onClick={handleRemovePromo}>
                Remove
              </button>
            </ActivePromoContainer>
          ) : (
            <PromoInputWrapper>
              <FormInput
                id="promo-input"
                type="text"
                placeholder="e.g. AHARA10"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
              <PromoButton
                type="button"
                onClick={handleApplyPromo}
                disabled={!promoCode}
              >
                Apply
              </PromoButton>
            </PromoInputWrapper>
          )}
          {promoError && (
            <PromoErrorText>
              {promoError}
            </PromoErrorText>
          )}
        </PromoCodeBox>

        {/* Subtotals & Costs */}
        <CostsSection>
          <CostSummaryRow>
            <span>Subtotal</span>
            <span className="value">₹{cartTotal}</span>
          </CostSummaryRow>

          {discountAmount > 0 && (
            <CostSummaryRow $isDiscount>
              <span>Discount (10% off)</span>
              <span className="value">-₹{discountAmount}</span>
            </CostSummaryRow>
          )}

          <CostSummaryRow>
            <span>Shipping</span>
            <span className="value">
              {activeShippingCharge === 0 ? (
                <FreeText>FREE</FreeText>
              ) : (
                `₹${activeShippingCharge}`
              )}
            </span>
          </CostSummaryRow>

          {codFee > 0 && (
            <CostSummaryRow>
              <span>CoD Handling Fee</span>
              <span className="value">₹{codFee}</span>
            </CostSummaryRow>
          )}

          <CostSummaryRow $isTotal>
            <span>Total Amount</span>
            <span className="value">
              ₹{finalTotal}
            </span>
          </CostSummaryRow>
        </CostsSection>

        {/* Trust and secure badges */}
        <TrustBadgeWrapper>
          <TrustBadge>
            <LockTwoToneIcon />
            Secure 256-Bit SSL Connection
          </TrustBadge>
          <TrustBadge>
            <GppGoodTwoToneIcon />
            Guaranteed Wellness Quality
          </TrustBadge>
        </TrustBadgeWrapper>
      </StickySummaryCard>
    </SummaryColumn>
  );
};
