"use client";

import React from "react";
import {
  AncientIngredientsWrapper,
  AncientIngredientsContainer,
  IngredientGrid,
} from "./styled";

import Makhana from "@/src/assets/images/section-images/foxnuts.webp";
import Sattu from "@/src/assets/images/section-images/Sattu.png";
import Moringa from "@/src/assets/images/section-images/moringa.webp";

import { SectionHeading, IngredientCard } from "@/src/components";

const ingredients = [
  {
    name: "Makhana",
    description:
      "The 'King of Ayurvedic Herbs', known for its ability to reduce stress and boost energy levels naturally.",
    image: Makhana,
    articleUrl: "https://www.healthline.com/nutrition/makhana-benefits",
  },
  {
    name: "Sattu",
    description:
      "Golden spice with powerful anti-inflammatory properties, used for centuries in traditional Indian medicine.",
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
  const [isVisible, setIsVisible] = React.useState(false);
  const sectionRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const currentElement = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (currentElement) {
            observer.unobserve(currentElement);
          }
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <AncientIngredientsWrapper>
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

