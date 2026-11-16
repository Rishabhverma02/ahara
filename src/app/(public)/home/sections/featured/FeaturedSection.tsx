"use client";

import React from "react";
import Link from "next/link";
import { FeaturedWrapper, FeaturedContent, FeaturedTitle, FeaturedButton } from "./styled";
import { useInView } from "@/src/hooks/useInView";

export const FeaturedSection = () => {
  const { ref: sectionRef, inView: isVisible } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <FeaturedWrapper ref={sectionRef}>
      <FeaturedContent $animate={isVisible}>
        <FeaturedTitle>Nourish Your Body with Ancient Superfoods</FeaturedTitle>
        <FeaturedButton as={Link} href="/shop">
          Shop Now
        </FeaturedButton>
      </FeaturedContent>
    </FeaturedWrapper>
  );
};
