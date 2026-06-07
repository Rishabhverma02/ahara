"use client";

import React from "react";
import { Check } from "lucide-react";
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
        <Check size={32} strokeWidth={3} />
      </SuccessIconWrapper>

      <ConfirmationTitle>
        Order Placed Successfully!
      </ConfirmationTitle>
      
      <ConfirmationMessage>
        Thank you for choosing AHARA. Your order has been registered and is
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
