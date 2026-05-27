import type { StaticImageData } from "next/image";

// Product images
import aharaMix from "@/src/assets/images/products/ahara-mix-special.png";
import cookiesBajra from "@/src/assets/images/products/cookies-bajra.png";
import cookiesChoc from "@/src/assets/images/products/cookies-chocolet.png";
import cookiesJowar from "@/src/assets/images/products/cookies-jowar.png";
import makhanaCheeseImg from "@/src/assets/images/products/makhana-cheese.png";
import makhanaChocImg from "@/src/assets/images/products/makhana-chocolet.png";
import makhanaCinnamonImg from "@/src/assets/images/products/makhana-cinnamon.png";
import makhanaLimeImg from "@/src/assets/images/products/makhana-lime.png";
import makhanaNewImg from "@/src/assets/images/products/makhana-new.png";
import makhanaSaltImg from "@/src/assets/images/products/makhana-salt.png";
import makhanaSpicyImg from "@/src/assets/images/products/makhana-spicy.png";
import moringaImg from "@/src/assets/images/products/moringa-bites.png";
import sattuChocNewImg from "@/src/assets/images/products/sattu-chocolet-new.png";
import sattuChocImg from "@/src/assets/images/products/sattu-chocolet.png";
import sattuClassicImg from "@/src/assets/images/products/sattu-classic.png";
import sattuMangoImg from "@/src/assets/images/products/sattu-mango.png";
import sattuRoseImg from "@/src/assets/images/products/sattu-rose-thandai.png";

import makhanaCreamOnionImg from "@/src/assets/images/products/makhana-cream&onion.png";

export type Category = "Snacks" | "Beverages" | "Breakfast" | "Pantry Staples";
export type HealthGoal = "Weight Management" | "Gut Health" | "High Protein" | "Immunity";
export type Ingredient = "Makhana" | "Sattu" | "Jowar" | "Bajra" | "Moringa";
export type BadgeType = "Bestseller" | "New" | "Sale";

export type ProductSize = { label: string; price: number };
export type NutritionRow = { label: string; value: string };

export type Product = {
  id: number;
  slug: string;
  name: string;
  description: string;
  image: StaticImageData;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  category: Category;
  healthGoals: HealthGoal[];
  ingredients: Ingredient[];
  tags: string[];
  badge?: BadgeType;
  /* Detail page fields (optional — resolved via getProductDetail) */
  sizes?: ProductSize[];
  cleanLabelPromises?: string[];
  estimatedDelivery?: string;
  ingredientStory?: { title: string; paragraphs: string[] };
  tasteTexture?: string;
  howToConsume?: string;
  nutritionFacts?: NutritionRow[];
};

export const ALL_PRODUCTS: Product[] = [
  {
    id: 1,
    slug: "makhana-cheese-herbs",
    name: "Makhana – Cheese & Herbs",
    description: "Roasted fox nuts with aged cheddar & fresh herbs",
    image: makhanaCheeseImg,
    price: 199,
    originalPrice: 249,
    rating: 4.7,
    reviewCount: 214,
    category: "Snacks",
    healthGoals: ["Weight Management", "High Protein"],
    ingredients: ["Makhana"],
    tags: ["Protein Rich"],
    badge: "Bestseller",
  },
  {
    id: 2,
    slug: "makhana-dark-chocolate",
    name: "Makhana – Dark Chocolate",
    description: "Belgian dark chocolate coated lotus seeds",
    image: makhanaChocImg,
    price: 229,
    rating: 4.5,
    reviewCount: 178,
    category: "Snacks",
    healthGoals: ["Immunity", "Gut Health"],
    ingredients: ["Makhana"],
    tags: ["Antioxidant Rich"],
    badge: "New",
  },
  {
    id: 3,
    slug: "makhana-cinnamon-bliss",
    name: "Makhana – Cinnamon Bliss",
    description: "Warm cinnamon spiced makhana for a cosy snack",
    image: makhanaCinnamonImg,
    price: 199,
    rating: 4.4,
    reviewCount: 102,
    category: "Snacks",
    healthGoals: ["Gut Health", "Immunity"],
    ingredients: ["Makhana"],
    tags: ["Anti-Inflammatory"],
  },
  {
    id: 4,
    slug: "makhana-cream-onion",
    name: "Makhana – Cream & Onion",
    description: "Classic cream & onion flavour, guilt-free",
    image: makhanaCreamOnionImg,
    price: 199,
    rating: 4.6,
    reviewCount: 319,
    category: "Snacks",
    healthGoals: ["High Protein", "Weight Management"],
    ingredients: ["Makhana"],
    tags: ["Protein Rich"],
    badge: "Bestseller",
  },
  {
    id: 5,
    slug: "makhana-tangy-lime",
    name: "Makhana – Tangy Lime",
    description: "Sun-dried lime zest & rock salt roasted makhana",
    image: makhanaLimeImg,
    price: 199,
    rating: 4.3,
    reviewCount: 89,
    category: "Snacks",
    healthGoals: ["Weight Management"],
    ingredients: ["Makhana"],
    tags: ["Low Calorie"],
  },
  {
    id: 6,
    slug: "makhana-original",
    name: "Makhana – Original",
    description: "Pure, lightly salted, air-popped lotus seeds",
    image: makhanaNewImg,
    price: 179,
    rating: 4.5,
    reviewCount: 256,
    category: "Snacks",
    healthGoals: ["Weight Management", "Gut Health"],
    ingredients: ["Makhana"],
    tags: ["Low Fat"],
    badge: "Bestseller",
  },
  {
    id: 7,
    slug: "makhana-himalayan-salt",
    name: "Makhana – Himalayan Salt",
    description: "Minimalist. Just pink salt & pure makhana.",
    image: makhanaSaltImg,
    price: 179,
    rating: 4.4,
    reviewCount: 143,
    category: "Snacks",
    healthGoals: ["Weight Management"],
    ingredients: ["Makhana"],
    tags: ["Low Calorie"],
  },
  {
    id: 8,
    slug: "makhana-fiery-spice",
    name: "Makhana – Fiery Spice",
    description: "Bold chilli & spice blend for heat lovers",
    image: makhanaSpicyImg,
    price: 199,
    rating: 4.2,
    reviewCount: 97,
    category: "Snacks",
    healthGoals: ["High Protein"],
    ingredients: ["Makhana"],
    tags: ["Protein Rich"],
  },
  {
    id: 9,
    slug: "sattu-classic",
    name: "Sattu – Classic",
    description: "Cold-pressed roasted chana flour, nutrient-dense",
    image: sattuClassicImg,
    price: 279,
    originalPrice: 349,
    rating: 4.8,
    reviewCount: 412,
    category: "Beverages",
    healthGoals: ["High Protein", "Weight Management"],
    ingredients: ["Sattu"],
    tags: ["High Protein"],
    badge: "Bestseller",
  },
  {
    id: 10,
    slug: "sattu-dark-chocolate",
    name: "Sattu – Dark Chocolate",
    description: "Rich cocoa meets high-protein sattu goodness",
    image: sattuChocImg,
    price: 299,
    rating: 4.6,
    reviewCount: 187,
    category: "Beverages",
    healthGoals: ["High Protein"],
    ingredients: ["Sattu"],
    tags: ["High Protein"],
  },
  {
    id: 11,
    slug: "sattu-choco-new-formula",
    name: "Sattu – Choco New Formula",
    description: "Upgraded recipe with 30% more protein per serve",
    image: sattuChocNewImg,
    price: 299,
    rating: 4.7,
    reviewCount: 203,
    category: "Beverages",
    healthGoals: ["High Protein", "Immunity"],
    ingredients: ["Sattu"],
    tags: ["High Protein"],
    badge: "New",
  },
  {
    id: 12,
    slug: "sattu-mango-delight",
    name: "Sattu – Mango Delight",
    description: "Tropical Alphonso mango with energising sattu",
    image: sattuMangoImg,
    price: 299,
    rating: 4.5,
    reviewCount: 134,
    category: "Beverages",
    healthGoals: ["Gut Health", "Immunity"],
    ingredients: ["Sattu"],
    tags: ["Energy Boost"],
  },
  {
    id: 13,
    slug: "sattu-rose-thandai",
    name: "Sattu – Rose Thandai",
    description: "Traditional thandai botanicals with rose & sattu",
    image: sattuRoseImg,
    price: 299,
    rating: 4.6,
    reviewCount: 98,
    category: "Beverages",
    healthGoals: ["Immunity", "Gut Health"],
    ingredients: ["Sattu"],
    tags: ["Energy Boost"],
  },
  {
    id: 14,
    slug: "bajra-cookies",
    name: "Bajra Cookies",
    description: "Pearl millet cookies with jaggery — fibre-rich",
    image: cookiesBajra,
    price: 249,
    rating: 4.3,
    reviewCount: 76,
    category: "Breakfast",
    healthGoals: ["Gut Health", "Weight Management"],
    ingredients: ["Bajra"],
    tags: ["Fibre Rich"],
  },
  {
    id: 15,
    slug: "chocolate-cookies",
    name: "Chocolate Cookies",
    description: "Dark chocolate & whole grain cookies, no maida",
    image: cookiesChoc,
    price: 249,
    rating: 4.5,
    reviewCount: 154,
    category: "Breakfast",
    healthGoals: ["Immunity"],
    ingredients: ["Jowar"],
    tags: ["Antioxidant Rich"],
  },
  {
    id: 16,
    slug: "jowar-cookies",
    name: "Jowar Cookies",
    description: "Sorghum cookies with cardamom & coconut sugar",
    image: cookiesJowar,
    price: 249,
    rating: 4.2,
    reviewCount: 63,
    category: "Breakfast",
    healthGoals: ["Gut Health"],
    ingredients: ["Jowar"],
    tags: ["Fibre Rich"],
  },
  {
    id: 17,
    slug: "moringa-bites",
    name: "Moringa Bites",
    description: "Superfood moringa energy balls, no added sugar",
    image: moringaImg,
    price: 299,
    rating: 4.6,
    reviewCount: 118,
    category: "Snacks",
    healthGoals: ["Immunity", "Gut Health"],
    ingredients: ["Moringa"],
    tags: ["Superfood"],
    badge: "New",
  },
  {
    id: 18,
    slug: "ahara-mix-special",
    name: "Ahara Mix Special",
    description: "Our signature curated trail mix of superfoods",
    image: aharaMix,
    price: 349,
    originalPrice: 429,
    rating: 4.8,
    reviewCount: 289,
    category: "Snacks",
    healthGoals: ["Weight Management", "High Protein", "Immunity"],
    ingredients: ["Makhana", "Moringa"],
    tags: ["Complete Nutrition"],
    badge: "Bestseller",
  },
];

export const CATEGORIES: Category[] = ["Snacks", "Beverages", "Breakfast", "Pantry Staples"];
export const HEALTH_GOALS: HealthGoal[] = ["Weight Management", "Gut Health", "High Protein", "Immunity"];
export const INGREDIENTS: Ingredient[] = ["Makhana", "Sattu", "Jowar", "Bajra", "Moringa"];
export const MAX_PRICE = 500;

export type SortOption = "best-selling" | "price-asc" | "price-desc" | "newest" | "top-rated";
export const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "best-selling", label: "Best Selling" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "newest", label: "Newest First" },
  { value: "top-rated", label: "Top Rated" },
];

export function getProductBySlug(slug: string): Product | undefined {
  return ALL_PRODUCTS.find((p) => p.slug === slug);
}

export function getProductById(id: number): Product | undefined {
  return ALL_PRODUCTS.find((p) => p.id === id);
}
