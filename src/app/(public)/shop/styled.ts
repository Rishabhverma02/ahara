import styled, { keyframes } from "styled-components";
import { container, eyebrow, mq } from "@/src/theme";

export const Wrapper = styled.div`
  background: var(--paper);
`;

export const Container = styled.div`
  ${container};
  padding-block: clamp(1.5rem, 3vw, 2.5rem) var(--section-y);
`;

/* ---------- toolbar ---------- */
export const Toolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding-bottom: 1.5rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid var(--line);

  ${mq.sm} {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const SearchBox = styled.div`
  position: relative;
  flex: 1;
  max-width: 420px;

  svg {
    position: absolute;
    left: 0.9rem;
    top: 50%;
    translate: 0 -50%;
    color: var(--muted);
  }
  input {
    width: 100%;
    padding: 0.8rem 1rem 0.8rem 2.6rem;
    border-radius: var(--radius-sm);
    border: 1px solid var(--line-strong);
    background: var(--surface);
    font-size: 0.9375rem;

    &:focus {
      outline: none;
      border-color: var(--olive);
      box-shadow: 0 0 0 3px rgb(var(--olive-rgb) / 0.15);
    }
  }

  ${mq.sm} {
    max-width: none;
  }
`;

export const ToolbarEnd = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  ${mq.sm} {
    justify-content: space-between;
  }
`;

export const FilterToggle = styled.button`
  display: none;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 1rem;
  border-radius: var(--radius-sm);
  border: 1px solid var(--line-strong);
  background: var(--surface);
  font-size: 0.9375rem;
  font-weight: 600;

  span {
    display: grid;
    place-items: center;
    min-width: 20px;
    height: 20px;
    border-radius: 10px;
    background: var(--olive);
    color: #fff;
    font-size: 0.75rem;
  }

  ${mq.lg} {
    display: inline-flex;
  }
`;

export const Sort = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: var(--muted);

  select {
    padding: 0.7rem 2.2rem 0.7rem 0.9rem;
    border-radius: var(--radius-sm);
    border: 1px solid var(--line-strong);
    background: var(--surface)
      url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%231D2116' stroke-width='2'%3E%3Cpath d='m2 4 4 4 4-4'/%3E%3C/svg%3E")
      no-repeat right 0.8rem center;
    appearance: none;
    font-size: 0.9375rem;
    color: var(--ink);
  }
`;

/* ---------- layout ---------- */
export const Layout = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: clamp(2rem, 4vw, 3.5rem);
  align-items: start;

  ${mq.lg} {
    grid-template-columns: 1fr;
  }
`;

export const Sidebar = styled.aside`
  position: sticky;
  top: calc(var(--header-h) + 1.5rem);
  display: flex;
  flex-direction: column;
  gap: 2rem;

  ${mq.lg} {
    display: none;
  }
`;

export const Group = styled.fieldset`
  border: 0;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.15rem;

  legend {
    ${eyebrow};
    margin-bottom: 0.75rem;
    padding: 0;
  }
`;

export const CheckRow = styled.label`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.45rem 0;
  font-size: 0.9375rem;
  color: var(--ink-2);
  cursor: pointer;

  input {
    appearance: none;
    flex-shrink: 0;
    width: 18px;
    height: 18px;
    margin: 0;
    border-radius: 4px;
    border: 1.5px solid var(--line-strong);
    background: var(--surface);
    display: grid;
    place-items: center;
    transition:
      background 0.15s,
      border-color 0.15s;

    &::after {
      content: "";
      width: 9px;
      height: 5px;
      border: 2px solid #fff;
      border-top: 0;
      border-right: 0;
      rotate: -45deg;
      translate: 0 -1px;
      opacity: 0;
    }
    &:checked {
      background: var(--olive);
      border-color: var(--olive);
    }
    &:checked::after {
      opacity: 1;
    }
  }
  span {
    flex: 1;
  }
  small {
    font-size: 0.8125rem;
    color: var(--muted-2);
    font-variant-numeric: tabular-nums;
  }
  &:hover span {
    color: var(--ink);
  }
`;

export const Range = styled.div`
  input {
    width: 100%;
    height: 4px;
    appearance: none;
    border-radius: 2px;
    background: linear-gradient(to right, var(--olive) var(--pct), var(--line-strong) var(--pct));
    cursor: pointer;

    &::-webkit-slider-thumb {
      appearance: none;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: var(--surface);
      border: 2px solid var(--olive);
      box-shadow: var(--shadow-sm);
    }
    &::-moz-range-thumb {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: var(--surface);
      border: 2px solid var(--olive);
    }
  }
`;

export const RangeValues = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.75rem;
  font-size: 0.8125rem;
  color: var(--muted);

  strong {
    color: var(--ink);
    font-weight: 600;
  }
`;

/* ---------- results ---------- */
export const Main = styled.section`
  min-width: 0;
  scroll-margin-top: calc(var(--header-h) + 1rem);
`;

export const ResultsHead = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem 1.5rem;
  margin-bottom: 1.5rem;

  > p {
    font-family: var(--font-display);
    font-size: 1.25rem;
  }
`;

export const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
`;

export const Chip = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.35rem 0.6rem 0.35rem 0.8rem;
  border-radius: 999px;
  border: 1px solid rgb(var(--olive-rgb) / 0.25);
  background: var(--olive-tint);
  color: var(--olive-600);
  font-size: 0.8125rem;
  font-weight: 600;

  &:hover {
    border-color: var(--olive);
  }
`;

export const ClearAll = styled.button`
  border: 0;
  background: none;
  padding: 0.35rem;
  font-size: 0.8125rem;
  color: var(--muted);
  text-decoration: underline;
  text-underline-offset: 3px;

  &:hover {
    color: var(--ink);
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;

  ${mq.md} {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.9rem;
  }
`;

export const Pagination = styled.nav`
  display: flex;
  justify-content: center;
  gap: 0.35rem;
  margin-top: 3rem;
`;

export const PageBtn = styled.button`
  display: grid;
  place-items: center;
  min-width: 42px;
  height: 42px;
  padding: 0 0.5rem;
  border-radius: var(--radius-sm);
  border: 1px solid var(--line);
  background: var(--surface);
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  color: var(--ink-2);

  &:hover:not(:disabled) {
    border-color: var(--ink-2);
  }
  &[aria-current="page"] {
    background: var(--forest);
    border-color: var(--forest);
    color: var(--paper);
  }
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

/* ---------- mobile sheet ---------- */
const fade = keyframes`from { opacity: 0 } to { opacity: 1 }`;
const up = keyframes`from { transform: translateY(100%) } to { transform: none }`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 300;
  background: rgb(29 33 22 / 0.4);
  animation: ${fade} 0.2s ease-out;
`;

export const Sheet = styled.div`
  position: absolute;
  inset: auto 0 0;
  max-height: 88vh;
  display: flex;
  flex-direction: column;
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
  background: var(--paper);
  animation: ${up} 0.4s var(--ease-out);
`;

export const SheetHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem var(--gutter);
  border-bottom: 1px solid var(--line);

  h2 {
    font-family: var(--font-display);
    font-weight: 500;
    font-size: 1.5rem;
  }
  button {
    display: grid;
    place-items: center;
    width: 44px;
    height: 44px;
    margin-right: -10px;
    border: 0;
    background: none;
  }
`;

export const SheetBody = styled.div`
  overflow-y: auto;
  padding: 1.5rem var(--gutter);
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const SheetFoot = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 0.75rem;
  padding: 1rem var(--gutter) max(1rem, env(safe-area-inset-bottom));
  border-top: 1px solid var(--line);

  button {
    padding: 0.95rem;
    border-radius: var(--radius-sm);
    font-weight: 600;
    border: 1px solid var(--line-strong);
    background: var(--surface);
  }
  button:last-child {
    border-color: var(--olive);
    background: var(--olive);
    color: #fff;
  }
`;
