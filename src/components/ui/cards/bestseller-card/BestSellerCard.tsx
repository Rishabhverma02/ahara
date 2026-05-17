import React from 'react';
import { StaticImageData } from 'next/image';
import {
  CardWrapper,
  ImageContainer,
  PriceTag,
  ImageWrapper,
  InfoWrapper,
  ProductHeader,
  ProductName,
  OrderLink,
  OrderArrow,
  TagsWrapper,
  Tag
} from './styled';

export interface Product {
  id: number | string;
  name: string;
  price: string;
  image: StaticImageData;
  tags: string[];
  lightColor: string;
  tagBg: string;
  tagText: string;
}

export interface BestSellerCardProps {
  product: Product;
  $animate?: boolean;
}

export const BestSellerCard: React.FC<BestSellerCardProps> = ({ product, $animate = false }) => {
  return (
    <CardWrapper $animate={$animate}>
      <ImageContainer $bgColor={product.lightColor}>
        <PriceTag>{product.price}</PriceTag>
        <ImageWrapper style={{ backgroundImage: `url(${product.image.src})` }} />
      </ImageContainer>
      
      <InfoWrapper>
        <ProductHeader>
          <ProductName>{product.name}</ProductName>
          <OrderLink>
            Order Now <OrderArrow>↗</OrderArrow>
          </OrderLink>
        </ProductHeader>
        
        <TagsWrapper>
          {product.tags.map((tag, index) => (
            <Tag 
              key={index} 
              $bgColor={product.tagBg} 
              $textColor={product.tagText}
            >
              {tag}
            </Tag>
          ))}
        </TagsWrapper>
      </InfoWrapper>
    </CardWrapper>
  );
};
