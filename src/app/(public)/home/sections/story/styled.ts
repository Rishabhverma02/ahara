import styled from "styled-components";
import { container, eyebrow, mq, reveal, sectionY } from "@/src/theme";

export const Section = styled.section`
  ${sectionY};
  background: var(--paper-2);
`;

export const Inner = styled.div`
  ${container};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(3rem, 7vw, 7rem);
  align-items: start;

  ${mq.md} {
    grid-template-columns: 1fr;
  }
`;

export const Lead = styled.div<{ $in: boolean }>`
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

export const Kicker = styled.span`
  ${eyebrow};
`;

export const Statement = styled.p`
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

export const Sign = styled.p`
  font-family: var(--font-display);
  font-style: italic;
  color: var(--muted);
`;

export const List = styled.ol`
  list-style: none;
  border-top: 1px solid var(--line-strong);
`;

export const Principle = styled.li<{ $in: boolean; $i: number }>`
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
