"use client";

import React, { createContext, useContext, useState } from "react";
import { useCart } from "@/src/hooks/useCart";

// Shipping constants
export const STANDARD_SHIPPING_CHARGE = 60;
export const EXPRESS_SHIPPING_CHARGE = 120;
export const FREE_SHIPPING_THRESHOLD = 999;

function useCheckoutState() {
  const playClickSound = () => {
    const audio = new Audio("/audio/click.mp3");
    audio.play().catch((err) => console.log("Audio play failed:", err));
  };

  const {
    items,
    cartTotal,
    clearCart,
    isHydrated,
    appliedPromo,
    setAppliedPromo,
  } = useCart();

  // Navigation steps: 1 = Shipping/Details, 2 = Payment, 3 = Confirmation
  const [step, setStep] = useState(1);

  // Form States
  const [email, setEmail] = useState("");
  const [marketingOptIn, setMarketingOptIn] = useState(true);
  const [deliveryMode, setDeliveryMode] = useState<"ship" | "pickup">("ship");

  // Shipping details
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [apartment, setApartment] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [phone, setPhone] = useState("");

  // Shipping Method
  const [shippingMethod, setShippingMethod] = useState<"standard" | "express">(
    "standard",
  );

  // Payment Method
  const [paymentMethod, setPaymentMethod] = useState<
    "upi" | "card" | "netbanking" | "cod"
  >("upi");

  // Card specific states
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCVV, setCardCVV] = useState("");
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  // UPI specific states
  const [selectedUPIApp, setSelectedUPIApp] = useState("gpay");
  const [upiId, setUpiId] = useState("");

  // Net banking specific states
  const [selectedBank, setSelectedBank] = useState("sbi");

  // Promo code states
  const [promoCode, setPromoCode] = useState("");
  const [promoError, setPromoError] = useState("");

  // Order Success simulated data
  const [orderId, setOrderId] = useState("");
  const [completedOrderTotal, setCompletedOrderTotal] = useState(0);

  // Form Validation Errors
  const [errors, setErrors] = useState<Record<string, string>>({});

  const isFreeShipping =
    cartTotal >= FREE_SHIPPING_THRESHOLD || appliedPromo === "FREESHIP";

  const activeShippingCharge =
    deliveryMode === "pickup"
      ? 0
      : shippingMethod === "express"
        ? EXPRESS_SHIPPING_CHARGE
        : isFreeShipping
          ? 0
          : STANDARD_SHIPPING_CHARGE;

  const discountAmount =
    appliedPromo === "AHARA10" ? Math.round(cartTotal * 0.1) : 0;

  const codFee = paymentMethod === "cod" ? 40 : 0;
  const finalTotal = cartTotal + activeShippingCharge - discountAmount + codFee;

  const validateStep1 = () => {
    const tempErrors: Record<string, string> = {};
    if (!email || !/\S+@\S+\.\S+/.test(email))
      tempErrors.email = "Enter a valid email address.";

    if (deliveryMode === "ship") {
      if (!firstName.trim()) tempErrors.firstName = "First name is required.";
      if (!lastName.trim()) tempErrors.lastName = "Last name is required.";
      if (!address.trim()) tempErrors.address = "Address is required.";
      if (!city.trim()) tempErrors.city = "City is required.";
      if (!state.trim()) tempErrors.state = "State/Region is required.";
      if (!pinCode.trim() || !/^\d{6}$/.test(pinCode))
        tempErrors.pinCode = "Enter a valid 6-digit PIN code.";
      if (!phone.trim() || !/^\d{10}$/.test(phone))
        tempErrors.phone = "Enter a valid 10-digit mobile number.";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const validateStep2 = () => {
    const tempErrors: Record<string, string> = {};

    if (paymentMethod === "card") {
      if (!cardNumber || cardNumber.replace(/\s/g, "").length < 16)
        tempErrors.cardNumber = "Enter a valid 16-digit card number.";
      if (!cardName.trim())
        tempErrors.cardName = "Cardholder name is required.";
      if (!cardExpiry || !/^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(cardExpiry))
        tempErrors.cardExpiry = "Expiry date must be MM/YY.";
      if (!cardCVV || cardCVV.length < 3)
        tempErrors.cardCVV = "CVV must be 3 or 4 digits.";
    } else if (paymentMethod === "upi") {
      if (!upiId || !upiId.includes("@"))
        tempErrors.upiId = "Enter a valid UPI ID (e.g. user@bank).";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleGoToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    playClickSound();
    if (validateStep1()) {
      setStep(2);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBackToDetails = () => {
    playClickSound();
    setStep(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePlaceOrder = () => {
    playClickSound();
    if (validateStep2()) {
      setCompletedOrderTotal(finalTotal);
      setOrderId("AHA-" + Math.floor(100000 + Math.random() * 900000));
      // Simulate API placement delay
      setStep(3);
      clearCart();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleApplyPromo = () => {
    playClickSound();
    setPromoError("");
    const code = promoCode.trim().toUpperCase();

    if (code === "AHARA10") {
      setAppliedPromo("AHARA10");
      setPromoCode("");
    } else if (code === "FREESHIP") {
      setAppliedPromo("FREESHIP");
      setPromoCode("");
    } else {
      setPromoError("Invalid promo code. Try 'AHARA10' or 'FREESHIP'.");
    }
  };

  const handleRemovePromo = () => {
    playClickSound();
    setAppliedPromo(null);
  };

  // Dynamic Credit Card brand logo helper
  const getCardBrand = () => {
    const cleanNumber = cardNumber.replace(/\s/g, "");
    if (cleanNumber.startsWith("4")) return "VISA";
    if (cleanNumber.startsWith("5")) return "MASTERCARD";
    if (cleanNumber.startsWith("3")) return "AMEX";
    return "CREDIT CARD";
  };

  // Auto spacing for card numbers
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    const formatted = value.replace(/(\d{4})(?=\d)/g, "$1 ").substring(0, 19);
    setCardNumber(formatted);
    if (errors.cardNumber) {
      setErrors((prev) => ({ ...prev, cardNumber: "" }));
    }
  };

  // Auto slash for expiry
  const handleCardExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 2) {
      value = value.substring(0, 2) + "/" + value.substring(2, 4);
    }
    setCardExpiry(value.substring(0, 5));
    if (errors.cardExpiry) {
      setErrors((prev) => ({ ...prev, cardExpiry: "" }));
    }
  };

  return {
    playClickSound,
    items,
    cartTotal,
    clearCart,
    isHydrated,
    appliedPromo,
    setAppliedPromo,
    step,
    setStep,
    email,
    setEmail,
    marketingOptIn,
    setMarketingOptIn,
    deliveryMode,
    setDeliveryMode,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    address,
    setAddress,
    apartment,
    setApartment,
    city,
    setCity,
    state,
    setState,
    pinCode,
    setPinCode,
    phone,
    setPhone,
    shippingMethod,
    setShippingMethod,
    paymentMethod,
    setPaymentMethod,
    cardNumber,
    setCardNumber,
    cardName,
    setCardName,
    cardExpiry,
    setCardExpiry,
    cardCVV,
    setCardCVV,
    isCardFlipped,
    setIsCardFlipped,
    selectedUPIApp,
    setSelectedUPIApp,
    upiId,
    setUpiId,
    selectedBank,
    setSelectedBank,
    promoCode,
    setPromoCode,
    promoError,
    setPromoError,
    orderId,
    completedOrderTotal,
    errors,
    setErrors,
    isFreeShipping,
    activeShippingCharge,
    discountAmount,
    codFee,
    finalTotal,
    handleGoToPayment,
    handleBackToDetails,
    handlePlaceOrder,
    handleApplyPromo,
    handleRemovePromo,
    getCardBrand,
    handleCardNumberChange,
    handleCardExpiryChange,
  };
}

export type CheckoutHookType = ReturnType<typeof useCheckoutState>;

const CheckoutContext = createContext<CheckoutHookType | null>(null);

export const CheckoutProvider = ({ children }: { children: React.ReactNode }) => {
  const checkout = useCheckoutState();
  return (
    <CheckoutContext.Provider value={checkout}>
      {children}
    </CheckoutContext.Provider>
  );
};

export const useCheckout = () => {
  const context = useContext(CheckoutContext);
  if (!context) {
    throw new Error("useCheckout must be used within a CheckoutProvider");
  }
  return context;
};
