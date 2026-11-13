import styled from "styled-components";
import { container, mq, reveal, sectionY } from "@/src/theme";

export const Section = styled.section`
  ${container};
  ${sectionY};
`;

export const Head = styled.div<{ $in: boolean }>`
  margin-bottom: clamp(2rem, 4vw, 3.5rem);
  ${({ $in }) => reveal($in)};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-template-rows: auto auto;
  gap: clamp(1.5rem, 3vw, 2.5rem);

  ${mq.md} {
    grid-template-columns: 1fr;
  }
`;

export const Post = styled.article<{ $in: boolean; $i: number; $featured: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  grid-row: ${({ $featured }) => ($featured ? "span 2" : "auto")};
  ${({ $in, $i }) => reveal($in, 120 + $i * 120)};

  h3 {
    font-family: var(--font-display);
    font-weight: 400;
    font-size: ${({ $featured }) => ($featured ? "clamp(1.625rem, 1.3rem + 1.2vw, 2.25rem)" : "1.375rem")};
    line-height: 1.2;
    letter-spacing: -0.01em;
  }
  a {
    text-decoration: none;
    color: var(--ink);

    &::after {
      content: "";
      position: absolute;
      inset: 0;
    }
    svg {
      display: inline;
      vertical-align: -0.1em;
      margin-left: 0.25rem;
      color: var(--olive);
      transition: transform 0.3s var(--ease-out);
    }
  }
  &:hover a svg {
    transform: translate(3px, -3px);
  }
  &:hover img {
    transform: scale(1.04);
  }
`;

export const Thumb = styled.div<{ $featured: boolean }>`
  position: relative;
  aspect-ratio: ${({ $featured }) => ($featured ? "4 / 3" : "16 / 9")};
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: var(--paper-2);

  img {
    object-fit: cover;
    transition: transform 0.9s var(--ease-out);
  }
`;

export const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem 1rem;
  font-size: 0.8125rem;
  color: var(--muted);

  span:first-child {
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-size: 0.75rem;
    color: var(--olive);
  }
`;
