"use client";

import { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { HiHeart, HiOutlineHeart } from 'react-icons/hi';
import { useCart } from '@/src/hooks/useCart';
import { useWishlist } from '@/src/hooks/useWishlist';
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
  Tag,
  WishlistButton
} from './styled';

export interface Product {
  id: number;
  slug: string;
  name: string;
  price: string;
  numericPrice: number;
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

export const BestSellerCard = ({ product, $animate = false }: BestSellerCardProps) => {
  const router = useRouter();
  const { addItem } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

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
      price: product.numericPrice,
      quantity: 1,
      size: "Standard",
      image: product.image,
    });
    router.push('/cart');
  };


  return (
    <Link href={`/shop/${product.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <CardWrapper $animate={$animate}>
        <ImageContainer $bgColor={product.lightColor}>
          <WishlistButton
            $active={isFav}
            onClick={handleWishlist}
            aria-label={isFav ? "Remove from wishlist" : "Add to wishlist"}
          >
            {isFav ? <HiHeart /> : <HiOutlineHeart />}
          </WishlistButton>
          <PriceTag>{product.price}</PriceTag>
          <ImageWrapper style={{ backgroundImage: `url(${product.image.src})` }} />
        </ImageContainer>
        
        <InfoWrapper>
          <ProductHeader>
            <ProductName>{product.name}</ProductName>
            <OrderLink onClick={handleAddToCart}>
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
    </Link>
  );
};

