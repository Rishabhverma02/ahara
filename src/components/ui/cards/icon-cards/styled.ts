import styled from "styled-components";

export const Card = styled.div`
  width: 320px;
  background: #f4f4f4;
  border-radius: 24px;
  padding: 16px;
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.08),
    0 6px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-8px);
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 12px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
  flex-wrap: wrap;
`;

export const Tag = styled.span`
  background: #e0e0e0;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 500;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin: 4px 0;
`;

export const Subtitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  color: #555;
`;

export const Description = styled.p`
  font-size: 13px;
  margin-top: 8px;
  color: #666;
  line-height: 1.5;
`;
