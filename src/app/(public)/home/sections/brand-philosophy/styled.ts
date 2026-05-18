import styled from "styled-components";

export const WhyAharaWrapper = styled.section`
  width: 100%;
  padding: 100px 0;
  background: #7e7d2a13;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WhyAharaContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`;

export const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;

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
  gap: 20px;
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
  font-size: 32px;
  transition: all 0.3s ease;

  &:hover {
    background: #7e7c2a;
    color: white;
    transform: scale(1.1);
  }
`;

export const FeatureHeading = styled.h4`
  font-size: 18px;
  font-weight: 700;
  color: #2d2d2d;
  margin: 0;
`;

export const FeatureDesc = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.5;
  text-align: center;
`;
