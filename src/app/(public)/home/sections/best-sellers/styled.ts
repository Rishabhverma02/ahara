import styled, { keyframes, css } from "styled-components";

export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const BestSellersWrapper = styled.section`
  width: 100%;
  background: #7e7d2a13;
  display: flex;
  justify-content: center;
`;

export const BestSellersContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding: 100px 0;

  @media (max-width: 768px) {
    padding: 40px 0;
    gap: 30px;
  }
`;

export const SectionHeader = styled.div<{ $animate: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > *:first-child {
    opacity: 0;
    ${({ $animate }) => $animate && css`
      animation: ${fadeInLeft} 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    `}
  }

  & > *:last-child {
    opacity: 0;
    ${({ $animate }) => $animate && css`
      animation: ${fadeInRight} 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      animation-delay: 0.2s;
    `}
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 24px;
  }
`;

export const ShopAllLink = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px 32px;
  background: #7E7C2A;
  color: white;
  border-radius: 100px;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 4px 14px rgba(126, 124, 42, 0.25);

  &:hover {
    background: #6a6823;
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 10px 20px rgba(126, 124, 42, 0.35);
  }

  @media (max-width: 480px) {
   display: none  ;
  }
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    gap: 20px;
    padding: 10px 20px;
    margin: 0 -20px;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;

    & > * {
      flex: 0 0 100%;
      scroll-snap-align: center;
    }
  }
`;

export const SlideWrapper = styled.div`
  display: contents;

  @media (max-width: 768px) {
    display: block;
    flex: 0 0 100%;
    scroll-snap-align: center;
    padding: 0 16px;
    box-sizing: border-box;
  }
`;

export const DotsContainer = styled.div`
  display: none;
  justify-content: center;
  gap: 8px;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const Dot = styled.button<{ $active: boolean }>`
  width: ${({ $active }) => $active ? "20px" : "8px"};
  height: 8px;
  border-radius: 4px;
  border: none;
  background: ${({ $active }) => $active ? "#7E7C2A" : "#DDC7A1"};
  transition: all 0.3s ease;
  cursor: pointer;
  padding: 0;
  outline: none;
`;


