import { SPACING } from "@/src/theme/tokens";
import styled from "styled-components";

export type Alignment = "left" | "center" | "right";

interface StyledProps {
  $align: Alignment;
}

export const SectionHeadingContainer = styled.span<StyledProps>`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: ${({ $align }) =>
    $align === "center"
      ? "center"
      : $align === "right"
        ? "flex-end"
        : "flex-start"};
  text-align: ${({ $align }) => $align};
  gap: ${SPACING.L};

`;

export const SectionHeadingTitle = styled.h2`
  font-family: var(--font-monoton), cursive;
  font-size: 3rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 4px;
  line-height: 1.1;
  color: #7e7c2a;
  margin: 0;
  position: relative;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    letter-spacing: 2px;
  }
`;

export const SectionSubtitleContainer = styled.div<StyledProps>`
  display: flex;
  align-items: center;
  gap: ${SPACING.S};

  &::before,
  &::after {
    content: "";
    height: 1px;
    width: 30px;
    background-color: #d4a373;
  }

  ${({ $align }) =>
    $align === "left" &&
    `
    &::before { display: none; }
  `}

  ${({ $align }) =>
    $align === "right" &&
    `
    &::after { display: none; }
  `}
`;

export const SectionSubtitle = styled.span`
  font-family: var(--font-story-script), cursive;
  font-size: 2rem;
  font-weight: 400;
  color: #d4a373;
  line-height: 1;
  margin-bottom: -5px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const SectionDescription = styled.p`
  font-family: var(--font-poppins), sans-serif;
  font-size: 1.125rem;
  color: #666;
  margin: 0;
  max-width: 600px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const DividerLine = styled.div`
  width: 80px;
  height: 2px;
  background-color: #d4a373;
  margin: ${SPACING.S} 0;
`;
