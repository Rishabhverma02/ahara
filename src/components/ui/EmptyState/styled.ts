"use client";

import styled, { keyframes } from "styled-components";
import Link from "next/link";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0% { transform: translateY(0px) rotate(var(--rot, 0deg)); }
  50% { transform: translateY(-10px) rotate(var(--rot, 0deg)); }
  100% { transform: translateY(0px) rotate(var(--rot, 0deg)); }
`;

const pulseRing = keyframes`
  0% { transform: scale(0.95); opacity: 0.5; }
  50% { transform: scale(1.15); opacity: 0; }
  100% { transform: scale(0.95); opacity: 0; }
`;

const spinSparkle = keyframes`
  0% { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(180deg) scale(1.2); }
  100% { transform: rotate(360deg) scale(1); }
`;

export const EmptyStateWrapper = styled.div`
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(126, 124, 42, 0.12);
  border-radius: 36px;
  padding: 70px 40px;
  text-align: center;
  box-shadow: 
    0 20px 40px rgba(126, 124, 42, 0.04), 
    inset 0 1px 0 rgba(255, 255, 255, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  max-width: 580px;
  width: 100%;
  align-self: center;
  margin: 40px 0;
  position: relative;
  animation: ${fadeIn} 0.5s ease-out forwards;
`;

export const FloatingTag = styled.div<{ $delay?: string }>`
  position: absolute;
  background: rgba(255, 255, 255, 0.9);
  border: 1.5px solid rgba(126, 124, 42, 0.15);
  color: #3a2f25;
  font-size: 13px;
  font-weight: 700;
  padding: 8px 16px;
  border-radius: 100px;
  box-shadow: 0 10px 20px rgba(42, 36, 30, 0.05);
  pointer-events: none;
  animation: ${float} 4s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay || "0s"};
  z-index: 10;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const Badge = styled.span`
  background: rgba(126, 124, 42, 0.08);
  color: #7e7c2a;
  border: 1px solid rgba(126, 124, 42, 0.15);
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  padding: 6px 14px;
  border-radius: 100px;
  margin-bottom: 8px;
  display: inline-block;
  width: fit-content;
  align-self: center;
`;

export const EmptyIconWrapper = styled.div`
  width: 110px;
  height: 110px;
  background: #ffffff;
  border: 1.5px solid rgba(126, 124, 42, 0.18);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: 0 10px 25px rgba(126, 124, 42, 0.08);

  .main-icon {
    color: #7e7c2a;
    z-index: 2;
    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  ${EmptyStateWrapper}:hover & .main-icon {
    transform: scale(1.1);
  }

  .icon-pulse-ring {
    position: absolute;
    inset: -8px;
    border: 2px solid rgba(126, 124, 42, 0.15);
    border-radius: 50%;
    animation: ${pulseRing} 3s infinite ease-in-out;
    pointer-events: none;
    z-index: 1;
  }

  .sparkle-1 {
    position: absolute;
    top: -5px;
    right: -5px;
    color: #d4a373;
    animation: ${spinSparkle} 4s infinite linear;
    z-index: 2;
  }

  .sparkle-2 {
    position: absolute;
    bottom: 5px;
    left: -8px;
    color: #7e7c2a;
    animation: ${spinSparkle} 6s infinite linear;
    z-index: 2;
  }
`;

export const EmptyTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  h2 {
    font-size: 28px;
    font-weight: 800;
    color: #2a241e;
    margin: 0;
    letter-spacing: -0.6px;
    line-height: 1.2;
  }

  p {
    font-size: 15px;
    color: #6c6959;
    margin: 0;
    line-height: 1.6;
    max-width: 400px;
    align-self: center;
  }
`;

export const ShopNowBtn = styled(Link)`
  padding: 16px 40px;
  background: linear-gradient(135deg, #2a241e 0%, #1a1613 100%);
  color: #ffffff;
  text-decoration: none;
  font-size: 13px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 100px;
  box-shadow: 0 10px 30px rgba(42, 36, 30, 0.25);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  display: inline-flex;
  align-items: center;
  gap: 8px;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, #7e7c2a 0%, #6c6a23 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
  }

  span, svg {
    position: relative;
    z-index: 2;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 15px 35px rgba(126, 124, 42, 0.3);

    &::before {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(-1px);
  }
`;
