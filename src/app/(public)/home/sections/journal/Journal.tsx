"use client";

import Image, { type StaticImageData } from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/src/components/ui";
import { useInView } from "@/src/hooks/useInView";
import moringa from "@/src/assets/images/section-images/Moringa2.webp";
import makhana from "@/src/assets/images/section-images/makahannn.webp";
import moringaLeaf from "@/src/assets/images/section-images/moringa1.webp";
import { Section, Head, Grid, Post, Thumb, Meta } from "./styled";

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
