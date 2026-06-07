"use client";

import React from "react";
import { CartPageProvider, useCartPage } from "./useCartPage";
import { PageHero, EmptyState } from "@/src/components/ui";
import cartBg from "@/src/assets/images/section-images/cart.png";
import LocalMallTwoToneIcon from "@mui/icons-material/LocalMallTwoTone";
import {
  CartPageWrapper,
  PageContainer,
  Container,
  CartLayout,
  LoadingState,
  CartMainColumn,
} from "./styled";
import {
  CartProgress,
  CartItemsList,
  CartSummary,
  CartSuggestions,
} from "./components";

function CartContent() {
  const {
    items,
    cartCount,
    isHydrated,
  } = useCartPage();

  // Next.js Hydration Guard
  if (!isHydrated) {
    return (
      <CartPageWrapper>
        <PageHero
          bg={cartBg.src}
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Cart" }]}
          title={
            <>
              <span className="line">
                <span className="w1">Your </span>
                <span className="w2">Shopping</span>
              </span>
              <span className="line">
                <span className="w3">Cart</span>
              </span>
            </>
          }
          subtitle="Loading your healthy goodies..."
        />
        <PageContainer>
          <Container>
            <LoadingState>
              Loading your cart items...
            </LoadingState>
          </Container>
        </PageContainer>
      </CartPageWrapper>
    );
  }

  return (
    <CartPageWrapper>
      <PageHero
        bg={cartBg.src}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Cart" }]}
        title={
          <>
            <span className="line">
              <span className="w1">Your </span>
              <span className="w2">Shopping</span>
            </span>
            <span className="line">
              <span className="w3">Cart</span>
            </span>
          </>
        }
        subtitle={
          items.length > 0
            ? `You have ${cartCount} clean label superfood item${cartCount === 1 ? "" : "s"} in your cart.`
            : "Review your healthy goodies and proceed to checkout."
        }
      />
      <PageContainer>
        <Container>
          {items.length === 0 ? (
            <>
              <EmptyState
                icon={
                  <LocalMallTwoToneIcon
                    sx={{ fontSize: 44 }}
                    className="main-icon"
                  />
                }
                badgeText="0 items • 100% empty 🥺"
                title="Your cart is craving some fuel"
                description="It's looking a bit empty here. Treat yourself to some clean-label, consciously sourced goodness. Your body will thank you!"
                btnText="Start Nourishing"
              />

              <CartSuggestions />
            </>
          ) : (
            <>
              <CartLayout>
                {/* Left Column: Items List & Free Shipping Progress */}
                <CartMainColumn>
                  <CartProgress />
                  <CartItemsList />
                </CartMainColumn>

                {/* Right Column: Order Summary */}
                <CartSummary />
              </CartLayout>

              {/* Suggestions at bottom */}
              <CartSuggestions />
            </>
          )}
        </Container>
      </PageContainer>
    </CartPageWrapper>
  );
}

export default function CartPage() {
  return (
    <CartPageProvider>
      <CartContent />
    </CartPageProvider>
  );
}
