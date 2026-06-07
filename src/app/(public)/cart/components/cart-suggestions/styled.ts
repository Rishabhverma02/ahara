import styled from "styled-components";

export const SuggestionsSection = styled.div`
  width: 100%;
  border-top: 1.5px solid #f0efe8;
  padding-top: 56px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const SectionTitle = styled.h2`
  font-size: 28px;
  font-weight: 800;
  color: #5f320fff;
  margin: 0;
  letter-spacing: -0.6px;
`;

export const SuggestionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
