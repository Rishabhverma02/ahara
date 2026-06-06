import styled, { keyframes, css } from "styled-components";
import { text14 } from "@/src/theme/Typography";

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

export const TestimonialsWrapper = styled.section`
  width: 100%;
  padding: 100px 0;
  background: #FBF8F3;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

export const DecLeafTopLeft = styled.div`
  position: absolute;
  top: -70px;
  left: -150px;
  width: 500px;
  height: 500px;
  opacity: 0.1;
  pointer-events: none;
  z-index: 0;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
    left: -50px;
  }
`;

export const DecLeafBottomRight = styled.div`
  position: absolute;
  bottom: -90px;
  right: -90px;
  width: 400px;
  height: 400px;
  opacity: 0.2;
  pointer-events: none;
  z-index: 0;

  @media (max-width: 768px) {
    width: 220px;
    height: 220px;
  }
`;

export const TestimonialsContainer = styled.div<{ $animate?: boolean }>`
  width: 90%;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;

  opacity: 0;
  ${({ $animate }) =>
    $animate &&
    css`
      animation: ${fadeInUp} 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    `}

  @media (max-width: 768px) {
    gap: 30px;
  }
`;

export const TestimonialGrid = styled.div`
  column-count: 4;
  column-gap: 24px;
  width: 100%;

  @media (max-width: 1200px) {
    column-count: 3;
  }

  @media (max-width: 968px) {
    column-count: 2;
  }

  @media (max-width: 768px) {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    gap: 0;
    padding: 10px 0;
    margin: 0;
    column-count: auto;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;

    & > * {
      flex: 0 0 100%;
      scroll-snap-align: center;
    }
  }
`;

// Base card container with masonry behavior
export const BaseCard = styled.div`
  break-inside: avoid;
  margin-bottom: 24px;
  border-radius: 20px;
  background: #ffffff;
  border: 1px solid #f0e6d2;
  box-shadow: 0 4px 20px rgba(126, 125, 42, 0.03);
  position: relative;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  gap:14px;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(126, 125, 42, 0.08);
  }

  &.style-a {
    padding: 30px;
    @media (max-width: 768px) {
      padding: 20px;
    }
  }

  &.style-b {
    padding: 50px 30px 30px;
    margin-top: 34px;
    @media (max-width: 768px) {
      padding: 40px 20px 20px;
    }
  }

  &.style-c {
    padding: 0;
    align-items: stretch;
    overflow: hidden;
  }

  &.style-d {
    padding: 0;
    flex-direction: row;
    align-items: stretch;
    overflow: hidden;

    @media (max-width: 480px) {
      flex-direction: column;
    }
  }

  &.style-g {
    padding: 20px;
    margin-top: 50px;
    
    .author-row-g {
      padding: 5PX; 
      border-top: 1px solid #f9f5ed;
    }
  }

  &.style-h {
    padding: 30px;
    @media (max-width: 768px) {
      padding: 20px;
    }
  }
`;

// Speech Bubble wrapper (needed to group bubble card + its pointer/elements)
export const SpeechBubbleWrapper = styled.div`
  break-inside: avoid;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  &.style-e {
    margin-bottom: 34px;
  }
`;

export const SpeechBubbleCard = styled.div`
  padding: 30px;
  border-radius: 20px;
  background: #ffffff;
  border: 1px solid #f0e6d2;
  box-shadow: 0 4px 20px rgba(126, 125, 42, 0.03);
  position: relative;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

// Specific Card type styling & Subcomponents
export const QuoteIcon = styled.div`
  font-size: 48px;
  font-family: Georgia, serif;
  line-height: 1;
  color: #7e7c2a2b;
  position: absolute;
  user-select: none;
`;

export const QuoteIconTopLeft = styled(QuoteIcon)`
  top: 15px;
  left: 20px;
`;

export const QuoteIconBottomRight = styled(QuoteIcon)`
  bottom: 10px;
  right: 20px;
`;

export const QuoteText = styled.p`
  ${text14};
  color: #4a4a4a;
  line-height: 1.6;
  position: relative;
  z-index: 1;
`;

export const QuoteTextCentered = styled(QuoteText)`
  text-align: center;
`;

export const QuoteTextCenteredItalic = styled(QuoteTextCentered)`
  font-style: italic;
`;

export const AuthorRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  margin-top: 20px;
  border-top: 1px solid #f9f5ed;
  padding-top: 15px;
`;

export const AuthorDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const AuthorDetailsCentered = styled(AuthorDetails)`
  align-items: center;

`;

export const AuthorName = styled.span`
  ${text14};
  font-weight: 700;
  color: #5f320fff;
`;

export const AuthorRole = styled.span`
  font-size: 11px;
  color: #888;
`;

export const AuthorAvatar = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;

  background: #eee;
  border: 1px solid #f0e6d2;
`;

export const SmallAvatar = styled(AuthorAvatar)`
  width: 80px;
  height: 80px;
  object-fit: cover;
`;

// Overlapping Avatar Card
export const OverlappingAvatar = styled.img`
  width: 98px;
  height: 98px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  position: absolute;
  top: -34px;
  left: 50%;
  transform: translateX(-50%);
  background: #eee;
`;

export const StarRating = styled.div`
  color: #ffb800;
  display: flex;
  gap: 3px;
  font-size: 14px;
  margin-top: 18px;
`;

export const StarRatingCentered = styled(StarRating)`
  justify-content: center;
`;

export const CardHeadingCentered = styled.h4`
  font-size: 16px;
  font-weight: 700;
  color: #5f320fff;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

// Tall card layout
export const TallCardImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-top-left-radius: 19px;
  border-top-right-radius: 19px;
  background: #eee;

  @media (max-width: 768px) {
    height: 180px;
  }
`;

export const CardContentSection = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export const SignatureText = styled.span`
  font-family: var(--font-story-script), cursive;
  font-size: 28px;
  color: #7e7c2a;
  text-align: right;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

// Split Horizontal Layout
export const SplitImage = styled.img`
  width: 35%;
  object-fit: cover;
  border-top-left-radius: 19px;
  border-bottom-left-radius: 19px;
  background: #eee;

  @media (max-width: 480px) {
    width: 100%;
    height: 180px;
    border-bottom-left-radius: 0;
    border-top-right-radius: 19px;
  }
`;

export const SplitContent = styled.div`
  width: 65%;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

// Speech Bubble Tails
export const BubblePointerCentred = styled.div`
  width: 20px;
  height: 20px;
  background: #ffffff;
  border-bottom: 1px solid #f0e6d2;
  border-right: 1px solid #f0e6d2;
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  z-index: 1;
`;

export const BubblePointerLeft = styled.div`
  width: 20px;
  height: 20px;
  background: #ffffff;
  border-bottom: 1px solid #f0e6d2;
  border-right: 1px solid #f0e6d2;
  position: absolute;
  bottom: -10px;
  left: 40px;
  transform: rotate(45deg);
  z-index: 1;
`;

export const AvatarGroupRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 18px;
  z-index: 2;
`;

export const GroupAvatar = styled.img<{ $active?: boolean }>`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid ${props => props.$active ? "#7e7c2a" : "#ffffff"};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
  transform: ${props => props.$active ? "scale(1.15)" : "scale(1)"};
  background: #eee;
`;

// Split Row (Variant G)
export const SplitRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

export const SplitLeft = styled.div`
  flex: 1;
`;

export const SplitRight = styled.div`
  flex-shrink: 0;
`;

export const LargeCircleAvatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid #ffffff;
  background: #eee;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  margin-top: -60px;
  align-self: center;
`;

export const CenteredAvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
`;

export const SlideWrapper = styled.div`
  display: contents;

  @media (max-width: 768px) {
    display: block;
    flex: 0 0 100%;
    scroll-snap-align: center;
    padding: 0 16px;
    box-sizing: border-box;

    & > * {
      margin-bottom: 10px !important;
    }
  }
`;

export const DotsContainer = styled.div`
  display: none;
  justify-content: center;
  gap: 8px;
  margin-top: 24px;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const Dot = styled.button<{ $active: boolean }>`
  width: ${({ $active }) => $active ? "20px" : "8px"};
  height: 8px;
  border-radius: 4px;
  border: none;
  background: ${({ $active }) => $active ? "#7E7C2A" : "#DDC7A1"};
  transition: all 0.3s ease;
  cursor: pointer;
  padding: 0;
  outline: none;
`;
