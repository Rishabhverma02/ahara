import styled from "styled-components";

export const FeaturedWrapper = styled.section`
  width: 100%;
  padding: 120px 0;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?auto=format&fit=crop&q=80');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
`;

export const FeaturedContent = styled.div`
  max-width: 800px;
  padding: 0 20px;
`;

export const FeaturedTitle = styled.h2`
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 30px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const FeaturedButton = styled.button`
  padding: 16px 40px;
  background: white;
  color: #7E7C2A;
  border: none;
  border-radius: 50px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;
