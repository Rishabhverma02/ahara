"use client";

/* Minimal typing for the Razorpay Checkout global. */
type RazorpayCtor = new (options: Record<string, unknown>) => { open: () => void };

declare global {
  interface Window {
    Razorpay?: RazorpayCtor;
  }
}

let loading: Promise<RazorpayCtor> | null = null;

/** Loads checkout.js on demand — only when the customer actually pays online. */
export function loadRazorpay(): Promise<RazorpayCtor> {
  if (window.Razorpay) return Promise.resolve(window.Razorpay);
  loading ??= new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = "https://checkout.razorpay.com/v1/checkout.js";
    s.async = true;
    s.onload = () =>
      window.Razorpay ? resolve(window.Razorpay) : reject(new Error("Razorpay failed to load"));
    s.onerror = () => {
      loading = null;
      reject(new Error("Razorpay failed to load"));
    };
    document.body.appendChild(s);
  });
  return loading;
}
