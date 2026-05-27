"use client";

import React, { useMemo, useState } from "react";
import {
  HiOutlineAdjustments,
  HiX,
  HiChevronDown,
  HiChevronUp,
} from "react-icons/hi";

import {
  ALL_PRODUCTS,
  CATEGORIES,
  HEALTH_GOALS,
  INGREDIENTS,
  MAX_PRICE,
  SORT_OPTIONS,
  type Category,
  type HealthGoal,
  type Ingredient,
  type SortOption,
} from "./data/products";
import makhanaBg from "@/src/assets/images/section-images/makhana-bg.jpg";
import { PageHero, ProductCard } from "@/src/components/ui";
import {
  ShopPageWrapper,
  PageContainer,
  ActiveFiltersRow,
  ActiveFilterLabel,
  FilterChip,
  ClearAllBtn,
  ContentLayout,
  SidebarWrapper,
  SidebarScrollArea,
  SidebarTitle,
  FilterSection,
  FilterSectionHeader,
  FilterSectionTitle,
  FilterChevron,
  FilterBody,
  CheckboxLabel,
  PriceRangeWrapper,
  RangeSlider,
  PriceValues,
  MainArea,
  ResultsBar,
  ResultsCount,
  SortSelect,
  ProductGrid,
  EmptyState,
  PaginationWrapper,
  PageBtn,
  MobileFilterToggle,
  FilterDrawerOverlay,
  FilterDrawer,
  FilterDrawerHeader,
  FilterDrawerClose,
  FilterSectionTitle as FilterDrawerTitle,
} from "./styled";

const PER_PAGE = 9;

/* ─── Collapsible filter section ────────────────────────────── */
function CollapsibleSection({
  title,
  children,
  defaultOpen = true,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <FilterSection>
      <FilterSectionHeader onClick={() => setOpen((v) => !v)}>
        <FilterSectionTitle>{title}</FilterSectionTitle>
        <FilterChevron $open={open}>
          {open ? <HiChevronUp /> : <HiChevronDown />}
        </FilterChevron>
      </FilterSectionHeader>
      {open && <FilterBody>{children}</FilterBody>}
    </FilterSection>
  );
}

/* ─── Sidebar inner ─────────────────────────────────────────── */
function SidebarContent({
  selectedCategories,
  toggleCategory,
  selectedGoals,
  toggleGoal,
  selectedIngredients,
  toggleIngredient,
  maxPrice,
  setMaxPrice,
}: {
  selectedCategories: Category[];
  toggleCategory: (c: Category) => void;
  selectedGoals: HealthGoal[];
  toggleGoal: (g: HealthGoal) => void;
  selectedIngredients: Ingredient[];
  toggleIngredient: (i: Ingredient) => void;
  maxPrice: number;
  setMaxPrice: (v: number) => void;
}) {
  const pct = Math.round((maxPrice / MAX_PRICE) * 100);

  return (
    <>
      <CollapsibleSection title="Category">
        {CATEGORIES.map((cat) => (
          <CheckboxLabel key={cat}>
            <input
              type="checkbox"
              checked={selectedCategories.includes(cat)}
              onChange={() => toggleCategory(cat)}
            />
            {cat}
          </CheckboxLabel>
        ))}
      </CollapsibleSection>

      <CollapsibleSection title="Health Goal">
        {HEALTH_GOALS.map((goal) => (
          <CheckboxLabel key={goal}>
            <input
              type="checkbox"
              checked={selectedGoals.includes(goal)}
              onChange={() => toggleGoal(goal)}
            />
            {goal}
          </CheckboxLabel>
        ))}
      </CollapsibleSection>

      <CollapsibleSection title="Price Range">
        <PriceRangeWrapper>
          <RangeSlider
            type="range"
            min={100}
            max={MAX_PRICE}
            value={maxPrice}
            style={{ "--val": `${pct}%` } as React.CSSProperties}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
          <PriceValues>
            <span>₹0</span>
            <span>Up to ₹{maxPrice}</span>
          </PriceValues>
        </PriceRangeWrapper>
      </CollapsibleSection>

      <CollapsibleSection title="Ingredients" defaultOpen={false}>
        {INGREDIENTS.map((ing) => (
          <CheckboxLabel key={ing}>
            <input
              type="checkbox"
              checked={selectedIngredients.includes(ing)}
              onChange={() => toggleIngredient(ing)}
            />
            {ing}
          </CheckboxLabel>
        ))}
      </CollapsibleSection>
    </>
  );
}

/* ─── Main Shop component ───────────────────────────────────── */
export default function Shop() {
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const [selectedGoals, setSelectedGoals] = useState<HealthGoal[]>([]);
  const [selectedIngredients, setSelectedIngredients] = useState<Ingredient[]>(
    [],
  );
  const [maxPrice, setMaxPrice] = useState<number>(MAX_PRICE);
  const [sort, setSort] = useState<SortOption>("best-selling");
  const [page, setPage] = useState(1);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  function toggle<T>(arr: T[], item: T, set: (v: T[]) => void) {
    set(arr.includes(item) ? arr.filter((x) => x !== item) : [...arr, item]);
    setPage(1);
  }

  const toggleCategory = (c: Category) =>
    toggle(selectedCategories, c, setSelectedCategories);
  const toggleGoal = (g: HealthGoal) =>
    toggle(selectedGoals, g, setSelectedGoals);
  const toggleIngredient = (i: Ingredient) =>
    toggle(selectedIngredients, i, setSelectedIngredients);

  const clearAll = () => {
    setSelectedCategories([]);
    setSelectedGoals([]);
    setSelectedIngredients([]);
    setMaxPrice(MAX_PRICE);
    setPage(1);
  };

  /* Filter */
  const filtered = useMemo(() => {
    let products = ALL_PRODUCTS;

    if (selectedCategories.length)
      products = products.filter((p) =>
        selectedCategories.includes(p.category),
      );

    if (selectedGoals.length)
      products = products.filter((p) =>
        selectedGoals.some((g) => p.healthGoals.includes(g)),
      );

    if (selectedIngredients.length)
      products = products.filter((p) =>
        selectedIngredients.some((i) => p.ingredients.includes(i)),
      );

    products = products.filter((p) => p.price <= maxPrice);

    /* Sort */
    const sorted = [...products];
    switch (sort) {
      case "price-asc":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        sorted.sort((a, b) => b.id - a.id);
        break;
      case "top-rated":
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      default:
        sorted.sort((a, b) => b.reviewCount - a.reviewCount);
    }

    return sorted;
  }, [selectedCategories, selectedGoals, selectedIngredients, maxPrice, sort]);

  /* Pagination */
  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const pageProducts = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  /* Active filter chips */
  const activeFilters: { label: string; remove: () => void }[] = [
    ...selectedCategories.map((c) => ({
      label: c,
      remove: () => toggleCategory(c),
    })),
    ...selectedGoals.map((g) => ({
      label: g,
      remove: () => toggleGoal(g),
    })),
    ...selectedIngredients.map((i) => ({
      label: i,
      remove: () => toggleIngredient(i),
    })),
    ...(maxPrice < MAX_PRICE
      ? [{ label: `Under ₹${maxPrice}`, remove: () => setMaxPrice(MAX_PRICE) }]
      : []),
  ];

  /* Pagination buttons */
  function getPageBtns(): (number | "...")[] {
    if (totalPages <= 7)
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    const result: (number | "...")[] = [1];
    if (page > 3) result.push("...");
    for (
      let p = Math.max(2, page - 1);
      p <= Math.min(totalPages - 1, page + 1);
      p++
    ) {
      result.push(p);
    }
    if (page < totalPages - 2) result.push("...");
    result.push(totalPages);
    return result;
  }

  const sidebarProps = {
    selectedCategories,
    toggleCategory,
    selectedGoals,
    toggleGoal,
    selectedIngredients,
    toggleIngredient,
    maxPrice,
    setMaxPrice: (v: number) => {
      setMaxPrice(v);
      setPage(1);
    },
  };

  return (
    <ShopPageWrapper>
      {/* Hero */}
      <PageHero
        bg={makhanaBg.src}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Shop" }]}
        title={
          <>
            <span className="line">
              <span className="w1">Shop </span>
              <span className="w2">All</span>
            </span>

            <span className="line">
              <span className="w3">Products</span>
            </span>
          </>
        }
        subtitle="Discover our full range of traditional Indian superfoods, consciously sourced and clean label guaranteed."
      />

      <PageContainer>
        {/* Active Filters */}
        {activeFilters.length > 0 && (
          <ActiveFiltersRow>
            <ActiveFilterLabel>Active Filters:</ActiveFilterLabel>
            {activeFilters.map((f) => (
              <FilterChip key={f.label} onClick={f.remove}>
                {f.label} <span>×</span>
              </FilterChip>
            ))}
            <ClearAllBtn onClick={clearAll}>Clear All</ClearAllBtn>
          </ActiveFiltersRow>
        )}

        {/* Mobile filter button */}
        <MobileFilterToggle onClick={() => setMobileFilterOpen(true)}>
          <HiOutlineAdjustments />
          Filters
          {activeFilters.length > 0 && ` (${activeFilters.length})`}
        </MobileFilterToggle>

        <ContentLayout>
          {/* Desktop Sidebar */}
          <SidebarWrapper>
            <SidebarTitle>Filters</SidebarTitle>
            <SidebarScrollArea>
              <SidebarContent {...sidebarProps} />
            </SidebarScrollArea>
          </SidebarWrapper>

          {/* Product Area */}
          <MainArea>
            <ResultsBar>
              <ResultsCount>
                Showing {Math.min((page - 1) * PER_PAGE + 1, filtered.length)}–
                {Math.min(page * PER_PAGE, filtered.length)} of{" "}
                {filtered.length} results
              </ResultsCount>
              <SortSelect
                value={sort}
                onChange={(e) => {
                  setSort(e.target.value as SortOption);
                  setPage(1);
                }}
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </SortSelect>
            </ResultsBar>

            {pageProducts.length === 0 ? (
              <EmptyState>
                <h3>No products found</h3>
                <p>Try adjusting or clearing your filters.</p>
              </EmptyState>
            ) : (
              <ProductGrid>
                {pageProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </ProductGrid>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <PaginationWrapper>
                <PageBtn
                  $arrow
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                >
                  ‹
                </PageBtn>
                {getPageBtns().map((btn, i) =>
                  btn === "..." ? (
                    <PageBtn key={`ellipsis-${i}`} disabled>
                      …
                    </PageBtn>
                  ) : (
                    <PageBtn
                      key={btn}
                      $active={page === btn}
                      onClick={() => setPage(btn as number)}
                    >
                      {btn}
                    </PageBtn>
                  ),
                )}
                <PageBtn
                  $arrow
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                >
                  ›
                </PageBtn>
              </PaginationWrapper>
            )}
          </MainArea>
        </ContentLayout>
      </PageContainer>

      {/* Mobile Filter Drawer */}
      {mobileFilterOpen && (
        <FilterDrawerOverlay onClick={() => setMobileFilterOpen(false)}>
          <FilterDrawer onClick={(e) => e.stopPropagation()}>
            <FilterDrawerHeader>
              <FilterDrawerTitle>Filters</FilterDrawerTitle>
              <FilterDrawerClose onClick={() => setMobileFilterOpen(false)}>
                <HiX />
              </FilterDrawerClose>
            </FilterDrawerHeader>
            <SidebarContent {...sidebarProps} />
          </FilterDrawer>
        </FilterDrawerOverlay>
      )}
    </ShopPageWrapper>
  );
}
