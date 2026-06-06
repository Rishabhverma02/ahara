"use client";

import React from 'react';
import { 
  BestSellersWrapper, 
  BestSellersContainer, 
  SectionHeader, 
  ShopAllLink, 
  ProductGrid,
  SlideWrapper,
  DotsContainer,
  Dot
} from './styled';
import { HiArrowRight } from 'react-icons/hi';
import { SectionHeading, BestSellerCard } from '@/src/components';
import { products } from './data/bestProducts';

export const BestSellers = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const gridRef = React.useRef<HTMLDivElement>(null);

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

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const handleAutoSwipe = () => {
      if (window.innerWidth > 768) return;

      setActiveIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % products.length;
        if (gridRef.current) {
          const cardWidth = gridRef.current.clientWidth;
          gridRef.current.scrollTo({
            left: nextIndex * cardWidth,
            behavior: "smooth",
          });
        }
        return nextIndex;
      });
    };

    const interval = setInterval(handleAutoSwipe, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleScroll = () => {
    if (gridRef.current) {
      const cardWidth = gridRef.current.clientWidth;
      if (cardWidth > 0) {
        const newIndex = Math.round(gridRef.current.scrollLeft / cardWidth);
        setActiveIndex(newIndex);
      }
    }
  };

  return (
    <BestSellersWrapper>
      <BestSellersContainer ref={sectionRef}>
        <SectionHeader $animate={isVisible}>
          <SectionHeading
            title="Best Sellers"
            subHeading="Curated Favorites"
            align="left"
          />
          <ShopAllLink href="/shop">
            Shop All <HiArrowRight size={20} />
          </ShopAllLink>
        </SectionHeader>

        <ProductGrid ref={gridRef} onScroll={handleScroll}>
          {products.map((product) => (
            <SlideWrapper key={product.id}>
              <BestSellerCard 
                product={product} 
                $animate={isVisible} 
              />
            </SlideWrapper>
          ))}
        </ProductGrid>

        <DotsContainer>
          {products.map((_, index) => (
            <Dot 
              key={index} 
              $active={index === activeIndex} 
              onClick={() => {
                if (gridRef.current) {
                  const cardWidth = gridRef.current.clientWidth;
                  gridRef.current.scrollTo({
                    left: index * cardWidth,
                    behavior: "smooth",
                  });
                  setActiveIndex(index);
                }
              }}
            />
          ))}
        </DotsContainer>
      </BestSellersContainer>
    </BestSellersWrapper>
  );
};
