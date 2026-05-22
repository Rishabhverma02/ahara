import styled, { keyframes } from "styled-components";
import { text14, text16 } from "@/src/theme/Typography";

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

const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
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

  @media (max-width: 1024px) {
    height: auto;
    min-height: 100vh;
    padding-top: 120px;
    padding-bottom: 60px;
  }
`;

export const HeroGrid = styled.div`
  width: 100%;
  max-width: 1400px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 80px 5%;
  padding-top: 10%;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 50px;
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;

export const HeroContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  
  animation: ${fadeInLeft} 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;

  @media (max-width: 1024px) {
    align-items: center;
    text-align: center;
  }
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

  @media (max-width: 1024px) {
    align-items: center;
    .line {
      justify-content: center;
    }
  }

  @media (max-width: 768px) {
    font-size: clamp(36px, 10vw, 56px);
    .line {
      flex-direction: column;
      gap: 0;
      white-space: normal;
    }
  }
`;

export const HeroDescription = styled.p`
  ${text16};
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
    width: 100%;
    align-items: center;
  }
`;

export const HeroButton = styled.button`
  padding: 16px 32px;
  border-radius: 50px;
  border: none;
  background: #7E7C2A;
  color: #ffffff;
  ${text16};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 14px rgba(126, 124, 42, 0.4);

  &:hover {
    background: #6a6823;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(126, 124, 42, 0.5);
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 320px;
    text-align: center;
  }
`;

export const HeroSecondaryButton = styled.button`
  padding: 16px 32px;
  border-radius: 50px;
  border: 2px solid #7E7C2A;
  background: transparent;
  color: #7E7C2A;
  ${text16};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(126, 124, 42, 0.05);
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 320px;
    text-align: center;
  }
`;

export const HeroImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  animation: ${fadeInRight} 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;

  @media (max-width: 1024px) {
    height: 480px;
    max-width: 500px;
    margin: 0 auto;
  }

  @media (max-width: 480px) {
    height: 380px;
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

  @media (max-width: 1024px) {
    width: ${({ $width }) => $width ? `calc(${$width} * 0.75)` : '150px'};
    left: ${({ $left }) => $left && ($left.startsWith('-') ? '0%' : $left)};
    right: ${({ $right }) => $right && ($right.startsWith('-') ? '0%' : $right)};
  }

  @media (max-width: 768px) {
    width: ${({ $width }) => $width ? `calc(${$width} * 0.55)` : '110px'};
    left: ${({ $left }) => $left && ($left.startsWith('-') ? '10px' : $left)};
    right: ${({ $right }) => $right && ($right.startsWith('-') ? '10px' : $right)};
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
  ${text14};
  font-weight: 700;
  color: #3a2f25;
  z-index: 6;
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

  @media (max-width: 1024px) {
    padding: 8px 14px;
    font-size: 12px;
    left: ${({ $left }) => $left && ($left.startsWith('-') ? '0%' : $left)};
    right: ${({ $right }) => $right && ($right.startsWith('-') ? '0%' : $right)};
  }

  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: 11px;
    left: ${({ $left }) => $left && ($left.startsWith('-') ? '5px' : $left)};
    right: ${({ $right }) => $right && ($right.startsWith('-') ? '5px' : $right)};
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

  @media (max-width: 768px) {
    width: ${({ $size }) => $size ? `calc(${$size} * 0.5)` : '50px'};
    height: ${({ $size }) => $size ? `calc(${$size} * 0.5)` : '50px'};
    opacity: ${({ $opacity }) => $opacity ? $opacity * 0.5 : 0.05};
  }
`;
