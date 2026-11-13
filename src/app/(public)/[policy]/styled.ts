import styled from "styled-components";
import { container, mq } from "@/src/theme";

export const Layout = styled.div`
  ${container};
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: clamp(2rem, 5vw, 5rem);
  padding-block: clamp(2rem, 4vw, 3.5rem) var(--section-y);

  ${mq.md} {
    grid-template-columns: 1fr;
  }
`;

export const Side = styled.nav`
  position: sticky;
  top: calc(var(--header-h) + 1.5rem);
  align-self: start;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  a {
    padding: 0.5rem 0.75rem;
    border-left: 2px solid var(--line);
    color: var(--muted);
    text-decoration: none;
  }
  a:hover {
    color: var(--ink);
  }
  a[aria-current="page"] {
    border-left-color: var(--olive);
    color: var(--ink);
    font-weight: 600;
  }

  ${mq.md} {
    position: static;
    flex-direction: row;
    flex-wrap: wrap;
    a {
      border-left: 0;
      border-bottom: 2px solid var(--line);
    }
    a[aria-current="page"] {
      border-bottom-color: var(--olive);
    }
  }
`;

export const Article = styled.article`
  max-width: 44rem;

  section + section {
    margin-top: 2.5rem;
  }
  h2 {
    font-family: var(--font-display);
    font-weight: 500;
    font-size: 1.625rem;
    margin-bottom: 0.75rem;
  }
  p {
    color: var(--ink-2);
    font-size: 1.0625rem;
    line-height: 1.7;
  }
  p + p {
    margin-top: 0.75rem;
  }
`;

export const Draft = styled.p`
  margin-bottom: 1.5rem;
  padding: 0.9rem 1.1rem;
  border-radius: var(--radius-sm);
  background: var(--saffron-tint);
  color: var(--earth) !important;
  font-size: 0.9375rem !important;
`;

export const Updated = styled.p`
  margin-bottom: 2.5rem;
  font-size: 0.875rem !important;
  color: var(--muted) !important;
`;
