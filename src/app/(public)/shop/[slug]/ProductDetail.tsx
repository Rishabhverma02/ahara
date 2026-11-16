"use client";

import { GppGoodTwoToneIcon, LocalShippingTwoToneIcon } from "@/src/components/ui/MaterialIcons";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getProductDetail, type Product } from "@/src/services/catalog";
import { useProductActions } from "@/src/hooks/useProductActions";
import { playClick as playClickSound } from "@/src/lib/sound";
import {
  DetailPageWrapper,
  Breadcrumb,
  TopSection,
  GalleryColumn,
  MainImage,
  ThumbnailRow,
  Thumbnail,
  InfoColumn,
  ProductHeaderGroup,
  ProductName,
  ShortDesc,
  TagPills,
  TagPill,
  PriceBlock,
  BigPrice,
  OldPrice,
  SizeSelectorGroup,
  SizeLabel,
  SizeRow,
  SizeChip,
  ActionRow,
  QtyBox,
  QtyBtn,
  QtyValue,
  AddToCartBtn,
  BuyNowBtn,
  DeliveryNote,
  CleanLabelSection,
  CleanLabelTitle,
  CleanLabelGrid,
  CleanLabelItem,
  CleanLabelText,
  Divider,
  TabsSection,
  TabBar,
  TabButton,
  TabContent,
  StoryLayout,
  StoryImage,
  StoryText,
  TextBlock,
  NutritionTable,
  ReviewsPlaceholder,
} from "./styled";

type Tab = "story" | "taste" | "consume" | "nutrition" | "reviews";

const TABS: { key: Tab; label: string }[] = [
  { key: "story", label: "Ingredient Story" },
  { key: "taste", label: "Taste & Texture" },
  { key: "consume", label: "How to Consume" },
  { key: "nutrition", label: "Nutrition Facts" },
  { key: "reviews", label: "Reviews" },
];

interface Props {
  product: Product;
}

export default function ProductDetail({ product }: Props) {
  const router = useRouter();
  const { addToCart } = useProductActions(product);
  const detail = getProductDetail(product.id);
  const sizes = detail?.sizes ?? [{ label: "Standard", price: product.price }];
  const cleanLabel = detail?.cleanLabelPromises ?? [
    "No Preservatives",
    "No Artificial Color",
    "No Refined Junk",
  ];
  const deliveryText = detail?.estimatedDelivery ?? "Estimated delivery in 3-5 days";

  const [selectedSize, setSelectedSize] = useState(0);
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState<Tab>("story");
  const [isAdding, setIsAdding] = useState(false);

  const currentPrice = sizes[selectedSize].price;
  // tags and health goals overlap for some products ("High Protein" in both)
  const pills = [...new Set([...product.tags, ...product.healthGoals.slice(0, 2)])];

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart({ quantity: qty, size: sizes[selectedSize].label, price: currentPrice });
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };

  const handleBuyNow = () => {
    addToCart({ quantity: qty, size: sizes[selectedSize].label, price: currentPrice, silent: true });
    router.push("/cart");
  };

  return (
    <DetailPageWrapper>
      <Breadcrumb>
        <Link href="/">Home</Link>
        <span>›</span>
        <Link href="/shop">Shop</Link>
        <span>›</span>
        <span style={{ color: "#5f320fff", fontWeight: 600 }}>{product.name}</span>
      </Breadcrumb>

      <TopSection>
        <GalleryColumn>
          <MainImage>
            <Image
              src={product.image}
              alt={product.name}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 960px) 100vw, 50vw"
              priority
            />
          </MainImage>
          <ThumbnailRow>
            {[0, 1, 2, 3].map((i) => (
              <Thumbnail key={i} $active={i === 0}>
                <Image
                  src={product.image}
                  alt={`${product.name} view ${i + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="72px"
                />
              </Thumbnail>
            ))}
          </ThumbnailRow>
        </GalleryColumn>

        <InfoColumn>
          <ProductHeaderGroup>
            <ProductName>{product.name}</ProductName>
            <ShortDesc>{product.description}</ShortDesc>
          </ProductHeaderGroup>

          <TagPills>
            {pills.map((t) => (
              <TagPill key={t}>{t}</TagPill>
            ))}
          </TagPills>

          <PriceBlock>
            <BigPrice>₹{currentPrice}</BigPrice>
            {product.originalPrice && <OldPrice>₹{product.originalPrice}</OldPrice>}
          </PriceBlock>

          <Divider />

          {sizes.length > 1 && (
            <SizeSelectorGroup>
              <SizeLabel>Size</SizeLabel>
              <SizeRow>
                {sizes.map((s, i) => (
                  <SizeChip
                    key={s.label}
                    $active={i === selectedSize}
                    onClick={() => {
                      playClickSound();
                      setSelectedSize(i);
                    }}
                  >
                    {s.label}
                  </SizeChip>
                ))}
              </SizeRow>
            </SizeSelectorGroup>
          )}

          <ActionRow>
            <QtyBox>
              <QtyBtn
                onClick={() => {
                  playClickSound();
                  setQty((q) => Math.max(1, q - 1));
                }}
              >
                −
              </QtyBtn>
              <QtyValue>{qty}</QtyValue>
              <QtyBtn
                onClick={() => {
                  playClickSound();
                  setQty((q) => q + 1);
                }}
              >
                +
              </QtyBtn>
            </QtyBox>
            <AddToCartBtn
              onClick={handleAddToCart}
              disabled={isAdding}
              style={{
                background: isAdding ? "#7e7c2a" : "#5f320fff",
              }}
            >
              {isAdding ? "Added! ✓" : "Add to Cart"}
            </AddToCartBtn>
            <BuyNowBtn onClick={handleBuyNow}>Buy Now</BuyNowBtn>
          </ActionRow>

          <DeliveryNote>
            <LocalShippingTwoToneIcon />
            {deliveryText}
          </DeliveryNote>

          <Divider />

          <CleanLabelSection>
            <CleanLabelTitle>Clean Label Promise</CleanLabelTitle>
            <CleanLabelGrid>
              {cleanLabel.map((item) => (
                <CleanLabelItem key={item}>
                  <GppGoodTwoToneIcon />
                  <CleanLabelText>{item}</CleanLabelText>
                </CleanLabelItem>
              ))}
            </CleanLabelGrid>
          </CleanLabelSection>
        </InfoColumn>
      </TopSection>

      <TabsSection>
        <TabBar>
          {TABS.map((tab) => (
            <TabButton
              key={tab.key}
              $active={activeTab === tab.key}
              onClick={() => {
                playClickSound();
                setActiveTab(tab.key);
              }}
            >
              {tab.label}
            </TabButton>
          ))}
        </TabBar>

        <TabContent>
          {activeTab === "story" && detail?.ingredientStory && (
            <StoryLayout>
              <StoryImage>
                <Image
                  src={product.image}
                  alt="Ingredient source"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
              </StoryImage>
              <StoryText>
                <h3>{detail.ingredientStory.title}</h3>
                {detail.ingredientStory.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </StoryText>
            </StoryLayout>
          )}

          {activeTab === "taste" && <TextBlock>{detail?.tasteTexture ?? "Details coming soon."}</TextBlock>}

          {activeTab === "consume" && <TextBlock>{detail?.howToConsume ?? "Details coming soon."}</TextBlock>}

          {activeTab === "nutrition" && detail?.nutritionFacts && (
            <NutritionTable>
              <tbody>
                {detail.nutritionFacts.map((row) => (
                  <tr key={row.label}>
                    <td>{row.label}</td>
                    <td>{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </NutritionTable>
          )}

          {activeTab === "reviews" && (
            <ReviewsPlaceholder>
              Reviews coming soon — be the first to share your experience!
            </ReviewsPlaceholder>
          )}
        </TabContent>
      </TabsSection>
    </DetailPageWrapper>
  );
}
