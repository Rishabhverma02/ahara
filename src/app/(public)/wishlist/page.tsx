"use client";

import { PageHero, EmptyState, ProductCard } from "@/src/components/ui";
import { useWishlist } from "@/src/hooks/useWishlist";
import { ALL_PRODUCTS } from "@/src/data/products";
import { WishlistPageWrapper, PageContainer, Container, WishlistGrid } from "./styled";

export default function WishlistPage() {
  const { wishlistIds, isHydrated } = useWishlist();
  const saved = ALL_PRODUCTS.filter((p) => wishlistIds.includes(p.id));

  return (
    <WishlistPageWrapper>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Wishlist" }]}
        title={
          <>
            Saved <em>for later</em>
          </>
        }
        subtitle={
          !isHydrated
            ? " "
            : saved.length > 0
              ? `${saved.length} favourite${saved.length === 1 ? "" : "s"}, waiting for you.`
              : "Tap the heart on anything you love and it'll wait for you here."
        }
      />

      <PageContainer>
        <Container>
          {!isHydrated ? null : saved.length === 0 ? (
            <EmptyState
              pose="threeQuarter"
              kicker="No favourites yet"
              title="Kairo's still deciding too."
              description="Browse the range and tap the heart on the snacks you want to come back to."
              btnText="Explore the range"
            />
          ) : (
            <WishlistGrid>
              {saved.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </WishlistGrid>
          )}
        </Container>
      </PageContainer>
    </WishlistPageWrapper>
  );
}
