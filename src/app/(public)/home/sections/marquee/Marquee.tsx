"use client";

import { Band, Track, Row, Star } from "./styled";

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
