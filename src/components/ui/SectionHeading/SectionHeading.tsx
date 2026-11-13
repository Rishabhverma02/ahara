"use client";

import styled from "styled-components";
import { eyebrow, h2, lead } from "@/src/theme";

export interface SectionHeadingProps {
  /** Small numbered/labelled kicker, e.g. "02 — Ingredients" */
  eyebrow?: string;
  title: React.ReactNode;
  desc?: React.ReactNode;
  align?: "left" | "center";
  /** Render on dark backgrounds */
  inverse?: boolean;
  as?: "h1" | "h2";
}

/**
 * Editorial section heading: numbered eyebrow, serif title, optional lede.
 * Replaces the Monoton outline title + script subtitle combination.
 */
export const SectionHeading = ({
  eyebrow: kicker,
  title,
  desc,
  align = "left",
  inverse,
  as = "h2",
}: SectionHeadingProps) => (
  <Wrap $align={align} $inverse={inverse}>
    {kicker && <Kicker>{kicker}</Kicker>}
    <Title as={as}>{title}</Title>
    {desc && <Desc>{desc}</Desc>}
  </Wrap>
);

const Wrap = styled.header<{ $align: "left" | "center"; $inverse?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: ${({ $align }) => ($align === "center" ? "44rem" : "40rem")};
  margin-inline: ${({ $align }) => ($align === "center" ? "auto" : "0")};
  text-align: ${({ $align }) => $align};
  align-items: ${({ $align }) => ($align === "center" ? "center" : "flex-start")};

  ${({ $inverse }) =>
    $inverse &&
    `
    h1, h2 { color: var(--paper); }
    p { color: rgb(246 241 230 / 0.72); }
    span { color: var(--saffron); }
  `}
`;

const Kicker = styled.span`
  ${eyebrow};
`;

const Title = styled.h2`
  ${h2};

  em {
    font-style: italic;
    color: var(--olive);
  }
`;

const Desc = styled.p`
  ${lead};
  max-width: 36rem;
`;
