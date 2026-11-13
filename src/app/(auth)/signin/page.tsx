import type { Metadata } from "next";
import { ComingSoon } from "@/src/components/feedback/ComingSoon";

export const metadata: Metadata = { title: "Sign in", robots: { index: false } };

// Accounts need an auth provider (see README → "External setup"). Until then,
// guests can browse, save a wishlist and check out without an account.
export default function Page() {
  return (
    <ComingSoon
      title="Accounts are on their way."
      body="You don't need an account to order — check out as a guest, and your cart and wishlist are saved on this device."
    />
  );
}
