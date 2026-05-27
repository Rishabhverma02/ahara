import type { Metadata } from "next";
import Shop from "./Shop";

export const metadata: Metadata = {
  title: "Shop – Ahara",
  description:
    "Explore Ahara's full range of traditional Indian superfoods — makhana, sattu, moringa and more. Clean label, consciously sourced.",
};

export default function ShopPage() {
  return <Shop />;
}
