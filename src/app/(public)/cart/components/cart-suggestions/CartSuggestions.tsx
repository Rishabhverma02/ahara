"use client";

import React from "react";
import { useCartPage } from "../../useCartPage";
import { ProductCard } from "@/src/components/ui/cards/product-card/ProductCard";
import { SuggestionsSection, SectionTitle, SuggestionsGrid } from "./styled";

export const CartSuggestions = () => {
  const { recommended } = useCartPage();

  if (recommended.length === 0) return null;

  return (
    <SuggestionsSection>
      <SectionTitle>You Might Also Like</SectionTitle>
      <SuggestionsGrid>
        {recommended.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </SuggestionsGrid>
    </SuggestionsSection>
  );
};
