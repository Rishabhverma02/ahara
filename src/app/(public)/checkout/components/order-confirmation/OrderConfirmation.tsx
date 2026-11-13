"use client";

import { Mascot } from "@/src/components/ui";
import { formatINR } from "@/src/lib/pricing";
import { useCheckoutStatus } from "../../useCheckout";
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

const PAYMENT_LABEL = {
  razorpay: "Paid online",
  demo: "Paid online (demo mode — no money was taken)",
  cod: "Cash on delivery",
} as const;

export const OrderConfirmation = () => {
  const { placed } = useCheckoutStatus();
  if (!placed) return null;
  const { form, orderId, total, mode } = placed;

  return (
    <ConfirmationCard>
      <SuccessIconWrapper>
        <Mascot pose="front" width={110} motion="bob" alt="Kairo waving" />
      </SuccessIconWrapper>

      <ConfirmationTitle>Thank you — your order is in.</ConfirmationTitle>

      <ConfirmationMessage>
        Keep your order number handy — we&rsquo;ll send delivery updates to <strong>{form.email}</strong>.
      </ConfirmationMessage>

      <OrderDetailsCard>
        <OrderDetailRow>
          <span className="label">Order number</span>
          <span className="value value-uppercase">{orderId}</span>
        </OrderDetailRow>

        <OrderDetailRow>
          <span className="label">Delivery</span>
          <span className="value">
            {form.deliveryMode === "pickup"
              ? "Store pickup, Jaora"
              : `${form.shippingMethod === "express" ? "Express" : "Standard"} delivery`}
          </span>
        </OrderDetailRow>

        {form.deliveryMode === "ship" && (
          <OrderDetailRow>
            <span className="label">Ship to</span>
            <span className="value">
              {form.firstName} {form.lastName}, {form.address}
              {form.apartment && `, ${form.apartment}`}, {form.city}, {form.state} {form.pinCode}
            </span>
          </OrderDetailRow>
        )}

        <OrderDetailRow>
          <span className="label">Payment</span>
          <span className="value">{PAYMENT_LABEL[mode]}</span>
        </OrderDetailRow>

        <DetailsDivider />

        <OrderDetailRow $isTotal>
          <span className="label">{mode === "cod" ? "To pay on delivery" : "Total paid"}</span>
          <span className="value">{formatINR(total)}</span>
        </OrderDetailRow>
      </OrderDetailsCard>

      <ShopLink href="/shop">
        <ContinueButton>Continue shopping</ContinueButton>
      </ShopLink>
    </ConfirmationCard>
  );
};
