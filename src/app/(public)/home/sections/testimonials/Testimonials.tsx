"use client";

import Image, { type StaticImageData } from "next/image";
import styled from "styled-components";
import { Star } from "lucide-react";
import { SectionHeading } from "@/src/components/ui";
import { useInView } from "@/src/hooks/useInView";
import { useSnapCarousel } from "@/src/hooks/useSnapCarousel";
import { container, mq, reveal, sectionY } from "@/src/theme";
import { Dots } from "../shared";
import { getAllProducts } from "@/src/services/catalog";

const ALL_PRODUCTS = getAllProducts();

// Aggregate from the catalogue rather than a hard-coded marketing number.
const TOTAL_REVIEWS = ALL_PRODUCTS.reduce((n, p) => n + p.reviewCount, 0);
const AVG_RATING =
  ALL_PRODUCTS.reduce((n, p) => n + p.rating * p.reviewCount, 0) / Math.max(1, TOTAL_REVIEWS);

import minal from "@/src/assets/images/testimonials/MS2.webp";
import raman from "@/src/assets/images/testimonials/Raman Ojha.webp";
import tanvi from "@/src/assets/images/testimonials/Tanvi Gokhale.webp";
import pratik from "@/src/assets/images/testimonials/Pratik Verma.webp";
import avni from "@/src/assets/images/testimonials/Avni Puhorit.webp";
import priya from "@/src/assets/images/testimonials/Priya.webp";
import riya from "@/src/assets/images/testimonials/Minal Shrama.webp";

/*
 * One featured quote + one consistent card style. The old section rendered
 * eight different card layouts in a single grid, which is what made it read
 * as a collage. Placeholder entries ("Wilkins Micawber", "Fermentum Odio Co.")
 * were removed.
 */
type Quote = { quote: string; name: string; role: string; avatar: StaticImageData };

const FEATURED = {
  quote: "The ancient wisdom of Ayurveda, adapted for our fast-paced lives. It's the first “healthy snack” my whole family actually fights over.",
  name: "Minal Sharma",
  role: "Bengaluru",
  avatar: minal,
};

const QUOTES: Quote[] = [
  { quote: "Absolutely in love with the quality. Sourced properly and super clean — no hidden additives or preservatives.", name: "Tanvi Gokhale", role: "Co-founder, Koru Kids", avatar: tanvi },
  { quote: "Finally a snack that doesn't make me feel guilty. Super crunchy, and the lime one is dangerously good.", name: "Raman Ojha", role: "Creator", avatar: raman },
  { quote: "Sattu every morning has genuinely improved my digestion. Tastes like home, packs like a protein shake.", name: "Pratik Verma", role: "Co-founder, Gravida", avatar: pratik },
  { quote: "The roasted makhanas are out of this world. Clean, light, and delicious.", name: "Riya Soni", role: "Mumbai", avatar: riya },
  { quote: "Their commitment to authentic ingredients shows. I really appreciate the honest packaging.", name: "Avni Purohit", role: "Nutrition student", avatar: avni },
  { quote: "I recommend Ahara to anyone who values clean eating. The cookies are my kids' new favourite.", name: "Priya Mishra", role: "Home chef, Pune", avatar: priya },
];

export const Testimonials = () => {
  const { ref, inView } = useInView<HTMLElement>();
  const { ref: rowRef, index, goTo } = useSnapCarousel(QUOTES.length);

  return (
    <Section ref={ref} aria-labelledby="reviews-title">
      <Top>
        <Head $in={inView}>
          <SectionHeading
            eyebrow="04 — Kind words"
            title={
              <span id="reviews-title">
                Loved in kitchens <em>across India.</em>
              </span>
            }
          />
          <Score>
            <strong>{AVG_RATING.toFixed(1)}</strong>
            <div>
              <Stars n={5} />
              <span>average across {TOTAL_REVIEWS.toLocaleString("en-IN")} product reviews</span>
            </div>
          </Score>
        </Head>

        <Feature $in={inView}>
          <Portrait>
            <Image src={FEATURED.avatar} alt={FEATURED.name} fill sizes="(max-width: 900px) 40vw, 260px" placeholder="blur" />
          </Portrait>
          <figure>
            <blockquote>“{FEATURED.quote}”</blockquote>
            <figcaption>
              <strong>{FEATURED.name}</strong> · {FEATURED.role}
            </figcaption>
          </figure>
        </Feature>
      </Top>

      <Grid ref={rowRef}>
        {QUOTES.map((q, i) => (
          <Card key={q.name} $in={inView} $i={i}>
            <Stars n={5} />
            <blockquote>{q.quote}</blockquote>
            <figcaption>
              <Image src={q.avatar} alt="" width={44} height={44} sizes="44px" />
              <span>
                <strong>{q.name}</strong>
                {q.role}
              </span>
            </figcaption>
          </Card>
        ))}
      </Grid>
      <MobileOnly>
        <Dots count={QUOTES.length} index={index} onSelect={goTo} label="Reviews" />
      </MobileOnly>
    </Section>
  );
};

const Stars = ({ n }: { n: number }) => (
  <StarRow aria-label={`${n} out of 5 stars`}>
    {Array.from({ length: n }, (_, i) => (
      <Star key={i} size={14} fill="currentColor" strokeWidth={0} aria-hidden />
    ))}
  </StarRow>
);

const Section = styled.section`
  ${container};
  ${sectionY};
`;

const Top = styled.div`
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: clamp(2rem, 5vw, 5rem);
  align-items: end;
  margin-bottom: clamp(2.5rem, 5vw, 4rem);

  ${mq.md} {
    grid-template-columns: 1fr;
  }
`;

const Head = styled.div<{ $in: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  ${({ $in }) => reveal($in)};
`;

const Score = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  strong {
    font-family: var(--font-display);
    font-size: 3.5rem;
    font-weight: 400;
    line-height: 1;
  }
  span {
    display: block;
    margin-top: 0.25rem;
    font-size: 0.875rem;
    color: var(--muted);
  }
`;

const StarRow = styled.div`
  display: flex;
  gap: 2px;
  color: var(--saffron);
`;

const Feature = styled.div<{ $in: boolean }>`
  display: grid;
  grid-template-columns: minmax(140px, 220px) 1fr;
  gap: clamp(1.25rem, 3vw, 2.5rem);
  align-items: center;
  padding: clamp(1.25rem, 3vw, 2rem);
  border-radius: var(--radius-lg);
  background: var(--forest);
  color: var(--paper);
  ${({ $in }) => reveal($in, 150)};

  blockquote {
    font-family: var(--font-display);
    font-style: italic;
    font-size: clamp(1.25rem, 1.05rem + 0.8vw, 1.75rem);
    line-height: 1.3;
  }
  figcaption {
    margin-top: 1.25rem;
    font-size: 0.875rem;
    color: rgb(246 241 230 / 0.7);
  }
  strong {
    color: var(--saffron);
    font-weight: 600;
  }

  ${mq.sm} {
    grid-template-columns: 1fr;
  }
`;

const Portrait = styled.div`
  position: relative;
  aspect-ratio: 4 / 5;
  border-radius: var(--radius);
  overflow: hidden;

  img {
    object-fit: cover;
  }

  ${mq.sm} {
    aspect-ratio: 16 / 10;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;

  ${mq.md} {
    grid-template-columns: none;
    grid-auto-flow: column;
    grid-auto-columns: minmax(280px, 70%);
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
    margin-inline: calc(var(--gutter) * -1);
    padding-inline: var(--gutter);
    scroll-padding-inline: var(--gutter);
    &::-webkit-scrollbar {
      display: none;
    }
  }
  ${mq.sm} {
    grid-auto-columns: 85%;
  }
`;

const Card = styled.figure<{ $in: boolean; $i: number }>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  border-radius: var(--radius-lg);
  border: 1px solid var(--line);
  background: var(--surface);
  scroll-snap-align: start;
  ${({ $in, $i }) => reveal($in, 200 + $i * 80)};

  blockquote {
    flex: 1;
    color: var(--ink-2);
    line-height: 1.6;
  }
  figcaption {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding-top: 1rem;
    border-top: 1px solid var(--line);
    font-size: 0.8125rem;
    color: var(--muted);
  }
  img {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    object-fit: cover;
  }
  strong {
    display: block;
    font-size: 0.9375rem;
    color: var(--ink);
  }
`;

const MobileOnly = styled.div`
  display: none;
  ${mq.md} {
    display: block;
  }
`;
