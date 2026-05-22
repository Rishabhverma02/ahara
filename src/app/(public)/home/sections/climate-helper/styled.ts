import styled, { keyframes } from "styled-components";

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-16px); }
`;

const bubbleIn = keyframes`
  from { opacity: 0; transform: translateY(12px) scale(0.95); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.35; transform: scale(0.8); }
  50%       { opacity: 1;    transform: scale(1); }
`;

const shimmer = keyframes`
  0%   { background-position: -200% center; }
  100% { background-position:  200% center; }
`;

const orbFloat = keyframes`
  0%, 100% { transform: translate(0, 0) scale(1); }
  33%       { transform: translate(20px, -15px) scale(1.05); }
  66%       { transform: translate(-10px, 10px) scale(0.97); }
`;

const tickerScroll = keyframes`
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
`;

export const AssistantWrapper = styled.section`
  width: 100%;
  background: #0d1005;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 100px 0px;
  gap: 100px;
  align-items: center;

  @media (max-width: 768px) {
    padding: 80px 0px;
    gap: 20px;
  }
`;

export const Orb = styled.div<{
  $w: string;
  $h: string;
  $top?: string;
  $bottom?: string;
  $left?: string;
  $right?: string;
  $color: string;
  $blur?: string;
  $delay?: string;
}>`
  position: absolute;
  width: ${(p) => p.$w};
  height: ${(p) => p.$h};
  top: ${(p) => p.$top ?? "auto"};
  bottom: ${(p) => p.$bottom ?? "auto"};
  left: ${(p) => p.$left ?? "auto"};
  right: ${(p) => p.$right ?? "auto"};
  background: ${(p) => p.$color};
  border-radius: 50%;
  filter: blur(${(p) => p.$blur ?? "90px"});
  pointer-events: none;
  animation: ${orbFloat} 9s ease-in-out ${(p) => p.$delay ?? "0s"} infinite;
  z-index: 0;
`;

export const HeadlineBand = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 2;
  gap: 30px;
`;

export const EyebrowPill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  font-weight: 800;
  color: #a8c26e;
  text-transform: uppercase;
  letter-spacing: 3px;
  background: rgba(168, 194, 110, 0.1);
  border: 1px solid rgba(168, 194, 110, 0.22);
  border-radius: 50px;
  padding: 7px 18px;
`;

export const MainHeading = styled.h2`
  font-size: clamp(40px, 6vw, 76px);
  font-weight: 900;
  color: #f0ead4;
  line-height: 1.07;
  letter-spacing: -2.5px;
  max-width: 820px;

  em {
    font-style: normal;
    background: linear-gradient(
      130deg,
      #d4f06a 0%,
      #7eb43c 40%,
      #a8c26e 80%,
      #d4f06a 100%
    );
    background-size: 250% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: ${shimmer} 4s linear infinite;
  }
`;

export const SubDesc = styled.p`
  font-size: 17px;
  line-height: 1.75;
  color: rgba(240, 234, 212, 0.5);
  max-width: 540px;
  margin: 0;
`;

export const Stage = styled.div`
  position: relative;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 2;

  @media (max-width: 768px) {
    height: 400px;
  }
`;

export const GroundGlow = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  height: 80px;
  background: radial-gradient(
    ellipse at center,
    rgba(126, 180, 60, 0.3) 0%,
    transparent 70%
  );
  filter: blur(16px);
  pointer-events: none;
`;

export const CharacterImg = styled.img`
  height: 400px;
  width: auto;
  animation: ${float} 5s ease-in-out infinite;
  filter: drop-shadow(0 60px 70px rgba(0, 0, 0, 0.65));
  position: relative;
  z-index: 3;
  object-fit: contain;
  margin-bottom: -20px;

  @media (max-width: 768px) {
    height: 360px;
  }
`;

export const FloatingCard = styled.div<{ $delay?: string }>`
  position: absolute;
  z-index: 5;
  animation: ${bubbleIn} 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)
    ${(p) => p.$delay ?? "0s"} both;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ChatFloat = styled(FloatingCard)`
  top: 50px;
  left: max(24px, calc(50% - 480px));

  @media (max-width: 768px) {
    display: none;
  }
`;

export const StatFloat = styled(FloatingCard)`
  top: 50px;
  right: max(24px, calc(50% - 480px));

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ResponseFloat = styled(FloatingCard)`
  bottom: 80px;
  right: max(24px, calc(50% - 480px));

  @media (max-width: 768px) {
    display: none;
  }
`;

export const GlassPanel = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 18px;
  padding: 14px 18px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
  max-width: 240px;
`;

export const GlassPanelRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ChatAvatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(168, 194, 110, 0.12);
  border: 1px solid rgba(168, 194, 110, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  flex-shrink: 0;
`;

export const ChatQuestion = styled.p`
  font-size: 12.5px;
  color: rgba(240, 234, 212, 0.75);
  margin: 0;
  line-height: 1.5;
`;

export const ResponseBubble = styled.div`
  background: linear-gradient(135deg, #7eb43c 0%, #5a8a28 100%);
  border-radius: 14px 4px 14px 14px;
  padding: 12px 16px;
  max-width: 220px;
  box-shadow: 0 8px 30px rgba(110, 158, 48, 0.35);
`;

export const ResponseText = styled.p`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.95);
  margin: 0;
  line-height: 1.55;
`;

export const TypingBubble = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 10px 14px;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 4px 14px 14px 14px;
  width: fit-content;
  margin-top: 6px;
`;

export const TypingDot = styled.span<{ $delay: string }>`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: rgba(168, 194, 110, 0.8);
  animation: ${pulse} 1.2s ease-in-out ${(p) => p.$delay} infinite;
`;

export const StatBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 16px;
  padding: 14px 20px;
  box-shadow: 0 16px 50px rgba(0, 0, 0, 0.4);
`;

export const StatIcon = styled.div`
  font-size: 26px;
  line-height: 1;
`;

export const StatInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const StatNumber = styled.span`
  font-size: 20px;
  font-weight: 800;
  color: #c8e66a;
  line-height: 1;
`;

export const StatLabel = styled.span`
  font-size: 11px;
  color: rgba(240, 234, 212, 0.45);
  font-weight: 500;
  letter-spacing: 0.3px;
`;

export const BottomStrip = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  position: relative;
  z-index: 2;
`;

export const Divider = styled.div`
  width: 88%;
  max-width: 1200px;
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    rgba(255, 255, 255, 0.08),
    transparent
  );
`;

export const StatsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  width: 88%;
  max-width: 860px;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 30px;
  }

  @media (max-width: 640px) {
    flex-direction: row;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    width: 100%;
    gap: 0;
    scroll-behavior: smooth;
    justify-content: flex-start;

    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

export const StatCell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  flex: 1;
  padding: 0 20px;

  @media (max-width: 640px) {
    flex: 0 0 100%;
    scroll-snap-align: center;
    box-sizing: border-box;
  }
`;

export const StatCellNumber = styled.span`
  font-size: clamp(32px, 4vw, 52px);
  font-weight: 900;
  color: #c8e66a;
  line-height: 1;
  letter-spacing: -1.5px;
`;

export const StatCellLabel = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: rgba(240, 234, 212, 0.4);
  text-align: center;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  font-size: 11px;
  letter-spacing: 1px;
`;

export const StatCellDivider = styled.div`
  width: 1px;
  height: 44px;
  background: rgba(255, 255, 255, 0.08);
  flex-shrink: 0;

  @media (max-width: 640px) {
    display: none;
  }
`;

export const TickerWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  padding: 14px 0;
  position: relative;

  /* fade edges */
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    width: 120px;
    height: 100%;
    z-index: 2;
    pointer-events: none;
  }
  &::before {
    left: 0;
    background: linear-gradient(to right, #0d1005, transparent);
  }
  &::after {
    right: 0;
    background: linear-gradient(to left, #0d1005, transparent);
  }
`;

export const TickerTrack = styled.div`
  display: flex;
  gap: 0;
  width: max-content;
  animation: ${tickerScroll} 28s linear infinite;
`;

export const TickerItem = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 12.5px;
  font-weight: 700;
  color: rgba(240, 234, 212, 0.35);
  text-transform: uppercase;
  letter-spacing: 2px;
  white-space: nowrap;
  padding: 0 32px;

  &::after {
    content: "";
    display: inline-block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: rgba(200, 230, 106, 0.35);
    flex-shrink: 0;
  }
`;

export const CTAGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    padding: 0 20px;
    gap: 12px;
  }
`;

export const PrimaryBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(135deg, #a8c26e 0%, #6e9e30 100%);
  color: #fff;
  font-size: 15px;
  font-weight: 800;
  padding: 16px 36px;
  border-radius: 50px;
  text-decoration: none;
  letter-spacing: 0.3px;
  box-shadow: 0 10px 40px rgba(110, 158, 48, 0.4);
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 18px 50px rgba(110, 158, 48, 0.55);
  }

  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
  }
`;

export const GhostBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
  color: rgba(240, 234, 212, 0.45);
  text-decoration: none;
  padding: 16px 24px;
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.22s ease;

  &:hover {
    color: #a8c26e;
    border-color: rgba(168, 194, 110, 0.25);
    background: rgba(168, 194, 110, 0.05);
  }

  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
  }
`;

export const StatsDotsContainer = styled.div`
  display: none;
  justify-content: center;
  gap: 8px;
  margin-top: 10px;

  @media (max-width: 640px) {
    display: flex;
  }
`;

export const StatsDot = styled.button<{ $active: boolean }>`
  width: ${({ $active }) => $active ? "16px" : "6px"};
  height: 6px;
  border-radius: 3px;
  border: none;
  background: ${({ $active }) => $active ? "#c8e66a" : "rgba(200, 230, 106, 0.3)"};
  transition: all 0.3s ease;
  cursor: pointer;
  padding: 0;
  outline: none;
`;
