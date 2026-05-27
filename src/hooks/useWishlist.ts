import { useSyncExternalStore } from "react";
import { useWishlistStore } from "../store/useWishlistStore";

const emptySubscribe = () => () => {};

export function useWishlist() {
  const isHydrated = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
  const wishlistIds = useWishlistStore((state) => state.wishlistIds);
  const toggleWishlist = useWishlistStore((state) => state.toggleWishlist);
  const clearWishlist = useWishlistStore((state) => state.clearWishlist);

  const activeIds = isHydrated ? wishlistIds : [];

  const isInWishlist = (productId: number) => {
    return activeIds.includes(productId);
  };

  return {
    wishlistIds: activeIds,
    toggleWishlist,
    isInWishlist,
    clearWishlist,
    isHydrated,
  };
}
