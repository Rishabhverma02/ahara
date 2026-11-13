"use client";

import React from "react";
import { Mascot } from "@/src/components/ui";
import {
  ConfirmationCard,
  SuccessIconWrapper,
  ConfirmationTitle,
  ConfirmationMessage,
  OrderDetailsCard,
  OrderDetailRow,
  DetailsDivider,
  ShopLink,
  ContinueButton,
} from "./styled";
import { useCheckout } from "../../useCheckout";

export const OrderConfirmation = () => {
  const {
    email,
    orderId,
    deliveryMode,
    address,
    city,
    state,
    pinCode,
    paymentMethod,
    completedOrderTotal,
  } = useCheckout();

  return (
    <ConfirmationCard>
      <SuccessIconWrapper>
        <Mascot pose="front" width={110} motion="bob" alt="Kairo waving" />
      </SuccessIconWrapper>

      <ConfirmationTitle>
        Thank you — your order is in.
      </ConfirmationTitle>
      
      <ConfirmationMessage>
        Thank you for choosing Ahara. Your order has been registered and is
        being processed. A confirmation has been sent to{" "}
        <strong>{email}</strong>.
      </ConfirmationMessage>

      <OrderDetailsCard>
        <OrderDetailRow>
          <span className="label">Order Reference:</span>
          <span className="value value-uppercase">{orderId}</span>
        </OrderDetailRow>
        
        <OrderDetailRow>
          <span className="label">Delivery Type:</span>
          <span className="value">
            {deliveryMode === "pickup" ? "Store Pickup" : "Home Delivery"}
          </span>
        </OrderDetailRow>

        {deliveryMode === "ship" && (
          <OrderDetailRow>
            <span className="label">Shipping Address:</span>
            <span className="value">
              {address}, {city}, {state} - {pinCode}
            </span>
          </OrderDetailRow>
        )}

        <OrderDetailRow>
          <span className="label">Payment Mode:</span>
          <span className="value value-uppercase">{paymentMethod}</span>
        </OrderDetailRow>

        <DetailsDivider />

        <OrderDetailRow $isTotal>
          <span className="label">Paid Amount:</span>
          <span className="value">₹{completedOrderTotal}</span>
        </OrderDetailRow>
      </OrderDetailsCard>

      <ShopLink href="/shop">
        <ContinueButton>
          Continue Shopping
        </ContinueButton>
      </ShopLink>
    </ConfirmationCard>
  );
};
