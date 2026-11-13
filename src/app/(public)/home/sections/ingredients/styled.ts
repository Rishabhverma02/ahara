import styled from "styled-components";
import { container, mq, reveal, sectionY } from "@/src/theme";

export const Section = styled.section`
  ${container};
  ${sectionY};
  padding-top: 0;
`;

export const Head = styled.div<{ $in: boolean }>`
  margin-bottom: clamp(2.5rem, 5vw, 4rem);
  ${({ $in }) => reveal($in)};
`;

export const List = styled.ol`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(1.25rem, 3vw, 2.5rem);

  ${mq.md} {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

export const Item = styled.li<{ $in: boolean; $i: number }>`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  ${({ $in, $i }) => reveal($in, 100 + $i * 140)};

  /* stagger the middle column down for an editorial rhythm */
  &:nth-child(2) {
    margin-top: 4rem;
  }
  ${mq.md} {
    &:nth-child(2) {
      margin-top: 0;
    }
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

export const Media = styled.div`
  position: relative;
  aspect-ratio: 4 / 5;
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: var(--paper-2);

  img {
    object-fit: cover;
    transition: transform 1s var(--ease-out);
  }

  ${mq.md} {
    aspect-ratio: 4 / 3;
  }
`;

export const Num = styled.span`
  position: absolute;
  left: 1rem;
  bottom: 0.5rem;
  font-family: var(--font-display);
  font-style: italic;
  font-size: 4.5rem;
  line-height: 1;
  color: var(--paper);
  text-shadow: 0 2px 24px rgb(0 0 0 / 0.25);
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h3 {
    font-family: var(--font-display);
    font-weight: 400;
    font-size: clamp(2rem, 1.6rem + 1.2vw, 2.75rem);
    line-height: 1;
    letter-spacing: -0.02em;
  }
  p {
    margin-top: 0.5rem;
    color: var(--ink-2);
    max-width: 34ch;
  }
`;

export const Origin = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--olive);
`;

export const Aka = styled.span`
  font-family: var(--font-display);
  font-style: italic;
  color: var(--muted);
`;

export const More = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  margin-top: 0.75rem;
  font-weight: 600;
  font-size: 0.9375rem;
  color: var(--ink);
  text-decoration: underline;
  text-decoration-color: var(--line-strong);
  text-underline-offset: 5px;
  width: fit-content;

  &:hover {
    text-decoration-color: currentColor;
  }
`;
