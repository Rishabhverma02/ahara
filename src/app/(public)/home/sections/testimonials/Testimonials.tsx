"use client";

import React from "react";
import {
  TestimonialsWrapper,
  TestimonialsContainer,
  TestimonialGrid,
  BaseCard,
  SpeechBubbleWrapper,
  SpeechBubbleCard,
  QuoteIconTopLeft,
  QuoteIconBottomRight,
  QuoteText,
  QuoteTextCentered,
  QuoteTextCenteredItalic,
  AuthorRow,
  AuthorDetails,
  AuthorDetailsCentered,
  AuthorName,
  AuthorRole,
  AuthorAvatar,
  SmallAvatar,
  OverlappingAvatar,
  StarRatingCentered,
  CardHeadingCentered,
  TallCardImage,
  CardContentSection,
  SignatureText,
  SplitImage,
  SplitContent,
  BubblePointerCentred,
  BubblePointerLeft,
  AvatarGroupRow,
  GroupAvatar,
  LargeCircleAvatar,
  CenteredAvatarContainer,
  DecLeafTopLeft,
  DecLeafBottomRight,
} from "./styled";
import { HiStar } from "react-icons/hi";
import { SectionHeading } from "@/src/components";
import leavesImg from "@/src/assets/images/section-images/leaves.png";
import mushroomsImg from "@/src/assets/images/section-images/mashrooms.png";

import MinalShrama from "@/src/assets/images/testimonials/MS2.png";
import RamanOjha from "@/src/assets/images/testimonials/Raman Ojha.png";
import Tanvi_Gokhale from "@/src/assets/images/testimonials/Tanvi Gokhale.png";
import PeatikVerma from "@/src/assets/images/testimonials/Pratik Verma.png";
import AvniPurohit from "@/src/assets/images/testimonials/Avni Puhorit.png";
import Priya from "@/src/assets/images/testimonials/Priya.png";
import RiyaSoni from "@/src/assets/images/testimonials/Minal Shrama.png";
import img1 from "@/src/assets/images/testimonials/img1.png";
import img2 from "@/src/assets/images/testimonials/img2.png";
import img3 from "@/src/assets/images/testimonials/img3.png";

const testimonials = [
  {
    type: "quote-avatar-row",
    quote:
      "Absolutely in love with the quality. Sourced properly and super clean. No hidden additives or preservatives.",
    name: "Tanvi Gokhale",
    role: "Co-Founder, Koru Kids",
    avatar: Tanvi_Gokhale.src,
  },
  {
    type: "overlapping-avatar",
    title: "I really appreciate!!",
    quote:
      "Ahara's commitment to clean, authentic ingredients shines through. I really appreciate the honest packaging!",
    name: "Avni Purohit",
    role: "@Hindley.Es",
    rating: 5,
    avatar: AvniPurohit.src,
  },
  {
    type: "tall-portrait",
    quote:
      "The ancient wisdom of Ayurveda adapted perfectly for our fast-paced daily lives. Love it!",
    avatar: MinalShrama.src,
    signature: "Minal Sharma",
  },
  {
    type: "horizontal-split",
    quote:
      "Finally a snack that doesn't make me feel guilty. Super crunchy and tasty.",
    name: "Raman Ojha",
    role: "Influencer",
    avatar: RamanOjha.src,
  },
  {
    type: "group-speech-bubble",
    title: "I was very impressed!",
    quote:
      "I was very impressed! The quality and taste are unmatched. Completely natural and nourishing.",
    name: "Wilkins Micawber",
    avatars: [img1.src, img2.src, img3.src],
  },
  {
    type: "bottom-speech-bubble",
    quote:
      "The roasted makhanas are out of this world. Absolutely clean, healthy, and delicious.",
    rating: 5,
    name: "Riya Soni",
    avatar: RiyaSoni.src,
    signature: "Riya Soni",
  },
  {
    type: "split-clean",
    quote:
      "Every morning starts with their ancient grains granola. It has drastically improved my digestion.",
    name: "Peatik Verma",
    role: "Co-Founder, Gravida.com",
    avatar: PeatikVerma.src,
  },
  {
    type: "classic-clean",
    quote:
      "Highly recommend Ahara products to anyone who values clean eating and authentic ingredients.",
    name: "Priya Mishra",
    role: "Fermentum Odio Co.",
    avatar: Priya.src,
  },
];

export const Testimonials = () => {
  return (
    <TestimonialsWrapper>
      <DecLeafTopLeft
        style={{
          backgroundImage: `url(${leavesImg.src})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <DecLeafBottomRight
        style={{
          backgroundImage: `url(${mushroomsImg.src})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <TestimonialsContainer>
        <SectionHeading
          title="Customer Stories"
          subHeading="Loved by You"
          desc="Real experiences from people who have embraced the Ahara lifestyle."
          align="center"
        />
        <TestimonialGrid>
          {testimonials.map((t, index) => {
            if (t.type === "quote-avatar-row") {
              return (
                <BaseCard key={index} className="style-a">
                  <QuoteIconTopLeft>“</QuoteIconTopLeft>
                  <QuoteText style={{ paddingTop: "25px" }}>
                    {t.quote}
                  </QuoteText>
                  <AuthorRow>
                    <AuthorDetails>
                      <AuthorName>{t.name}</AuthorName>
                      <AuthorRole>{t.role}</AuthorRole>
                    </AuthorDetails>
                    <AuthorAvatar src={t.avatar} alt={t.name} />
                  </AuthorRow>
                </BaseCard>
              );
            }

            if (t.type === "overlapping-avatar") {
              return (
                <BaseCard key={index} className="style-b">
                  <OverlappingAvatar src={t.avatar} alt={t.name} />
                  {t.rating && (
                    <StarRatingCentered>
                      {[...Array(t.rating)].map((_, i) => (
                        <HiStar key={i} />
                      ))}
                    </StarRatingCentered>
                  )}
                  {t.title && (
                    <CardHeadingCentered>{t.title}</CardHeadingCentered>
                  )}
                  <QuoteTextCentered>{t.quote}</QuoteTextCentered>
                  <AuthorDetailsCentered>
                    <AuthorName>{t.name}</AuthorName>
                    <AuthorRole>{t.role}</AuthorRole>
                  </AuthorDetailsCentered>
                  <QuoteIconBottomRight>”</QuoteIconBottomRight>
                </BaseCard>
              );
            }

            if (t.type === "tall-portrait") {
              return (
                <BaseCard key={index} className="style-c">
                  <TallCardImage src={t.avatar} alt="Wellness Testimonial" />
                  <CardContentSection>
                    <QuoteText style={{ marginBottom: "5px" }}>
                      {t.quote}
                    </QuoteText>
                    {t.signature && (
                      <SignatureText>{t.signature}</SignatureText>
                    )}
                  </CardContentSection>
                </BaseCard>
              );
            }

            if (t.type === "horizontal-split") {
              return (
                <BaseCard key={index} className="style-d">
                  <SplitImage src={t.avatar} alt={t.name} />
                  <SplitContent>
                    <QuoteIconTopLeft style={{ top: "15px", left: "15px" }}>
                      “
                    </QuoteIconTopLeft>
                    <QuoteText
                      style={{ paddingTop: "20px", marginBottom: "15px" }}
                    >
                      {t.quote}
                    </QuoteText>
                    <AuthorDetails>
                      <AuthorName>{t.name}</AuthorName>
                      <AuthorRole>{t.role}</AuthorRole>
                    </AuthorDetails>
                  </SplitContent>
                </BaseCard>
              );
            }

            if (t.type === "group-speech-bubble") {
              return (
                <SpeechBubbleWrapper key={index} className="style-e">
                  <SpeechBubbleCard>
                    {t.title && (
                      <CardHeadingCentered>{t.title}</CardHeadingCentered>
                    )}
                    <QuoteTextCentered>{t.quote}</QuoteTextCentered>
                    <AuthorDetailsCentered style={{ marginTop: "10px" }}>
                      <AuthorName>{t.name}</AuthorName>
                    </AuthorDetailsCentered>
                    <BubblePointerCentred />
                  </SpeechBubbleCard>
                  <AvatarGroupRow>
                    {t.avatars?.map((img, i) => (
                      <GroupAvatar
                        key={i}
                        src={img}
                        $active={i === 1}
                        alt="Avatar"
                      />
                    ))}
                  </AvatarGroupRow>
                </SpeechBubbleWrapper>
              );
            }

            if (t.type === "bottom-speech-bubble") {
              return (
                <SpeechBubbleWrapper key={index}>
                  <SpeechBubbleCard>
                    <CenteredAvatarContainer>
                      <AuthorAvatar
                        src={t.avatar}
                        alt={t.name}
                        style={{
                          width: "50px",
                          height: "50px",
                          border: "2px solid #7e7c2a",
                        }}
                      />
                    </CenteredAvatarContainer>
                    {t.rating && (
                      <StarRatingCentered style={{ marginTop: "10px" }}>
                        {[...Array(t.rating)].map((_, i) => (
                          <HiStar key={i} />
                        ))}
                      </StarRatingCentered>
                    )}
                    <QuoteTextCenteredItalic
                      style={{ marginTop: "10px", marginBottom: "5px" }}
                    >
                      &ldquo;{t.quote}&rdquo;
                    </QuoteTextCenteredItalic>
                    {t.signature && (
                      <SignatureText>{t.signature}</SignatureText>
                    )}
                    <BubblePointerLeft />
                  </SpeechBubbleCard>
                </SpeechBubbleWrapper>
              );
            }

            if (t.type === "split-clean") {
              return (
                <BaseCard key={index} className="style-g">
                  <LargeCircleAvatar src={t.avatar} alt={t.name} />
                  <QuoteText
                    style={{ padding: "0 10px 15px", marginTop: "10px" }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </QuoteText>
                  <div className="author-row-g">
                    <AuthorDetails>
                      <AuthorName>{t.name}</AuthorName>
                      <AuthorRole>{t.role}</AuthorRole>
                    </AuthorDetails>
                  </div>
                </BaseCard>
              );
            }

            if (t.type === "classic-clean") {
              return (
                <BaseCard key={index} className="style-h">
                  <QuoteText>{t.quote}</QuoteText>
                  <AuthorRow>
                    <AuthorDetails>
                      <AuthorName>{t.name}</AuthorName>
                      <AuthorRole>{t.role}</AuthorRole>
                    </AuthorDetails>
                    <SmallAvatar src={t.avatar} alt={t.name} />
                  </AuthorRow>
                </BaseCard>
              );
            }

            return null;
          })}
        </TestimonialGrid>
      </TestimonialsContainer>
    </TestimonialsWrapper>
  );
};
