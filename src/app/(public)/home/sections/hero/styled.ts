import styled, { keyframes } from "styled-components";

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const float1 = keyframes`
  0% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(30px, -50px) rotate(120deg); }
  66% { transform: translate(-20px, -100px) rotate(240deg); }
  100% { transform: translate(0, 0) rotate(360deg); }
`;

const float2 = keyframes`
  0% { transform: translate(0, 0) rotate(0deg); }
  50% { transform: translate(-40px, -30px) rotate(-180deg); }
  100% { transform: translate(0, 0) rotate(-360deg); }
`;

const float3 = keyframes`
  0% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(50px, 20px) scale(1.2); }
  100% { transform: translate(0, 0) scale(1); }
`;

export const HeroWrapper = styled.section`
  width: 100%;
  height: 100vh;
  background: #EACEA7;
  background: radial-gradient(circle at 70% 30%, #f3e5d1 0%, #EACEA7 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
`;

export const HeroGrid = styled.div`
  width: 100%;
  max-width: 1400px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 80px 5%;
  padding-top: 10%;
`;

export const HeroContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const HeroTitle = styled.h1`
  font-size: clamp(48px, 8vw, 84px);
  font-weight: 800;
  line-height: 1.1;
  color: #3a2f25;
  display: flex;
  flex-direction: column;

  .line {
    display: flex;
    white-space: nowrap;
    gap: 20px; 
  }

  .w1 {
    font-weight: 300;
  }

  .w2 {
    font-weight: 800;
    color: #7E7C2A;
  }

  .w3 {
    font-weight: 800;
    background: linear-gradient(120deg, #7E7C2A, #a3a14d);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .w4 {
    font-weight: 300;
  }

  @media (max-width: 768px) {
    .line {
      flex-direction: column;
      gap: 0;
    }
  }
`;

export const HeroDescription = styled.p`
  font-size: 16px;
  line-height: 1.8;
  color: #4b3d32;
  max-width: 560px;
`;

export const HeroButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 10px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const HeroButton = styled.button`
  padding: 16px 32px;
  border-radius: 50px;
  border: none;
  background: #7E7C2A;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 14px rgba(126, 124, 42, 0.4);

  &:hover {
    background: #6a6823;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(126, 124, 42, 0.5);
  }
`;

export const HeroSecondaryButton = styled.button`
  padding: 16px 32px;
  border-radius: 50px;
  border: 2px solid #7E7C2A;
  background: transparent;
  color: #7E7C2A;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(126, 124, 42, 0.05);
    transform: translateY(-2px);
  }
`;

export const HeroImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    height: 400px;
  }
`;

export const FloatingImage = styled.div<{ 
  $top?: string; 
  $left?: string; 
  $right?: string; 
  $bottom?: string; 
  $width?: string; 
  $delay?: string;
  $zIndex?: number;
}>`
  position: absolute;
  top: ${({ $top }) => $top || 'auto'};
  left: ${({ $left }) => $left || 'auto'};
  right: ${({ $right }) => $right || 'auto'};
  bottom: ${({ $bottom }) => $bottom || 'auto'};
  width: ${({ $width }) => $width || '200px'};
  z-index: ${({ $zIndex }) => $zIndex || 1};
  transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  will-change: transform;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    animation: ${float} 6s ease-in-out infinite;
    animation-delay: ${({ $delay }) => $delay || '0s'};
    filter: drop-shadow(0 15px 30px rgba(0, 0, 0, 0.1));
    transition: all 0.5s ease;
  }

  &:hover {
    transform: scale(1.08) rotate(3deg);
    z-index: 10;
    
    img {
      filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.15));
    }
  }
`;

export const FloatingBadge = styled.div<{ $top?: string; $left?: string; $right?: string; $bottom?: string; $delay?: string }>`
  position: absolute;
  top: ${({ $top }) => $top || 'auto'};
  left: ${({ $left }) => $left || 'auto'};
  right: ${({ $right }) => $right || 'auto'};
  bottom: ${({ $bottom }) => $bottom || 'auto'};
  padding: 12px 20px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 50px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  font-weight: 700;
  color: #3a2f25;
  z-index: 2;
  animation: ${float} 5s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay || '0s'};

  svg {
    color: #7E7C2A;
    font-size: 20px;
  }

  &:hover {
    transform: scale(1.1);
    background: #fff;
  }
`;

export const DecorativeLeaf = styled.div<{ 
  $top?: string; 
  $left?: string; 
  $right?: string; 
  $bottom?: string; 
  $size?: string; 
  $rotate?: string;
  $color?: string;
  $opacity?: number;
  $duration?: string;
  $animType?: number;
}>`
  position: absolute;
  top: ${({ $top }) => $top || 'auto'};
  left: ${({ $left }) => $left || 'auto'};
  right: ${({ $right }) => $right || 'auto'};
  bottom: ${({ $bottom }) => $bottom || 'auto'};
  width: ${({ $size }) => $size || '100px'};
  height: ${({ $size }) => $size || '100px'};
  opacity: ${({ $opacity }) => $opacity || 0.1};
  color: ${({ $color }) => $color || 'inherit'};
  transform: rotate(${({ $rotate }) => $rotate || '0deg'});
  pointer-events: none;
  z-index: 1;
  animation: ${({ $animType }) => {
    if ($animType === 1) return float1;
    if ($animType === 2) return float2;
    return float3;
  }} ${({ $duration }) => $duration || '20s'} ease-in-out infinite;

  svg {
    width: 100%;
    height: 100%;
  }
`;
