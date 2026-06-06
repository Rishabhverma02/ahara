"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/src/hooks/useCart";
import type { Product } from "../data/products";
import { PRODUCT_DETAILS } from "../data/product-details";
import { createPortal } from "react-dom";
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

import GppGoodTwoToneIcon from '@mui/icons-material/GppGoodTwoTone';
import LocalShippingTwoToneIcon from '@mui/icons-material/LocalShippingTwoTone';
import Snackbar from "@mui/material/Snackbar";

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
  const { addItem } = useCart();
  const detail = PRODUCT_DETAILS[product.id];
  const sizes = detail?.sizes ?? [{ label: "Standard", price: product.price }];
  const cleanLabel = detail?.cleanLabelPromises ?? ["No Preservatives", "No Artificial Color", "No Refined Junk"];
  const deliveryText = detail?.estimatedDelivery ?? "Estimated delivery in 3-5 days";

  const [selectedSize, setSelectedSize] = useState(0);
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState<Tab>("story");
  const [isAdding, setIsAdding] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  const currentPrice = sizes[selectedSize].price;

  const playClickSound = () => {
    const audio = new Audio("/audio/click.mp3");
    audio.play().catch((err) => console.log("Audio play failed:", err));
  };

  const handleAddToCart = () => {
    playClickSound();
    setIsAdding(true);
    addItem({
      productId: product.id,
      slug: product.slug,
      name: product.name,
      price: currentPrice,
      quantity: qty,
      size: sizes[selectedSize].label,
      image: product.image,
    });
    setOpenAlert(true);
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };

  const handleBuyNow = () => {
    playClickSound();
    addItem({
      productId: product.id,
      slug: product.slug,
      name: product.name,
      price: currentPrice,
      quantity: qty,
      size: sizes[selectedSize].label,
      image: product.image,
    });
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
            {product.tags.map((t) => (
              <TagPill key={t}>{t}</TagPill>
            ))}
            {product.healthGoals.slice(0, 2).map((g) => (
              <TagPill key={g}>{g}</TagPill>
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
            <AddToCartBtn onClick={handleAddToCart} disabled={isAdding} style={{
              background: isAdding ? "#7e7c2a" : "#5f320fff"
            }}>
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

          {activeTab === "taste" && (
            <TextBlock>{detail?.tasteTexture ?? "Details coming soon."}</TextBlock>
          )}

          {activeTab === "consume" && (
            <TextBlock>{detail?.howToConsume ?? "Details coming soon."}</TextBlock>
          )}

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

      {openAlert && typeof document !== "undefined" && createPortal(
        <Snackbar
          open={openAlert}
          autoHideDuration={4000}
          onClose={() => setOpenAlert(false)}
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
              boxShadow: "0 10px 25px rgba(58, 77, 43, 0.06)",
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
                {qty}x {product.name} ({sizes[selectedSize].label}) added to cart.
              </span>
            </div>
          </div>
        </Snackbar>,
        document.body
      )}
    </DetailPageWrapper>
  );
}
