import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const CardContainer = styled.div`
  background: #ffffff;
  border-radius: 24px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 20px rgba(42, 36, 30, 0.02);
  border: 1px solid #7e7d2a4e;
  animation: ${fadeIn} 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 40px rgba(42, 36, 30, 0.08);
    border-color: rgba(126, 124, 42, 0.2);
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 1.1 / 1;
  background: #f4f6f0; // Soft cream/green background
  border-radius: 18px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;

  ${CardContainer}:hover & {
    background: #ebeee2;
  }
`;

export const Badge = styled.span<{ $type: string }>`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 2;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  ${({ $type }) =>
    $type === "Bestseller" &&
    `
      background: #3a2f25;
      color: #ecf3d4;
    `}
  ${({ $type }) =>
    $type === "New" &&
    `
      background: #7e7c2a;
      color: #ffffff;
    `}
  ${({ $type }) =>
    $type === "Sale" &&
    `
      background: #c0392b;
      color: #ffffff;
    `}
`;

export const CardBody = styled.div`
  padding: 12px 6px 4px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const Title = styled.h3`
  font-size: 15px;
  font-weight: 700;
  color: #2a241e;
  margin-bottom: 4px;
  line-height: 1.4;
  letter-spacing: -0.2px;
  transition: color 0.2s ease;

  ${CardContainer}:hover & {
    color: #7e7c2a;
  }
`;

export const Description = styled.p`
  font-size: 12px;
  color: #6f8b5b;
  line-height: 1.4;
  margin-bottom: 12px;
  flex-grow: 1;
`;

export const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-bottom: 10px;
`;

export const Tag = styled.span`
  font-size: 10px;
  font-weight: 700;
  color: #7e7c2a;
  background: rgba(126, 124, 42, 0.06);
  border: 1px solid rgba(126, 124, 42, 0.08);
  border-radius: 20px;
  padding: 2px 8px;
`;

export const FooterRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  border-top: 1px solid rgba(126, 124, 42, 0.08);
  padding-top: 10px;
`;

export const PriceInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

export const PriceLabel = styled.span`
  font-size: 10px;
  font-weight: 700;
  color: #a7a48a;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const PriceRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 6px;
`;

export const Price = styled.span`
  font-size: 16px;
  font-weight: 800;
  color: #3a2f25;
`;

export const OriginalPrice = styled.span`
  font-size: 12px;
  color: #b5b09e;
  text-decoration: line-through;
  font-weight: 500;
`;

export const AddToCartCircle = styled.button`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1.5px solid #7e7c2a;
  background: transparent;
  color: #7e7c2a;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  font-size: 16px;

  &:hover {
    background: #7e7c2a;
    color: #ffffff;
    box-shadow: 0 4px 12px rgba(126, 124, 42, 0.2);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
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

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  color: #a7a48a;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const Stars = styled.div`
  display: flex;
  gap: 2px;
  color: #d4af37;
  font-size: 11px;
`;
