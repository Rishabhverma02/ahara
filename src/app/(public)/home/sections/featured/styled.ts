import styled, { keyframes, css } from "styled-components";
import heroBg from "@/src/assets/images/section-images/all-in-one.png";
import { text16 } from "@/src/theme/Typography";

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

export const FeaturedWrapper = styled.section`
  width: 100%;
  padding: 120px 0;
  background:
    linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroBg.src});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;

  @media (max-width: 1024px) {
    background-attachment: scroll;
    padding: 80px 0;
  }
`;

export const FeaturedContent = styled.div<{ $animate?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 60%;
  align-items: center;
  justify-content: center;

  opacity: 0;
  ${({ $animate }) =>
    $animate &&
    css`
      animation: ${fadeInUp} 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    `}
`;

export const FeaturedTitle = styled.h2`
  font-size: clamp(32px, 5vw, 48px);
  font-weight: 800;
  line-height: 1.2;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const FeaturedButton = styled.button`
  padding: 16px 40px;
  background: white;
  color: #7e7c2a;
  border: none;
  border-radius: 50px;
  ${text16};
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 280px;
  }
`;
