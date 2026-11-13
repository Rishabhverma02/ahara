import styled from "styled-components";
import { display } from "@/src/theme";

export const Wrap = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 2rem var(--gutter);
  text-align: center;

  span {
    margin-top: 0.5rem;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--olive);
  }
  h1 {
    ${display};
    font-size: clamp(2.25rem, 1.6rem + 2.4vw, 3.5rem);
  }
  p {
    max-width: 32rem;
    color: var(--ink-2);
    margin-bottom: 0.5rem;
  }
`;
