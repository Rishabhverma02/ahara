import styled, { keyframes, css } from "styled-components";

export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const WhyAharaWrapper = styled.section`
  width: 100%;
  padding: 100px 0;
  background: #7e7d2a13;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

export const WhyAharaContainer = styled.div<{ $animate?: boolean }>`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;

  opacity: 0;
  ${({ $animate }) =>
    $animate &&
    css`
      animation: ${fadeInUp} 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    `}
`;

export const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const FeatureItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const IconCircle = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #fdfaf5;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #7e7c2a;
  transition: all 0.3s ease;
  box-shadow: 1px 2px 3px 1px #00000026;

  svg {
    font-size: 28px;
  }

  &:hover {
    background: #7e7c2a;
    color: white;
    transform: scale(1.1);
  }
`;

export const FeatureHeading = styled.h4`
  margin-top: 12px;
  font-size: 18px;
  font-weight: 700;
  color: #5a591eff;
`;

export const FeatureDesc = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.5;
  text-align: center;
`;
