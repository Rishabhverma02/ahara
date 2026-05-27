"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/src/hooks/useCart";
import { ALL_PRODUCTS, Product } from "../shop/data/products";
import { PageHero, EmptyState } from "@/src/components/ui";
import cartBg from "@/src/assets/images/section-images/cart.png";
import LocalMallTwoToneIcon from "@mui/icons-material/LocalMallTwoTone";

import {
  CartPageWrapper,
  PageContainer,
  Container,
  CartLayout,
  CartItemsSection,
  ShippingProgressContainer,
  ShippingProgressText,
  ProgressBarWrapper,
  ProgressBarFill,
  CartItemCard,
  ItemImageWrapper,
  ItemDetails,
  ItemName,
  ItemVariant,
  QtyAndActions,
  RemoveButton,
  PriceAndQtyWrapper,
  ItemPrice,
  OrderSummaryCard,
  SummaryTitle,
  SummaryRow,
  PromoCodeContainer,
  PromoInputWrapper,
  PromoInput,
  PromoButton,
  PromoSuccessText,
  CheckoutButton,
  SecureCheckoutText,
  SuggestionsSection,
  SectionTitle,
  SuggestionsGrid,
} from "./styled";
import { QtyBox, QtyBtn, QtyValue } from "../shop/[slug]/styled";

import {
  Trash2,
  Plus,
  Minus,
  Lock,
  Tag,
  ChevronLeft,
  Sparkles,
  Check,
  Truck,
} from "lucide-react";
import { ProductCard } from "../../../components/ui/cards/product-card/ProductCard";

export default function CartPage() {
  const {
    items,
    updateQuantity,
    removeItem,
    cartCount,
    cartTotal,
    isHydrated,
  } = useCart();

  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);
  const [promoError, setPromoError] = useState("");
  const [checkoutStep, setCheckoutStep] = useState(0); // 0 = cart, 1 = simulated checkout success

  // Shipping details
  const FREE_SHIPPING_THRESHOLD = 999;
  const STANDARD_SHIPPING_CHARGE = 60;
  const isFreeShipping =
    cartTotal >= FREE_SHIPPING_THRESHOLD || appliedPromo === "FREESHIP";
  const shippingCharge =
    cartTotal === 0 ? 0 : isFreeShipping ? 0 : STANDARD_SHIPPING_CHARGE;

  // Derived state: calculate discount amount dynamically during render
  const discountAmount =
    appliedPromo === "AHARA10" ? Math.round(cartTotal * 0.1) : 0;

  const handleApplyPromo = () => {
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
    setAppliedPromo(null);
  };

  const handleCheckout = () => {
    setCheckoutStep(1); // triggers the interactive checkout simulation
  };

  // Select recommended products (not already in cart)
  const getRecommendedProducts = (): Product[] => {
    const cartProductIds = items.map((item) => item.productId);
    const available = ALL_PRODUCTS.filter(
      (prod) => !cartProductIds.includes(prod.id),
    );
    // Shuffle and pick 4
    return available.slice(0, 4);
  };

  const recommended = getRecommendedProducts();

  // Next.js Hydration Guard
  if (!isHydrated) {
    return (
      <CartPageWrapper>
        <PageHero
          bg={cartBg.src}
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Cart" }]}
          title={
            <>
              <span className="line">
                <span className="w1">Your </span>
                <span className="w2">Shopping</span>
              </span>
              <span className="line">
                <span className="w3">Cart</span>
              </span>
            </>
          }
          subtitle="Loading your healthy goodies..."
        />
        <PageContainer>
          <Container>
            <div
              style={{
                textAlign: "center",
                padding: "100px 0",
                color: "#7e7c2a",
                fontSize: "18px",
                fontWeight: "600",
              }}
            >
              Loading your cart items...
            </div>
          </Container>
        </PageContainer>
      </CartPageWrapper>
    );
  }

  // Simulation Success Screen
  if (checkoutStep === 1) {
    return (
      <CartPageWrapper>
        <PageHero
          bg={cartBg.src}
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Cart" }]}
          title={
            <>
              <span className="line">
                <span className="w1">Order </span>
                <span className="w2">Placed</span>
              </span>
              <span className="line">
                <span className="w3">Successfully!</span>
              </span>
            </>
          }
          subtitle="Thank you for choosing Ahara!"
        />
        <PageContainer>
          <Container style={{ maxWidth: "600px", alignItems: "center" }}>
            <EmptyState
              icon={<Check size={44} style={{ color: "#2e7d32" }} />}
              badgeText="Order Confirmed • Yay! 🎉"
              title="Order Placed Successfully!"
              description="Thank you for choosing Ahara. We are preparing your clean label treats. A confirmation email and tracking link will be sent shortly."
              btnText="Continue Shopping"
              floatingTags={[
                {
                  text: "🚚 Fast Shipping",
                  delay: "0s",
                  style: {
                    top: "12%",
                    left: "-30px",
                    "--rot": "-8deg",
                  } as React.CSSProperties,
                },
                {
                  text: "🌱 Clean Label",
                  delay: "1.5s",
                  style: {
                    bottom: "28%",
                    right: "-35px",
                    "--rot": "6deg",
                  } as React.CSSProperties,
                },
                {
                  text: "✨ Packed with Care",
                  delay: "0.7s",
                  style: {
                    top: "45%",
                    right: "-45px",
                    "--rot": "-5deg",
                  } as React.CSSProperties,
                },
              ]}
            />
          </Container>
        </PageContainer>
      </CartPageWrapper>
    );
  }

  const finalTotal = cartTotal + shippingCharge - discountAmount;
  const progressPercent = (cartTotal / FREE_SHIPPING_THRESHOLD) * 100;

  return (
    <CartPageWrapper>
      <PageHero
        bg={cartBg.src}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Cart" }]}
        title={
          <>
            <span className="line">
              <span className="w1">Your </span>
              <span className="w2">Shopping</span>
            </span>
            <span className="line">
              <span className="w3">Cart</span>
            </span>
          </>
        }
        subtitle={
          items.length > 0
            ? `You have ${cartCount} clean label superfood item${cartCount === 1 ? "" : "s"} in your cart.`
            : "Review your healthy goodies and proceed to checkout."
        }
      />
      <PageContainer>
        <Container>
          {items.length === 0 ? (
            <>
              <EmptyState
                icon={
                  <LocalMallTwoToneIcon
                    sx={{ fontSize: 44 }}
                    className="main-icon"
                  />
                }
                badgeText="0 items • 100% empty 🥺"
                title="Your cart is craving some fuel"
                description="It's looking a bit empty here. Treat yourself to some clean-label, consciously sourced goodness. Your body will thank you!"
                btnText="Start Nourishing"
              />

              {recommended.length > 0 && (
                <SuggestionsSection>
                  <SectionTitle>You Might Also Like</SectionTitle>
                  <SuggestionsGrid>
                    {recommended.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </SuggestionsGrid>
                </SuggestionsSection>
              )}
            </>
          ) : (
            <>
              <CartLayout>
                {/* Left Column: Items List & Free Shipping Progress */}
                <CartItemsSection>
                  {/* Shipping milestone progress */}
                  <ShippingProgressContainer>
                    <ShippingProgressText>
                      <Truck size={18} style={{ color: "#7e7c2a" }} />
                      {isFreeShipping ? (
                        <span>
                          Congrats! You have unlocked Free Delivery! 🎉
                        </span>
                      ) : (
                        <>
                          Add{" "}
                          <span>₹{FREE_SHIPPING_THRESHOLD - cartTotal}</span>{" "}
                          more to unlock <span>Free Shipping</span>
                        </>
                      )}
                    </ShippingProgressText>
                    <ProgressBarWrapper>
                      <ProgressBarFill $percent={progressPercent} />
                    </ProgressBarWrapper>
                  </ShippingProgressContainer>

                  {/* List of items */}
                  {items.map((item) => (
                    <CartItemCard key={item.id}>
                      <ItemImageWrapper>
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          style={{ objectFit: "cover" }}
                          sizes="96px"
                        />
                      </ItemImageWrapper>

                      <ItemDetails>
                        <ItemName>
                          <Link href={`/shop/${item.slug}`}>{item.name}</Link>
                        </ItemName>
                        <ItemVariant>Variant: {item.size}</ItemVariant>

                        <QtyAndActions>
                          <QtyBox
                            style={{ transform: "scale(0.95)", margin: 0 }}
                          >
                            <QtyBtn
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                            >
                              <Minus size={14} />
                            </QtyBtn>
                            <QtyValue>{item.quantity}</QtyValue>
                            <QtyBtn
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                            >
                              <Plus size={14} />
                            </QtyBtn>
                          </QtyBox>

                          <RemoveButton onClick={() => removeItem(item.id)}>
                            <Trash2 size={14} />
                            <span>Remove</span>
                          </RemoveButton>
                        </QtyAndActions>
                      </ItemDetails>

                      <PriceAndQtyWrapper>
                        <ItemPrice>₹{item.price * item.quantity}</ItemPrice>
                        {item.quantity > 1 && (
                          <span
                            style={{
                              fontSize: "12px",
                              color: "#a7a48a",
                              fontWeight: 600,
                            }}
                          >
                            ₹{item.price} each
                          </span>
                        )}
                      </PriceAndQtyWrapper>
                    </CartItemCard>
                  ))}

                  <Link
                    href="/shop"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      textDecoration: "none",
                      color: "#7e7c2a",
                      fontWeight: 700,
                      fontSize: "14px",
                      marginTop: "10px",
                      alignSelf: "flex-start",
                    }}
                  >
                    <ChevronLeft size={16} />
                    <span>Continue Shopping</span>
                  </Link>
                </CartItemsSection>

                {/* Right Column: Order Summary */}
                <OrderSummaryCard>
                  <SummaryTitle>Order Summary</SummaryTitle>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "16px",
                    }}
                  >
                    <SummaryRow>
                      <span>Subtotal</span>
                      <span>₹{cartTotal}</span>
                    </SummaryRow>

                    {discountAmount > 0 && (
                      <SummaryRow $isDiscount>
                        <span>Discount (10% off)</span>
                        <span>-₹{discountAmount}</span>
                      </SummaryRow>
                    )}

                    <SummaryRow>
                      <span>Delivery Charge</span>
                      <span>
                        {shippingCharge === 0 ? (
                          <span style={{ color: "#496a35", fontWeight: 800 }}>
                            FREE
                          </span>
                        ) : (
                          `₹${shippingCharge}`
                        )}
                      </span>
                    </SummaryRow>

                    <div
                      style={{
                        height: "1px",
                        background: "#f0efe8",
                        margin: "8px 0",
                      }}
                    />

                    <SummaryRow $isTotal>
                      <span>Total Amount</span>
                      <span>₹{finalTotal}</span>
                    </SummaryRow>
                  </div>

                  {/* Promo Code Input */}
                  <PromoCodeContainer>
                    <label
                      style={{
                        fontSize: "11px",
                        fontWeight: 800,
                        color: "#8a8775",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      <Tag size={12} /> Have a Promo Code?
                    </label>
                    {appliedPromo ? (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          background: "#f0f4ed",
                          border: "1px solid rgba(73, 106, 53, 0.2)",
                          borderRadius: "100px",
                          padding: "8px 16px",
                        }}
                      >
                        <PromoSuccessText style={{ margin: 0 }}>
                          <Sparkles size={14} /> Applied: {appliedPromo}
                        </PromoSuccessText>
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
                      <>
                        <PromoInputWrapper>
                          <PromoInput
                            type="text"
                            placeholder="e.g. AHARA10"
                            value={promoCode}
                            onChange={(e) => setPromoCode(e.target.value)}
                          />
                          <PromoButton
                            onClick={handleApplyPromo}
                            disabled={!promoCode}
                          >
                            Apply
                          </PromoButton>
                        </PromoInputWrapper>
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
                      </>
                    )}
                  </PromoCodeContainer>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      marginTop: "8px",
                    }}
                  >
                    <CheckoutButton onClick={handleCheckout}>
                      Proceed to Checkout
                    </CheckoutButton>

                    <SecureCheckoutText>
                      <Lock size={12} /> Secure 256-bit SSL Checkout
                    </SecureCheckoutText>
                  </div>
                </OrderSummaryCard>
              </CartLayout>

              {/* Suggestions at bottom */}
              {recommended.length > 0 && (
                <SuggestionsSection style={{ marginTop: "40px" }}>
                  <SectionTitle>You Might Also Like</SectionTitle>
                  <SuggestionsGrid>
                    {recommended.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </SuggestionsGrid>
                </SuggestionsSection>
              )}
            </>
          )}
        </Container>
      </PageContainer>
    </CartPageWrapper>
  );
}
