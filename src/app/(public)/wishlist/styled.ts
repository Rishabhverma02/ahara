"use client";

import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
`;


export const WishlistPageWrapper = styled.div`
  background: #ffffff;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const PageContainer = styled.div`
  width: 100%;
  padding: 60px 24px;
  background-color: #7e7d2a18; /* soft green/beige background overlay */
  flex-grow: 1;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
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
