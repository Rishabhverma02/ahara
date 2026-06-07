"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/src/hooks/useCart";
import { ALL_PRODUCTS, Product } from "../shop/data/products";

export const FREE_SHIPPING_THRESHOLD = 999;
export const STANDARD_SHIPPING_CHARGE = 60;

function useCartPageState() {
  const router = useRouter();
  const playClickSound = () => {
    const audio = new Audio("/audio/click.mp3");
    audio.play().catch((err) => console.log("Audio play failed:", err));
  };

  const {
    items,
    updateQuantity,
    removeItem,
    cartCount,
    cartTotal,
    isHydrated,
    appliedPromo,
    setAppliedPromo,
  } = useCart();

  const progressPercent = (cartTotal / FREE_SHIPPING_THRESHOLD) * 100;
  const [animatedPercent, setAnimatedPercent] = useState(0);

  useEffect(() => {
    if (isHydrated) {
      const timer = setTimeout(() => {
        setAnimatedPercent(progressPercent);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isHydrated, progressPercent]);

  const [promoCode, setPromoCode] = useState("");
  const [promoError, setPromoError] = useState("");
  const [rewardCopied, setRewardCopied] = useState(false);

  const handleCollectReward = (e: React.MouseEvent) => {
    e.stopPropagation();
    playClickSound();
    navigator.clipboard.writeText("AHARA10");
    setAppliedPromo("AHARA10");
    setRewardCopied(true);
    setTimeout(() => setRewardCopied(false), 2000);
  };

  const isFreeShipping =
    cartTotal >= FREE_SHIPPING_THRESHOLD || appliedPromo === "FREESHIP";
  const shippingCharge =
    cartTotal === 0 ? 0 : isFreeShipping ? 0 : STANDARD_SHIPPING_CHARGE;

  const discountAmount =
    appliedPromo === "AHARA10" ? Math.round(cartTotal * 0.1) : 0;

  const finalTotal = cartTotal + shippingCharge - discountAmount;

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

  const handleCheckout = () => {
    playClickSound();
    router.push("/checkout");
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

  return {
    playClickSound,
    items,
    updateQuantity,
    removeItem,
    cartCount,
    cartTotal,
    isHydrated,
    appliedPromo,
    setAppliedPromo,
    progressPercent,
    animatedPercent,
    promoCode,
    setPromoCode,
    promoError,
    setPromoError,
    rewardCopied,
    setRewardCopied,
    handleCollectReward,
    isFreeShipping,
    shippingCharge,
    discountAmount,
    finalTotal,
    handleApplyPromo,
    handleRemovePromo,
    handleCheckout,
    recommended,
  };
}

export type CartPageHookType = ReturnType<typeof useCartPageState>;

const CartPageContext = createContext<CartPageHookType | null>(null);

export const CartPageProvider = ({ children }: { children: React.ReactNode }) => {
  const state = useCartPageState();
  return (
    <CartPageContext.Provider value={state}>
      {children}
    </CartPageContext.Provider>
  );
};

export const useCartPage = () => {
  const context = useContext(CartPageContext);
  if (!context) {
    throw new Error("useCartPage must be used within a CartPageProvider");
  }
  return context;
};
