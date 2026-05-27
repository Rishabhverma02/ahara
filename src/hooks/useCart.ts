import { useSyncExternalStore } from "react";
import { useCartStore} from "../store/useCartStore";

const emptySubscribe = () => () => {};

export function useCart() {
  const isHydrated = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
  const items = useCartStore((state) => state.items);
  const addItem = useCartStore((state) => state.addItem);
  const removeItem = useCartStore((state) => state.removeItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const clearCart = useCartStore((state) => state.clearCart);

  const cartCount = isHydrated
    ? items.reduce((acc, item) => acc + item.quantity, 0)
    : 0;

  const cartTotal = isHydrated
    ? items.reduce((acc, item) => acc + item.price * item.quantity, 0)
    : 0;

  const cartItems = isHydrated ? items : [];

  return {
    items: cartItems,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    cartCount,
    cartTotal,
    isHydrated,
  };
}
