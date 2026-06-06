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

export const CardWrapper = styled.div<{ $animate?: boolean }>`
  background: white;
  border-radius: 18px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.04);
  cursor: pointer;

  opacity: 0;
  ${({ $animate }) =>
    $animate &&
    css`
      animation: ${fadeInUp} 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;

      &:nth-child(1) {
        animation-delay: 0.15s;
      }
      &:nth-child(2) {
        animation-delay: 0.3s;
      }
      &:nth-child(3) {
        animation-delay: 0.45s;
      }
      &:nth-child(4) {
        animation-delay: 0.6s;
      }
    `}

  &:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: 0 30px 60px rgba(126, 124, 42, 0.12);
  }
`;

export const ImageContainer = styled.div<{ $bgColor: string }>`
  width: 100%;
  aspect-ratio: 4/4;
  border-radius: 6px;
  position: relative;
  background: ${(props) => props.$bgColor};
  overflow: hidden;
  transition: background-color 0.3s ease;
`;

export const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 2;
  transition: transform 1.2s cubic-bezier(0.165, 0.84, 0.44, 1);

  ${CardWrapper}:hover & {
    transform: scale(1.08);
  }
`;

export const PriceTag = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background: white;
  padding: 10px 20px;
  border-bottom-left-radius: 24px;
  font-size: 20px;
  font-weight: 500;
  color: #5f320fff;
  z-index: 10;
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &::before {
    content: "";
    position: absolute;
    left: -24px;
    top: 0;
    width: 24px;
    height: 24px;
    background: radial-gradient(circle at 0 100%, transparent 24px, white 25px);
  }

  &::after {
    content: "";
    position: absolute;
    right: 0;
    bottom: -24px;
    width: 24px;
    height: 24px;
    background: radial-gradient(circle at 0 100%, transparent 24px, white 25px);
  }
`;

export const InfoWrapper = styled.div`
  padding: 0 4px 4px 4px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ProductHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductName = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #7e7c2a;
  margin: 0;
  letter-spacing: -0.3px;
  transition: color 0.3s ease;

  ${CardWrapper}:hover & {
    color: #5d5b1f;
  }
`;

export const OrderLink = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: #5f320fff;
  display: flex;
  align-items: center;
  gap: 4px;
  border-bottom: 1px solid #5f320fff;
  padding-bottom: 2px;
  cursor: pointer;
  transition: all 0.3s ease;
   

  ${CardWrapper}:hover & {
    color: #7e7c2a;
    border-color: #7e7c2a;
  }
`;

export const OrderArrow = styled.span`
  display: inline-block;
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  ${CardWrapper}:hover & {
    transform: translate(3px, -3px);
  }
`;

export const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 10px 0px;
`;

export const Tag = styled.span<{ $bgColor: string; $textColor: string }>`
  background: ${(props) => props.$bgColor};
  color: ${(props) => props.$textColor};
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  }
`;

export const WishlistButton = styled.button<{ $active: boolean }>`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 3;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid rgba(126, 124, 42, 0.15);
  background: ${({ $active }) =>
    $active ? "#ffffff" : "rgba(255, 255, 255, 0.85)"};
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  color: ${({ $active }) => ($active ? "#c0392b" : "#7e7c2a")};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 12px rgba(42, 36, 30, 0.05);

  &:hover {
    transform: scale(1.1);
    background: #ffffff;
    color: #c0392b;
    box-shadow: 0 6px 16px rgba(192, 57, 43, 0.15);
  }

  &:active {
    transform: scale(0.9);
  }

  svg {
    font-size: 16px;
    transition: transform 0.3s ease;
  }

  ${({ $active }) =>
    $active &&
    `
      svg {
        animation: heartBeat 0.4s ease-out;
      }
    `}

  @keyframes heartBeat {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.3);
    }
    100% {
      transform: scale(1);
    }
  }
`;

