import styled from "styled-components";
import { container, h2, mq, reveal, sectionY } from "@/src/theme";

export const Section = styled.section`
  ${container};
  ${sectionY};
  padding-top: clamp(6rem, 10vw, 9rem);
  position: relative;
`;

export const Card = styled.div<{ $in: boolean }>`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "copy form"
    "copy fine";
  gap: 1rem clamp(2rem, 5vw, 5rem);
  align-items: center;
  padding: clamp(2rem, 5vw, 4rem);
  border-radius: var(--radius-lg);
  background: var(--olive-tint);
  border: 1px solid rgb(var(--olive-rgb) / 0.18);
  ${({ $in }) => reveal($in)};

  ${mq.md} {
    grid-template-columns: 1fr;
    grid-template-areas: "copy" "form" "fine";
  }
`;

export const Peek = styled.div<{ $in: boolean }>`
  position: absolute;
  z-index: 0;
  right: clamp(1.5rem, 8vw, 7rem);
  top: clamp(6rem, 10vw, 9rem);
  translate: 0 -78%;
  transform: translateY(${({ $in }) => ($in ? "0" : "60%")});
  transition: transform 1.1s var(--ease-out) 0.35s;

  ${mq.sm} {
    right: 1.5rem;
    > div {
      width: 110px !important;
    }
  }
`;

export const Copy = styled.div`
  grid-area: copy;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    ${h2};
    font-size: clamp(2rem, 1.5rem + 2vw, 3rem);
  }
  em {
    font-style: italic;
    color: var(--olive);
  }
  p {
    color: var(--ink-2);
    max-width: 38ch;
  }
`;

export const Form = styled.form`
  grid-area: form;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-self: end;

  input {
    flex: 1 1 220px;
    min-width: 0;
    padding: 1rem 1.1rem;
    border-radius: var(--radius-sm);
    border: 1px solid var(--line-strong);
    background: var(--surface);
    font-size: 1rem;

    &:focus {
      outline: none;
      border-color: var(--olive);
      box-shadow: 0 0 0 3px rgb(var(--olive-rgb) / 0.18);
    }
    &[aria-invalid="true"] {
      border-color: var(--danger);
    }
  }
`;

export const Err = styled.p`
  flex-basis: 100%;
  font-size: 0.875rem;
  color: var(--danger);
`;

export const Done = styled.p`
  grid-area: form;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  color: var(--olive-600);
`;

export const Fine = styled.p`
  grid-area: fine;
  align-self: start;
  font-size: 0.8125rem;
  color: var(--muted);
`;
