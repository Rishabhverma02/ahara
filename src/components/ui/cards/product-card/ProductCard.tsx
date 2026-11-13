"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Plus, Star } from "lucide-react";
import type { Product } from "@/src/services/catalog";
import { useProductActions } from "@/src/hooks/useProductActions";
import { formatINR } from "@/src/lib/pricing";
import { Card, Media, Badge, Save, Body, Meta, Rating, Title, Foot, Price, Add } from "./styled";

interface ProductCardProps {
  product: Product;
  /** override the catalogue photo (e.g. lighter studio shots on the home page) */
  image?: Product["image"];
  priority?: boolean;
}

/**
 * Single product card used across shop, wishlist, cart suggestions and home.
 * The whole card is clickable via a stretched title link; the wishlist and
 * add buttons sit above it — no interactive elements nested inside <a>.
 */
export const ProductCard = ({ product, image, priority }: ProductCardProps) => {
  const { addToCart, toggleSaved, saved } = useProductActions(product);
  const href = `/shop/${product.slug}`;
  const [line, flavour] = product.name.split(" – ");

  return (
    <Card>
      <Media>
        <Image
          src={image ?? product.image}
          alt=""
          fill
          priority={priority}
          placeholder="blur"
          sizes="(max-width: 640px) 85vw, (max-width: 1140px) 45vw, 25vw"
        />
        {product.badge && <Badge $type={product.badge}>{product.badge}</Badge>}
        <Save
          type="button"
          onClick={toggleSaved}
          aria-pressed={saved}
          aria-label={saved ? `Remove ${product.name} from wishlist` : `Save ${product.name} to wishlist`}
        >
          <Heart size={18} fill={saved ? "currentColor" : "none"} />
        </Save>
      </Media>

      <Body>
        <Meta>
          <span>{product.category}</span>
          <Rating aria-label={`Rated ${product.rating} out of 5`}>
            <Star size={13} fill="currentColor" aria-hidden /> {product.rating.toFixed(1)}
            <small>({product.reviewCount})</small>
          </Rating>
        </Meta>

        <Title>
          <Link href={href}>
            {flavour ? (
              <>
                {line} <em>{flavour}</em>
              </>
            ) : (
              product.name
            )}
          </Link>
        </Title>

        <Foot>
          <Price>
            {formatINR(product.price)}
            {product.originalPrice && <s>{formatINR(product.originalPrice)}</s>}
          </Price>
          <Add type="button" onClick={() => addToCart()} aria-label={`Add ${product.name} to cart`}>
            <Plus size={16} strokeWidth={2.5} aria-hidden />
            <span>Add</span>
          </Add>
        </Foot>
      </Body>
    </Card>
  );
};
