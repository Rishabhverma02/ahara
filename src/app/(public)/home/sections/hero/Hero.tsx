"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/src/components/ui";
import * as S from "./styled";

import makhanaJar from "@/src/assets/images/ingredients/Floating png/makhana jar.webp";
import chilliMakhana from "@/src/assets/images/ingredients/Floating png/chilli makhana .webp";
import chocolateMakhana from "@/src/assets/images/ingredients/Floating png/chocklet makhana.webp";
import millets from "@/src/assets/images/ingredients/Floating png/millets.webp";
import moringaSticks from "@/src/assets/images/ingredients/Floating png/moringa sticks.webp";
import moringaLeaves from "@/src/assets/images/ingredients/Floating png/moringa leaves.webp";
import sattuScoop from "@/src/assets/images/ingredients/Floating png/sattu scup right.webp";

/**
 * The floating-ingredient constellation is the hero's one signature move.
 * Seven pieces (down from 8 images + 8 spinning leaf icons + 3 pills), each on
 * its own depth layer: a single pointermove listener writes two CSS variables
 * and every piece derives its parallax from them on the compositor.
 */
const PIECES = [
  { img: chilliMakhana, alt: "Chilli makhana", w: 168, top: "4%", left: "58%", depth: 0.9, delay: 0.25, float: 7 },
  { img: chocolateMakhana, alt: "Chocolate makhana", w: 150, top: "66%", left: "6%", depth: 1.1, delay: 0.4, float: 8 },
  { img: millets, alt: "Millets", w: 128, top: "12%", left: "4%", depth: 0.6, delay: 0.55, float: 9 },
  { img: moringaSticks, alt: "Moringa", w: 120, top: "56%", left: "78%", depth: 1.3, delay: 0.7, float: 7.5 },
  { img: moringaLeaves, alt: "Moringa leaf powder", w: 96, top: "40%", left: "-2%", depth: 0.5, delay: 0.85, float: 10 },
  { img: sattuScoop, alt: "Sattu", w: 150, top: "76%", left: "58%", depth: 0.8, delay: 1, float: 8.5 },
];

export const Hero = () => {
  const stage = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = stage.current;
    if (!el) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - (r.left + r.width / 2)) / r.width;
        const y = (e.clientY - (r.top + r.height / 2)) / r.height;
        el.style.setProperty("--mx", x.toFixed(3));
        el.style.setProperty("--my", y.toFixed(3));
      });
    };
    const reset = () => {
      el.style.setProperty("--mx", "0");
      el.style.setProperty("--my", "0");
    };
    const section = el.closest("section") ?? el;
    section.addEventListener("pointermove", onMove as EventListener, { passive: true });
    section.addEventListener("pointerleave", reset);
    return () => {
      cancelAnimationFrame(frame);
      section.removeEventListener("pointermove", onMove as EventListener);
      section.removeEventListener("pointerleave", reset);
    };
  }, []);

  return (
    <S.Wrap>
      <S.Grid>
        <S.Copy>
          <S.Eyebrow>Superfoods from the Indian kitchen</S.Eyebrow>
          <S.Title>
            <S.Line>Ancient food,</S.Line>
            <S.Line>
              <em>modern</em> life.
            </S.Line>
          </S.Title>
          <S.Lead>
            Makhana, sattu, millets and moringa — the foods our grandparents swore by, roasted and
            flavoured for the way you snack now.
          </S.Lead>
          <S.Actions>
            <ButtonLink href="/shop" $size="lg">
              Shop the range <ArrowRight aria-hidden />
            </ButtonLink>
            <ButtonLink href="#story" $variant="ghost" $size="lg">
              Why Ahara
            </ButtonLink>
          </S.Actions>
          <S.Proof>
            <li>Roasted, never fried</li>
            <li>No preservatives</li>
            <li>Small-batch, from Bihar</li>
          </S.Proof>
        </S.Copy>

        <S.Stage ref={stage} aria-hidden>
          <S.Plate />
          <S.Jar>
            <Image src={makhanaJar} alt="" priority sizes="(max-width: 900px) 60vw, 340px" />
          </S.Jar>
          {PIECES.map((p) => (
            <S.Piece
              key={p.alt}
              style={
                {
                  top: p.top,
                  left: p.left,
                  "--w": `${p.w}px`,
                  "--depth": p.depth,
                  "--delay": `${p.delay}s`,
                  "--float": `${p.float}s`,
                } as React.CSSProperties
              }
            >
              <Image src={p.img} alt="" sizes={`${p.w}px`} />
            </S.Piece>
          ))}
          <S.Note>
            <span>hand-popped in Madhubani</span>
            <svg viewBox="0 0 120 60" fill="none">
              <path d="M4 8 C 40 4, 80 14, 112 50" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              <path d="M100 48 L113 51 L110 38" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </S.Note>
        </S.Stage>
      </S.Grid>
    </S.Wrap>
  );
};
