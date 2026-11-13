"use client";

import { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { ArrowRight } from "lucide-react";
import { ButtonLink, Mascot, SectionHeading } from "@/src/components/ui";
import { useInView } from "@/src/hooks/useInView";
import { container, mq, reveal, sectionY } from "@/src/theme";

/*
 * Kairo section: the mascot plus a chat that plays itself out when scrolled
 * into view. Replaces the dark "AI glow" panel with orbs, emoji, a second
 * ticker and unverifiable stats ("10k+ queries answered", "lowers cortisol
 * by 30%") for a feature that doesn't exist yet.
 */
const SCRIPT: { from: "you" | "kairo"; text: string }[] = [
  { from: "you", text: "Something crunchy for 4 pm that won't wreck my diet?" },
  { from: "kairo", text: "Try Makhana Lime & Pepper — roasted, never fried, and light enough for a chai-time craving." },
  { from: "you", text: "And after a workout?" },
  { from: "kairo", text: "A glass of Chocolate Sattu. Roasted chana gives you about 20 g of plant protein per 100 g." },
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

const Section = styled.section`
  ${sectionY};
  background:
    radial-gradient(50% 60% at 75% 55%, #f9eccd 0%, transparent 70%),
    var(--paper-2);
  overflow: hidden;
`;

const Inner = styled.div`
  ${container};
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: clamp(2.5rem, 6vw, 6rem);
  align-items: center;

  ${mq.md} {
    grid-template-columns: 1fr;
  }
`;

const Copy = styled.div<{ $in: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  ${({ $in }) => reveal($in)};
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem 1.5rem;

  small {
    font-size: 0.875rem;
    color: var(--muted);
  }
`;

const Stage = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: end;
  gap: 1rem;
  min-height: 460px;

  ${mq.sm} {
    grid-template-columns: 1fr;
    min-height: 0;
  }
`;

const Chat = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 0.75rem;
  min-height: 360px;
  padding-bottom: 4rem;

  ${mq.sm} {
    min-height: 300px;
    padding-bottom: 0;
  }
`;

const pop = keyframes`
  from { opacity: 0; transform: translateY(10px) scale(0.96); }
  to { opacity: 1; transform: none; }
`;

const Bubble = styled.p<{ $from: "you" | "kairo" }>`
  max-width: 30ch;
  padding: 0.85rem 1.1rem;
  border-radius: 18px;
  font-size: 0.9375rem;
  line-height: 1.45;
  animation: ${pop} 0.45s var(--ease-out) both;

  ${({ $from }) =>
    $from === "you"
      ? css`
          align-self: flex-start;
          background: var(--surface);
          color: var(--ink);
          border: 1px solid var(--line);
          border-bottom-left-radius: 4px;
        `
      : css`
          align-self: flex-end;
          background: var(--forest);
          color: var(--paper);
          border-bottom-right-radius: 4px;
        `}
`;

const blink = keyframes`
  0%, 80%, 100% { opacity: 0.3; transform: translateY(0); }
  40% { opacity: 1; transform: translateY(-3px); }
`;

const Typing = styled.span`
  display: inline-flex;
  gap: 4px;
  padding: 4px 2px;

  i {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: currentColor;
    animation: ${blink} 1.2s infinite;
  }
  i:nth-child(2) {
    animation-delay: 0.15s;
  }
  i:nth-child(3) {
    animation-delay: 0.3s;
  }
`;

const Character = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${mq.sm} {
    order: -1;
    > div:first-child {
      width: 130px !important;
    }
  }
`;

const Shadow = styled.div`
  width: 140px;
  height: 18px;
  margin-top: -6px;
  border-radius: 50%;
  background: radial-gradient(closest-side, rgb(76 40 14 / 0.22), transparent);
`;
