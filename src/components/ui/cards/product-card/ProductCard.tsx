"use client";

import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { Heart, Plus, Star } from "lucide-react";
import type { Product } from "@/src/services/catalog";
import { useProductActions } from "@/src/hooks/useProductActions";
import { formatINR } from "@/src/lib/pricing";
import { mq } from "@/src/theme";

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

const Card = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: var(--radius-lg);
  background: var(--surface);
  border: 1px solid var(--line);
  overflow: hidden;
  transition:
    border-color 0.3s var(--ease-out),
    box-shadow 0.3s var(--ease-out);

  &:hover {
    border-color: var(--line-strong);
    box-shadow: var(--shadow);
  }
  &:hover img {
    transform: scale(1.04);
  }
  &:focus-within {
    border-color: var(--olive);
  }
`;

const Media = styled.div`
  position: relative;
  aspect-ratio: 4 / 4.2;
  background: var(--paper-2);
  overflow: hidden;

  img {
    object-fit: cover;
    transition: transform 0.7s var(--ease-out);
  }
`;

const Badge = styled.span<{ $type: string }>`
  position: absolute;
  top: 0.85rem;
  left: 0.85rem;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background: ${({ $type }) => ($type === "New" ? "var(--saffron)" : $type === "Sale" ? "var(--danger)" : "var(--forest)")};
  color: ${({ $type }) => ($type === "New" ? "var(--forest)" : "var(--paper)")};
`;

const Save = styled.button`
  position: absolute;
  z-index: 2;
  top: 0.65rem;
  right: 0.65rem;
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 0;
  background: rgb(255 252 246 / 0.9);
  color: var(--ink);
  transition:
    color 0.2s,
    transform 0.2s var(--ease-out);

  &[aria-pressed="true"] {
    color: var(--danger);
  }
  &:hover {
    transform: scale(1.08);
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem 1.1rem 1.1rem;
  flex: 1;
`;

const Meta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.75rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--muted);
`;

const Rating = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  text-transform: none;
  letter-spacing: 0;
  color: var(--ink-2);
  font-weight: 600;

  svg {
    color: var(--saffron);
  }
  small {
    font-weight: 400;
    color: var(--muted);
  }
`;

const Title = styled.h3`
  font-family: var(--font-display);
  font-variation-settings: "opsz" 36;
  font-weight: 500;
  font-size: 1.1875rem;
  line-height: 1.25;
  letter-spacing: -0.01em;

  a {
    text-decoration: none;
    color: var(--ink);

    /* stretched link: the whole card is the hit area */
    &::after {
      content: "";
      position: absolute;
      inset: 0;
      z-index: 1;
    }
    &:focus-visible {
      outline: none;
    }
  }

  em {
    font-style: italic;
    color: var(--olive);
  }
`;

const Foot = styled.div`
  margin-top: auto;
  padding-top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Price = styled.p`
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 1.0625rem;
  color: var(--ink);

  s {
    font-weight: 400;
    font-size: 0.875rem;
    color: var(--muted);
  }
`;

const Add = styled.button`
  position: relative;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.55rem 0.85rem;
  border-radius: var(--radius-sm);
  border: 1px solid var(--line-strong);
  background: transparent;
  color: var(--ink);
  font-size: 0.875rem;
  font-weight: 600;
  transition:
    background 0.2s,
    color 0.2s,
    border-color 0.2s;

  &:hover {
    background: var(--olive);
    border-color: var(--olive);
    color: #fff;
  }

  ${mq.sm} {
    span {
      display: none;
    }
    padding: 0.55rem;
  }
`;
