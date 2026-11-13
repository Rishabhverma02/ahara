import styled from "styled-components";
import { container, mq, reveal, sectionY } from "@/src/theme";

export const Section = styled.section`
  ${container};
  ${sectionY};
`;

export const Top = styled.div`
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: clamp(2rem, 5vw, 5rem);
  align-items: end;
  margin-bottom: clamp(2.5rem, 5vw, 4rem);

  ${mq.md} {
    grid-template-columns: 1fr;
  }
`;

export const Head = styled.div<{ $in: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  ${({ $in }) => reveal($in)};
`;

export const Score = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  strong {
    font-family: var(--font-display);
    font-size: 3.5rem;
    font-weight: 400;
    line-height: 1;
  }
  span {
    display: block;
    margin-top: 0.25rem;
    font-size: 0.875rem;
    color: var(--muted);
  }
`;

export const StarRow = styled.div`
  display: flex;
  gap: 2px;
  color: var(--saffron);
`;

export const Feature = styled.div<{ $in: boolean }>`
  display: grid;
  grid-template-columns: minmax(140px, 220px) 1fr;
  gap: clamp(1.25rem, 3vw, 2.5rem);
  align-items: center;
  padding: clamp(1.25rem, 3vw, 2rem);
  border-radius: var(--radius-lg);
  background: var(--forest);
  color: var(--paper);
  ${({ $in }) => reveal($in, 150)};

  blockquote {
    font-family: var(--font-display);
    font-style: italic;
    font-size: clamp(1.25rem, 1.05rem + 0.8vw, 1.75rem);
    line-height: 1.3;
  }
  figcaption {
    margin-top: 1.25rem;
    font-size: 0.875rem;
    color: rgb(246 241 230 / 0.7);
  }
  strong {
    color: var(--saffron);
    font-weight: 600;
  }

  ${mq.sm} {
    grid-template-columns: 1fr;
  }
`;

export const Portrait = styled.div`
  position: relative;
  aspect-ratio: 4 / 5;
  border-radius: var(--radius);
  overflow: hidden;

  img {
    object-fit: cover;
  }

  ${mq.sm} {
    aspect-ratio: 16 / 10;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;

  ${mq.md} {
    grid-template-columns: none;
    grid-auto-flow: column;
    grid-auto-columns: minmax(280px, 70%);
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
    margin-inline: calc(var(--gutter) * -1);
    padding-inline: var(--gutter);
    scroll-padding-inline: var(--gutter);
    &::-webkit-scrollbar {
      display: none;
    }
  }
  ${mq.sm} {
    grid-auto-columns: 85%;
  }
`;

export const Card = styled.figure<{ $in: boolean; $i: number }>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  border-radius: var(--radius-lg);
  border: 1px solid var(--line);
  background: var(--surface);
  scroll-snap-align: start;
  ${({ $in, $i }) => reveal($in, 200 + $i * 80)};

  blockquote {
    flex: 1;
    color: var(--ink-2);
    line-height: 1.6;
  }
  figcaption {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding-top: 1rem;
    border-top: 1px solid var(--line);
    font-size: 0.8125rem;
    color: var(--muted);
  }
  img {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    object-fit: cover;
  }
  strong {
    display: block;
    font-size: 0.9375rem;
    color: var(--ink);
  }
`;

export const MobileOnly = styled.div`
  display: none;
  ${mq.md} {
    display: block;
  }
`;
