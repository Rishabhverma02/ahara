"use client";

import { CheckoutProvider, useCheckoutStatus } from "./useCheckout";
import {
  CheckoutWrapper,
  PageContainer,
  CheckoutLayout,
  FormColumn,
  CheckoutLoadingState,
  Container,
  EmptyContainer,
  ConfirmationContainer,
} from "./styled";
import { EmptyState } from "@/src/components/ui";
import {
  Timeline,
  Step1Form,
  Step2Form,
  OrderSummary,
  OrderConfirmation,
} from "./components";

function CheckoutContent() {
  const { isHydrated, itemCount, step } = useCheckoutStatus();

  // cart lives in localStorage, so wait for hydration before deciding what to show
  if (!isHydrated) {
    return (
      <CheckoutWrapper>
        <CheckoutLoadingState aria-busy="true">
          Loading secure checkout…
        </CheckoutLoadingState>
      </CheckoutWrapper>
    );
  }

  if (itemCount === 0 && step !== 3) {
    return (
      <CheckoutWrapper>
        <PageContainer>
          <EmptyContainer>
            <EmptyState
              pose="back"
              kicker="Nothing to check out"
              title="Your cart is empty."
              description="Add something to your cart first — Kairo will be right here when you're ready."
              btnText="Browse the shop"
            />
          </EmptyContainer>
        </PageContainer>
      </CheckoutWrapper>
    );
  }

  if (step === 3) {
    return (
      <CheckoutWrapper>
        <PageContainer>
          <ConfirmationContainer>
            <OrderConfirmation />
          </ConfirmationContainer>
        </PageContainer>
      </CheckoutWrapper>
    );
  }

  return (
    <CheckoutWrapper>
      <PageContainer>
        <Container>
          <Timeline />

          <CheckoutLayout>
            <FormColumn>
              {step === 1 ? <Step1Form /> : <Step2Form />}
            </FormColumn>

            <OrderSummary />
          </CheckoutLayout>
        </Container>
      </PageContainer>
    </CheckoutWrapper>
  );
}


export default function CheckoutPage() {
  return (
    <CheckoutProvider>
      <CheckoutContent />
    </CheckoutProvider>
  );
}
