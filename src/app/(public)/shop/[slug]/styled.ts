import styled from "styled-components";
import { container, display, eyebrow, mq } from "@/src/theme";

export const Page = styled.div`
  ${container};
  padding-top: calc(var(--header-h) + 1.5rem);
  padding-bottom: var(--section-y);
`;

export const Crumbs = styled.nav`
  margin-bottom: 1.5rem;

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

export const Top = styled.section`
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: clamp(2rem, 5vw, 5rem);
  align-items: start;

  ${mq.md} {
    grid-template-columns: 1fr;
  }
`;

export const Gallery = styled.div`
  position: sticky;
  top: calc(var(--header-h) + 1rem);

  ${mq.md} {
    position: static;
  }
`;

export const MainImage = styled.div`
  position: relative;
  aspect-ratio: 4 / 5;
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: var(--paper-2);

  img {
    object-fit: cover;
  }

  ${mq.md} {
    aspect-ratio: 1;
  }
`;

export const Badge = styled.span`
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: 0.35rem 0.7rem;
  border-radius: 4px;
  background: var(--forest);
  color: var(--paper);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding-top: 0.5rem;
`;

export const Kicker = styled.p`
  ${eyebrow};
`;

export const Name = styled.h1`
  ${display};
  font-size: clamp(2.25rem, 1.7rem + 2.2vw, 3.75rem);

  em {
    font-style: italic;
    color: var(--olive);
  }
`;

export const Rating = styled.p`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.9375rem;

  svg {
    color: var(--saffron);
  }
  span {
    color: var(--muted);
  }
`;

export const Desc = styled.p`
  font-size: 1.0625rem;
  color: var(--ink-2);
  max-width: 44ch;
`;

export const Price = styled.p`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0.75rem;
  padding: 1.25rem 0;
  border-block: 1px solid var(--line);
  font-family: var(--font-display);
  font-size: 2.25rem;
  line-height: 1;

  s {
    font-family: var(--font-sans);
    font-size: 1.0625rem;
    color: var(--muted);
  }
  small {
    font-family: var(--font-sans);
    font-size: 0.8125rem;
    color: var(--muted);
  }
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const Label = styled.span`
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--ink-2);
`;

export const Sizes = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(96px, 1fr));
  gap: 0.5rem;
`;

export const Size = styled.button`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.15rem;
  padding: 0.7rem 0.9rem;
  border-radius: var(--radius-sm);
  border: 1px solid var(--line-strong);
  background: var(--surface);
  text-align: left;
  transition:
    border-color 0.2s,
    box-shadow 0.2s;

  strong {
    font-size: 0.9375rem;
  }
  span {
    font-size: 0.8125rem;
    color: var(--muted);
  }

  &:hover {
    border-color: var(--ink-2);
  }
  &[aria-checked="true"] {
    border-color: var(--olive);
    box-shadow: inset 0 0 0 1px var(--olive);
    background: var(--olive-tint);
  }
`;

export const Buy = styled.div`
  display: flex;
  gap: 0.6rem;
  align-items: stretch;
  margin-top: 0.25rem;

  > button:nth-child(2) {
    flex: 1;
  }
`;

export const QtyBox = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid var(--line-strong);
  border-radius: var(--radius-sm);
  background: var(--surface);
`;

export const QtyBtn = styled.button`
  display: grid;
  place-items: center;
  width: 42px;
  height: 100%;
  min-height: 44px;
  border: 0;
  background: none;
  color: var(--ink);
  transition: background 0.2s;

  &:hover {
    background: var(--paper);
  }
`;

export const QtyValue = styled.span`
  min-width: 28px;
  text-align: center;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
`;

export const SaveBtn = styled.button`
  display: grid;
  place-items: center;
  width: 52px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--line-strong);
  background: var(--surface);
  color: var(--ink);
  transition:
    color 0.2s,
    border-color 0.2s;

  &[aria-pressed="true"] {
    color: var(--danger);
    border-color: currentColor;
  }
`;

export const Perks = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  margin-top: 0.75rem;
  border-top: 1px solid var(--line);

  li {
    display: flex;
    gap: 0.9rem;
    padding: 1rem 0;
    border-bottom: 1px solid var(--line);
    font-size: 0.875rem;
    color: var(--muted);
  }
  svg {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    color: var(--olive);
    margin-top: 2px;
  }
  strong {
    display: block;
    font-weight: 600;
    color: var(--ink);
  }
`;

/* ---------- tabs ---------- */
export const Tabs = styled.section`
  margin-top: clamp(3rem, 7vw, 6rem);
`;

export const TabList = styled.div`
  display: flex;
  gap: 2rem;
  border-bottom: 1px solid var(--line-strong);
  overflow-x: auto;
  scrollbar-width: none;
`;

export const TabBtn = styled.button`
  position: relative;
  padding: 1rem 0;
  border: 0;
  background: none;
  font-size: 1rem;
  font-weight: 500;
  color: var(--muted);
  white-space: nowrap;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -1px;
    height: 2px;
    background: var(--olive);
    transform: scaleX(0);
    transition: transform 0.3s var(--ease-out);
  }
  &[aria-selected="true"] {
    color: var(--ink);
  }
  &[aria-selected="true"]::after {
    transform: scaleX(1);
  }
`;

export const Panel = styled.div`
  padding-top: 2rem;
  max-width: 48rem;
`;

export const Story = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    font-family: var(--font-display);
    font-weight: 400;
    font-size: clamp(1.5rem, 1.3rem + 0.8vw, 2rem);
    line-height: 1.2;
  }
  p {
    color: var(--ink-2);
    font-size: 1.0625rem;
  }
`;

export const Text = styled.p`
  color: var(--ink-2);
  font-size: 1.0625rem;
`;

export const Nutrition = styled.table`
  width: 100%;
  max-width: 28rem;
  border-collapse: collapse;

  caption {
    text-align: left;
    padding-bottom: 0.75rem;
    font-size: 0.8125rem;
    color: var(--muted);
  }
  th,
  td {
    padding: 0.8rem 0;
    border-bottom: 1px solid var(--line);
  }
  th {
    text-align: left;
    font-weight: 500;
    color: var(--ink-2);
  }
  td {
    text-align: right;
    font-weight: 600;
    font-variant-numeric: tabular-nums;
  }
`;

/* ---------- related ---------- */
export const Related = styled.section`
  margin-top: clamp(4rem, 8vw, 7rem);

  h2 {
    ${display};
    font-size: clamp(1.75rem, 1.4rem + 1.4vw, 2.5rem);
    margin-bottom: 2rem;
  }
  em {
    font-style: italic;
    color: var(--olive);
  }
`;

export const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;

  ${mq.lg} {
    grid-template-columns: repeat(2, 1fr);
  }
`;
