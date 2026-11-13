"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Search, SlidersHorizontal, X } from "lucide-react";
import makhanaBg from "@/src/assets/images/section-images/makhana-bg.webp";
import { EmptyState, PageHero, ProductCard } from "@/src/components/ui";
import { useShopQuery } from "@/src/hooks/useShopQuery";
import { useDialog } from "@/src/hooks/useDialog";
import {
  CATEGORIES,
  HEALTH_GOALS,
  INGREDIENTS,
  MAX_PRICE,
  SORT_OPTIONS,
  getAllProducts,
  queryProducts,
  type SortOption,
} from "@/src/services/catalog";
import { formatINR } from "@/src/lib/pricing";
import * as S from "./styled";

const PER_PAGE = 9;
const MIN_PRICE = 100;

/** How many catalogue products carry each option — shown next to the checkbox. */
const counts = (() => {
  const all = getAllProducts();
  const tally = (pick: (p: (typeof all)[number]) => string[]) =>
    all.reduce<Record<string, number>>((acc, p) => {
      pick(p).forEach((v) => (acc[v] = (acc[v] ?? 0) + 1));
      return acc;
    }, {});
  return {
    categories: tally((p) => [p.category]),
    goals: tally((p) => p.healthGoals),
    ingredients: tally((p) => p.ingredients),
  };
})();

export default function Shop() {
  const query = useShopQuery();
  const { q, categories, goals, ingredients, maxPrice, sort, page, update, toggle, clear } = query;
  const [drawer, setDrawer] = useState(false);
  const [search, setSearch] = useState(q);

  // keep the input in sync when the URL changes (e.g. Back button)
  const [lastQ, setLastQ] = useState(q);
  if (q !== lastQ) {
    setLastQ(q);
    setSearch(q);
  }

  // debounce typing into the URL
  useEffect(() => {
    if (search === q) return;
    const t = setTimeout(() => update({ q: search }), 250);
    return () => clearTimeout(t);
  }, [search, q, update]);

  const closeDrawer = useCallback(() => setDrawer(false), []);
  useDialog(drawer, closeDrawer);

  const results = useMemo(
    () => queryProducts({ q, categories, goals, ingredients, maxPrice, sort }),
    [q, categories, goals, ingredients, maxPrice, sort],
  );
  const totalPages = Math.max(1, Math.ceil(results.length / PER_PAGE));
  const current = Math.min(page, totalPages);
  const visible = results.slice((current - 1) * PER_PAGE, current * PER_PAGE);

  const chips = [
    ...(q ? [{ label: `“${q}”`, remove: () => update({ q: "" }) }] : []),
    ...categories.map((c) => ({ label: c, remove: () => toggle("categories", c) })),
    ...goals.map((g) => ({ label: g, remove: () => toggle("goals", g) })),
    ...ingredients.map((i) => ({ label: i, remove: () => toggle("ingredients", i) })),
    ...(maxPrice < MAX_PRICE
      ? [{ label: `Under ${formatINR(maxPrice)}`, remove: () => update({ maxPrice: MAX_PRICE }) }]
      : []),
  ];
  const filterCount = chips.length - (q ? 1 : 0);

  const goToPage = (p: number) => {
    update({ page: p });
    document.getElementById("results")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const filters = (
    <>
      <FilterGroup title="Category">
        {CATEGORIES.map((c) => (
          <Check
            key={c}
            label={c}
            count={counts.categories[c]}
            checked={categories.includes(c)}
            onChange={() => toggle("categories", c)}
          />
        ))}
      </FilterGroup>
      <FilterGroup title="Health goal">
        {HEALTH_GOALS.map((g) => (
          <Check
            key={g}
            label={g}
            count={counts.goals[g]}
            checked={goals.includes(g)}
            onChange={() => toggle("goals", g)}
          />
        ))}
      </FilterGroup>
      <FilterGroup title="Ingredient">
        {INGREDIENTS.map((i) => (
          <Check
            key={i}
            label={i}
            count={counts.ingredients[i]}
            checked={ingredients.includes(i)}
            onChange={() => toggle("ingredients", i)}
          />
        ))}
      </FilterGroup>
      <FilterGroup title="Max price">
        <S.Range>
          <label htmlFor="max-price" className="sr-only">
            Maximum price
          </label>
          <input
            id="max-price"
            type="range"
            min={MIN_PRICE}
            max={MAX_PRICE}
            step={10}
            value={maxPrice}
            onChange={(e) => update({ maxPrice: Number(e.target.value) })}
            style={
              {
                "--pct": `${((maxPrice - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100}%`,
              } as React.CSSProperties
            }
          />
          <S.RangeValues>
            <span>{formatINR(MIN_PRICE)}</span>
            <strong>{maxPrice < MAX_PRICE ? `up to ${formatINR(maxPrice)}` : "Any price"}</strong>
          </S.RangeValues>
        </S.Range>
      </FilterGroup>
    </>
  );

  return (
    <S.Wrapper>
      <PageHero
        image={makhanaBg}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Shop" }]}
        title={
          <>
            The whole <em>pantry</em>
          </>
        }
        subtitle="Makhana, sattu, millet cookies and moringa — every product roasted or stone-ground, never fried, and clean label."
      />

      <S.Container>
        <S.Toolbar>
          <S.SearchBox>
            <Search size={18} aria-hidden />
            <label htmlFor="shop-search" className="sr-only">
              Search products
            </label>
            <input
              id="shop-search"
              type="search"
              placeholder="Search makhana, sattu, protein…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </S.SearchBox>
          <S.ToolbarEnd>
            <S.FilterToggle type="button" onClick={() => setDrawer(true)} aria-haspopup="dialog">
              <SlidersHorizontal size={16} aria-hidden /> Filters
              {filterCount > 0 && <span>{filterCount}</span>}
            </S.FilterToggle>
            <S.Sort>
              <label htmlFor="sort">Sort</label>
              <select id="sort" value={sort} onChange={(e) => update({ sort: e.target.value as SortOption })}>
                {SORT_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </S.Sort>
          </S.ToolbarEnd>
        </S.Toolbar>

        <S.Layout>
          <S.Sidebar aria-label="Filters">{filters}</S.Sidebar>

          <S.Main id="results">
            <S.ResultsHead>
              <p aria-live="polite">
                {results.length === 0
                  ? "No products"
                  : `${results.length} product${results.length === 1 ? "" : "s"}`}
              </p>
              {chips.length > 0 && (
                <S.Chips>
                  {chips.map((c) => (
                    <S.Chip
                      key={c.label}
                      type="button"
                      onClick={c.remove}
                      aria-label={`Remove filter ${c.label}`}
                    >
                      {c.label} <X size={14} aria-hidden />
                    </S.Chip>
                  ))}
                  <S.ClearAll type="button" onClick={clear}>
                    Clear all
                  </S.ClearAll>
                </S.Chips>
              )}
            </S.ResultsHead>

            {visible.length === 0 ? (
              <EmptyState
                pose="sideLeft"
                kicker="No matches"
                title="Kairo looked everywhere."
                description="Nothing matches those filters. Try removing one, or browse the whole range."
                btnText="Show all products"
                btnHref="/shop"
              />
            ) : (
              <S.Grid>
                {visible.map((p, i) => (
                  <ProductCard key={p.id} product={p} priority={current === 1 && i < 3} />
                ))}
              </S.Grid>
            )}

            {totalPages > 1 && (
              <S.Pagination aria-label="Pagination">
                <S.PageBtn
                  type="button"
                  onClick={() => goToPage(current - 1)}
                  disabled={current === 1}
                  aria-label="Previous page"
                >
                  <ChevronLeft size={18} />
                </S.PageBtn>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                  <S.PageBtn
                    key={n}
                    type="button"
                    onClick={() => goToPage(n)}
                    aria-current={n === current ? "page" : undefined}
                    aria-label={`Page ${n}`}
                  >
                    {n}
                  </S.PageBtn>
                ))}
                <S.PageBtn
                  type="button"
                  onClick={() => goToPage(current + 1)}
                  disabled={current === totalPages}
                  aria-label="Next page"
                >
                  <ChevronRight size={18} />
                </S.PageBtn>
              </S.Pagination>
            )}
          </S.Main>
        </S.Layout>
      </S.Container>

      {drawer && (
        <S.Overlay onClick={() => setDrawer(false)}>
          <S.Sheet role="dialog" aria-modal="true" aria-label="Filters" onClick={(e) => e.stopPropagation()}>
            <S.SheetHead>
              <h2>Filters</h2>
              <button type="button" onClick={() => setDrawer(false)} aria-label="Close filters" autoFocus>
                <X size={22} />
              </button>
            </S.SheetHead>
            <S.SheetBody>{filters}</S.SheetBody>
            <S.SheetFoot>
              <button type="button" onClick={clear}>
                Clear all
              </button>
              <button type="button" onClick={() => setDrawer(false)}>
                Show {results.length} result{results.length === 1 ? "" : "s"}
              </button>
            </S.SheetFoot>
          </S.Sheet>
        </S.Overlay>
      )}
    </S.Wrapper>
  );
}

function FilterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <S.Group>
      <legend>{title}</legend>
      {children}
    </S.Group>
  );
}

function Check({
  label,
  count,
  checked,
  onChange,
}: {
  label: string;
  count?: number;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <S.CheckRow>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span>{label}</span>
      {count !== undefined && <small>{count}</small>}
    </S.CheckRow>
  );
}
