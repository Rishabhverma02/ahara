import styled from "styled-components";

export const AncientIngredientsWrapper = styled.section`
  width: 100%;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fdfaf5;
`;

export const AncientIngredientsContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 38px;
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

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

