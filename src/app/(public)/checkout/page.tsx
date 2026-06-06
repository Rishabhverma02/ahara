"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gpayLogo from "@/src/assets/images/illustration/G_pay_logo.png";
import phonepeLogo from "@/src/assets/images/illustration/phone-pe-logo.png";
import paytmLogo from "@/src/assets/images/illustration/paytm-logo.png";
import { useCart } from "@/src/hooks/useCart";
import {
  CheckoutWrapper,
  BackgroundBlob,
  PageContainer,
  Container,
  StepsTimeline,
  TimelineStep,
  TimelineDivider,
  CheckoutLayout,
  FormColumn,
  SummaryColumn,
  FormCard,
  CardHeader,
  CardTitle,
  CardHeaderBadge,
  ToggleContainer,
  ToggleButton,
  InputGrid,
  InputGroup,
  FieldLabel,
  InputWrapper,
  InputIcon,
  FormInput,
  FormSelect,
  CheckboxGroup,
  SelectionGrid,
  OptionCard,
  OptionInfo,
  OptionRadio,
  OptionLabel,
  OptionPrice,
  PickupStoreCard,
  PaymentDetailsBox,
  UPIOptionGrid,
  UPILogoButton,
  CreditCardContainer,
  CreditCardInner,
  CardFront,
  CardBack,
  CardMagneticStrip,
  CardCVVBox,
  CardRow,
  CardChip,
  CardNumberText,
  CardHolderName,
  CardExpiry,
  ActionButton,
  SecondaryButton,
  StickySummaryCard,
  SummarySectionTitle,
  MiniItemList,
  MiniItemRow,
  MiniItemImage,
  MiniItemImageInner,
  MiniItemDetails,
  MiniItemPrice,
  CostSummaryRow,
  TrustBadgeWrapper,
  TrustBadge,
} from "./styled";
import { EmptyState } from "@/src/components/ui";

import {
  User,
  Mail,
  Phone,
  MapPin,
  Building,
  CreditCard,
  Truck,
  ShieldCheck,
  Lock,
  ArrowLeft,
  ArrowRight,
  Check,
  ShoppingBag,
  Info,
  Ticket,
} from "lucide-react";

// Render direct image assets for UPI payment options

export default function CheckoutPage() {
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
  const [orderId] = useState("");
  const [completedOrderTotal, setCompletedOrderTotal] = useState(0);

  // Form Validation Errors
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Shipping constants
  const STANDARD_SHIPPING_CHARGE = 60;
  const EXPRESS_SHIPPING_CHARGE = 120;
  const FREE_SHIPPING_THRESHOLD = 999;

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

  // Next.js Hydration Guard
  if (!isHydrated) {
    return (
      <CheckoutWrapper>
        <div
          style={{
            textAlign: "center",
            padding: "100px 0",
            color: "#7e7c2a",
            fontSize: "18px",
            fontWeight: "600",
          }}
        >
          Initializing secure checkout...
        </div>
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
          <Container
            style={{
              maxWidth: "600px",
              alignItems: "center",
              padding: "100px 0",
            }}
          >
            <EmptyState
              icon={<ShoppingBag size={44} style={{ color: "#7e7c2a" }} />}
              badgeText="Empty Checkout"
              title="Your Checkout is Empty"
              description="Please add items to your shopping cart before attempting to checkout."
              btnText="Browse Shop"
            />
          </Container>
        </PageContainer>
      </CheckoutWrapper>
    );
  }

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
  };

  // Auto slash for expiry
  const handleCardExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 2) {
      value = value.substring(0, 2) + "/" + value.substring(2, 4);
    }
    setCardExpiry(value.substring(0, 5));
  };

  // If order complete (Step 3), render Confirmation page
  if (step === 3) {
    return (
      <CheckoutWrapper>
        <BackgroundBlob $color="rgba(126, 124, 42, 0.35)" $top="10%" $left="5%" $size="450px" />
        <BackgroundBlob $color="rgba(221, 199, 161, 0.45)" $top="50%" $right="8%" $size="500px" $delay="-5s" />
        <PageContainer>
          <Container style={{ maxWidth: "680px", alignItems: "center" }}>
            <FormCard
              style={{ width: "100%", textAlign: "center", padding: "40px" }}
            >
              <div
                style={{
                  width: "72px",
                  height: "72px",
                  borderRadius: "50%",
                  background: "#f0f4ed",
                  color: "#496a35",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px auto",
                  fontSize: "32px",
                  boxShadow: "0 0 0 8px rgba(73, 106, 53, 0.05)",
                }}
              >
                <Check size={32} strokeWidth={3} />
              </div>

              <h1
                style={{
                  fontSize: "28px",
                  fontWeight: 800,
                  color: "#5f320fff",
                  margin: "0 0 8px 0",
                }}
              >
                Order Placed Successfully!
              </h1>
              <p
                style={{
                  fontSize: "14px",
                  color: "#6c6959",
                  margin: "0 0 24px 0",
                  lineHeight: "1.6",
                }}
              >
                Thank you for choosing AHARA. Your order has been registered and
                is being processed. A confirmation has been sent to{" "}
                <strong style={{ color: "#5f320fff" }}>{email}</strong>.
              </p>

              <div
                style={{
                  background: "#fdfaf5",
                  borderRadius: "16px",
                  border: "1px solid rgba(126, 124, 42, 0.08)",
                  padding: "20px",
                  textAlign: "left",
                  marginBottom: "32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "13px",
                  }}
                >
                  <span style={{ color: "#8a8775", fontWeight: 600 }}>
                    Order Reference:
                  </span>
                  <span style={{ fontWeight: 800, color: "#5f320fff" }}>
                    {orderId}
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "13px",
                  }}
                >
                  <span style={{ color: "#8a8775", fontWeight: 600 }}>
                    Delivery Type:
                  </span>
                  <span
                    style={{
                      fontWeight: 700,
                      color: "#5f320fff",
                      textTransform: "capitalize",
                    }}
                  >
                    {deliveryMode === "pickup"
                      ? "Store Pickup"
                      : "Home Delivery"}
                  </span>
                </div>
                {deliveryMode === "ship" && (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "13px",
                    }}
                  >
                    <span style={{ color: "#8a8775", fontWeight: 600 }}>
                      Shipping Address:
                    </span>
                    <span
                      style={{
                        fontWeight: 700,
                        color: "#5f320fff",
                        textAlign: "right",
                      }}
                    >
                      {address}, {city}, {state} - {pinCode}
                    </span>
                  </div>
                )}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "13px",
                  }}
                >
                  <span style={{ color: "#8a8775", fontWeight: 600 }}>
                    Payment Mode:
                  </span>
                  <span
                    style={{
                      fontWeight: 700,
                      color: "#5f320fff",
                      textTransform: "uppercase",
                    }}
                  >
                    {paymentMethod}
                  </span>
                </div>
                <div
                  style={{
                    height: "1px",
                    background: "rgba(126, 124, 42, 0.08)",
                    margin: "4px 0",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "15px",
                  }}
                >
                  <span style={{ fontWeight: 800, color: "#5f320fff" }}>
                    Paid Amount:
                  </span>
                  <span
                    style={{
                      fontWeight: 900,
                      color: "#7e7c2a",
                      fontSize: "18px",
                    }}
                  >
                    ₹{completedOrderTotal}
                  </span>
                </div>
              </div>

              <Link href="/shop" style={{ textDecoration: "none" }}>
                <ActionButton style={{ margin: "0 auto", maxWidth: "240px" }}>
                  Continue Shopping
                </ActionButton>
              </Link>
            </FormCard>
          </Container>
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
          <StepsTimeline>
            <TimelineStep $active={step === 1} $completed={step > 1}>
              <span className="circle">1</span>
              <span className="text">Shipping</span>
            </TimelineStep>
            <TimelineDivider $completed={step > 1} />
            <TimelineStep $active={step === 2} $completed={step > 2}>
              <span className="circle">2</span>
              <span className="text">Payment</span>
            </TimelineStep>
            <TimelineDivider $completed={step > 2} />
            <TimelineStep $active={step === 3} $completed={false}>
              <span className="circle">3</span>
              <span className="text">Receipt</span>
            </TimelineStep>
          </StepsTimeline>

          <CheckoutLayout>
            {/* Left Column Forms */}
            <FormColumn>
              {/* STEP 1: Details & Address */}
              {step === 1 ? (
                <form onSubmit={handleGoToPayment}>
                  <FormCard>
                    <CardHeader>
                      <CardTitle>
                        <User size={18} /> Contact Information
                      </CardTitle>
                      <CardHeaderBadge>Step 1 of 2</CardHeaderBadge>
                    </CardHeader>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "16px",
                        marginBottom: "32px",
                      }}
                    >
                      <InputGroup $fullWidth>
                        <FieldLabel htmlFor="email">Email Address</FieldLabel>
                        <InputWrapper>
                          <InputIcon>
                            <Mail />
                          </InputIcon>
                          <FormInput
                            id="email"
                            type="email"
                            placeholder="e.g. rishabh@example.com"
                            value={email}
                            onChange={(e) => {
                              setEmail(e.target.value);
                              if (errors.email)
                                setErrors((prev) => ({ ...prev, email: "" }));
                            }}
                            $hasIcon
                          />
                        </InputWrapper>
                        {errors.email && (
                          <span
                            style={{
                              fontSize: "11px",
                              color: "#c0392b",
                              fontWeight: 600,
                            }}
                          >
                            {errors.email}
                          </span>
                        )}
                      </InputGroup>

                      <CheckboxGroup>
                        <input
                          type="checkbox"
                          checked={marketingOptIn}
                          onChange={(e) => setMarketingOptIn(e.target.checked)}
                        />
                        <span style={{ color: "#48260bff" }}>
                          Email me with exclusive wellness offers, recipes, and
                          clean label insights
                        </span>
                      </CheckboxGroup>
                    </div>

                    <CardHeader style={{ marginTop: "16px" }}>
                      <CardTitle>
                        <Truck size={18} /> Delivery Options
                      </CardTitle>
                    </CardHeader>

                    <ToggleContainer>
                      <ToggleButton
                        type="button"
                        $active={deliveryMode === "ship"}
                        onClick={() => {
                          playClickSound();
                          setDeliveryMode("ship");
                        }}
                      >
                        <Truck size={14} /> Ship to Address
                      </ToggleButton>
                      <ToggleButton
                        type="button"
                        $active={deliveryMode === "pickup"}
                        onClick={() => {
                          playClickSound();
                          setDeliveryMode("pickup");
                        }}
                      >
                        <Building size={14} /> Store Pickup
                      </ToggleButton>
                    </ToggleContainer>

                    {deliveryMode === "ship" ? (
                      <InputGrid>
                        <InputGroup>
                          <FieldLabel htmlFor="firstName">
                            First Name
                          </FieldLabel>
                          <FormInput
                            id="firstName"
                            type="text"
                            placeholder="Rishabh"
                            value={firstName}
                            onChange={(e) => {
                              setFirstName(e.target.value);
                              if (errors.firstName)
                                setErrors((prev) => ({
                                  ...prev,
                                  firstName: "",
                                }));
                            }}
                          />
                          {errors.firstName && (
                            <span
                              style={{
                                fontSize: "11px",
                                color: "#c0392b",
                                fontWeight: 600,
                              }}
                            >
                              {errors.firstName}
                            </span>
                          )}
                        </InputGroup>

                        <InputGroup>
                          <FieldLabel htmlFor="lastName">Last Name</FieldLabel>
                          <FormInput
                            id="lastName"
                            type="text"
                            placeholder="Verma"
                            value={lastName}
                            onChange={(e) => {
                              setLastName(e.target.value);
                              if (errors.lastName)
                                setErrors((prev) => ({
                                  ...prev,
                                  lastName: "",
                                }));
                            }}
                          />
                          {errors.lastName && (
                            <span
                              style={{
                                fontSize: "11px",
                                color: "#c0392b",
                                fontWeight: 600,
                              }}
                            >
                              {errors.lastName}
                            </span>
                          )}
                        </InputGroup>

                        <InputGroup $fullWidth>
                          <FieldLabel htmlFor="address">
                            Shipping Address
                          </FieldLabel>
                          <InputWrapper>
                            <InputIcon>
                              <MapPin />
                            </InputIcon>
                            <FormInput
                              id="address"
                              type="text"
                              placeholder="Flat/House No, Building, Street, Area"
                              value={address}
                              onChange={(e) => {
                                setAddress(e.target.value);
                                if (errors.address)
                                  setErrors((prev) => ({
                                    ...prev,
                                    address: "",
                                  }));
                              }}
                              $hasIcon
                            />
                          </InputWrapper>
                          {errors.address && (
                            <span
                              style={{
                                fontSize: "11px",
                                color: "#c0392b",
                                fontWeight: 600,
                              }}
                            >
                              {errors.address}
                            </span>
                          )}
                        </InputGroup>

                        <InputGroup $fullWidth>
                          <FieldLabel htmlFor="apartment">
                            Apartment, Suite, Unit (Optional)
                          </FieldLabel>
                          <FormInput
                            id="apartment"
                            type="text"
                            placeholder="e.g. Floor 2, Suite 201"
                            value={apartment}
                            onChange={(e) => setApartment(e.target.value)}
                          />
                        </InputGroup>

                        <InputGroup>
                          <FieldLabel htmlFor="city">City</FieldLabel>
                          <FormInput
                            id="city"
                            type="text"
                            placeholder="Jaora"
                            value={city}
                            onChange={(e) => {
                              setCity(e.target.value);
                              if (errors.city)
                                setErrors((prev) => ({ ...prev, city: "" }));
                            }}
                          />
                          {errors.city && (
                            <span
                              style={{
                                fontSize: "11px",
                                color: "#c0392b",
                                fontWeight: 600,
                              }}
                            >
                              {errors.city}
                            </span>
                          )}
                        </InputGroup>

                        <InputGroup>
                          <FieldLabel htmlFor="state">State</FieldLabel>
                          <FormSelect
                            id="state"
                            value={state}
                            onChange={(e) => {
                              setState(e.target.value);
                              if (errors.state)
                                setErrors((prev) => ({ ...prev, state: "" }));
                            }}
                          >
                            <option value="">Select State</option>
                            <option value="Madhya Pradesh">
                              Madhya Pradesh
                            </option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Gujarat">Gujarat</option>
                            <option value="Rajasthan">Rajasthan</option>
                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                          </FormSelect>
                          {errors.state && (
                            <span
                              style={{
                                fontSize: "11px",
                                color: "#c0392b",
                                fontWeight: 600,
                              }}
                            >
                              {errors.state}
                            </span>
                          )}
                        </InputGroup>

                        <InputGroup>
                          <FieldLabel htmlFor="pinCode">PIN Code</FieldLabel>
                          <FormInput
                            id="pinCode"
                            type="text"
                            placeholder="457226"
                            maxLength={6}
                            value={pinCode}
                            onChange={(e) => {
                              const val = e.target.value.replace(/\D/g, "");
                              setPinCode(val);
                              if (errors.pinCode)
                                setErrors((prev) => ({ ...prev, pinCode: "" }));
                            }}
                          />
                          {errors.pinCode && (
                            <span
                              style={{
                                fontSize: "11px",
                                color: "#c0392b",
                                fontWeight: 600,
                              }}
                            >
                              {errors.pinCode}
                            </span>
                          )}
                        </InputGroup>

                        <InputGroup>
                          <FieldLabel htmlFor="phone">Mobile Phone</FieldLabel>
                          <InputWrapper>
                            <InputIcon>
                              <Phone />
                            </InputIcon>
                            <FormInput
                              id="phone"
                              type="tel"
                              placeholder="10-digit number"
                              maxLength={10}
                              value={phone}
                              onChange={(e) => {
                                const val = e.target.value.replace(/\D/g, "");
                                setPhone(val);
                                if (errors.phone)
                                  setErrors((prev) => ({ ...prev, phone: "" }));
                              }}
                              $hasIcon
                            />
                          </InputWrapper>
                          {errors.phone && (
                            <span
                              style={{
                                fontSize: "11px",
                                color: "#c0392b",
                                fontWeight: 600,
                              }}
                            >
                              {errors.phone}
                            </span>
                          )}
                        </InputGroup>
                      </InputGrid>
                    ) : (
                      <PickupStoreCard>
                        <h3
                          style={{
                            fontSize: "16px",
                            fontWeight: 600,
                            color: "#48260bff",
                          }}
                        >
                          Ahara Wellness HQ Office
                        </h3>
                        <p
                          style={{
                            fontSize: "13px",
                            fontWeight: 500,
                            color: "#5f320fff",
                          }}
                        >
                          Somwariya Bazar, Jaora, Madhya Pradesh, 457226, India
                        </p>
                        <p
                          style={{
                            color: "#7e7c2a",
                            fontSize: "12px",
                            fontWeight: 700,
                          }}
                        >
                          🕒 Ready for collection in 2-4 days (Mon-Sat, 10 AM -
                          7 PM)
                        </p>
                        <span className="badge">FREE PICKUP</span>
                      </PickupStoreCard>
                    )}

                    <ActionButton type="submit" style={{ marginTop: "32px" }}>
                      Continue to Payment <ArrowRight size={16} />
                    </ActionButton>
                  </FormCard>
                </form>
              ) : (
                /* STEP 2: Shipping Method & Payments */
                <FormCard>
                  <CardHeader>
                    <CardTitle>
                      <Truck size={18} /> Shipping Method
                    </CardTitle>
                    <CardHeaderBadge>Step 2 of 2</CardHeaderBadge>
                  </CardHeader>

                  {deliveryMode === "ship" ? (
                    <SelectionGrid style={{ marginBottom: "32px" }}>
                      <OptionCard
                        $selected={shippingMethod === "standard"}
                        onClick={() => {
                          playClickSound();
                          setShippingMethod("standard");
                        }}
                      >
                        <OptionInfo>
                          <OptionRadio
                            $selected={shippingMethod === "standard"}
                          />
                          <OptionLabel>
                            <span className="title">
                              Standard Muted Delivery
                            </span>
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
                          <OptionRadio
                            $selected={shippingMethod === "express"}
                          />
                          <OptionLabel>
                            <span className="title">
                              Lightning Express Superfood
                            </span>
                            <span className="desc">
                              Priority delivery inside 24-48 hours.
                            </span>
                          </OptionLabel>
                        </OptionInfo>
                        <OptionPrice>₹{EXPRESS_SHIPPING_CHARGE}</OptionPrice>
                      </OptionCard>
                    </SelectionGrid>
                  ) : (
                    <p
                      style={{
                        fontSize: "13px",
                        color: "#6c6959",
                        marginBottom: "32px",
                        fontStyle: "italic",
                      }}
                    >
                      Store Pickup selected. No shipping charge is applicable.
                    </p>
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
                          <span className="title">
                            UPI (Google Pay, PhonePe, Paytm)
                          </span>
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
                            <Image src={gpayLogo} alt="Google Pay" height={24} style={{ width: "auto", height: "24px" }} />
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
                            <Image src={phonepeLogo} alt="PhonePe" height={24} style={{ width: "auto", height: "24px" }} />
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
                            <Image src={paytmLogo} alt="Paytm" height={20} style={{ width: "auto", height: "20px" }} />
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
                              if (errors.upiId)
                                setErrors((prev) => ({ ...prev, upiId: "" }));
                            }}
                          />
                          {errors.upiId && (
                            <span
                              style={{
                                fontSize: "11px",
                                color: "#c0392b",
                                fontWeight: 600,
                              }}
                            >
                              {errors.upiId}
                            </span>
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
                          <span className="desc">
                            Secure 256-bit encrypted card gateway.
                          </span>
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
                                <div
                                  style={{
                                    fontSize: "14px",
                                    fontWeight: 800,
                                    letterSpacing: "1px",
                                  }}
                                >
                                  AHARA
                                </div>
                                <div
                                  style={{
                                    fontSize: "11px",
                                    fontWeight: 700,
                                    opacity: 0.8,
                                  }}
                                >
                                  {getCardBrand()}
                                </div>
                              </CardRow>
                              <CardChip />
                              <CardNumberText>
                                {cardNumber || "•••• •••• •••• ••••"}
                              </CardNumberText>
                              <CardRow>
                                <CardHolderName>
                                  <span className="label">Card Holder</span>
                                  <span className="value">
                                    {cardName || "Your Name"}
                                  </span>
                                </CardHolderName>
                                <CardExpiry>
                                  <span className="label">Expires</span>
                                  <span className="value">
                                    {cardExpiry || "MM/YY"}
                                  </span>
                                </CardExpiry>
                              </CardRow>
                            </CardFront>
                            <CardBack>
                              <CardMagneticStrip />
                              <CardCVVBox>
                                <span className="label">CVV Code</span>
                                <div className="white-bar">
                                  {cardCVV || "•••"}
                                </div>
                              </CardCVVBox>
                              <div
                                style={{
                                  padding: "0 20px 10px 20px",
                                  fontSize: "8px",
                                  opacity: 0.6,
                                  textAlign: "center",
                                }}
                              >
                                Security Encrypted Connection. Authorized
                                Signature Required.
                              </div>
                            </CardBack>
                          </CreditCardInner>
                        </CreditCardContainer>

                        {/* Card Input fields */}
                        <InputGrid>
                          <InputGroup $fullWidth>
                            <FieldLabel htmlFor="cardNumber">
                              Card Number
                            </FieldLabel>
                            <FormInput
                              id="cardNumber"
                              type="text"
                              placeholder="4000 1234 5678 9010"
                              value={cardNumber}
                              onChange={(e) => {
                                handleCardNumberChange(e);
                                if (errors.cardNumber)
                                  setErrors((prev) => ({
                                    ...prev,
                                    cardNumber: "",
                                  }));
                              }}
                            />
                            {errors.cardNumber && (
                              <span
                                style={{
                                  fontSize: "11px",
                                  color: "#c0392b",
                                  fontWeight: 600,
                                }}
                              >
                                {errors.cardNumber}
                              </span>
                            )}
                          </InputGroup>

                          <InputGroup $fullWidth>
                            <FieldLabel htmlFor="cardName">
                              Name on Card
                            </FieldLabel>
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
                              <span
                                style={{
                                  fontSize: "11px",
                                  color: "#c0392b",
                                  fontWeight: 600,
                                }}
                              >
                                {errors.cardName}
                              </span>
                            )}
                          </InputGroup>

                          <InputGroup>
                            <FieldLabel htmlFor="cardExpiry">
                              Expiration Date
                            </FieldLabel>
                            <FormInput
                              id="cardExpiry"
                              type="text"
                              placeholder="MM/YY"
                              value={cardExpiry}
                              onChange={(e) => {
                                handleCardExpiryChange(e);
                                if (errors.cardExpiry)
                                  setErrors((prev) => ({
                                    ...prev,
                                    cardExpiry: "",
                                  }));
                              }}
                            />
                            {errors.cardExpiry && (
                              <span
                                style={{
                                  fontSize: "11px",
                                  color: "#c0392b",
                                  fontWeight: 600,
                                }}
                              >
                                {errors.cardExpiry}
                              </span>
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
                              <span
                                style={{
                                  fontSize: "11px",
                                  color: "#c0392b",
                                  fontWeight: 600,
                                }}
                              >
                                {errors.cardCVV}
                              </span>
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
                        <OptionRadio
                          $selected={paymentMethod === "netbanking"}
                        />
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
                          <FieldLabel htmlFor="bank">
                            Select Your Bank
                          </FieldLabel>
                          <FormSelect
                            id="bank"
                            value={selectedBank}
                            onChange={(e) => setSelectedBank(e.target.value)}
                          >
                            <option value="sbi">
                              State Bank of India (SBI)
                            </option>
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
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            background: "rgba(126, 124, 42, 0.05)",
                            padding: "12px 16px",
                            borderRadius: "10px",
                            fontSize: "12px",
                            color: "#7e7c2a",
                            fontWeight: 600,
                          }}
                        >
                          <Info size={16} />A standard ₹40 cash management
                          charge applies. Please ensure correct change is ready
                          at delivery.
                        </div>
                      </PaymentDetailsBox>
                    )}
                  </SelectionGrid>

                  <div
                    style={{
                      display: "flex",
                      gap: "16px",
                      marginTop: "32px",
                      width: "100%",
                    }}
                  >
                    <SecondaryButton
                      type="button"
                      onClick={handleBackToDetails}
                      style={{ flex: 1 }}
                    >
                      <ArrowLeft size={16} /> Details
                    </SecondaryButton>
                    <ActionButton
                      type="button"
                      onClick={handlePlaceOrder}
                      style={{ flex: 2, margin: 0 }}
                    >
                      Pay ₹{finalTotal} & Confirm
                    </ActionButton>
                  </div>
                </FormCard>
              )}
            </FormColumn>

            {/* Right Column Order Summary */}
            <SummaryColumn>
              <StickySummaryCard>
                <SummarySectionTitle>
                  <span>Order Summary</span>
                  <span className="item-count">{items.length} items</span>
                </SummarySectionTitle>

                {/* List items mini */}
                <MiniItemList>
                  {items.map((item) => (
                    <MiniItemRow key={item.id}>
                      <MiniItemImage>
                        <MiniItemImageInner>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            style={{ objectFit: "cover" }}
                            sizes="48px"
                          />
                        </MiniItemImageInner>
                        <span className="badge">{item.quantity}</span>
                      </MiniItemImage>
                      <MiniItemDetails>
                        <span className="name">{item.name}</span>
                        <span className="variant">Variant: {item.size}</span>
                      </MiniItemDetails>
                      <MiniItemPrice>
                        ₹{item.price * item.quantity}
                      </MiniItemPrice>
                    </MiniItemRow>
                  ))}
                </MiniItemList>
 

                {/* Promo Code Fields */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <FieldLabel
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      fontSize: "10px",
                    }}
                  >
                    <Ticket size={12} /> Promo Code
                  </FieldLabel>
                  {appliedPromo ? (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        background: "#f0f4ed",
                        border: "1px solid rgba(73, 106, 53, 0.2)",
                        borderRadius: "10px",
                        padding: "8px 16px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "12px",
                          color: "#496a35",
                          fontWeight: 700,
                        }}
                      >
                        Active: {appliedPromo}
                      </span>
                      <button
                        onClick={handleRemovePromo}
                        style={{
                          background: "none",
                          border: "none",
                          color: "#c0392b",
                          fontSize: "11px",
                          fontWeight: 700,
                          cursor: "pointer",
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <div style={{ display: "flex", gap: "8px" }}>
                      <FormInput
                        style={{ padding: "8px 16px", flex: 1 }}
                        type="text"
                        placeholder="e.g. AHARA10"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                      />
                      <ActionButton
                        type="button"
                        onClick={handleApplyPromo}
                        disabled={!promoCode}
                        style={{
                          margin: 0,
                          width: "auto",
                          padding: "0 16px",
                          height: "38px",
                          fontSize: "11px",
                          borderRadius: "10px",
                        }}
                      >
                        Apply
                      </ActionButton>
                    </div>
                  )}
                  {promoError && (
                    <span
                      style={{
                        fontSize: "11px",
                        color: "#c0392b",
                        fontWeight: 600,
                      }}
                    >
                      {promoError}
                    </span>
                  )}
                </div>


                {/* Subtotals & Costs */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <CostSummaryRow>
                    <span>Subtotal</span>
                    <span className="value">₹{cartTotal}</span>
                  </CostSummaryRow>

                  {discountAmount > 0 && (
                    <CostSummaryRow $isDiscount>
                      <span>Discount (10% off)</span>
                      <span className="value">-₹{discountAmount}</span>
                    </CostSummaryRow>
                  )}

                  <CostSummaryRow>
                    <span>Shipping</span>
                    <span className="value">
                      {activeShippingCharge === 0 ? (
                        <span style={{ color: "#496a35", fontWeight: 800 }}>
                          FREE
                        </span>
                      ) : (
                        `₹${activeShippingCharge}`
                      )}
                    </span>
                  </CostSummaryRow>

                  {codFee > 0 && (
                    <CostSummaryRow>
                      <span>CoD Handling Fee</span>
                      <span className="value">₹{codFee}</span>
                    </CostSummaryRow>
                  )}


                  <CostSummaryRow $isTotal>
                    <span>Total Amount</span>
                    <span
                      className="value"
                      style={{ fontSize: "22px", color: "#7e7c2a" }}
                    >
                      ₹{finalTotal}
                    </span>
                  </CostSummaryRow>
                </div>


                {/* Trust and secure badges */}
                <TrustBadgeWrapper>
                  <TrustBadge>
                    <Lock />
                    Secure 256-Bit SSL Connection
                  </TrustBadge>
                  <TrustBadge>
                    <ShieldCheck />
                    Guaranteed Wellness Quality
                  </TrustBadge>
                </TrustBadgeWrapper>
              </StickySummaryCard>
            </SummaryColumn>
          </CheckoutLayout>
        </Container>
      </PageContainer>
    </CheckoutWrapper>
  );
}
