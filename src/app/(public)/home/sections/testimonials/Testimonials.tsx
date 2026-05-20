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

const testimonials = [
  {
    type: "quote-avatar-row",
    quote: "Absolutely in love with the quality. Sourced properly and super clean. No hidden additives or preservatives.",
    name: "James Brown",
    role: "CEO, Dining Co. / @jamesdining",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
  },
  {
    type: "overlapping-avatar",
    title: "I really appreciate!!",
    quote: "Ahara's commitment to clean, authentic ingredients shines through. I really appreciate the honest packaging!",
    name: "Hindley Earnshaw",
    role: "@Hindley.Es",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
  },
  {
    type: "tall-portrait",
    quote: "The ancient wisdom of Ayurveda adapted perfectly for our fast-paced daily lives. Love it!",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
    signature: "Linda Brown",
  },
  {
    type: "horizontal-split",
    quote: "Finally a snack that doesn't make me feel guilty. Super crunchy and tasty.",
    name: "Henry Vane",
    role: "Fermentum Co.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=250",
  },
  {
    type: "group-speech-bubble",
    title: "I was very impressed!",
    quote: "I was very impressed! The quality and taste are unmatched. Completely natural and nourishing.",
    name: "Wilkins Micawber",
    avatars: [
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=80",
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=80",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=80"
    ]
  },
  {
    type: "bottom-speech-bubble",
    quote: "The roasted makhanas are out of this world. Absolutely clean, healthy, and delicious.",
    rating: 5,
    name: "Isabelle Lipton",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
    signature: "Isabelle Lipton",
  },
  {
    type: "split-clean",
    quote: "Every morning starts with their ancient grains granola. It has drastically improved my digestion.",
    name: "Basil Hallward",
    role: "Co-Founder, Gravida.com",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150",
  },
  {
    type: "classic-clean",
    quote: "Highly recommend Ahara products to anyone who values clean eating and authentic ingredients.",
    name: "Victoria Wotton",
    role: "Fermentum Odio Co.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150",
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
                  <QuoteText style={{ paddingTop: "25px" }}>{t.quote}</QuoteText>
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
                  {t.title && <CardHeadingCentered>{t.title}</CardHeadingCentered>}
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
                    <QuoteText style={{ marginBottom: "5px" }}>{t.quote}</QuoteText>
                    {t.signature && <SignatureText>{t.signature}</SignatureText>}
                  </CardContentSection>
                </BaseCard>
              );
            }

            if (t.type === "horizontal-split") {
              return (
                <BaseCard key={index} className="style-d">
                  <SplitImage src={t.avatar} alt={t.name} />
                  <SplitContent>
                    <QuoteIconTopLeft style={{ top: "15px", left: "15px" }}>“</QuoteIconTopLeft>
                    <QuoteText style={{ paddingTop: "20px", marginBottom: "15px" }}>{t.quote}</QuoteText>
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
                    {t.title && <CardHeadingCentered>{t.title}</CardHeadingCentered>}
                    <QuoteTextCentered>{t.quote}</QuoteTextCentered>
                    <AuthorDetailsCentered style={{ marginTop: "10px" }}>
                      <AuthorName>{t.name}</AuthorName>
                    </AuthorDetailsCentered>
                    <BubblePointerCentred />
                  </SpeechBubbleCard>
                  <AvatarGroupRow>
                    {t.avatars?.map((img, i) => (
                      <GroupAvatar key={i} src={img} $active={i === 1} alt="Avatar" />
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
                      <AuthorAvatar src={t.avatar} alt={t.name} style={{ width: "50px", height: "50px", border: "2px solid #7e7c2a" }} />
                    </CenteredAvatarContainer>
                    {t.rating && (
                      <StarRatingCentered style={{ marginTop: "10px" }}>
                        {[...Array(t.rating)].map((_, i) => (
                          <HiStar key={i} />
                        ))}
                      </StarRatingCentered>
                    )}
                    <QuoteTextCenteredItalic style={{ marginTop: "10px", marginBottom: "5px" }}>
                      &ldquo;{t.quote}&rdquo;
                    </QuoteTextCenteredItalic>
                    {t.signature && <SignatureText>{t.signature}</SignatureText>}
                    <BubblePointerLeft />
                  </SpeechBubbleCard>
                </SpeechBubbleWrapper>
              );
            }

            if (t.type === "split-clean") {
              return (
                <BaseCard key={index} className="style-g">
                  <LargeCircleAvatar src={t.avatar} alt={t.name} />
                  <QuoteText style={{ padding: "0 10px 15px", marginTop: "10px" }}>&ldquo;{t.quote}&rdquo;</QuoteText>
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
