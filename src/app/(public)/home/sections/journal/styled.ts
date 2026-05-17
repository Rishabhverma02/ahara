import styled from "styled-components";

export const JournalWrapper = styled.section`
  width: 100%;
  padding: 100px 0;
  background: #fdfdfd;
`;

export const JournalContainer = styled.div`
  width: 92%;
  max-width: 1400px;
  margin: 0 auto;
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 50px;
`;

export const SectionTitle = styled.h2`
  font-size: 36px;
  font-weight: 800;
  color: #2D2D2D;
  margin: 0;
`;

export const ViewAllLink = styled.a`
  font-size: 16px;
  font-weight: 600;
  color: #7E7C2A;
  text-decoration: underline;
`;

export const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

export const BlogCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const BlogImage = styled.div`
  width: 100%;
  aspect-ratio: 16/10;
  background: #eee;
  border-radius: 20px;
  overflow: hidden;
`;

export const BlogMeta = styled.div`
  display: flex;
  gap: 15px;
  font-size: 14px;
  font-weight: 700;
  color: #7E7C2A;
  text-transform: uppercase;
`;

export const BlogTitle = styled.h3`
  font-size: 22px;
  font-weight: 700;
  color: #2D2D2D;
  margin: 0;
  line-height: 1.4;
`;

export const ReadMoreLink = styled.a`
  font-size: 16px;
  font-weight: 700;
  color: #2D2D2D;
  text-decoration: none;
  border-bottom: 2px solid #7E7C2A;
  align-self: flex-start;
  padding-bottom: 2px;
`;
