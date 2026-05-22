"use client";

import React from "react";
import { FeaturedWrapper, FeaturedContent, FeaturedTitle, FeaturedButton } from './styled';

export const FeaturedSection = () => {
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
      { threshold: 0.1 }
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
    <FeaturedWrapper ref={sectionRef}>
      <FeaturedContent $animate={isVisible}>
        <FeaturedTitle>Nourish Your Body with Ancient Superfoods</FeaturedTitle>
        <FeaturedButton>Shop Now</FeaturedButton>
      </FeaturedContent>
    </FeaturedWrapper>
  );
};
