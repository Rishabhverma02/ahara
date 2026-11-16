"use client";

import React from "react";
import Image from "next/image";
import { HiOutlineShoppingBag, HiHeart, HiOutlineHeart } from "react-icons/hi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import type { Product } from "@/src/services/catalog";
import { useProductActions } from "@/src/hooks/useProductActions";
import {
  AddToCartCircle,
  Badge,
  CardBody,
  CardContainer,
  CardLink,
  Description,
  FooterRow,
  ImageContainer,
  OriginalPrice,
  Price,
  PriceInfo,
  PriceLabel,
  PriceRow,
  RatingContainer,
  Stars,
  Tag,
  TagRow,
  Title,
  WishlistButton,
} from "./styled";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

/**
 * Shop product card. The whole card is clickable through a stretched link on
 * the title, so the wishlist and add-to-cart buttons aren't nested inside an
 * <a> (invalid HTML that confused keyboard and screen-reader users).
 */
export const ProductCard = ({ product, priority }: ProductCardProps) => {
  const { addToCart, toggleSaved, saved } = useProductActions(product);

  return (
    <CardContainer as="article">
      <ImageContainer>
        <WishlistButton
          type="button"
          $active={saved}
          onClick={toggleSaved}
          aria-label={saved ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
          aria-pressed={saved}
        >
          {saved ? <HiHeart /> : <HiOutlineHeart />}
        </WishlistButton>
        {product.badge && <Badge $type={product.badge}>{product.badge}</Badge>}
        <Image
          src={product.image}
          alt={product.name}
          fill
          priority={priority}
          placeholder="blur"
          sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </ImageContainer>

      <CardBody>
        <RatingContainer aria-label={`Rated ${product.rating} out of 5`}>
          <Stars>
            {[1, 2, 3, 4, 5].map((n) =>
              n <= Math.round(product.rating) ? <AiFillStar key={n} /> : <AiOutlineStar key={n} />,
            )}
          </Stars>
          <span>({product.reviewCount})</span>
        </RatingContainer>

        <Title>
          <CardLink href={`/shop/${product.slug}`}>{product.name}</CardLink>
        </Title>
        <Description>{product.description}</Description>

        <TagRow>
          {product.tags.slice(0, 2).map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </TagRow>

        <FooterRow>
          <PriceInfo>
            <PriceLabel>Price</PriceLabel>
            <PriceRow>
              <Price>₹{product.price}</Price>
              {product.originalPrice && <OriginalPrice>₹{product.originalPrice}</OriginalPrice>}
            </PriceRow>
          </PriceInfo>

          <AddToCartCircle
            type="button"
            aria-label={`Add ${product.name} to cart`}
            onClick={() => addToCart()}
          >
            <HiOutlineShoppingBag />
          </AddToCartCircle>
        </FooterRow>
      </CardBody>
    </CardContainer>
  );
};
