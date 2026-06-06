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
            const updatedItems = [...state.items];
            updatedItems[existingItemIndex].quantity += newItem.quantity;
            return { items: updatedItems };
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
    }
  )
);


export const useCartCount = () => {
  const items = useCartStore((state) => state.items);
  return items.reduce((acc, item) => acc + item.quantity, 0);
};

export const useCartTotal = () => {
  const items = useCartStore((state) => state.items);
  return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
};
