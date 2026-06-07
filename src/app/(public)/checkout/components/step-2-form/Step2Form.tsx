"use client";

import React from "react";
import Image from "next/image";
import { Truck, CreditCard, Info, ArrowLeft } from "lucide-react";
import gpayLogo from "@/src/assets/images/illustration/G_pay_logo.png";
import phonepeLogo from "@/src/assets/images/illustration/phone-pe-logo.png";
import paytmLogo from "@/src/assets/images/illustration/paytm-logo.png";
import {
  STANDARD_SHIPPING_CHARGE,
  EXPRESS_SHIPPING_CHARGE,
  useCheckout,
} from "../../useCheckout";
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
  FormInput,
  ErrorMessage,
  CreditCardContainer,
  CreditCardInner,
  CardFront,
  CardRow,
  CardLogo,
  CardBrandName,
  CardChip,
  CardNumberText,
  CardHolderName,
  CardExpiry,
  CardBack,
  CardMagneticStrip,
  CardCVVBox,
  CardSecurityNotice,
  InputGrid,
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
    upiId,
    setUpiId,
    cardNumber,
    cardName,
    setCardName,
    cardExpiry,
    cardCVV,
    setCardCVV,
    isCardFlipped,
    setIsCardFlipped,
    selectedBank,
    setSelectedBank,
    errors,
    setErrors,
    finalTotal,
    isFreeShipping,
    playClickSound,
    handleBackToDetails,
    handlePlaceOrder,
    getCardBrand,
    handleCardNumberChange,
    handleCardExpiryChange,
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
                <span className="desc">
                  Delivered safely within 3-5 working days.
                </span>
              </OptionLabel>
            </OptionInfo>
            <OptionPrice>
              {isFreeShipping ? (
                <span className="free">FREE</span>
              ) : (
                `₹${STANDARD_SHIPPING_CHARGE}`
              )}
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
                <span className="desc">
                  Priority delivery inside 24-48 hours.
                </span>
              </OptionLabel>
            </OptionInfo>
            <OptionPrice>₹{EXPRESS_SHIPPING_CHARGE}</OptionPrice>
          </OptionCard>
        </ShippingSelectionGrid>
      ) : (
        <PickupNoticeText>
          Store Pickup selected. No shipping charge is applicable.
        </PickupNoticeText>
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
              <span className="desc">
                Direct instant transfer with any UPI scanner/ID.
              </span>
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
                <Image
                  src={gpayLogo}
                  alt="Google Pay"
                  height={24}
                />
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
                <Image
                  src={phonepeLogo}
                  alt="PhonePe"
                  height={24}
                />
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
                <Image
                  src={paytmLogo}
                  alt="Paytm"
                  height={20}
                />
              </UPILogoButton>
            </UPIOptionGrid>

            <InputGroup $fullWidth>
              <FieldLabel htmlFor="upiId">Enter UPI ID</FieldLabel>
              <FormInput
                id="upiId"
                type="text"
                placeholder="e.g. name@okhdfcbank"
                value={upiId}
                onChange={(e) => {
                  setUpiId(e.target.value);
                  if (errors.upiId) {
                    setErrors((prev) => ({ ...prev, upiId: "" }));
                  }
                }}
              />
              {errors.upiId && (
                <ErrorMessage>
                  {errors.upiId}
                </ErrorMessage>
              )}
            </InputGroup>
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
              <span className="desc">Secure 256-bit encrypted card gateway.</span>
            </OptionLabel>
          </OptionInfo>
        </OptionCard>

        {paymentMethod === "card" && (
          <PaymentDetailsBox>
            {/* Interactive Flipping Card visual */}
            <CreditCardContainer>
              <CreditCardInner $isFlipped={isCardFlipped}>
                <CardFront>
                  <CardRow>
                    <CardLogo>
                      AHARA
                    </CardLogo>
                    <CardBrandName>
                      {getCardBrand()}
                    </CardBrandName>
                  </CardRow>
                  <CardChip />
                  <CardNumberText>
                    {cardNumber || "•••• •••• •••• ••••"}
                  </CardNumberText>
                  <CardRow>
                    <CardHolderName>
                      <span className="label">Card Holder</span>
                      <span className="value">{cardName || "Your Name"}</span>
                    </CardHolderName>
                    <CardExpiry>
                      <span className="label">Expires</span>
                      <span className="value">{cardExpiry || "MM/YY"}</span>
                    </CardExpiry>
                  </CardRow>
                </CardFront>
                <CardBack>
                  <CardMagneticStrip />
                  <CardCVVBox>
                    <span className="label">CVV Code</span>
                    <div className="white-bar">{cardCVV || "•••"}</div>
                  </CardCVVBox>
                  <CardSecurityNotice>
                    Security Encrypted Connection. Authorized Signature Required.
                  </CardSecurityNotice>
                </CardBack>
              </CreditCardInner>
            </CreditCardContainer>

            {/* Card Input fields */}
            <InputGrid>
              <InputGroup $fullWidth>
                <FieldLabel htmlFor="cardNumber">Card Number</FieldLabel>
                <FormInput
                  id="cardNumber"
                  type="text"
                  placeholder="4000 1234 5678 9010"
                  value={cardNumber}
                  onChange={handleCardNumberChange}
                />
                {errors.cardNumber && (
                  <ErrorMessage>
                    {errors.cardNumber}
                  </ErrorMessage>
                )}
              </InputGroup>

              <InputGroup $fullWidth>
                <FieldLabel htmlFor="cardName">Name on Card</FieldLabel>
                <FormInput
                  id="cardName"
                  type="text"
                  placeholder="RISHABH VERMA"
                  value={cardName}
                  onChange={(e) => {
                    setCardName(e.target.value);
                    if (errors.cardName)
                      setErrors((prev) => ({
                        ...prev,
                        cardName: "",
                      }));
                  }}
                />
                {errors.cardName && (
                  <ErrorMessage>
                    {errors.cardName}
                  </ErrorMessage>
                )}
              </InputGroup>

              <InputGroup>
                <FieldLabel htmlFor="cardExpiry">Expiration Date</FieldLabel>
                <FormInput
                  id="cardExpiry"
                  type="text"
                  placeholder="MM/YY"
                  value={cardExpiry}
                  onChange={handleCardExpiryChange}
                />
                {errors.cardExpiry && (
                  <ErrorMessage>
                    {errors.cardExpiry}
                  </ErrorMessage>
                )}
              </InputGroup>

              <InputGroup>
                <FieldLabel htmlFor="cardCVV">CVV</FieldLabel>
                <FormInput
                  id="cardCVV"
                  type="password"
                  placeholder="•••"
                  maxLength={4}
                  value={cardCVV}
                  onFocus={() => setIsCardFlipped(true)}
                  onBlur={() => setIsCardFlipped(false)}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "");
                    setCardCVV(val);
                    if (errors.cardCVV)
                      setErrors((prev) => ({
                        ...prev,
                        cardCVV: "",
                      }));
                  }}
                />
                {errors.cardCVV && (
                  <ErrorMessage>
                    {errors.cardCVV}
                  </ErrorMessage>
                )}
              </InputGroup>
            </InputGrid>
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
              <span className="desc">
                Transfer directly via Indian banking credentials.
              </span>
            </OptionLabel>
          </OptionInfo>
        </OptionCard>

        {paymentMethod === "netbanking" && (
          <PaymentDetailsBox>
            <InputGroup $fullWidth>
              <FieldLabel htmlFor="bank">Select Your Bank</FieldLabel>
              <FormSelect
                id="bank"
                value={selectedBank}
                onChange={(e) => setSelectedBank(e.target.value)}
              >
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
              <span className="desc">
                Pay at your doorstep (₹40 extra service fee).
              </span>
            </OptionLabel>
          </OptionInfo>
        </OptionCard>

        {paymentMethod === "cod" && (
          <PaymentDetailsBox>
            <CODInfoBox>
              <Info size={16} />A standard ₹40 cash management charge applies. Please
              ensure correct change is ready at delivery.
            </CODInfoBox>
          </PaymentDetailsBox>
        )}
      </SelectionGrid>

      <FormActionsGroup>
        <SecondaryButton
          type="button"
          onClick={handleBackToDetails}
        >
          <ArrowLeft size={16} /> Details
        </SecondaryButton>
        <ActionButton
          type="button"
          onClick={handlePlaceOrder}
        >
          Pay ₹{finalTotal} & Confirm
        </ActionButton>
      </FormActionsGroup>
    </FormCard>
  );
};
