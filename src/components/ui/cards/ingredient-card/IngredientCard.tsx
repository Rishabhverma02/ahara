import React from 'react';
import { StaticImageData } from 'next/image';
import {
  CardWrapper,
  ImageContainer,
  ImageWrapper,
  ContentWrapper,
  Title,
  Description,
  ExploreLink,
  ExploreArrow
} from './styled';

export interface IngredientCardProps {
  title: string;
  description: string;
  image: string | StaticImageData;
  exploreUrl: string;
  $animate?: boolean;
  $delay?: number;
}

export const IngredientCard: React.FC<IngredientCardProps> = ({
  title,
  description,
  image,
  exploreUrl,
  $animate = false,
  $delay
}) => {
  const imageUrl = typeof image === 'string' ? image : image.src;
  const isExternal = exploreUrl.startsWith('http://') || exploreUrl.startsWith('https://');

  return (
    <CardWrapper $animate={$animate} $delay={$delay}>
      <ImageContainer>
        <ImageWrapper $src={imageUrl} />
      </ImageContainer>
      
      <ContentWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <ExploreLink 
          href={exploreUrl}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
        >
          Explore <ExploreArrow>→</ExploreArrow>
        </ExploreLink>
      </ContentWrapper>
    </CardWrapper>
  );
};

