"use client";

import { useCallback, useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  CATEGORIES,
  HEALTH_GOALS,
  INGREDIENTS,
  MAX_PRICE,
  SORT_OPTIONS,
  type Category,
  type HealthGoal,
  type Ingredient,
  type ProductQuery,
  type SortOption,
} from "@/src/services/catalog";

/**
 * Shop filters live in the URL (?category=Snacks,Beverages&sort=price-asc&page=2)
 * so results are shareable, survive refresh, and work with the Back button.
 * Unknown values are ignored rather than trusted.
 */
const list = <T extends string>(raw: string | null, allowed: readonly T[]) =>
  (raw ?? "").split(",").filter((v): v is T => (allowed as readonly string[]).includes(v));

export function useShopQuery() {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const state = useMemo(() => {
    const sortRaw = params.get("sort");
    const max = Number(params.get("max"));
    const page = Number(params.get("page"));
    return {
      q: params.get("q") ?? "",
      categories: list<Category>(params.get("category"), CATEGORIES),
      goals: list<HealthGoal>(params.get("goal"), HEALTH_GOALS),
      ingredients: list<Ingredient>(params.get("ingredient"), INGREDIENTS),
      maxPrice: max > 0 && max <= MAX_PRICE ? max : MAX_PRICE,
      sort: (SORT_OPTIONS.some((o) => o.value === sortRaw) ? sortRaw : "best-selling") as SortOption,
      page: Number.isInteger(page) && page > 1 ? page : 1,
    };
  }, [params]);

  /** Merge a patch into the URL. Any filter change resets pagination. */
  const update = useCallback(
    (patch: Partial<ProductQuery & { page: number }>) => {
      const next = new URLSearchParams(params.toString());
      const set = (key: string, value: string | null) => (value ? next.set(key, value) : next.delete(key));

      if ("q" in patch) set("q", patch.q?.trim() || null);
      if ("categories" in patch) set("category", patch.categories?.join(",") || null);
      if ("goals" in patch) set("goal", patch.goals?.join(",") || null);
      if ("ingredients" in patch) set("ingredient", patch.ingredients?.join(",") || null);
      if ("maxPrice" in patch)
        set("max", patch.maxPrice && patch.maxPrice < MAX_PRICE ? String(patch.maxPrice) : null);
      if ("sort" in patch) set("sort", patch.sort && patch.sort !== "best-selling" ? patch.sort : null);
      set("page", "page" in patch && patch.page && patch.page > 1 ? String(patch.page) : null);

      const qs = next.toString();
      router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    },
    [params, pathname, router],
  );

  const toggle = useCallback(
    <K extends "categories" | "goals" | "ingredients">(
      key: K,
      value: ProductQuery[K] extends (infer U)[] | undefined ? U : never,
    ) => {
      const current = state[key] as string[];
      const v = value as string;
      update({
        [key]: current.includes(v) ? current.filter((x) => x !== v) : [...current, v],
      } as Partial<ProductQuery>);
    },
    [state, update],
  );

  const clear = useCallback(() => router.replace(pathname, { scroll: false }), [pathname, router]);

  return { ...state, update, toggle, clear };
}
