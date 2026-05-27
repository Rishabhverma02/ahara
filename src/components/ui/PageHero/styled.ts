import styled from "styled-components";
import Link from "next/link";

export const HeroWrapper = styled.section<{ $bg?: string }>`
  width: 100%;
  padding: 170px 24px 100px;
  text-align: center;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid rgba(126, 124, 42, 0.08);
  background: #1e1b18; /* Dark elegant brown base to back the dimmed image */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: ${({ $bg }) =>
      $bg ? `url(${$bg})` : "linear-gradient(180deg, #f6f8ef 0%, #fafafa 100%)"};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.5; 
    filter: brightness(0.65); 
    z-index: 1;
    pointer-events: none;
  }
`;

export const HeroBreadcrumb = styled.nav`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 13px;
  position: relative;
  background: rgba(126, 124, 42, 0.05);
  padding: 6px 16px;
  border-radius: 100px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 2;
`;

export const BreadcrumbLink = styled(Link)`
  color: #f4f6f0;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`;

export const BreadcrumbSep = styled.span`
  color: rgba(244, 246, 240, 0.6);
  font-size: 10px;
`;

export const BreadcrumbCurrent = styled.span`
  color: #ffffff;
  font-weight: 600;
`;

export const HeroTitle = styled.h1`
  font-size: clamp(2.25rem, 5vw, 3.6rem);
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -0.8px;
  position: relative;
  font-family: inherit;
  z-index: 2;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.15;

  .line {
    display: flex;
    white-space: nowrap;
    gap: 12px;
  }

  .w1 {
    font-weight: 300;
    color: #ffffff;
  }

  .w2 {
    font-weight: 800;
    color: #a09e1dff;
  }

  .w3 {
    font-weight: 800;
    background: linear-gradient(120deg, #a09e1dff, #ffffff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 1024px) {
    align-items: center;
    .line {
      justify-content: center;
    }
  }

  @media (max-width: 768px) {
    .line {
      flex-direction: column;
      gap: 0;
      white-space: normal;
    }
  }
`;

export const HeroSubtitle = styled.p`
  font-size: clamp(0.95rem, 1.8vw, 1.15rem);
  color: rgba(255, 255, 255, 0.95); 
  max-width: 620px;
  line-height: 1.75;
  position: relative;
  font-weight: 500;
  z-index: 2;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
`;
