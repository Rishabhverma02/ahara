"use client";

import React from 'react';
import { FeaturedWrapper, FeaturedContent, FeaturedTitle, FeaturedButton } from './styled';

export const FeaturedSection = () => {
  return (
    <FeaturedWrapper>
      <FeaturedContent>
        <FeaturedTitle>Nourish Your Body with Ancient Superfoods</FeaturedTitle>
        <FeaturedButton>Shop Now</FeaturedButton>
      </FeaturedContent>
    </FeaturedWrapper>
  );
};
