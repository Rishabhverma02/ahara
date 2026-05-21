"use client";

import React from "react";
import {
  AssistantWrapper,
  Orb,
  HeadlineBand,
  EyebrowPill,
  MainHeading,
  SubDesc,
  Stage,
  GroundGlow,
  CharacterImg,
  ChatFloat,
  StatFloat,
  ResponseFloat,
  FloatingCard,
  GlassPanel,
  GlassPanelRow,
  ChatAvatar,
  ChatQuestion,
  ResponseBubble,
  ResponseText,
  TypingBubble,
  TypingDot,
  StatBadge,
  StatIcon,
  StatInfo,
  StatNumber,
  StatLabel,
  BottomStrip,
  Divider,
  StatsRow,
  StatCell,
  StatCellNumber,
  StatCellLabel,
  StatCellDivider,
  TickerWrapper,
  TickerTrack,
  TickerItem,
  CTAGroup,
  PrimaryBtn,
  GhostBtn,
} from "./styled";

import Character from "@/src/assets/images/section-images/Intro.png";

const tickerItems = [
  "Clean Label",
  "Ancient Wisdom",
  "No Additives",
  "Ayurvedic Science",
  "Ethically Sourced",
  "100% Natural",
  "Modern Wellness",
  "Gut Friendly",
  "Plant Based",
  "Zero Junk",
];

const stats = [
  { value: "500+", label: "Ingredients mapped" },
  { value: "1k+", label: "Recipes created" },
  { value: "100%", label: "Clean label" },
  { value: "24/7", label: "Always on" },
];

export const AssistantIntro = () => {
  return (
    <AssistantWrapper>
      <Orb
        $w="600px"
        $h="600px"
        $top="-200px"
        $left="-150px"
        $color="rgba(90, 138, 40, 0.12)"
        $blur="100px"
        $delay="0s"
      />
      <Orb
        $w="500px"
        $h="500px"
        $bottom="-100px"
        $right="-100px"
        $color="rgba(168, 194, 110, 0.10)"
        $blur="90px"
        $delay="3s"
      />
      <Orb
        $w="300px"
        $h="300px"
        $top="30%"
        $left="50%"
        $color="rgba(212, 240, 106, 0.05)"
        $blur="70px"
        $delay="1.5s"
      />

      <HeadlineBand>
        <EyebrowPill>✦ Meet Your Wellness Guide</EyebrowPill>
        <MainHeading>
          Hey, I&apos;m&nbsp;<em>Kairo!</em>
          <br />
          Your Ahara wellness&nbsp;assistant
        </MainHeading>
        <SubDesc>
          Ancient wisdom meets modern AI — Kairo helps you find the right
          superfood, decode ingredients, and live cleaner every day.
        </SubDesc>
      </HeadlineBand>

      <Stage>
        <GroundGlow />

        <ChatFloat $delay="0.3s">
          <GlassPanel>
            <GlassPanelRow>
              <ChatAvatar>🌾</ChatAvatar>
              <ChatQuestion>
                What are the benefits of Makhana for digestion?
              </ChatQuestion>
            </GlassPanelRow>
          </GlassPanel>
        </ChatFloat>

        <StatFloat $delay="0.5s">
          <StatBadge>
            <StatIcon>🧠</StatIcon>
            <StatInfo>
              <StatNumber>10k+</StatNumber>
              <StatLabel>Wellness queries answered</StatLabel>
            </StatInfo>
          </StatBadge>
        </StatFloat>

        <FloatingCard
          $delay="1.0s"
          style={{
            position: "absolute",
            bottom: 90,
            left: "max(24px, calc(50% - 480px))",
          }}
        >
          <StatBadge>
            <StatIcon>🌿</StatIcon>
            <StatInfo>
              <StatNumber style={{ fontSize: 15, letterSpacing: 0 }}>
                Did you know?
              </StatNumber>
              <StatLabel style={{ maxWidth: 160 }}>
                Ashwagandha lowers cortisol by up to 30%
              </StatLabel>
            </StatInfo>
          </StatBadge>
        </FloatingCard>

        <ResponseFloat $delay="0.8s">
          <ResponseBubble>
            <ResponseText>
              Makhana is rich in fibre &amp; magnesium — great for gut health
              and reducing bloating! 🌾
            </ResponseText>
          </ResponseBubble>
          <TypingBubble>
            <TypingDot $delay="0s" />
            <TypingDot $delay="0.2s" />
            <TypingDot $delay="0.4s" />
          </TypingBubble>
        </ResponseFloat>

        <CharacterImg
          src={Character.src}
          alt="Kairo – Ahara AI wellness assistant"
        />
      </Stage>

      <BottomStrip>
        <Divider />

        <StatsRow>
          {stats.map((s, i) => (
            <React.Fragment key={i}>
              <StatCell>
                <StatCellNumber>{s.value}</StatCellNumber>
                <StatCellLabel>{s.label}</StatCellLabel>
              </StatCell>
              {i < stats.length - 1 && <StatCellDivider />}
            </React.Fragment>
          ))}
        </StatsRow>

        <TickerWrapper>
          <TickerTrack>
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <TickerItem key={i}>{item}</TickerItem>
            ))}
          </TickerTrack>
        </TickerWrapper>

        <CTAGroup>
          <PrimaryBtn href="#chat">Chat with Kairo →</PrimaryBtn>
          <GhostBtn href="/about">Learn more about Kairo</GhostBtn>
        </CTAGroup>
      </BottomStrip>
    </AssistantWrapper>
  );
};
