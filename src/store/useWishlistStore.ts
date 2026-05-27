import { create } from "zustand";
import { persist } from "zustand/middleware";

interface WishlistState {
  wishlistIds: number[];
  toggleWishlist: (productId: number) => void;
  clearWishlist: () => void;
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set) => ({
      wishlistIds: [],
      toggleWishlist: (productId) =>
        set((state) => {
          const exists = state.wishlistIds.includes(productId);
          if (exists) {
            return { wishlistIds: state.wishlistIds.filter((id) => id !== productId) };
          }
          return { wishlistIds: [...state.wishlistIds, productId] };
        }),
      clearWishlist: () => set({ wishlistIds: [] }),
    }),
    {
      name: "ahara-wishlist-storage", 
    }
  )
);
