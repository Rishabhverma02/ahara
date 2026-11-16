import type { StaticImageData } from "next/image";
import Product1 from "@/src/assets/images/products/product-soft-version/jowa-cookies.webp";
import Product2 from "@/src/assets/images/products/product-soft-version/lime-makhana.webp";
import Product3 from "@/src/assets/images/products/product-soft-version/chocolate-sattu.webp";
import Product4 from "@/src/assets/images/products/product-soft-version/aahar-mix.webp";
import { getProductById } from "@/src/services/catalog";

/*
 * Card styling for the home "Best Sellers" row (names, studio photos, tags,
 * colours). Prices are NOT hard-coded here any more — they come from the
 * catalogue, so the home page and the shop can never disagree.
 * (Previously e.g. Jowar Cookies showed ₹180 here but ₹249 in the shop.)
 */
const CARDS: {
  id: number;
  name: string;
  image: StaticImageData;
  tags: string[];
  lightColor: string;
  tagBg: string;
  tagText: string;
}[] = [
  {
    id: 16,
    name: "Cookies Jowar",
    image: Product1,
    tags: ["Jowar", "No Sugar", "Baked", "Healthy"],
    lightColor: "#DCE5D1",
    tagBg: "#E8ECE1",
    tagText: "#556344",
  },
  {
    id: 5,
    name: "Makhana Lime",
    image: Product2,
    tags: ["Makhana", "Lime", "Roasted", "Snack"],
    lightColor: "#E5E1D1",
    tagBg: "#EBE8DE",
    tagText: "#6E6848",
  },
  {
    id: 10,
    name: "Sattu Chocolate",
    image: Product3,
    tags: ["Sattu", "Chocolate", "Summer", "Drink"],
    lightColor: "#E5DCD1",
    tagBg: "#EDE7E1",
    tagText: "#736049",
  },
  {
    id: 18,
    name: "Ahara Mix",
    image: Product4,
    tags: ["Nuts", "Seeds", "Mix", "Protein"],
    lightColor: "#b1c696",
    tagBg: "#e0e4d6",
    tagText: "#525c48",
  },
];

export const products = CARDS.flatMap((card) => {
  const p = getProductById(card.id);
  if (!p) return [];
  return [{ ...card, slug: p.slug, price: `₹${p.price}`, numericPrice: p.price }];
});
