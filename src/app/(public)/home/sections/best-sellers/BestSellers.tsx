"use client";

import React from 'react';
import { 
  BestSellersWrapper, 
  BestSellersContainer, 
  SectionHeader, 
  ShopAllLink, 
  ProductGrid
} from './styled';
import { HiArrowRight } from 'react-icons/hi';
import { SectionHeading, BestSellerCard } from '@/src/components';

import Product1 from '@/src/assets/images/products/product-soft-version/jowa-cookies.png'
import Product2 from '@/src/assets/images/products/product-soft-version/lime-makhana.png'
import Product3 from '@/src/assets/images/products/product-soft-version/chocolate-sattu.png'
import Product4 from '@/src/assets/images/products/product-soft-version/aahar-mix.png'


const products = [
  {
    id: 1,
    name: "Cookies Jowar",
    price: "₹180",
    image: Product1,
    tags: ["Jowar", "No Sugar", "Baked", "Healthy"],
    lightColor: "#DCE5D1", 
    tagBg: "#E8ECE1",
    tagText: "#556344"
  },
  {
    id: 2,
    name: "Makhana Lime",
    price: "₹220",
    image: Product2,
    tags: ["Makhana", "Lime", "Roasted", "Snack"],
    lightColor: "#E5E1D1", 
    tagBg: "#EBE8DE",
    tagText: "#6E6848"
  },
  {
    id: 3,
    name: "Sattu Chocolate",
    price: "₹150",
    image: Product3,
    tags: ["Sattu", "Chocolate", "Summer", "Drink"],
    lightColor: "#E5DCD1", 
    tagBg: "#EDE7E1",
    tagText: "#736049"
  },
  {
    id: 4,
    name: "Ahara Mix",
    price: "₹200",
    image: Product4,
    tags: ["Nuts", "Seeds", "Mix", "Protein"],
    lightColor: "#b1c696", 
    tagBg: "#e0e4d6",
    tagText: "#525c48"
  },
];

export const BestSellers = () => {
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

        <ProductGrid>
          {products.map((product) => (
            <BestSellerCard 
              key={product.id} 
              product={product} 
              $animate={isVisible} 
            />
          ))}
        </ProductGrid>
      </BestSellersContainer>
    </BestSellersWrapper>
  );
};
