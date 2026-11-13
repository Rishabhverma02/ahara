"use client";

import { ArrowRight } from "lucide-react";
import { ButtonLink, ProductCard, SectionHeading } from "@/src/components/ui";
import { getBestSellers } from "@/src/services/catalog";
import { useInView } from "@/src/hooks/useInView";
import { useSnapCarousel } from "@/src/hooks/useSnapCarousel";
import { Dots } from "../shared";
import { Section, Head, Row, Cell, MobileOnly } from "./styled";

const BEST_SELLERS = getBestSellers();

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
