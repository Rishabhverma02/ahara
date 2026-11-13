"use client";

import styled from "styled-components";
import { useInView } from "@/src/hooks/useInView";
import { container, eyebrow, mq, reveal, sectionY } from "@/src/theme";

/**
 * Replaces the "4 icons in circles" feature grid — the most recognisable
 * template pattern on the old page — with a manifesto and numbered principles.
 */
const PRINCIPLES = [
  { title: "Clean label", body: "If you can't pronounce it, it isn't in the pack. Every ingredient is listed, nothing hides behind “natural flavours”." },
  { title: "Roasted, never fried", body: "Our makhana is slow-roasted in small batches, so the crunch comes from the seed, not the oil." },
  { title: "Sourced at the root", body: "Makhana from the ponds of Madhubani, sattu from Bihar's chana fields — traced back to where they grow best." },
  { title: "Made for today", body: "Lime & black pepper, dark chocolate, rose thandai — old foods in flavours you actually crave." },
];

export const Story = () => {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <Section id="story" ref={ref}>
      <Inner>
        <Lead $in={inView}>
          <Kicker>03 — Why we exist</Kicker>
          <Statement>
            The healthiest snacks in India were hiding in our grandmothers&rsquo; kitchens —{" "}
            <em>not on supermarket shelves.</em>
          </Statement>
          <Sign>— Why we started Ahara</Sign>
        </Lead>

        <List>
          {PRINCIPLES.map((p, i) => (
            <Principle key={p.title} $in={inView} $i={i}>
              <span>0{i + 1}</span>
              <div>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            </Principle>
          ))}
        </List>
      </Inner>
    </Section>
  );
};

const Section = styled.section`
  ${sectionY};
  background: var(--paper-2);
`;

const Inner = styled.div`
  ${container};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(3rem, 7vw, 7rem);
  align-items: start;

  ${mq.md} {
    grid-template-columns: 1fr;
  }
`;

const Lead = styled.div<{ $in: boolean }>`
  position: sticky;
  top: calc(var(--header-h) + 2rem);
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  ${({ $in }) => reveal($in)};

  ${mq.md} {
    position: static;
  }
`;

const Kicker = styled.span`
  ${eyebrow};
`;

const Statement = styled.p`
  font-family: var(--font-display);
  font-variation-settings: "opsz" 144, "SOFT" 50;
  font-size: clamp(1.875rem, 1.3rem + 2.2vw, 3.25rem);
  line-height: 1.12;
  letter-spacing: -0.02em;
  color: var(--ink);

  em {
    color: var(--earth);
  }
`;

const Sign = styled.p`
  font-family: var(--font-display);
  font-style: italic;
  color: var(--muted);
`;

const List = styled.ol`
  list-style: none;
  border-top: 1px solid var(--line-strong);
`;

const Principle = styled.li<{ $in: boolean; $i: number }>`
  display: grid;
  grid-template-columns: 3.5rem 1fr;
  gap: 1rem;
  padding: 1.75rem 0;
  border-bottom: 1px solid var(--line-strong);
  ${({ $in, $i }) => reveal($in, 150 + $i * 110)};

  > span {
    font-family: var(--font-display);
    font-style: italic;
    font-size: 1.25rem;
    color: var(--olive);
  }
  h3 {
    font-family: var(--font-display);
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1.2;
    margin-bottom: 0.4rem;
  }
  p {
    color: var(--ink-2);
    max-width: 40ch;
  }
`;
