import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { StaticImageData } from "next/image";

export interface CartItem {
  id: string; 
  productId: number;
  slug: string;
  name: string;
  price: number;
  quantity: number;
  size: string;
  image: StaticImageData; 
}

interface CartState {
  items: CartItem[];
  appliedPromo: string | null;
  addItem: (item: Omit<CartItem, "id">) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  setAppliedPromo: (promo: string | null) => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      appliedPromo: null,
      addItem: (newItem) =>
        set((state) => {
          const itemKey = `${newItem.productId}-${newItem.size}`;
          const existingItemIndex = state.items.findIndex(
            (item) => item.id === itemKey
          );

          if (existingItemIndex > -1) {
            // Immutable update: mutating the existing object in place meant
            // anything comparing item references never saw the change.
            return {
              items: state.items.map((item, i) =>
                i === existingItemIndex
                  ? { ...item, quantity: item.quantity + newItem.quantity }
                  : item,
              ),
            };
          }

          return {
            items: [
              ...state.items,
              {
                ...newItem,
                id: itemKey,
              },
            ],
          };
        }),
      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),
      updateQuantity: (id, quantity) =>
        set((state) => ({
          items: state.items
            .map((item) =>
              item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
            ),
        })),
      clearCart: () => set({ items: [], appliedPromo: null }),
      setAppliedPromo: (promo) => set({ appliedPromo: promo }),
    }),
    {
      name: "ahara-cart-storage",
      // Image URLs are content-hashed per build, so never trust a persisted
      // one — useCart re-resolves images from the catalog.
      partialize: (s) => ({
        appliedPromo: s.appliedPromo,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        items: s.items.map(({ image, ...rest }) => rest),
      }),
    }
  )
);
