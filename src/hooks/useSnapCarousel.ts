"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Index tracking + dot navigation for a CSS scroll-snap row.
 * Replaces three hand-rolled auto-swipe carousels. Autoplay was removed on
 * purpose: auto-moving content on mobile fights the user's thumb and is an
 * accessibility problem (WCAG 2.2.2). Swiping and dots remain.
 */
export function useSnapCarousel<T extends HTMLElement = HTMLDivElement>(count: number) {
  const ref = useRef<T>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const child = el.firstElementChild as HTMLElement | null;
        if (!child) return;
        const step = child.offsetWidth + parseFloat(getComputedStyle(el).columnGap || "0");
        if (step > 0) setIndex(Math.min(count - 1, Math.round(el.scrollLeft / step)));
      });
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("scroll", onScroll);
    };
  }, [count]);

  const goTo = useCallback((i: number) => {
    const el = ref.current;
    const target = el?.children[i] as HTMLElement | undefined;
    if (!el || !target) return;
    el.scrollTo({ left: target.offsetLeft - el.offsetLeft, behavior: "smooth" });
  }, []);

  return { ref, index, goTo };
}
