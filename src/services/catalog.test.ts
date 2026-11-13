import { describe, expect, it } from "vitest";
import { getAllProducts, getRelatedProducts, matchesSearch, queryProducts, searchProducts } from "./catalog";

const all = getAllProducts();

describe("queryProducts", () => {
  it("returns everything with no filters", () => {
    expect(queryProducts({})).toHaveLength(all.length);
  });

  it("filters by category", () => {
    const res = queryProducts({ categories: ["Beverages"] });
    expect(res.length).toBeGreaterThan(0);
    expect(res.every((p) => p.category === "Beverages")).toBe(true);
  });

  it("ORs values within a group and ANDs across groups", () => {
    const res = queryProducts({ categories: ["Snacks"], ingredients: ["Makhana", "Moringa"] });
    expect(res.every((p) => p.category === "Snacks" && p.ingredients.some((i) => i === "Makhana" || i === "Moringa"))).toBe(true);
  });

  it("respects max price", () => {
    expect(queryProducts({ maxPrice: 200 }).every((p) => p.price <= 200)).toBe(true);
  });

  it("sorts by price ascending and descending", () => {
    const asc = queryProducts({ sort: "price-asc" }).map((p) => p.price);
    const desc = queryProducts({ sort: "price-desc" }).map((p) => p.price);
    expect(asc).toEqual([...asc].sort((a, b) => a - b));
    expect(desc).toEqual([...desc].sort((a, b) => b - a));
  });

  it("does not mutate the source catalogue order", () => {
    const before = all.map((p) => p.id);
    queryProducts({ sort: "price-desc" });
    expect(getAllProducts().map((p) => p.id)).toEqual(before);
  });
});

describe("search", () => {
  it("requires every term to match (case-insensitive)", () => {
    const p = all.find((x) => x.slug === "makhana-tangy-lime")!;
    expect(matchesSearch(p, "LIME makhana")).toBe(true);
    expect(matchesSearch(p, "lime sattu")).toBe(false);
  });

  it("searchProducts limits results and ignores blank queries", () => {
    expect(searchProducts("makhana", 3)).toHaveLength(3);
    expect(searchProducts("   ")).toEqual([]);
  });
});

it("related products share a category and exclude the product itself", () => {
  const p = all[0];
  const related = getRelatedProducts(p);
  expect(related.every((r) => r.category === p.category && r.id !== p.id)).toBe(true);
});
