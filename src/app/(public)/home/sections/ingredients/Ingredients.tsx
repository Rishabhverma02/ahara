"use client";

import Image from "next/image";
import styled from "styled-components";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/src/components/ui";
import { useInView } from "@/src/hooks/useInView";
import { container, mq, reveal, sectionY } from "@/src/theme";

import makhanaImg from "@/src/assets/images/section-images/foxnuts.webp";
import sattuImg from "@/src/assets/images/section-images/Sattu.webp";
import moringaImg from "@/src/assets/images/section-images/moringa.webp";

/*
 * Copy corrected: the previous text described ashwagandha ("King of Ayurvedic
 * Herbs") under Makhana and turmeric ("golden spice") under Sattu.
 */
const INGREDIENTS = [
  {
    name: "Makhana",
    aka: "Fox nut · Euryale ferox",
    origin: "Mithila, Bihar",
    body: "The popped seed of the prickly water lily, hand-harvested from pond beds. Light and crunchy, and naturally rich in protein, magnesium and fibre.",
    image: makhanaImg,
    url: "https://www.healthline.com/nutrition/makhana-benefits",
  },
  {
    name: "Sattu",
    aka: "Roasted Bengal gram flour",
    origin: "Gangetic plains",
    body: "Chana dry-roasted and stone-ground — Bihar's original protein drink. Around 20 g of protein per 100 g, cooling in summer and slow to digest.",
    image: sattuImg,
    url: "https://www.healthians.com/blog/sattu-benefits",
  },
  {
    name: "Moringa",
    aka: "Drumstick leaf",
    origin: "Southern India",
    body: "Leaves of the drumstick tree, shade-dried and milled. Gram for gram one of the most nutrient-dense greens — iron, calcium and vitamin A.",
    image: moringaImg,
    url: "https://www.gardenia.net/plant/moringa-oleifera-moringa-drumstick-tree",
  },
];

export const Ingredients = () => {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <Section id="ingredients" ref={ref}>
      <Head $in={inView}>
        <SectionHeading
          eyebrow="02 — The ingredients"
          title={
            <>
              Three foods India <em>never forgot.</em>
            </>
          }
          desc="Everything we make starts with one of these. No isolates, no fillers — just the whole ingredient, prepared the way it has been for centuries."
        />
      </Head>

      <List>
        {INGREDIENTS.map((item, i) => (
          <Item key={item.name} $in={inView} $i={i}>
            <Media>
              <Image src={item.image} alt={`${item.name}`} fill sizes="(max-width: 900px) 100vw, 33vw" placeholder="blur" />
              <Num>0{i + 1}</Num>
            </Media>
            <Text>
              <Origin>{item.origin}</Origin>
              <h3>{item.name}</h3>
              <Aka>{item.aka}</Aka>
              <p>{item.body}</p>
              <More href={item.url} target="_blank" rel="noopener noreferrer">
                Read the research <ArrowUpRight size={16} aria-hidden />
                <span className="sr-only">(opens in a new tab)</span>
              </More>
            </Text>
          </Item>
        ))}
      </List>
    </Section>
  );
};

const Section = styled.section`
  ${container};
  ${sectionY};
  padding-top: 0;
`;

const Head = styled.div<{ $in: boolean }>`
  margin-bottom: clamp(2.5rem, 5vw, 4rem);
  ${({ $in }) => reveal($in)};
`;

const List = styled.ol`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(1.25rem, 3vw, 2.5rem);

  ${mq.md} {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const Item = styled.li<{ $in: boolean; $i: number }>`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  ${({ $in, $i }) => reveal($in, 100 + $i * 140)};

  /* stagger the middle column down for an editorial rhythm */
  &:nth-child(2) {
    margin-top: 4rem;
  }
  ${mq.md} {
    &:nth-child(2) {
      margin-top: 0;
    }
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const Media = styled.div`
  position: relative;
  aspect-ratio: 4 / 5;
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: var(--paper-2);

  img {
    object-fit: cover;
    transition: transform 1s var(--ease-out);
  }

  ${mq.md} {
    aspect-ratio: 4 / 3;
  }
`;

const Num = styled.span`
  position: absolute;
  left: 1rem;
  bottom: 0.5rem;
  font-family: var(--font-display);
  font-style: italic;
  font-size: 4.5rem;
  line-height: 1;
  color: var(--paper);
  text-shadow: 0 2px 24px rgb(0 0 0 / 0.25);
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h3 {
    font-family: var(--font-display);
    font-weight: 400;
    font-size: clamp(2rem, 1.6rem + 1.2vw, 2.75rem);
    line-height: 1;
    letter-spacing: -0.02em;
  }
  p {
    margin-top: 0.5rem;
    color: var(--ink-2);
    max-width: 34ch;
  }
`;

const Origin = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--olive);
`;

const Aka = styled.span`
  font-family: var(--font-display);
  font-style: italic;
  color: var(--muted);
`;

const More = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  margin-top: 0.75rem;
  font-weight: 600;
  font-size: 0.9375rem;
  color: var(--ink);
  text-decoration: underline;
  text-decoration-color: var(--line-strong);
  text-underline-offset: 5px;
  width: fit-content;

  &:hover {
    text-decoration-color: currentColor;
  }
`;
