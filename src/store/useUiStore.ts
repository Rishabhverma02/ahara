import { create } from "zustand";

/** Global UI panels that can be opened from anywhere (header, toasts, cards). */
interface UiState {
  panel: "cart" | "search" | null;
  openCart: () => void;
  openSearch: () => void;
  close: () => void;
}

export const useUiStore = create<UiState>((set) => ({
  panel: null,
  openCart: () => set({ panel: "cart" }),
  openSearch: () => set({ panel: "search" }),
  close: () => set({ panel: null }),
}));
