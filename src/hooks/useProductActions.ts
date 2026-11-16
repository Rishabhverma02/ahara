"use client";

import { useCallback } from "react";
import type { Product } from "@/src/services/catalog";
import { useCart } from "./useCart";
import { useWishlist } from "./useWishlist";
import { playClick } from "@/src/lib/sound";
import { toast } from "@/src/store/useToastStore";
import { useUiStore } from "@/src/store/useUiStore";

/** Add-to-cart / wishlist behaviour shared by every product surface. */
export function useProductActions(product: Product) {
  const { addItem } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const saved = isInWishlist(product.id);

  const addToCart = useCallback(
    (opts?: { quantity?: number; size?: string; price?: number; silent?: boolean }) => {
      const quantity = opts?.quantity ?? 1;
      const size = opts?.size ?? "Standard";
      playClick();
      addItem({
        productId: product.id,
        slug: product.slug,
        name: product.name,
        price: opts?.price ?? product.price,
        quantity,
        size,
        image: product.image,
      });
      if (opts?.silent) return;
      toast(
        "Success",
        `${quantity}x ${product.name}${size !== "Standard" ? ` (${size})` : ""} added to cart.`,
        { label: "View cart", onClick: useUiStore.getState().openCart },
      );
    },
    [addItem, product],
  );

  const toggleSaved = useCallback(() => {
    playClick();
    toggleWishlist(product.id);
    if (!saved) toast("Success", `${product.name} saved to your wishlist.`);
  }, [toggleWishlist, product, saved]);

  return { addToCart, toggleSaved, saved };
}
