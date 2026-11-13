"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/src/components/ui";
import { useInView } from "@/src/hooks/useInView";
import bg from "@/src/assets/images/section-images/all-in-one.webp";
import { Band, Shade, Inner, Copy } from "./styled";

/** A purposeful product feature instead of a generic "Shop Now" banner. */
export const Featured = () => {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <Band ref={ref}>
      <Image src={bg} alt="" fill sizes="100vw" placeholder="blur" />
      <Shade />
      <Inner>
        <Copy $in={inView}>
          <span>The signature blend</span>
          <h2>
            Everything good, <em>in one handful.</em>
          </h2>
          <p>
            Ahara Mix Special brings roasted makhana, seeds and moringa-dusted nuts together — our
            most-reordered pack and the easiest way to try the whole range.
          </p>
          <ButtonLink href="/shop/ahara-mix-special" $variant="light" $size="lg">
            Discover the mix <ArrowRight aria-hidden />
          </ButtonLink>
        </Copy>
      </Inner>
    </Band>
  );
};
