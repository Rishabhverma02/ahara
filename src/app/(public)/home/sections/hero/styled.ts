import styled, { keyframes } from "styled-components";
import { container, display, eyebrow, lead, mq } from "@/src/theme";

const rise = keyframes`
  from { opacity: 0; transform: translateY(28px); }
  to { opacity: 1; transform: none; }
`;

const pop = keyframes`
  from { opacity: 0; scale: 0.6; }
  to { opacity: 1; scale: 1; }
`;

const drift = keyframes`
  0%, 100% { translate: 0 0; rotate: 0deg; }
  50% { translate: 0 -12px; rotate: 3deg; }
`;

const draw = keyframes`
  from { stroke-dashoffset: 160; }
  to { stroke-dashoffset: 0; }
`;

export const Wrap = styled.section`
  position: relative;
  min-height: min(100svh, 940px);
  display: flex;
  align-items: center;
  padding: calc(var(--header-h) + 2rem) 0 4rem;
  background:
    radial-gradient(60% 70% at 78% 45%, #fbf3df 0%, transparent 70%),
    var(--paper);
  overflow: hidden;

  ${mq.md} {
    min-height: 0;
    padding-bottom: 3rem;
  }
`;

export const Grid = styled.div`
  ${container};
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  align-items: center;
  gap: clamp(2rem, 4vw, 4rem);

  ${mq.md} {
    grid-template-columns: 1fr;
  }
`;

export const Copy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.75rem;

  > * {
    animation: ${rise} 0.9s var(--ease-out) both;
  }
`;

export const Eyebrow = styled.p`
  ${eyebrow};
  display: flex;
  align-items: center;
  gap: 0.75rem;

  &::before {
    content: "";
    width: 28px;
    height: 1px;
    background: currentColor;
  }
`;

export const Title = styled.h1`
  ${display};
  font-size: var(--fs-display);
  display: flex;
  flex-direction: column;
  animation: none !important;

  em {
    font-style: italic;
    font-variation-settings: "opsz" 144, "SOFT" 100;
    color: var(--olive);
  }
`;

export const Line = styled.span`
  display: block;
  animation: ${rise} 1s var(--ease-out) both;
`;

export const Lead = styled.p`
  ${lead};
  max-width: 32rem;
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.75rem;
`;

export const Proof = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.25rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--line);
  font-size: 0.875rem;
  color: var(--muted);

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  li::before {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--saffron);
  }
`;

/* ---------- constellation ---------- */
export const Stage = styled.div`
  --mx: 0;
  --my: 0;
  position: relative;
  aspect-ratio: 1;
  width: 100%;
  max-width: 600px;
  justify-self: center;

  ${mq.md} {
    max-width: 460px;
  }
`;

export const Plate = styled.div`
  position: absolute;
  inset: 14%;
  border-radius: 50%;
  background: var(--paper-2);
  box-shadow: inset 0 0 0 1px var(--line);
  transform: translate(calc(var(--mx) * -10px), calc(var(--my) * -10px));
  transition: transform 0.6s var(--ease-out);
  animation: ${pop} 1.2s var(--ease-out) both;
`;

export const Jar = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 56%;
  translate: -50% -50%;
  transform: translate(calc(var(--mx) * 14px), calc(var(--my) * 14px));
  transition: transform 0.5s var(--ease-out);
  animation: ${pop} 1s var(--ease-out) 0.1s both;
  z-index: 2;

  img {
    width: 100%;
    height: auto;
    filter: drop-shadow(0 30px 40px rgb(76 40 14 / 0.18));
  }
`;

export const Piece = styled.div`
  position: absolute;
  z-index: 3;
  width: calc(var(--w) * var(--k, 1));
  transform: translate(calc(var(--mx) * var(--depth) * 46px), calc(var(--my) * var(--depth) * 46px));
  transition: transform 0.7s var(--ease-out);
  animation: ${pop} 0.9s var(--ease-out) var(--delay) both;

  img {
    width: 100%;
    height: auto;
    filter: drop-shadow(0 14px 18px rgb(76 40 14 / 0.14));
    animation: ${drift} var(--float) ease-in-out var(--delay) infinite;
  }

  ${mq.md} {
    --k: 0.72;
  }
  ${mq.sm} {
    --k: 0.56;
  }
`;

export const Note = styled.div`
  position: absolute;
  z-index: 4;
  right: -2%;
  top: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: var(--earth);
  animation: ${rise} 0.8s var(--ease-out) 1.3s both;

  span {
    font-family: var(--font-display);
    font-style: italic;
    font-size: 1.0625rem;
    transform: rotate(-4deg);
  }

  svg {
    width: 92px;
    margin-right: 40px;
    transform: scaleX(-1);
  }
  path {
    stroke-dasharray: 160;
    animation: ${draw} 1.2s var(--ease-out) 1.5s both;
  }

  ${mq.lg} {
    display: none;
  }
`;
