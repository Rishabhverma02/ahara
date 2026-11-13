"use client";

import Image from "next/image";
import styled, { css, keyframes } from "styled-components";

/**
 * Kairo, the Ahara mascot. One component, a fixed set of poses, and a couple
 * of restrained idle motions. Each page uses him in exactly one place so he
 * reads as a character, not as decoration.
 */
const POSES = {
  front: { src: "/images/character/png/ch1.webp", w: 500, h: 801 },
  threeQuarter: { src: "/images/character/png/ch-threeforth.webp", w: 511, h: 837 },
  threeQuarterAlt: { src: "/images/character/png/ch-threeforth - opp.webp", w: 511, h: 837 },
  parachute: { src: "/images/character/png/parachute.webp", w: 759, h: 1265 },
  back: { src: "/images/character/png/ch-back.webp", w: 466, h: 751 },
  sideRight: { src: "/images/character/png/ch-r-side.webp", w: 490, h: 827 },
  sideLeft: { src: "/images/character/png/ch-l-side.webp", w: 490, h: 827 },
} as const;

export type MascotPose = keyof typeof POSES;

interface Props {
  pose?: MascotPose;
  width: number;
  motion?: "none" | "bob" | "sway";
  alt?: string;
  priority?: boolean;
  className?: string;
}

export const Mascot = ({ pose = "front", width, motion = "bob", alt = "", priority, className }: Props) => {
  const p = POSES[pose];
  return (
    <Wrap $motion={motion} className={className} style={{ width }}>
      <Image src={p.src} alt={alt} width={p.w} height={p.h} sizes={`${width}px`} priority={priority} />
    </Wrap>
  );
};

const bob = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
`;

const sway = keyframes`
  0%, 100% { transform: rotate(-4deg) translateY(0); }
  50% { transform: rotate(4deg) translateY(-6px); }
`;

const Wrap = styled.div<{ $motion: Props["motion"] }>`
  flex-shrink: 0;
  transform-origin: 50% 0%;

  img {
    width: 100%;
    height: auto;
  }

  ${({ $motion }) =>
    $motion === "bob" &&
    css`
      animation: ${bob} 4.5s ease-in-out infinite;
    `}
  ${({ $motion }) =>
    $motion === "sway" &&
    css`
      animation: ${sway} 5s ease-in-out infinite;
    `}
`;
