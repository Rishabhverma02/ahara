import { useMemo, useSyncExternalStore } from "react";
import { useCartStore, type CartItem } from "../store/useCartStore";
import { getProductById } from "../services/catalog";

const emptySubscribe = () => () => {};
const EMPTY: CartItem[] = [];

export function useCart() {
  const isHydrated = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
  const rawItems = useCartStore((s) => s.items);
  const addItem = useCartStore((s) => s.addItem);
  const removeItem = useCartStore((s) => s.removeItem);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const clearCart = useCartStore((s) => s.clearCart);
  const appliedPromo = useCartStore((s) => s.appliedPromo);
  const setAppliedPromo = useCartStore((s) => s.setAppliedPromo);

  const items = useMemo(() => {
    if (!isHydrated) return EMPTY;
    // always use the current build's image for the product
    return rawItems.map((i) => ({ ...i, image: getProductById(i.productId)?.image ?? i.image }));
  }, [rawItems, isHydrated]);

  const { cartCount, cartTotal } = useMemo(
    () =>
      items.reduce(
        (acc, i) => ({
          cartCount: acc.cartCount + i.quantity,
          cartTotal: acc.cartTotal + i.price * i.quantity,
        }),
        { cartCount: 0, cartTotal: 0 },
      ),
    [items],
  );

  return {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    cartCount,
    cartTotal,
    isHydrated,
    appliedPromo: isHydrated ? appliedPromo : null,
    setAppliedPromo,
  };
}
