import styled from "styled-components";
import { mq } from "@/src/theme";

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const Option = styled.label<{ $checked: boolean }>`
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.15rem;
  border-radius: var(--radius);
  border: 1px solid ${({ $checked }) => ($checked ? "var(--olive)" : "var(--line-strong)")};
  background: ${({ $checked }) => ($checked ? "var(--olive-tint)" : "var(--surface)")};
  box-shadow: ${({ $checked }) => ($checked ? "inset 0 0 0 1px var(--olive)" : "none")};
  cursor: pointer;
  transition:
    border-color 0.2s,
    background 0.2s;

  input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }
  &:has(input:focus-visible) {
    outline: 2px solid var(--saffron);
    outline-offset: 2px;
  }
  &:hover {
    border-color: var(--olive);
  }
`;

export const OptionIcon = styled.span`
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--paper);
  color: var(--olive);
`;

export const OptionText = styled.span`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;

  strong {
    font-weight: 600;
    color: var(--ink);
  }
  span {
    font-size: 0.875rem;
    color: var(--muted);
  }
`;

export const OptionPrice = styled.span`
  font-weight: 600;
  color: var(--ink);
  white-space: nowrap;
`;

export const Marks = styled.span`
  display: flex !important;
  gap: 0.6rem;
  margin-top: 0.4rem;
  font-size: 1.35rem;
  color: var(--ink-2) !important;
`;

export const Note = styled.p`
  padding: 1rem 1.15rem;
  border-radius: var(--radius);
  background: var(--paper);
  color: var(--ink-2);
`;

export const ErrorBox = styled.p`
  margin-top: 1.25rem;
  padding: 0.85rem 1rem;
  border-radius: var(--radius-sm);
  background: rgb(176 58 42 / 0.08);
  color: var(--danger);
  font-size: 0.9375rem;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;

  ${mq.sm} {
    flex-direction: column-reverse;
    align-items: stretch;
  }
`;

export const Back = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.9rem 0.25rem;
  border: 0;
  background: none;
  font-weight: 600;
  color: var(--ink-2);

  &:hover:not(:disabled) {
    color: var(--ink);
  }
`;

export const Pay = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-width: 220px;
  padding: 1.05rem 1.75rem;
  border: 0;
  border-radius: var(--radius-sm);
  background: var(--olive);
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  transition: background 0.2s;

  &:hover:not(:disabled) {
    background: var(--olive-600);
  }
  &:disabled {
    opacity: 0.7;
    cursor: progress;
  }
`;
