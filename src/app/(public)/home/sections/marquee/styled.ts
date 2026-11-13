import styled, { keyframes } from "styled-components";

export const scroll = keyframes`
  to { transform: translateX(-50%); }
`;

export const Band = styled.section`
  background: var(--forest);
  color: var(--paper);
  overflow: hidden;
  padding: 1.15rem 0;
`;

export const Track = styled.div`
  display: flex;
  width: max-content;
  animation: ${scroll} 48s linear infinite;

  ${Band}:hover & {
    animation-play-state: paused;
  }
`;

export const Row = styled.ul`
  display: flex;
  list-style: none;

  li {
    display: flex;
    align-items: center;
    gap: 2.25rem;
    padding-right: 2.25rem;
    font-family: var(--font-display);
    font-size: clamp(1.0625rem, 1rem + 0.4vw, 1.375rem);
    font-style: italic;
    white-space: nowrap;
  }
`;

export const Star = styled.svg`
  width: 14px;
  height: 14px;
  fill: var(--saffron);
`;
