"use client";

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

import Makhana from "@/src/assets/images/section-images/foxnuts.webp";
import Sattu from "@/src/assets/images/section-images/Sattu.png";
import Moringa from "@/src/assets/images/section-images/moringa.webp";

import { SectionHeading } from "@/src/components";

const ingredients = [
  {
    name: "Makhana",
    description:
      "The 'King of Ayurvedic Herbs', known for its ability to reduce stress and boost energy levels naturally.",
    image: Makhana,
  },
  {
    name: "Sattu",
    description:
      "Golden spice with powerful anti-inflammatory properties, used for centuries in traditional Indian medicine.",
    image: Sattu,
  },
  {
    name: "Moringa",
    description:
      "A nutrient-dense superfood packed with vitamins, minerals, and antioxidants for overall vitality.",
    image: Moringa,
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
                  backgroundImage: `url(${item.image.src})`,
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
