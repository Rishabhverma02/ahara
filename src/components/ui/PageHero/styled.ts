import styled from "styled-components";
import { container, display, lead, mq } from "@/src/theme";

export const Wrap = styled.section`
  padding-top: calc(var(--header-h) + clamp(1.5rem, 4vw, 3.5rem));
  padding-bottom: clamp(2rem, 4vw, 3.5rem);
  border-bottom: 1px solid var(--line);
`;

export const Inner = styled.div<{ $hasImage: boolean }>`
  ${container};
  display: grid;
  grid-template-columns: ${({ $hasImage }) => ($hasImage ? "1.1fr 0.9fr" : "1fr")};
  align-items: end;
  gap: clamp(1.5rem, 4vw, 4rem);

  ${mq.md} {
    grid-template-columns: 1fr;
  }
`;

export const Copy = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding-bottom: 0.5rem;
`;

export const Crumbs = styled.nav`
  ol {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    list-style: none;
    font-size: 0.8125rem;
    color: var(--muted);
  }
  li + li::before {
    content: "/";
    margin-right: 0.5rem;
    color: var(--muted-2);
  }
  a {
    text-decoration: none;
    &:hover {
      color: var(--ink);
    }
  }
  [aria-current] {
    color: var(--ink);
  }
`;

export const Title = styled.h1`
  ${display};
  font-size: clamp(2.5rem, 1.8rem + 3.4vw, 4.75rem);

  em {
    font-style: italic;
    color: var(--olive);
  }
`;

export const Sub = styled.p`
  ${lead};
  max-width: 34rem;
`;

export const Frame = styled.div`
  position: relative;
  aspect-ratio: 16 / 10;
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: var(--paper-2);

  img {
    object-fit: cover;
  }

  ${mq.md} {
    aspect-ratio: 21 / 9;
  }
`;
