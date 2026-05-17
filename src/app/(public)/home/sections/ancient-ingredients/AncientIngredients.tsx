"use client";

import React from "react";
import {
  AncientIngredientsWrapper,
  AncientIngredientsContainer,
  IngredientGrid,
  IngredientCard,
  IngredientImage,
  IngredientContent,
  IngredientName,
  IngredientDescription,
  ExploreLink,
} from "./styled";
import { SectionHeading } from "@/src/components";

const ingredients = [
  {
    name: "Ashwagandha",
    description:
      "The 'King of Ayurvedic Herbs', known for its ability to reduce stress and boost energy levels naturally.",
    image:
      "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Turmeric",
    description:
      "Golden spice with powerful anti-inflammatory properties, used for centuries in traditional Indian medicine.",
    image:
      "https://images.unsplash.com/photo-1615485290382-441e4d019cb0?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Moringa",
    description:
      "A nutrient-dense superfood packed with vitamins, minerals, and antioxidants for overall vitality.",
    image:
      "https://images.unsplash.com/photo-1545127398-14699f92334b?q=80&w=800&auto=format&fit=crop",
  },
];

export const AncientIngredients = () => {
  return (
    <AncientIngredientsWrapper>
      <AncientIngredientsContainer>
        <SectionHeading 
          title="Ancient Ingredients" 
          subHeading="Nature's Bounty"
          desc="Discover the wisdom of traditional Indian herbs and superfoods."
          align="center"
        />
        <IngredientGrid>
          {ingredients.map((item, index) => (
            <IngredientCard key={index}>
              <IngredientImage
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <IngredientContent>
                <IngredientName>{item.name}</IngredientName>
                <IngredientDescription>
                  {item.description}
                </IngredientDescription>
                <ExploreLink href={`/ingredients/${item.name.toLowerCase()}`}>
                  Explore
                </ExploreLink>
              </IngredientContent>
            </IngredientCard>
          ))}
        </IngredientGrid>
      </AncientIngredientsContainer>
    </AncientIngredientsWrapper>
  );
};
