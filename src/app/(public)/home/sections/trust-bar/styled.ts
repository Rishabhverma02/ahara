import styled, { keyframes, css } from "styled-components";
import { text14 } from "@/src/theme/Typography";

export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const TrustBarWrapper = styled.div`
  width: 100%;
  background: #7E7C2A;
  padding: 30px 0;
  border-bottom: 1px solid #f0f0f0;

  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;

export const TrustBarContainer = styled.div<{ $animate?: boolean }>`
  width: 92%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  opacity: 0;
  ${({ $animate }) =>
    $animate &&
    css`
      animation: ${fadeInUp} 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    `}

  @media (max-width: 768px) {
    justify-content: center;
    gap: 16px 24px;
  }
`;

export const TrustItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  ${text14};
  font-weight: 600;
  color: #ffffffff;
  opacity: 0.8;

  svg {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    gap: 8px;
    svg {
      font-size: 18px;
    }
  }
`;
