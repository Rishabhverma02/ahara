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

export const IngredientCard = styled.div`
  background: white;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

export const IngredientImage = styled.div`
  width: 100%;
  height: 250px;
  background: #eee;
`;

export const IngredientContent = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const IngredientName = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: #2d2d2d;
  margin: 0;
`;

export const IngredientDescription = styled.p`
  font-size: 15px;
  color: #666;
  line-height: 1.6;
`;

export const ExploreLink = styled.a`
  font-size: 16px;
  font-weight: 700;
  color: #7e7c2a;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 5px;

  &:after {
    content: "→";
    transition: transform 0.2s;
  }

  &:hover:after {
    transform: translateX(5px);
  }
`;
