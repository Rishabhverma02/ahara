import styled from "styled-components";

export const AncientIngredientsWrapper = styled.section`
  width: 100%;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fdfaf5;

  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

export const AncientIngredientsContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 38px;

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    gap: 28px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 36px;
  font-weight: 800;
  color: #2d2d2d;
  text-align: center;
`;

export const IngredientGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

