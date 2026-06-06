"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineShoppingBag, HiHeart, HiOutlineHeart } from "react-icons/hi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Product } from "../../../../app/(public)/shop/data/products";

import { useCart } from "@/src/hooks/useCart";
import { useWishlist } from "@/src/hooks/useWishlist";
import { AddToCartCircle, Badge, CardBody, CardContainer, Description, FooterRow, ImageContainer, OriginalPrice, Price, PriceInfo, PriceLabel, PriceRow, RatingContainer, Stars, Tag, TagRow, Title, WishlistButton } from "./styled";
import Snackbar from "@mui/material/Snackbar";
import { createPortal } from "react-dom";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }:ProductCardProps) => {
  const { addItem } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [openAlert, setOpenAlert] = useState(false);

  const isFav = isInWishlist(product.id);

  const playClickSound = () => {
    const audio = new Audio("/audio/click.mp3");
    audio.play().catch((err) => console.log("Audio play failed:", err));
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    playClickSound();
    toggleWishlist(product.id);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    playClickSound();
    addItem({
      productId: product.id,
      slug: product.slug,
      name: product.name,
      price: product.price,
      quantity: 1,
      size: "Standard",
      image: product.image,
    });
    setOpenAlert(true);
  };

  return (
    <>
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

      {openAlert && typeof document !== "undefined" && createPortal(
        <Snackbar
          open={openAlert}
          autoHideDuration={4000}
          onClose={(e) => {
            if (e) {
              e.preventDefault();
              e.stopPropagation();
            }
            setOpenAlert(false);
          }}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          style={{ zIndex: 9999 }}
        >
          <div
            style={{
              background: "#fffffff5",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid #549a2947",
              borderLeft: "4px solid #549a29ff",
              borderRadius: "8px",
              padding: "12px 18px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              boxShadow: "0 10px 25px #549a2931",
              maxWidth: "420px",
              fontFamily: "inherit",
            }}
          >
            {/* Left Icon (SVG check badge) */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#549a29ff",
                fontSize: "18px",
                flexShrink: 0,
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>

            {/* Message Content */}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "4px 6px" }}>
              <span style={{ color: "#549a29ff", fontSize: "13px", fontWeight: 700 }}>
                Success:
              </span>
              <span style={{ color: "#3e6e21ff", fontSize: "13px", fontWeight: 500 }}>
                {product.name} added to cart.
              </span>
            </div>
          </div>
        </Snackbar>,
        document.body
      )}
    </>
  );
};
