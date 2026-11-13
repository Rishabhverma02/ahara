"use client";

import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
`;


export const WishlistPageWrapper = styled.div`
  background: var(--paper);
  min-height: 100vh;
`;

export const PageContainer = styled.div`
  width: min(100% - 2 * var(--gutter), var(--max-w));
  margin-inline: auto;
  padding-block: clamp(2rem, 4vw, 3.5rem) var(--section-y);
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const WishlistGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  animation: ${fadeIn} 0.5s ease-out forwards;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;
