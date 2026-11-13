"use client";

import styled from "styled-components";
import { ArrowRight } from "lucide-react";
import { ButtonLink, ProductCard, SectionHeading } from "@/src/components/ui";
import { getBestSellers } from "@/src/services/catalog";

const BEST_SELLERS = getBestSellers();
import { useInView } from "@/src/hooks/useInView";
import { useSnapCarousel } from "@/src/hooks/useSnapCarousel";
import { container, mq, reveal, sectionY } from "@/src/theme";
import { Dots } from "../shared";

export const BestSellers = () => {
  const { ref, inView } = useInView<HTMLElement>();
  const { ref: rowRef, index, goTo } = useSnapCarousel(BEST_SELLERS.length);

  return (
    <Section ref={ref} aria-labelledby="bestsellers-title">
      <Head $in={inView}>
        <SectionHeading
          eyebrow="01 — Best sellers"
          title={
            <span id="bestsellers-title">
              Pantry favourites, <em>by popular demand.</em>
            </span>
          }
        />
        <ButtonLink href="/shop" $variant="outline">
          Shop all <ArrowRight aria-hidden />
        </ButtonLink>
      </Head>

      <Row ref={rowRef}>
        {BEST_SELLERS.map((p, i) => (
          <Cell key={p.id} $in={inView} $i={i}>
            <ProductCard product={p} image={p.cardImage} />
          </Cell>
        ))}
      </Row>
      <MobileOnly>
        <Dots count={BEST_SELLERS.length} index={index} onSelect={goTo} label="Best sellers" />
      </MobileOnly>
    </Section>
  );
};

const Section = styled.section`
  ${container};
  ${sectionY};
`;

const Head = styled.div<{ $in: boolean }>`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: clamp(2rem, 4vw, 3.5rem);
  ${({ $in }) => reveal($in)};

  ${mq.sm} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;

  ${mq.lg} {
    grid-template-columns: none;
    grid-auto-flow: column;
    grid-auto-columns: minmax(260px, 42%);
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
    grid-auto-columns: 80%;
  }
`;

const Cell = styled.div<{ $in: boolean; $i: number }>`
  scroll-snap-align: start;
  ${({ $in, $i }) => reveal($in, 120 + $i * 90)};
`;

const MobileOnly = styled.div`
  display: none;
  ${mq.lg} {
    display: block;
  }
`;
