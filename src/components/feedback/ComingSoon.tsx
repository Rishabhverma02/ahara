"use client";

import styled from "styled-components";
import { ArrowRight } from "lucide-react";
import { ButtonLink, Mascot } from "@/src/components/ui";
import { display } from "@/src/theme";

/** Placeholder for features that need external setup (e.g. accounts). */
export const ComingSoon = ({ title, body }: { title: string; body: string }) => (
  <Wrap>
    <Mascot pose="threeQuarter" width={130} motion="bob" />
    <span>Coming soon</span>
    <h1>{title}</h1>
    <p>{body}</p>
    <ButtonLink href="/shop" $size="lg">
      Continue shopping <ArrowRight aria-hidden />
    </ButtonLink>
  </Wrap>
);

const Wrap = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 2rem var(--gutter);
  text-align: center;

  span {
    margin-top: 0.5rem;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--olive);
  }
  h1 {
    ${display};
    font-size: clamp(2.25rem, 1.6rem + 2.4vw, 3.5rem);
  }
  p {
    max-width: 32rem;
    color: var(--ink-2);
    margin-bottom: 0.5rem;
  }
`;
