import { create } from "zustand";

export type ToastAction = { label: string; onClick: () => void };
export type Toast = { id: number; title: string; body?: string; action?: ToastAction };

interface ToastState {
  toasts: Toast[];
  push: (t: Omit<Toast, "id">) => void;
  dismiss: (id: number) => void;
}

let seq = 0;

export const useToastStore = create<ToastState>((set, get) => ({
  toasts: [],
  push: (t) => {
    const id = ++seq;
    // keep at most 3 on screen
    set((s) => ({ toasts: [...s.toasts.slice(-2), { ...t, id }] }));
    setTimeout(() => get().dismiss(id), t.action ? 5000 : 3600);
  },
  dismiss: (id) => set((s) => ({ toasts: s.toasts.filter((t) => t.id !== id) })),
}));

/** Fire-and-forget helper usable outside React components. */
export const toast = (title: string, body?: string, action?: ToastAction) =>
  useToastStore.getState().push({ title, body, action });
