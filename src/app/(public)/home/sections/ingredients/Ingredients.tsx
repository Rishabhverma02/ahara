"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/src/components/ui";
import { useInView } from "@/src/hooks/useInView";
import makhanaImg from "@/src/assets/images/section-images/foxnuts.webp";
import sattuImg from "@/src/assets/images/section-images/Sattu.webp";
import moringaImg from "@/src/assets/images/section-images/moringa.webp";
import { Section, Head, List, Item, Media, Num, Text, Origin, Aka, More } from "./styled";

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
