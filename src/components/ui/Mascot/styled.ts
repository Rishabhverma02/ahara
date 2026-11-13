import styled, { css, keyframes } from "styled-components";

export const bob = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
`;

export const sway = keyframes`
  0%, 100% { transform: rotate(-4deg) translateY(0); }
  50% { transform: rotate(4deg) translateY(-6px); }
`;

export const Wrap = styled.div<{ $motion?: "none" | "bob" | "sway" }>`
  flex-shrink: 0;
  transform-origin: 50% 0%;

  img {
    width: 100%;
    height: auto;
  }

  ${({ $motion }) =>
    $motion === "bob" &&
    css`
      animation: ${bob} 4.5s ease-in-out infinite;
    `}
  ${({ $motion }) =>
    $motion === "sway" &&
    css`
      animation: ${sway} 5s ease-in-out infinite;
    `}
`;
