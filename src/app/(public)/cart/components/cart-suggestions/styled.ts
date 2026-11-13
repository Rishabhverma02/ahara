import styled from "styled-components";

export const SuggestionsSection = styled.div`
  width: 100%;
  border-top: 1.5px solid var(--paper);
  padding-top: 56px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const SectionTitle = styled.h2`
  font-family: var(--font-display);
  font-variation-settings: "opsz" 36;
  font-size: 28px;
  font-weight: 500;
  color: var(--ink);
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
