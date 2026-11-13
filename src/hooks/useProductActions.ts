"use client";

import { useCallback } from "react";
import type { Product } from "@/src/data/products";
import { useCart } from "./useCart";
import { useWishlist } from "./useWishlist";
import { playClick } from "@/src/lib/sound";
import { toast } from "@/src/store/useToastStore";

/** Add-to-cart / wishlist behaviour shared by every product surface. */
export function useProductActions(product: Product) {
  const { addItem } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const saved = isInWishlist(product.id);

  const addToCart = useCallback(
    (opts?: { quantity?: number; size?: string; price?: number }) => {
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
      toast("Added to cart", `${quantity} × ${product.name}${size !== "Standard" ? ` (${size})` : ""}`);
    },
    [addItem, product],
  );

  const toggleSaved = useCallback(() => {
    playClick();
    toggleWishlist(product.id);
    if (!saved) toast("Saved to wishlist", product.name);
  }, [toggleWishlist, product, saved]);

  return { addToCart, toggleSaved, saved };
}
