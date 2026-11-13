"use client";

import { Wrap, Kicker, Title, Desc } from "./styled";

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
