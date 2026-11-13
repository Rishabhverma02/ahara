"use client";

import React from "react";
import Image from "next/image";
import { Lock, ShieldCheck, Ticket } from "lucide-react";
import { useCheckoutSummary } from "../../useCheckout";
import { formatINR } from "@/src/lib/pricing";
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
  const { items, totals, appliedPromo, promoInput, setPromoInput, promoError, applyPromo, removePromo } =
    useCheckoutSummary();

  return (
    <SummaryColumn>
      <StickySummaryCard>
        <SummarySectionTitle>
          <span>Order summary</span>
          <span className="item-count">{items.length} items</span>
        </SummarySectionTitle>

        {/* List items mini */}
        <MiniItemList>
          {items.map((item) => (
            <MiniItemRow key={item.id}>
              <MiniItemImage>
                <MiniItemImageInner>
                  <Image src={item.image} alt="" fill sizes="48px" />
                </MiniItemImageInner>
                <span className="badge">{item.quantity}</span>
              </MiniItemImage>
              <MiniItemDetails>
                <span className="name">{item.name}</span>
                <span className="variant">{item.size}</span>
              </MiniItemDetails>
              <MiniItemPrice>{formatINR(item.price * item.quantity)}</MiniItemPrice>
            </MiniItemRow>
          ))}
        </MiniItemList>

        {/* Promo Code Fields */}
        <PromoCodeBox>
          <PromoFieldLabel htmlFor="promo-input">
            <Ticket size={12} aria-hidden /> Promo code
          </PromoFieldLabel>
          {appliedPromo ? (
            <ActivePromoContainer>
              <span>Active: {appliedPromo}</span>
              <button type="button" onClick={removePromo}>
                Remove
              </button>
            </ActivePromoContainer>
          ) : (
            <PromoInputWrapper>
              <FormInput
                id="promo-input"
                type="text"
                placeholder="e.g. AHARA10"
                value={promoInput}
                onChange={(e) => setPromoInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    applyPromo();
                  }
                }}
                aria-invalid={!!promoError}
                aria-describedby={promoError ? "promo-error" : undefined}
              />
              <PromoButton type="button" onClick={applyPromo} disabled={!promoInput}>
                Apply
              </PromoButton>
            </PromoInputWrapper>
          )}
          {promoError && (
            <PromoErrorText id="promo-error" role="alert">
              {promoError}
            </PromoErrorText>
          )}
        </PromoCodeBox>

        {/* Subtotals & Costs */}
        <CostsSection>
          <CostSummaryRow>
            <span>Subtotal</span>
            <span className="value">{formatINR(totals.subtotal)}</span>
          </CostSummaryRow>

          {totals.discount > 0 && (
            <CostSummaryRow $isDiscount>
              <span>Discount (10% off)</span>
              <span className="value">−{formatINR(totals.discount)}</span>
            </CostSummaryRow>
          )}

          <CostSummaryRow>
            <span>Shipping</span>
            <span className="value">
              {totals.shipping === 0 ? <FreeText>Free</FreeText> : formatINR(totals.shipping)}
            </span>
          </CostSummaryRow>

          {totals.codFee > 0 && (
            <CostSummaryRow>
              <span>Cash on delivery fee</span>
              <span className="value">{formatINR(totals.codFee)}</span>
            </CostSummaryRow>
          )}

          <CostSummaryRow $isTotal>
            <span>Total</span>
            <span className="value">{formatINR(totals.total)}</span>
          </CostSummaryRow>
        </CostsSection>

        {/* Trust and secure badges */}
        <TrustBadgeWrapper>
          <TrustBadge>
            <Lock aria-hidden />
            Encrypted, secure payment
          </TrustBadge>
          <TrustBadge>
            <ShieldCheck aria-hidden />
            Freshness guaranteed
          </TrustBadge>
        </TrustBadgeWrapper>
      </StickySummaryCard>
    </SummaryColumn>
  );
};
