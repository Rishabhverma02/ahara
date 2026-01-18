"use client";

import Image from "next/image";
import heroImage from "@/src/assets/images/aharcutimg (1).png";

import {
  HeroWrapper,
  HeroGrid,
  HeroContent,
  HeroTitle,
  HeroDescription,
  HeroButton,
  HeroImageWrapper,
} from "./styled";

export const Hero = () => {
  return (
    <HeroWrapper>
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
            Inspired by India’s food wisdom, AHARA reimagines forgotten
            superfoods into clean, nourishing snacks and nutrition products made
            for today’s lifestyle.
          </HeroDescription>

          <HeroButton>Explore Our Products</HeroButton>
        </HeroContent>

        {/* Right: Image */}
        <HeroImageWrapper>
          <Image
            src={heroImage}
            alt="Ahaara Superfoods"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
        </HeroImageWrapper>
      </HeroGrid>
    </HeroWrapper>
  );
}
