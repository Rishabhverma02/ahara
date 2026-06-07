import styled, { keyframes } from "styled-components";

export const ShippingProgressContainer = styled.div`
  background: #fdfaf5;
  border-radius: 10px;
  padding: 16px 20px;
  border: 1px solid rgba(126, 124, 42, 0.12);
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
`;

export const ShippingProgressText = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #3a2f25;
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    font-weight: 700;
    color: #7e7c2a;
  }

  svg {
    color: #7e7c2a;
    font-size: 16px;
  }
`;

export const ProgressBarWrapper = styled.div`
  width: 100%;
  height: 4px;
  background: #e8e6df;
  border-radius: 2px;
  position: relative;
  margin: 64px 0 16px 0;
`;

export const ProgressBarFill = styled.div<{ $percent: number }>`
  height: 100%;
  width: ${({ $percent }) => {
    const pct = Math.min(100, $percent);
    return `calc(${pct}% + ${1.105 * (100 - pct)}px)`;
  }};
  background: #7e7c2a;
  border-radius: 2px;
  transition: width 3s cubic-bezier(0.22, 1, 0.36, 1);
  position: absolute;
  left: 0;
  top: 0;
`;

export const RewardCheckpoint = styled.div<{ $percent: number }>`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: ${({ $percent }) => ($percent >= 50 ? "#7e7c2a" : "#e8e6df")};
  border: 2px solid #fdfaf5;
  box-shadow: 0 0 0 2px
    ${({ $percent }) =>
      $percent >= 50 ? "rgba(126, 124, 42, 0.4)" : "rgba(232, 230, 223, 0.4)"};
  z-index: 5;
  transition: all 0.5s ease;

  &::after {
    content: "";
    position: absolute;
    top: -24px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 14px;
    opacity: ${({ $percent }) => ($percent >= 50 ? 0.4 : 1)};
    transition: opacity 0.5s ease;
  }
`;

const firePulse = keyframes`
  0% {
    transform: translateX(-50%) scale(0.95);
    box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3), 0 0 0 0 rgba(239, 68, 68, 0.5);
  }
  50% {
    transform: translateX(-50%) scale(1.05);
    box-shadow: 0 6px 16px rgba(249, 115, 22, 0.5), 0 0 0 8px rgba(249, 115, 22, 0);
  }
  100% {
    transform: translateX(-50%) scale(0.95);
    box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3), 0 0 0 0 rgba(239, 68, 68, 0);
  }
`;

export const FireRewardPopup = styled.div`
  position: absolute;
  top: -52px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #ef4444 0%, #f97316 100%);
  color: #ffffff;
  padding: 8px 14px;
  border-radius: 30px;
  font-size: 11px;
  font-weight: 700;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 6px;
  animation: ${firePulse} 1.5s infinite ease-in-out;
  cursor: pointer;
  z-index: 15;
  pointer-events: auto;
  border: 1px solid rgba(255, 255, 255, 0.2);

  &::after {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 6px 6px 0;
    border-style: solid;
    border-color: #f97316 transparent transparent;
  }

  &:hover {
    filter: brightness(1.1);
  }
`;

export const TruckProgressMarker = styled.div<{ $percent: number }>`
  position: absolute;
  top: -68px;
  left: ${({ $percent }) => Math.min(100, $percent)}%;
  transform: ${({ $percent }) =>
    `translate(${-85 * (Math.min(100, $percent) / 100)}%, 0)`};
  width: 130px;
  height: 80px;
  transition:
    left 3s cubic-bezier(0.22, 1, 0.36, 1),
    transform 3s cubic-bezier(0.22, 1, 0.36, 1);
  z-index: 10;
  pointer-events: none;

  img {
    object-fit: contain;
  }
`;
