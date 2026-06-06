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

export const JournalWrapper = styled.section`
  width: 100%;
  padding: 100px 0;
  background: #7e7d2a13;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

export const JournalContainer = styled.div<{ $animate?: boolean }>`
  width: 92%;
  max-width: 1400px;
  margin: 0 auto;

  opacity: 0;
  ${({ $animate }) =>
    $animate &&
    css`
      animation: ${fadeInUp} 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    `}
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 20px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 36px;
  font-weight: 800;
  color: #2d2d2d;
  margin: 0;
`;

export const ViewAllLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  ${text14};
  font-weight: 700;
  color: #7e7c2a;
  text-decoration: none;
  border: 1.5px solid #7e7c2a;
  border-radius: 50px;
  padding: 10px 22px;
  transition: all 0.25s ease;
  white-space: nowrap;
  letter-spacing: 0.5px;

  &:hover {
    background: #7e7c2a;
    color: #ffffff;
  }
`;

export const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  grid-template-rows: 1fr;
  gap: 24px;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

export const BlogCard = styled.article`
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  &:hover .blog-image {
    transform: scale(1.05);
  }

  &:hover .read-more-btn {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const FeaturedCard = styled(BlogCard)`
  /* Takes the left column, full height */
  grid-row: span 2;
  min-height: 560px;

  @media (max-width: 968px) {
    grid-row: span 1;
    min-height: 380px;
  }
`;

export const SecondaryCard = styled(BlogCard)`
  min-height: 260px;
`;

export const BlogImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  flex: 1;
`;

export const BlogImage = styled.div`
  width: 100%;
  height: 100%;
  background: #d4cbb0;
  background-size: cover !important;
  background-position: center !important;
  transition: transform 0.5s ease;
  min-height: inherit;
`;

export const BlogOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(20, 18, 5, 0.8) 0%,
    rgba(20, 18, 5, 0.35) 50%,
    rgba(20, 18, 5, 0.08) 100%
  );
  transition: background 0.3s ease;

  ${BlogCard}:hover & {
    background: linear-gradient(
      to top,
      rgba(20, 18, 5, 0.9) 0%,
      rgba(20, 18, 5, 0.45) 55%,
      rgba(20, 18, 5, 0.1) 100%
    );
  }
`;

export const BlogContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 28px 28px 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const BlogMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 11px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.75);
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const BlogMetaDot = styled.span`
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
`;

export const BlogTag = styled.span`
  background: rgba(126, 124, 42, 0.85);
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 4px 10px;
  border-radius: 50px;
`;

export const BlogTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
  line-height: 1.35;
  letter-spacing: -0.2px;

  ${FeaturedCard} & {
    font-size: 26px;
    line-height: 1.3;
  }
`;

export const ReadMoreLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 700;
  color: #f5e9c8;
  text-decoration: none;
  opacity: 0;
  transform: translateY(6px);
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
  align-self: flex-start;

  &::after {
    content: "→";
    font-size: 15px;
  }
`;
