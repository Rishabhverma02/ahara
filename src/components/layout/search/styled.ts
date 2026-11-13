import styled, { keyframes } from "styled-components";
import { container } from "@/src/theme";

export const fade = keyframes`from { opacity: 0 } to { opacity: 1 }`;

export const drop = keyframes`from { transform: translateY(-16px); opacity: 0 } to { transform: none; opacity: 1 }`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 400;
  background: rgb(29 33 22 / 0.4);
  animation: ${fade} 0.2s ease-out;
`;

export const Panel = styled.div`
  background: var(--paper);
  border-bottom: 1px solid var(--line);
  box-shadow: var(--shadow);
  animation: ${drop} 0.35s var(--ease-out);
`;

export const Inner = styled.div`
  ${container};
  max-width: 760px;
  padding-block: 1.25rem 1.75rem;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--line-strong);

  input {
    flex: 1;
    min-width: 0;
    border: 0;
    background: none;
    font-family: var(--font-display);
    font-size: clamp(1.375rem, 1.1rem + 1.2vw, 2rem);
    &:focus {
      outline: none;
    }
    &::-webkit-search-cancel-button {
      display: none;
    }
  }
  > svg {
    color: var(--muted);
  }
  button {
    display: grid;
    place-items: center;
    width: 40px;
    height: 40px;
    border: 0;
    background: none;
    color: var(--ink-2);
  }
`;

export const Suggest = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  padding-top: 1.25rem;

  span {
    margin-right: 0.25rem;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--muted);
  }
  button {
    padding: 0.45rem 0.85rem;
    border-radius: 999px;
    border: 1px solid var(--line-strong);
    background: var(--surface);
    font-size: 0.875rem;
    &:hover {
      border-color: var(--olive);
      color: var(--olive-600);
    }
  }
`;

export const Nothing = styled.p`
  padding-top: 1.25rem;
  color: var(--muted);
`;

export const Results = styled.ul`
  list-style: none;
  padding-top: 0.5rem;

  a {
    display: grid;
    grid-template-columns: 56px 1fr auto;
    align-items: center;
    gap: 1rem;
    padding: 0.7rem 0.5rem;
    border-radius: var(--radius-sm);
    text-decoration: none;
    color: var(--ink);

    &:hover,
    &:focus-visible {
      background: var(--paper-2);
    }
  }
  strong {
    display: block;
    font-weight: 600;
  }
  small {
    color: var(--muted);
  }
  em {
    font-style: normal;
    font-weight: 600;
  }
`;

export const Thumb = styled.span`
  position: relative;
  width: 56px;
  height: 56px;
  border-radius: var(--radius-sm);
  overflow: hidden;
  background: var(--paper-2);

  img {
    object-fit: cover;
  }
`;

export const All = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 0.75rem;
  padding: 0.5rem;
  border: 0;
  background: none;
  font-weight: 600;
  color: var(--olive-600);
`;
