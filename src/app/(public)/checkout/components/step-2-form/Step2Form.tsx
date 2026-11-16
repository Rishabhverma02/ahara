"use client";

import React from "react";
import Image from "next/image";
import { Truck, CreditCard, Info, ArrowLeft, Lock } from "lucide-react";
import gpayLogo from "@/src/assets/images/illustration/G_pay_logo.webp";
import phonepeLogo from "@/src/assets/images/illustration/phone-pe-logo.webp";
import paytmLogo from "@/src/assets/images/illustration/paytm-logo.webp";
import { STANDARD_SHIPPING_CHARGE, EXPRESS_SHIPPING_CHARGE, useCheckout } from "../../useCheckout";
import {
  FormCard,
  CardHeader,
  CardTitle,
  CardHeaderBadge,
  ShippingSelectionGrid,
  OptionCard,
  OptionInfo,
  OptionRadio,
  OptionLabel,
  OptionPrice,
  PickupNoticeText,
  SelectionGrid,
  PaymentDetailsBox,
  UPIOptionGrid,
  UPILogoButton,
  InputGroup,
  FieldLabel,
  ErrorMessage,
  FormSelect,
  SecondaryButton,
  ActionButton,
  FormActionsGroup,
  CODInfoBox,
} from "./styled";

export const Step2Form = () => {
  const {
    deliveryMode,
    shippingMethod,
    setShippingMethod,
    paymentMethod,
    setPaymentMethod,
    selectedUPIApp,
    setSelectedUPIApp,
    selectedBank,
    setSelectedBank,
    finalTotal,
    isFreeShipping,
    playClickSound,
    handleBackToDetails,
    handlePlaceOrder,
    submitting,
    submitError,
  } = useCheckout();

  return (
    <FormCard>
      <CardHeader>
        <CardTitle>
          <Truck size={18} /> Shipping Method
        </CardTitle>
        <CardHeaderBadge>Step 2 of 2</CardHeaderBadge>
      </CardHeader>

      {deliveryMode === "ship" ? (
        <ShippingSelectionGrid>
          <OptionCard
            $selected={shippingMethod === "standard"}
            onClick={() => {
              playClickSound();
              setShippingMethod("standard");
            }}
          >
            <OptionInfo>
              <OptionRadio $selected={shippingMethod === "standard"} />
              <OptionLabel>
                <span className="title">Standard Muted Delivery</span>
                <span className="desc">Delivered safely within 3-5 working days.</span>
              </OptionLabel>
            </OptionInfo>
            <OptionPrice>
              {isFreeShipping ? <span className="free">FREE</span> : `₹${STANDARD_SHIPPING_CHARGE}`}
            </OptionPrice>
          </OptionCard>

          <OptionCard
            $selected={shippingMethod === "express"}
            onClick={() => {
              playClickSound();
              setShippingMethod("express");
            }}
          >
            <OptionInfo>
              <OptionRadio $selected={shippingMethod === "express"} />
              <OptionLabel>
                <span className="title">Lightning Express Superfood</span>
                <span className="desc">Priority delivery inside 24-48 hours.</span>
              </OptionLabel>
            </OptionInfo>
            <OptionPrice>₹{EXPRESS_SHIPPING_CHARGE}</OptionPrice>
          </OptionCard>
        </ShippingSelectionGrid>
      ) : (
        <PickupNoticeText>Store Pickup selected. No shipping charge is applicable.</PickupNoticeText>
      )}

      <CardHeader>
        <CardTitle>
          <CreditCard size={18} /> Select Payment Method
        </CardTitle>
      </CardHeader>

      <SelectionGrid>
        <OptionCard
          $selected={paymentMethod === "upi"}
          onClick={() => {
            playClickSound();
            setPaymentMethod("upi");
          }}
        >
          <OptionInfo>
            <OptionRadio $selected={paymentMethod === "upi"} />
            <OptionLabel>
              <span className="title">UPI (Google Pay, PhonePe, Paytm)</span>
              <span className="desc">Direct instant transfer with any UPI scanner/ID.</span>
            </OptionLabel>
          </OptionInfo>
        </OptionCard>

        {paymentMethod === "upi" && (
          <PaymentDetailsBox>
            <UPIOptionGrid>
              <UPILogoButton
                type="button"
                $active={selectedUPIApp === "gpay"}
                onClick={() => {
                  playClickSound();
                  setSelectedUPIApp("gpay");
                }}
                aria-label="Google Pay"
              >
                <Image src={gpayLogo} alt="Google Pay" height={24} />
              </UPILogoButton>
              <UPILogoButton
                type="button"
                $active={selectedUPIApp === "phonepe"}
                onClick={() => {
                  playClickSound();
                  setSelectedUPIApp("phonepe");
                }}
                aria-label="PhonePe"
              >
                <Image src={phonepeLogo} alt="PhonePe" height={24} />
              </UPILogoButton>
              <UPILogoButton
                type="button"
                $active={selectedUPIApp === "paytm"}
                onClick={() => {
                  playClickSound();
                  setSelectedUPIApp("paytm");
                }}
                aria-label="Paytm"
              >
                <Image src={paytmLogo} alt="Paytm" height={20} />
              </UPILogoButton>
            </UPIOptionGrid>

            <CODInfoBox>
              <Lock size={16} />
              You&apos;ll enter your UPI ID or scan the QR in Razorpay&apos;s secure payment window.
            </CODInfoBox>
          </PaymentDetailsBox>
        )}

        <OptionCard
          $selected={paymentMethod === "card"}
          onClick={() => {
            playClickSound();
            setPaymentMethod("card");
          }}
        >
          <OptionInfo>
            <OptionRadio $selected={paymentMethod === "card"} />
            <OptionLabel>
              <span className="title">Credit / Debit Card</span>
              <span className="desc">Visa, Mastercard, RuPay — processed securely by Razorpay.</span>
            </OptionLabel>
          </OptionInfo>
        </OptionCard>

        {paymentMethod === "card" && (
          <PaymentDetailsBox>
            {/* Card details are entered in Razorpay's window — never in this form (PCI-DSS). */}
            <CODInfoBox>
              <Lock size={16} />
              You&apos;ll enter your card details in Razorpay&apos;s secure window. Ahara never sees or stores
              your card number.
            </CODInfoBox>
          </PaymentDetailsBox>
        )}

        <OptionCard
          $selected={paymentMethod === "netbanking"}
          onClick={() => {
            playClickSound();
            setPaymentMethod("netbanking");
          }}
        >
          <OptionInfo>
            <OptionRadio $selected={paymentMethod === "netbanking"} />
            <OptionLabel>
              <span className="title">Net Banking</span>
              <span className="desc">Transfer directly via Indian banking credentials.</span>
            </OptionLabel>
          </OptionInfo>
        </OptionCard>

        {paymentMethod === "netbanking" && (
          <PaymentDetailsBox>
            <InputGroup $fullWidth>
              <FieldLabel htmlFor="bank">Select Your Bank</FieldLabel>
              <FormSelect id="bank" value={selectedBank} onChange={(e) => setSelectedBank(e.target.value)}>
                <option value="sbi">State Bank of India (SBI)</option>
                <option value="hdfc">HDFC Bank</option>
                <option value="icici">ICICI Bank</option>
                <option value="axis">Axis Bank</option>
                <option value="kotak">Kotak Mahindra Bank</option>
              </FormSelect>
            </InputGroup>
          </PaymentDetailsBox>
        )}

        <OptionCard
          $selected={paymentMethod === "cod"}
          onClick={() => {
            playClickSound();
            setPaymentMethod("cod");
          }}
        >
          <OptionInfo>
            <OptionRadio $selected={paymentMethod === "cod"} />
            <OptionLabel>
              <span className="title">Cash on Delivery (CoD)</span>
              <span className="desc">Pay at your doorstep (₹40 extra service fee).</span>
            </OptionLabel>
          </OptionInfo>
        </OptionCard>

        {paymentMethod === "cod" && (
          <PaymentDetailsBox>
            <CODInfoBox>
              <Info size={16} />A standard ₹40 cash management charge applies. Please ensure correct change is
              ready at delivery.
            </CODInfoBox>
          </PaymentDetailsBox>
        )}
      </SelectionGrid>

      {submitError && <ErrorMessage role="alert">{submitError}</ErrorMessage>}

      <FormActionsGroup>
        <SecondaryButton type="button" onClick={handleBackToDetails} disabled={submitting}>
          <ArrowLeft size={16} /> Details
        </SecondaryButton>
        <ActionButton type="button" onClick={handlePlaceOrder} disabled={submitting} aria-busy={submitting}>
          {submitting
            ? "Processing…"
            : paymentMethod === "cod"
              ? `Place Order · ₹${finalTotal}`
              : `Pay ₹${finalTotal} & Confirm`}
        </ActionButton>
      </FormActionsGroup>
    </FormCard>
  );
};
