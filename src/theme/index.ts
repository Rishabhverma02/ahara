/**
 * Ahara design system — the single theme layer.
 *
 * Colour, type and spacing live as CSS custom properties (see
 * src/style/globalstyle.tsx) so styled-components and inline styles share the
 * same values. This module adds the reusable `css` fragments and breakpoints.
 */
import { css } from "styled-components";

export const mq = {
  sm: "@media (max-width: 640px)",
  md: "@media (max-width: 900px)",
  lg: "@media (max-width: 1140px)",
  hover: "@media (hover: hover) and (pointer: fine)",
} as const;

/** Centered content column with responsive gutters. */
export const container = css`
  width: min(100% - 2 * var(--gutter), var(--max-w));
  margin-inline: auto;
`;

export const sectionY = css`
  padding-block: var(--section-y);
`;

/* ---------- Type roles ---------- */
export const display = css`
  font-family: var(--font-display);
  font-weight: 400;
  font-variation-settings: "opsz" 144, "SOFT" 50;
  letter-spacing: -0.02em;
  line-height: 1.02;
  color: var(--ink);
`;

export const h2 = css`
  ${display};
  font-size: var(--fs-h2);
  line-height: 1.05;
`;

export const h3 = css`
  font-family: var(--font-display);
  font-variation-settings: "opsz" 48, "SOFT" 30;
  font-weight: 500;
  font-size: var(--fs-h3);
  line-height: 1.15;
  letter-spacing: -0.01em;
  color: var(--ink);
`;

/** Small uppercase label used above headings and on meta lines. */
export const eyebrow = css`
  font-family: var(--font-sans);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--olive);
`;

export const lead = css`
  font-size: var(--fs-lead);
  line-height: 1.6;
  color: var(--ink-2);
`;

export const text14 = css`
  font-size: 0.875rem;
`;
export const text16 = css`
  font-size: 1rem;
`;

/** Fade-up reveal driven by a boolean prop (pairs with useInView). */
export const reveal = (on: boolean | undefined, delayMs = 0) => css`
  opacity: ${on ? 1 : 0};
  transform: translateY(${on ? 0 : "24px"});
  transition:
    opacity 0.8s var(--ease-out) ${delayMs}ms,
    transform 0.8s var(--ease-out) ${delayMs}ms;
`;

export const focusRing = css`
  &:focus-visible {
    outline: 2px solid var(--saffron);
    outline-offset: 3px;
  }
`;
