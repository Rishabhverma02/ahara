"use client";

import styled, { keyframes } from "styled-components";

const ITEMS = [
  "Roasted, never fried",
  "Clean label",
  "Hand-harvested makhana",
  "Stone-ground sattu",
  "No refined sugar in the cookies",
  "Plant protein",
  "Small-batch",
  "Fast delivery across India",
];

/**
 * The page's only ticker (the trust bar and the Kairo-section ticker were
 * merged into this). Content is duplicated once for a seamless loop; the copy
 * is hidden from assistive tech.
 */
export const Marquee = () => (
  <Band>
    <p className="sr-only">{ITEMS.join(", ")}</p>
    <Track aria-hidden>
      {[0, 1].map((k) => (
        <Row key={k}>
          {ITEMS.map((t) => (
            <li key={t}>
              {t}
              <Star viewBox="0 0 24 24">
                <path d="M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10 Z" />
              </Star>
            </li>
          ))}
        </Row>
      ))}
    </Track>
  </Band>
);

const scroll = keyframes`
  to { transform: translateX(-50%); }
`;

const Band = styled.section`
  background: var(--forest);
  color: var(--paper);
  overflow: hidden;
  padding: 1.15rem 0;
`;

const Track = styled.div`
  display: flex;
  width: max-content;
  animation: ${scroll} 48s linear infinite;

  ${Band}:hover & {
    animation-play-state: paused;
  }
`;

const Row = styled.ul`
  display: flex;
  list-style: none;

  li {
    display: flex;
    align-items: center;
    gap: 2.25rem;
    padding-right: 2.25rem;
    font-family: var(--font-display);
    font-size: clamp(1.0625rem, 1rem + 0.4vw, 1.375rem);
    font-style: italic;
    white-space: nowrap;
  }
`;

const Star = styled.svg`
  width: 14px;
  height: 14px;
  fill: var(--saffron);
`;
