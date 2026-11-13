import type { Metadata } from "next";
import { Suspense } from "react";
import Shop from "./Shop";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "The full Ahara range — roasted makhana, sattu drinks, millet cookies and moringa. Clean label, never fried.",
  alternates: { canonical: "/shop" },
};

// Shop reads its filters from the URL (useSearchParams), which requires a
// Suspense boundary for the static shell.
export default function ShopPage() {
  return (
    <Suspense>
      <Shop />
    </Suspense>
  );
}
