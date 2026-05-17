"use client";

import Image from "next/image";
import {
  HeroWrapper,
  HeroGrid,
  HeroContent,
  HeroTitle,
  HeroDescription,
  HeroButtonGroup,
  HeroButton,
  HeroSecondaryButton,
  HeroImageWrapper,
  FloatingImage,
  FloatingBadge,
  DecorativeLeaf,
} from "./styled";

import makhanaJar from "@/src/assets/images/ingredients/Floating png/makhana jar.png";
import chilliMakhana from "@/src/assets/images/ingredients/Floating png/chilli makhana .png";
import chocolateMakhana from "@/src/assets/images/ingredients/Floating png/chocklet makhana.png";
import millets from "@/src/assets/images/ingredients/Floating png/millets.png";
import moringaLeaves from "@/src/assets/images/ingredients/Floating png/moringa leaves.png";
import moringaSticks from "@/src/assets/images/ingredients/Floating png/moringa sticks.png";
import sattuLeft from "@/src/assets/images/ingredients/Floating png/sattu scup left.png";
import sattuRight from "@/src/assets/images/ingredients/Floating png/sattu scup right.png";
import {
  HiOutlineCheckBadge,
  HiOutlineSparkles,
  HiOutlineFire,
} from "react-icons/hi2";
import { 
  GiOakLeaf, 
  GiMapleLeaf, 
  GiLeafSkeleton, 
  GiFallingLeaf,
  GiVineFlower 
} from "react-icons/gi";

export const Hero = () => {
  return (
    <HeroWrapper>
      {/* Background Decorative Leaves */}
      <DecorativeLeaf $top="5%" $left="2%" $size="120px" $color="#7E7C2A" $opacity={0.15} $animType={1} $duration="25s">
        <GiOakLeaf />
      </DecorativeLeaf>
      <DecorativeLeaf $top="15%" $right="5%" $size="180px" $color="#a3a14d" $opacity={0.12} $animType={2} $duration="30s">
        <GiMapleLeaf />
      </DecorativeLeaf>
      <DecorativeLeaf $bottom="10%" $left="8%" $size="150px" $color="#5d5b1f" $opacity={0.18} $animType={3} $duration="22s">
        <GiLeafSkeleton />
      </DecorativeLeaf>
      <DecorativeLeaf $bottom="20%" $right="15%" $size="100px" $color="#7E7C2A" $opacity={0.14} $animType={1} $duration="28s">
        <GiLeafSkeleton />
      </DecorativeLeaf>
      <DecorativeLeaf $top="40%" $left="45%" $size="80px" $color="#7E7C2A" $opacity={0.1} $animType={2} $duration="35s">
        <GiFallingLeaf />
      </DecorativeLeaf>
      <DecorativeLeaf $top="60%" $right="2%" $size="200px" $color="#a3a14d" $opacity={0.08} $animType={3} $duration="40s">
        <GiVineFlower />
      </DecorativeLeaf>
      <DecorativeLeaf $bottom="40%" $left="-5%" $size="160px" $color="#7E7C2A" $opacity={0.12} $animType={1} $duration="24s">
        <GiOakLeaf />
      </DecorativeLeaf>
      <DecorativeLeaf $top="10%" $left="40%" $size="60px" $color="#5d5b1f" $opacity={0.1} $animType={2} $duration="32s">
        <GiLeafSkeleton />
      </DecorativeLeaf>

      <HeroGrid>
        {/* Left: Content */}
        <HeroContent>
          <HeroTitle>
            <span className="line">
              <span className="w1">Ancient </span>
              <span className="w2">Food,</span>
            </span>

            <span className="line">
              <span className="w3">Modern </span>
              <span className="w4">Life</span>
            </span>
          </HeroTitle>

          <HeroDescription>
            Inspired by India&apos;s ancient food wisdom, AHARA reimagines
            forgotten superfoods into clean, nourishing snacks and nutrition
            products made for today&apos;s lifestyle.
          </HeroDescription>

          <HeroButtonGroup>
            <HeroButton>Explore Our Products</HeroButton>
            <HeroSecondaryButton>Our Story</HeroSecondaryButton>
          </HeroButtonGroup>
        </HeroContent>

        {/* Right: Image */}
        <HeroImageWrapper>
          <FloatingBadge $top="10%" $left="-5%" $delay="0.2s">
            <HiOutlineCheckBadge /> 100% Organic
          </FloatingBadge>
          <FloatingBadge $bottom="10%" $right="36%" $delay="1s">
            <HiOutlineSparkles /> Ancient Wisdom
          </FloatingBadge>
          <FloatingBadge $top="40%" $right="-10%" $delay="0.5s">
            <HiOutlineFire /> High Protein
          </FloatingBadge>

          {/* Main Product Jar */}
          <FloatingImage $width="300px" $zIndex={5} $delay="0s">
            <Image src={makhanaJar} alt="Makhana Jar" priority />
          </FloatingImage>

          {/* Scattered Ingredients/Products */}
          <FloatingImage
            $width="180px"
            $top="15%"
            $right="15%"
            $delay="0.5s"
            $zIndex={4}
          >
            <Image src={chilliMakhana} alt="Chilli Makhana" />
          </FloatingImage>

          <FloatingImage
            $width="160px"
            $bottom="12%"
            $left="12%"
            $delay="1.2s"
            $zIndex={4}
          >
            <Image src={chocolateMakhana} alt="Chocolate Makhana" />
          </FloatingImage>

          <FloatingImage
            $width="140px"
            $top="22%"
            $left="10%"
            $delay="0.8s"
            $zIndex={3}
          >
            <Image src={millets} alt="Millets" />
          </FloatingImage>

          <FloatingImage
            $width="120px"
            $bottom="38%"
            $right="12%"
            $delay="1.5s"
            $zIndex={3}
          >
            <Image src={moringaSticks} alt="Moringa Sticks" />
          </FloatingImage>

          <FloatingImage
            $width="100px"
            $top="48%"
            $left="2%"
            $delay="2s"
            $zIndex={2}
          >
            <Image src={moringaLeaves} alt="Moringa Leaves" />
          </FloatingImage>

          <FloatingImage
            $width="150px"
            $bottom="5%"
            $right="15%"
            $delay="0.3s"
            $zIndex={2}
          >
            <Image src={sattuRight} alt="Sattu Scoop" />
          </FloatingImage>

          <FloatingImage
            $width="130px"
            $top="8%"
            $left="30%"
            $delay="1.8s"
            $zIndex={2}
          >
            <Image src={sattuLeft} alt="Sattu Scoop" />
          </FloatingImage>
        </HeroImageWrapper>
      </HeroGrid>
    </HeroWrapper>
  );
};
