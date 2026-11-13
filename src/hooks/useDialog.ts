"use client";

import { useEffect } from "react";

/**
 * Shared modal behaviour: Escape closes, page scroll is locked while open, and
 * focus returns to whatever opened the dialog when it closes.
 * Used by the mobile menu, cart drawer, search panel and shop filter sheet.
 */
export function useDialog(open: boolean, onClose: () => void) {
  useEffect(() => {
    if (!open) return;
    const opener = document.activeElement as HTMLElement | null;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
      opener?.focus?.();
    };
  }, [open, onClose]);
}
