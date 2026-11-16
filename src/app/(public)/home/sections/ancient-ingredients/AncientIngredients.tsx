"use client";

import React from "react";
import { AncientIngredientsWrapper, AncientIngredientsContainer, IngredientGrid } from "./styled";

import Makhana from "@/src/assets/images/section-images/foxnuts.webp";
import Sattu from "@/src/assets/images/section-images/Sattu.webp";
import Moringa from "@/src/assets/images/section-images/moringa.webp";

import { SectionHeading, IngredientCard } from "@/src/components";
import { useInView } from "@/src/hooks/useInView";

const ingredients = [
  {
    name: "Makhana",
    description:
      "Popped seeds of the prickly water lily, hand-harvested in Bihar — light, crunchy and naturally rich in protein, magnesium and fibre.",
    image: Makhana,
    articleUrl: "https://www.healthline.com/nutrition/makhana-benefits",
  },
  {
    name: "Sattu",
    description:
      "Roasted Bengal gram, stone-ground into flour — Bihar's original protein drink, cooling in summer and slow to digest.",
    image: Sattu,
    articleUrl: "https://www.healthians.com/blog/sattu-benefits",
  },
  {
    name: "Moringa",
    description:
      "A nutrient-dense superfood packed with vitamins, minerals, and antioxidants for overall vitality.",
    image: Moringa,
    articleUrl: "https://www.gardenia.net/plant/moringa-oleifera-moringa-drumstick-tree",
  },
];

export const AncientIngredients = () => {
  const { ref: sectionRef, inView: isVisible } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <AncientIngredientsWrapper id="ingredients">
      <AncientIngredientsContainer ref={sectionRef}>
        <SectionHeading
          title="Ancient Ingredients"
          subHeading="Nature's Bounty"
          desc="Discover the wisdom of traditional Indian herbs and superfoods."
          align="center"
        />
        <IngredientGrid>
          {ingredients.map((item, index) => (
            <IngredientCard
              key={index}
              title={item.name}
              description={item.description}
              image={item.image}
              exploreUrl={item.articleUrl}
              $animate={isVisible}
              $delay={index * 150}
            />
          ))}
        </IngredientGrid>
      </AncientIngredientsContainer>
    </AncientIngredientsWrapper>
  );
};
