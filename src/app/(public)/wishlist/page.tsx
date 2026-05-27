"use client";

import { PageHero, EmptyState } from "@/src/components/ui";
import cartBg from "@/src/assets/images/section-images/wishlist.png";
import { useWishlist } from "@/src/hooks/useWishlist";
import { ALL_PRODUCTS } from "../shop/data/products";
import { ProductCard } from "../../../components/ui/cards/product-card/ProductCard";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";

import {
  WishlistPageWrapper,
  PageContainer,
  Container,
  WishlistGrid,
} from "./styled";

export default function WishlistPage() {
  const { wishlistIds, isHydrated } = useWishlist();

  const wishlistedProducts = ALL_PRODUCTS.filter((product) =>
    wishlistIds.includes(product.id),
  );

  // Next.js Hydration Guard
  if (!isHydrated) {
    return (
      <WishlistPageWrapper>
        <PageHero
          bg={cartBg.src}
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Wishlist" }]}
          title={
            <>
              <span className="line">
                <span className="w1">Your </span>
                <span className="w2">Healthy</span>
              </span>
              <span className="line">
                <span className="w3">Favorites</span>
              </span>
            </>
          }
          subtitle="Loading your favorite superfoods..."
        />
        <PageContainer>
          <Container>
            <div
              style={{
                textAlign: "center",
                padding: "100px 0",
                color: "#7e7c2a",
                fontSize: "18px",
                fontWeight: "600",
              }}
            >
              Loading your favorites...
            </div>
          </Container>
        </PageContainer>
      </WishlistPageWrapper>
    );
  }

  return (
    <WishlistPageWrapper>
      <PageHero
        bg={cartBg.src}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Wishlist" }]}
        title={
          <>
            <span className="line">
              <span className="w1">Your </span>
              <span className="w2">Healthy</span>
            </span>
            <span className="line">
              <span className="w3">Favorites</span>
            </span>
          </>
        }
        subtitle={
          wishlistedProducts.length > 0
            ? `You have saved ${wishlistedProducts.length} clean label item${wishlistedProducts.length === 1 ? "" : "s"} for later.`
            : "Keep track of the clean-label treats you love."
        }
      />

      <PageContainer>
        <Container>
          {wishlistedProducts.length === 0 ? (
            <EmptyState
              icon={
                <FavoriteTwoToneIcon
                  sx={{ fontSize: 44 }}
                  className="main-icon"
                />
              }
              badgeText="0 favorites • Empty list 🥺"
              title="No favorites saved yet"
              description="Looks like you haven't favorited any of our wholesome ingredients or high-protein treats yet. Tap the heart on products you love!"
              btnText="Explore Wholesome Treats"
            />
          ) : (
            <WishlistGrid>
              {wishlistedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </WishlistGrid>
          )}
        </Container>
      </PageContainer>
    </WishlistPageWrapper>
  );
}
