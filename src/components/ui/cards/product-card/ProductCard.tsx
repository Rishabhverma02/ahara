"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineShoppingBag, HiHeart, HiOutlineHeart } from "react-icons/hi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Product } from "../../../../app/(public)/shop/data/products";

import { useCart } from "@/src/hooks/useCart";
import { useWishlist } from "@/src/hooks/useWishlist";
import { AddToCartCircle, Badge, CardBody, CardContainer, Description, FooterRow, ImageContainer, OriginalPrice, Price, PriceInfo, PriceLabel, PriceRow, RatingContainer, Stars, Tag, TagRow, Title, WishlistButton } from "./styled";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }:ProductCardProps) => {
  const { addItem } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const isFav = isInWishlist(product.id);

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      productId: product.id,
      slug: product.slug,
      name: product.name,
      price: product.price,
      quantity: 1,
      size: "Standard",
      image: product.image,
    });
  };

  return (
    <Link
      href={`/shop/${product.slug}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <CardContainer>
        <ImageContainer>
          <WishlistButton
            $active={isFav}
            onClick={handleWishlist}
            aria-label={isFav ? "Remove from wishlist" : "Add to wishlist"}
          >
            {isFav ? <HiHeart /> : <HiOutlineHeart />}
          </WishlistButton>
          {product.badge && (
            <Badge $type={product.badge}>{product.badge}</Badge>
          )}
          <Image
            src={product.image}
            alt={product.name}
            fill
            style={{
              objectFit: "cover",
              transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            onMouseEnter={(e) => {
              const img = e.currentTarget as HTMLImageElement;
              img.style.transform = "scale(1.06)";
            }}
            onMouseLeave={(e) => {
              const img = e.currentTarget as HTMLImageElement;
              img.style.transform = "scale(1)";
            }}
            sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </ImageContainer>

        <CardBody>
          <RatingContainer>
            <Stars>
              {[1, 2, 3, 4, 5].map((n) =>
                n <= Math.round(product.rating) ? (
                  <AiFillStar key={n} />
                ) : (
                  <AiOutlineStar key={n} />
                ),
              )}
            </Stars>
            <span>({product.reviewCount})</span>
          </RatingContainer>

          <Title>{product.name}</Title>
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
                {product.originalPrice && (
                  <OriginalPrice>₹{product.originalPrice}</OriginalPrice>
                )}
              </PriceRow>
            </PriceInfo>

            <AddToCartCircle aria-label="Add to cart" onClick={handleAddToCart}>
              <HiOutlineShoppingBag />
            </AddToCartCircle>
          </FooterRow>
        </CardBody>
      </CardContainer>
    </Link>
  );
};
