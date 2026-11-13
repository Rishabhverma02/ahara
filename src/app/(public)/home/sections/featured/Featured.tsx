"use client";

import Image from "next/image";
import styled from "styled-components";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/src/components/ui";
import { useInView } from "@/src/hooks/useInView";
import { container, display, eyebrow, mq, reveal } from "@/src/theme";
import bg from "@/src/assets/images/section-images/all-in-one.webp";

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

const Band = styled.section`
  position: relative;
  min-height: clamp(520px, 70vh, 720px);
  display: flex;
  align-items: center;
  overflow: hidden;
  color: var(--paper);

  > img {
    object-fit: cover;
  }
`;

const Shade = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgb(20 24 12 / 0.88) 0%, rgb(20 24 12 / 0.6) 40%, rgb(20 24 12 / 0) 75%);

  ${mq.md} {
    background: linear-gradient(180deg, rgb(20 24 12 / 0.25) 0%, rgb(20 24 12 / 0.85) 70%);
  }
`;

const Inner = styled.div`
  ${container};
  position: relative;
  padding-block: 4rem;

  ${mq.md} {
    align-self: flex-end;
  }
`;

const Copy = styled.div<{ $in: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  max-width: 34rem;
  ${({ $in }) => reveal($in)};

  > span {
    ${eyebrow};
    color: var(--saffron);
  }
  h2 {
    ${display};
    color: var(--paper);
    font-size: var(--fs-h2);
  }
  em {
    font-style: italic;
    color: var(--saffron-tint);
  }
  p {
    color: rgb(246 241 230 / 0.82);
    font-size: 1.0625rem;
  }
`;
