"use client";

import { useInView } from "@/src/hooks/useInView";
import { Section, Inner, Lead, Kicker, Statement, Sign, List, Principle } from "./styled";

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
