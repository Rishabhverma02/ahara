"use client";

import Image, { type StaticImageData } from "next/image";
import styled from "styled-components";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/src/components/ui";
import { useInView } from "@/src/hooks/useInView";
import { container, mq, reveal, sectionY } from "@/src/theme";

import moringa from "@/src/assets/images/section-images/Moringa2.webp";
import makhana from "@/src/assets/images/section-images/makahannn.webp";
import moringaLeaf from "@/src/assets/images/section-images/moringa1.webp";

type Post = { title: string; date: string; read: string; tag: string; image: StaticImageData; url: string };

/* The third post previously used an unrelated Unsplash mountain photo loaded
   as a raw CSS background; all three now use local images via next/image. */
const POSTS: Post[] = [
  {
    title: "Ancient superfoods that quietly boost your immunity",
    date: "2024-01-20",
    read: "6 min",
    tag: "Nutrition",
    image: moringa,
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9916933/",
  },
  {
    title: "The art of mindful snacking, with makhana",
    date: "2024-05-05",
    read: "5 min",
    tag: "Wellness",
    image: makhana,
    url: "https://www.apollo247.com/blog/article/makhana-benefits-traditional-superfood-and-a-healthy-snacking-alternative",
  },
  {
    title: "Why moringa is the green your kitchen is missing",
    date: "2024-04-28",
    read: "5 min",
    tag: "Ingredients",
    image: moringaLeaf,
    url: "https://www.gardenia.net/plant/moringa-oleifera-moringa-drumstick-tree",
  },
];

const fmt = (iso: string) =>
  new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

export const Journal = () => {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <Section id="journal" ref={ref}>
      <Head $in={inView}>
        <SectionHeading
          eyebrow="06 — Journal"
          title={
            <>
              Notes from the <em>kitchen &amp; the farm.</em>
            </>
          }
        />
      </Head>

      <Grid>
        {POSTS.map((p, i) => (
          <Post key={p.title} $in={inView} $i={i} $featured={i === 0}>
            <Thumb $featured={i === 0}>
              <Image
                src={p.image}
                alt=""
                fill
                placeholder="blur"
                sizes={i === 0 ? "(max-width: 900px) 100vw, 60vw" : "(max-width: 900px) 100vw, 35vw"}
              />
            </Thumb>
            <Meta>
              <span>{p.tag}</span>
              <time dateTime={p.date}>{fmt(p.date)}</time>
              <span>{p.read} read</span>
            </Meta>
            <h3>
              <a href={p.url} target="_blank" rel="noopener noreferrer">
                {p.title}
                <ArrowUpRight size={20} aria-hidden />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </h3>
          </Post>
        ))}
      </Grid>
    </Section>
  );
};

const Section = styled.section`
  ${container};
  ${sectionY};
`;

const Head = styled.div<{ $in: boolean }>`
  margin-bottom: clamp(2rem, 4vw, 3.5rem);
  ${({ $in }) => reveal($in)};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-template-rows: auto auto;
  gap: clamp(1.5rem, 3vw, 2.5rem);

  ${mq.md} {
    grid-template-columns: 1fr;
  }
`;

const Post = styled.article<{ $in: boolean; $i: number; $featured: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  grid-row: ${({ $featured }) => ($featured ? "span 2" : "auto")};
  ${({ $in, $i }) => reveal($in, 120 + $i * 120)};

  h3 {
    font-family: var(--font-display);
    font-weight: 400;
    font-size: ${({ $featured }) => ($featured ? "clamp(1.625rem, 1.3rem + 1.2vw, 2.25rem)" : "1.375rem")};
    line-height: 1.2;
    letter-spacing: -0.01em;
  }
  a {
    text-decoration: none;
    color: var(--ink);

    &::after {
      content: "";
      position: absolute;
      inset: 0;
    }
    svg {
      display: inline;
      vertical-align: -0.1em;
      margin-left: 0.25rem;
      color: var(--olive);
      transition: transform 0.3s var(--ease-out);
    }
  }
  &:hover a svg {
    transform: translate(3px, -3px);
  }
  &:hover img {
    transform: scale(1.04);
  }
`;

const Thumb = styled.div<{ $featured: boolean }>`
  position: relative;
  aspect-ratio: ${({ $featured }) => ($featured ? "4 / 3" : "16 / 9")};
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: var(--paper-2);

  img {
    object-fit: cover;
    transition: transform 0.9s var(--ease-out);
  }
`;

const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem 1rem;
  font-size: 0.8125rem;
  color: var(--muted);

  span:first-child {
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-size: 0.75rem;
    color: var(--olive);
  }
`;
