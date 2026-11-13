"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { ButtonLink, Mascot, SectionHeading } from "@/src/components/ui";
import { useInView } from "@/src/hooks/useInView";
import { Section, Inner, Copy, Actions, Stage, Chat, Bubble, Typing, Character, Shadow } from "./styled";

/*
 * Kairo section: the mascot plus a chat that plays itself out when scrolled
 * into view. Replaces the dark "AI glow" panel with orbs, emoji, a second
 * ticker and unverifiable stats ("10k+ queries answered", "lowers cortisol
 * by 30%") for a feature that doesn't exist yet.
 */
const SCRIPT: { from: "you" | "kairo"; text: string }[] = [
  { from: "you", text: "Something crunchy for 4 pm that won't wreck my diet?" },
  {
    from: "kairo",
    text: "Try Makhana Lime & Pepper — roasted, never fried, and light enough for a chai-time craving.",
  },
  { from: "you", text: "And after a workout?" },
  {
    from: "kairo",
    text: "A glass of Chocolate Sattu. Roasted chana gives you about 20 g of plant protein per 100 g.",
  },
];

const STEP_MS = 1500;

export const Kairo = () => {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.35 });
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (!inView || shown >= SCRIPT.length) return;
    const t = setTimeout(() => setShown((n) => n + 1), shown === 0 ? 400 : STEP_MS);
    return () => clearTimeout(t);
  }, [inView, shown]);

  const typing = inView && shown < SCRIPT.length && SCRIPT[shown].from === "kairo";

  return (
    <Section id="kairo" ref={ref}>
      <Inner>
        <Copy $in={inView}>
          <SectionHeading
            eyebrow="05 — Meet Kairo"
            title={
              <>
                Your pocket <em>nutrition nerd.</em>
              </>
            }
            desc="Kairo is the makhana-headed guide we're building into Ahara. Ask what to eat for an afternoon slump, decode a label, or find the snack that fits your goals."
          />
          <Actions>
            <ButtonLink href="#community" $variant="dark" $size="lg">
              Get early access <ArrowRight aria-hidden />
            </ButtonLink>
            <small>Launching soon on web &amp; WhatsApp</small>
          </Actions>
        </Copy>

        <Stage>
          <Chat aria-label="Example conversation with Kairo">
            {SCRIPT.slice(0, shown).map((m, i) => (
              <Bubble key={i} $from={m.from}>
                {m.text}
              </Bubble>
            ))}
            {typing && (
              <Bubble $from="kairo" aria-hidden>
                <Typing>
                  <i />
                  <i />
                  <i />
                </Typing>
              </Bubble>
            )}
          </Chat>
          <Character>
            <Mascot pose="front" width={220} motion="bob" alt="Kairo, the Ahara mascot" />
            <Shadow />
          </Character>
        </Stage>
      </Inner>
    </Section>
  );
};
