import styled from "styled-components";
import { container, mq } from "@/src/theme";

export const Wrap = styled.footer`
  position: relative;
  background: var(--forest);
  color: rgb(246 241 230 / 0.72);
  padding-top: clamp(4rem, 8vw, 6.5rem);
  overflow: hidden;

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s;
    &:hover {
      color: var(--paper);
    }
  }
`;

export const Inner = styled.div`
  ${container};
`;

export const Top = styled.div`
  display: grid;
  grid-template-columns: 1.6fr repeat(3, 1fr);
  gap: clamp(2rem, 4vw, 4rem);

  ${mq.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
  ${mq.sm} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Brand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  p {
    max-width: 22rem;
    font-family: var(--font-display);
    font-size: clamp(1.375rem, 1.2rem + 0.6vw, 1.75rem);
    line-height: 1.3;
    color: var(--paper);
  }
  em {
    color: var(--saffron);
  }

  ${mq.lg} {
    grid-column: 1 / -1;
  }
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 0.9375rem;
`;

export const Social = styled.div`
  display: flex;
  gap: 0.5rem;

  a {
    display: grid;
    place-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid rgb(246 241 230 / 0.18);
    font-size: 1rem;
    &:hover {
      border-color: var(--paper);
    }
  }
`;

export const Col = styled.div`
  h2 {
    margin-bottom: 1.25rem;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--saffron);
  }
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
  }
  a {
    font-size: 0.9375rem;
  }
`;

export const Wordmark = styled.div`
  margin: clamp(3rem, 6vw, 5rem) 0 -0.12em;
  font-family: var(--font-display);
  font-style: italic;
  font-variation-settings:
    "opsz" 144,
    "SOFT" 100;
  font-size: clamp(6rem, 24vw, 22rem);
  line-height: 0.8;
  letter-spacing: -0.04em;
  color: rgb(246 241 230 / 0.06);
  user-select: none;
  white-space: nowrap;
`;

export const Bottom = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.5rem 0 2rem;
  border-top: 1px solid rgb(246 241 230 / 0.12);
  font-size: 0.8125rem;

  ${mq.sm} {
    flex-direction: column-reverse;
    align-items: flex-start;
  }
`;

export const Payments = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 1.5rem;
  color: rgb(246 241 230 / 0.5);
`;

export const Compact = styled.footer`
  padding: 1.5rem 0;
  border-top: 1px solid var(--line);
  font-size: 0.8125rem;
  color: var(--muted);

  > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem;
  }
  nav {
    display: flex;
    flex-wrap: wrap;
    gap: 1.25rem;
  }
  a {
    color: inherit;
    &:hover {
      color: var(--ink);
    }
  }
`;
