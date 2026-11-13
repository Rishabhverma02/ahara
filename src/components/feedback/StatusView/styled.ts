import styled, { keyframes } from "styled-components";
import { container, display } from "@/src/theme";

export const Wrap = styled.section`
  ${container};
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: calc(var(--header-h) + 3rem) 0 5rem;
  text-align: center;
`;

export const Code = styled.p`
  margin-top: 1rem;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--olive);
`;

export const Title = styled.h1`
  ${display};
  font-size: clamp(2.25rem, 1.6rem + 2.6vw, 3.75rem);

  em {
    font-style: italic;
    color: var(--olive);
  }
`;

export const Body = styled.p`
  max-width: 34rem;
  color: var(--ink-2);
  font-size: 1.0625rem;
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1rem;
`;

export const shimmer = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(250%); }
`;

export const Bar = styled.div`
  position: fixed;
  inset: 0 0 auto;
  z-index: 500;
  height: 3px;
  overflow: hidden;
  background: rgb(var(--olive-rgb) / 0.15);

  span {
    display: block;
    width: 40%;
    height: 100%;
    background: var(--olive);
    animation: ${shimmer} 1s var(--ease-out) infinite;
  }
`;
