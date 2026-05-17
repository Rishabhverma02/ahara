import styled from "styled-components";

export const WhyAharaWrapper = styled.section`
  width: 100%;
  padding: 100px 0;
  background: white;
`;

export const WhyAharaContainer = styled.div`
  width: 92%;
  max-width: 1400px;
  margin: 0 auto;
  text-align: center;
`;

export const SectionTitle = styled.h2`
  font-size: 36px;
  font-weight: 800;
  color: #2D2D2D;
  margin-bottom: 60px;
`;

export const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 30px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
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
  color: #7E7C2A;
  font-size: 32px;
  transition: all 0.3s ease;

  &:hover {
    background: #7E7C2A;
    color: white;
    transform: scale(1.1);
  }
`;

export const FeatureHeading = styled.h4`
  font-size: 18px;
  font-weight: 700;
  color: #2D2D2D;
  margin: 0;
`;

export const FeatureDesc = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.5;
`;
