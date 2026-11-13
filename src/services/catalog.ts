/**
 * Catalog service — the only module UI code should use to read products.
 *
 * Today it reads the static catalogue in src/data. When products move to a
 * database/CMS, only this file changes (make the getters async and fetch);
 * components and pages keep the same call sites.
 */
import {
  ALL_PRODUCTS,
  BEST_SELLERS,
  CATEGORIES,
  HEALTH_GOALS,
  INGREDIENTS,
  MAX_PRICE,
  SORT_OPTIONS,
  type Category,
  type HealthGoal,
  type Ingredient,
  type Product,
  type SortOption,
} from "@/src/data/products";
import { PRODUCT_DETAILS } from "@/src/data/product-details";

export { CATEGORIES, HEALTH_GOALS, INGREDIENTS, MAX_PRICE, SORT_OPTIONS };
export type { Category, HealthGoal, Ingredient, Product, SortOption };

export const getAllProducts = () => ALL_PRODUCTS;
export const getBestSellers = () => BEST_SELLERS;
export const getProductBySlug = (slug: string) => ALL_PRODUCTS.find((p) => p.slug === slug);
export const getProductById = (id: number) => ALL_PRODUCTS.find((p) => p.id === id);
export const getProductDetail = (id: number) => PRODUCT_DETAILS[id];

export const getRelatedProducts = (product: Product, limit = 4) =>
  ALL_PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, limit);

/* ---------- filtering ---------- */

export interface ProductQuery {
  q?: string;
  categories?: Category[];
  goals?: HealthGoal[];
  ingredients?: Ingredient[];
  maxPrice?: number;
  sort?: SortOption;
}

const normalise = (s: string) => s.toLowerCase().normalize("NFKD").replace(/[^\w\s]/g, " ");

/** Every whitespace-separated term must appear somewhere in the product's text. */
export function matchesSearch(p: Product, q: string) {
  const terms = normalise(q).split(/\s+/).filter(Boolean);
  if (!terms.length) return true;
  const haystack = normalise(
    [p.name, p.description, p.category, ...p.tags, ...p.ingredients, ...p.healthGoals].join(" "),
  );
  return terms.every((t) => haystack.includes(t));
}

export function queryProducts(query: ProductQuery, source: Product[] = ALL_PRODUCTS): Product[] {
  const { q, categories = [], goals = [], ingredients = [], maxPrice = MAX_PRICE, sort = "best-selling" } = query;

  const result = source.filter(
    (p) =>
      (!q || matchesSearch(p, q)) &&
      (!categories.length || categories.includes(p.category)) &&
      (!goals.length || goals.some((g) => p.healthGoals.includes(g))) &&
      (!ingredients.length || ingredients.some((i) => p.ingredients.includes(i))) &&
      p.price <= maxPrice,
  );

  const sorters: Record<SortOption, (a: Product, b: Product) => number> = {
    "best-selling": (a, b) => b.reviewCount - a.reviewCount,
    "price-asc": (a, b) => a.price - b.price,
    "price-desc": (a, b) => b.price - a.price,
    newest: (a, b) => b.id - a.id,
    "top-rated": (a, b) => b.rating - a.rating,
  };
  return [...result].sort(sorters[sort]);
}

/** Quick search for the header search panel. */
export const searchProducts = (q: string, limit = 6) =>
  q.trim() ? ALL_PRODUCTS.filter((p) => matchesSearch(p, q)).slice(0, limit) : [];
