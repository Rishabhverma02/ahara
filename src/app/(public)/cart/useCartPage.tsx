"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/src/hooks/useCart";
import { ALL_PRODUCTS, Product } from "@/src/data/products";
import { playClick } from "@/src/lib/sound";
import {
  FREE_SHIPPING_THRESHOLD,
  STANDARD_SHIPPING_CHARGE,
  parsePromo,
  promoDiscount,
  qualifiesForFreeShipping,
} from "@/src/lib/pricing";

export { FREE_SHIPPING_THRESHOLD };

function useCartPageState() {
  const router = useRouter();
  const playClickSound = playClick;

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
    navigator.clipboard?.writeText("AHARA10").catch(() => {});
    setAppliedPromo("AHARA10");
    setRewardCopied(true);
    setTimeout(() => setRewardCopied(false), 2000);
  };

  const isFreeShipping = qualifiesForFreeShipping(cartTotal, appliedPromo);
  const shippingCharge =
    cartTotal === 0 ? 0 : isFreeShipping ? 0 : STANDARD_SHIPPING_CHARGE;

  const discountAmount = promoDiscount(cartTotal, appliedPromo);

  const finalTotal = cartTotal + shippingCharge - discountAmount;

  const handleApplyPromo = () => {
    playClickSound();
    setPromoError("");
    const code = parsePromo(promoCode);
    if (code) {
      setAppliedPromo(code);
      setPromoCode("");
    } else {
      setPromoError("That code isn't valid. Check the spelling and try again.");
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
