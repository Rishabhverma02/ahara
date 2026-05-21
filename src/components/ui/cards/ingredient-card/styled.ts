import styled, { keyframes, css } from "styled-components";
import Link from "next/link";

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

export const CardWrapper = styled.div<{ $animate?: boolean; $delay?: number }>`
  background: white;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
  transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  display: flex;
  flex-direction: column;
  height: 100%;
  cursor: pointer;

  opacity: 0;
  ${({ $animate }) =>
    $animate &&
    css`
      animation: ${fadeInUp} 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    `}

  ${({ $delay }) =>
    $delay !== undefined &&
    css`
      animation-delay: ${$delay}ms;
    `}

  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 25px 50px rgba(126, 124, 42, 0.08);
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 260px;
  position: relative;
  background: #eee;
  overflow: hidden;
`;

export const ImageWrapper = styled.div<{ $src: string }>`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.$src});
  background-size: cover;
  background-position: center;
  transition: transform 1.2s cubic-bezier(0.165, 0.84, 0.44, 1);

  ${CardWrapper}:hover & {
    transform: scale(1.08);
  }
`;

export const ContentWrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 16px;
`;

export const Title = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: #2d2d2d;
  margin: 0;
  transition: color 0.3s ease;

  ${CardWrapper}:hover & {
    color: #7e7c2a;
  }
`;

export const Description = styled.p`
  font-size: 15px;
  color: #666;
  line-height: 1.6;
  margin: 0;
  flex-grow: 1;
`;

export const ExploreLink = styled(Link)`
  font-size: 16px;
  font-weight: 700;
  color: #7e7c2a;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: auto;
  align-self: flex-start;
  transition: color 0.3s ease;

  &:hover {
    color: #5d5b1f;
  }
`;

export const ExploreArrow = styled.span`
  display: inline-block;
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  ${CardWrapper}:hover & {
    transform: translateX(6px);
  }
`;
