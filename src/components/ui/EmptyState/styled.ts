import styled from "styled-components";
import { h3 } from "@/src/theme";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.75rem;
  padding: clamp(2.5rem, 6vw, 4.5rem) 1.5rem;
  border: 1px dashed var(--line-strong);
  border-radius: var(--radius-lg);
  background: var(--surface);
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  max-width: 28rem;

  h2 {
    ${h3};
    font-size: clamp(1.5rem, 1.2rem + 1vw, 2rem);
  }
  p {
    color: var(--muted);
  }
`;

export const Kicker = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--olive);
`;
