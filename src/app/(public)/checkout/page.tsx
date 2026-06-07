"use client";

import React from "react";
import { CheckoutProvider, useCheckout } from "./useCheckout";
import {
  CheckoutWrapper,
  BackgroundBlob,
  PageContainer,
  CheckoutLayout,
  FormColumn,
  CheckoutLoadingState,
  EmptyContainer,
  ShoppingBagIcon,
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
  const { isHydrated, items, step } = useCheckout();

  // Next.js Hydration Guard
  if (!isHydrated) {
    return (
      <CheckoutWrapper>
        <CheckoutLoadingState>
          Initializing secure checkout...
        </CheckoutLoadingState>
      </CheckoutWrapper>
    );
  }

  // Redirect to cart if empty
  if (items.length === 0 && step !== 3) {
    return (
      <CheckoutWrapper>
        <BackgroundBlob $color="rgba(126, 124, 42, 0.35)" $top="10%" $left="5%" $size="450px" />
        <BackgroundBlob $color="rgba(221, 199, 161, 0.45)" $top="50%" $right="8%" $size="500px" $delay="-5s" />
        <PageContainer>
          <EmptyContainer>
            <EmptyState
              icon={<ShoppingBagIcon size={44} />}
              badgeText="Empty Checkout"
              title="Your Checkout is Empty"
              description="Please add items to your shopping cart before attempting to checkout."
              btnText="Browse Shop"
            />
          </EmptyContainer>
        </PageContainer>
      </CheckoutWrapper>
    );
  }

  // If order complete (Step 3), render Confirmation page
  if (step === 3) {
    return (
      <CheckoutWrapper>
        <BackgroundBlob $color="rgba(126, 124, 42, 0.35)" $top="10%" $left="5%" $size="450px" />
        <BackgroundBlob $color="rgba(221, 199, 161, 0.45)" $top="50%" $right="8%" $size="500px" $delay="-5s" />
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
      <BackgroundBlob $color="rgba(126, 124, 42, 0.35)" $top="10%" $left="5%" $size="450px" />
      <BackgroundBlob $color="rgba(221, 199, 161, 0.45)" $top="50%" $right="8%" $size="500px" $delay="-5s" />
      <BackgroundBlob $color="rgba(73, 106, 53, 0.25)" $top="30%" $right="15%" $size="400px" $delay="-10s" />
      <BackgroundBlob $color="rgba(164, 180, 114, 0.35)" $top="75%" $left="10%" $size="400px" $delay="-15s" />
      <PageContainer>
        <Container>
          {/* timeline step tracker */}
          <Timeline />

          <CheckoutLayout>
            {/* Left Column Forms */}
            <FormColumn>
              {step === 1 ? <Step1Form /> : <Step2Form />}
            </FormColumn>

            {/* Right Column Order Summary */}
            <OrderSummary />
          </CheckoutLayout>
        </Container>
      </PageContainer>
    </CheckoutWrapper>
  );
}

// Import Container inside the component's scope or styled layout
import { Container } from "./styled";

export default function CheckoutPage() {
  return (
    <CheckoutProvider>
      <CheckoutContent />
    </CheckoutProvider>
  );
}
