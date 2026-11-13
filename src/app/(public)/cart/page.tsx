"use client";

import { CartPageProvider, useCartPage } from "./useCartPage";
import { PageHero, EmptyState } from "@/src/components/ui";
import {
  CartPageWrapper,
  PageContainer,
  Container,
  CartLayout,
  LoadingState,
  CartMainColumn,
} from "./styled";
import { CartProgress, CartItemsList, CartSummary, CartSuggestions } from "./components";

function CartContent() {
  const { items, cartCount, isHydrated } = useCartPage();

  const subtitle = !isHydrated
    ? " "
    : items.length > 0
      ? `${cartCount} item${cartCount === 1 ? "" : "s"} ready to go. Free delivery on orders over ₹999.`
      : "Nothing here yet — let's fix that.";

  return (
    <CartPageWrapper>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Cart" }]}
        title={
          <>
            Your <em>cart</em>
          </>
        }
        subtitle={subtitle}
      />
      <PageContainer>
        <Container>
          {!isHydrated ? (
            <LoadingState aria-busy="true">Loading your cart…</LoadingState>
          ) : items.length === 0 ? (
            <>
              <EmptyState
                pose="parachute"
                kicker="Your cart is empty"
                title="Kairo's floating in, but your cart is empty."
                description="Start with a best seller — roasted makhana, a sattu shake, or millet cookies. Delivery is free over ₹999."
                btnText="Browse the shop"
              />
              <CartSuggestions />
            </>
          ) : (
            <>
              <CartLayout>
                <CartMainColumn>
                  <CartProgress />
                  <CartItemsList />
                </CartMainColumn>
                <CartSummary />
              </CartLayout>
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
