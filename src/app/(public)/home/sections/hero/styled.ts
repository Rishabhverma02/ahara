import styled from "styled-components";

/* Page-level hero */
export const HeroWrapper = styled.section`
  width: 100%;
  background: #EACEA7;
  display: flex;
  align-items: center;
  justify-content: center;
`;

/* Two-column layout */
export const HeroGrid = styled.div`
  width: 100%;
  max-width: 1400px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 80px 5%;
  padding-top: 10%;
`;

/* Content column */
export const HeroContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

/* Title */
export const HeroTitle = styled.h1`
  font-size: 84px;
  font-weight: 700;
  line-height: 1.2;
  color: #3a2f25;
  display: flex;
  flex-direction: column;

  .line {
    display: flex;
    white-space: nowrap;
    gap: 40px; 
  }

  .w1 {
    font-weight: 400;
    opacity: 1;
  }

  .w2 {
    font-weight: 700;
    opacity: 0.65;
  }

  .w3 {
    font-weight: 700;
    opacity: 0.65;
  }

  .w4 {
    font-weight: 400;
    opacity: 1;
    
  }
`;

/* Description */
export const HeroDescription = styled.p`
  font-size: 16px;
  line-height: 1.8;
  color: #4b3d32;
  max-width: 560px;
`;

/* CTA */
export const HeroButton = styled.button`
  align-self: flex-start;
  padding: 14px 34px;
  border-radius: 10px;
  border: none;
  background: #3a2f25;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background: #2c241d;
    transform: translateY(-1px);
  }
`;

/* Image column */
export const HeroImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 480px;
`;
