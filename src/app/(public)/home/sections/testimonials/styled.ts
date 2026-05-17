import styled from "styled-components";

export const TestimonialsWrapper = styled.section`
  width: 100%;
  padding: 100px 0;
  background: white;
`;

export const TestimonialsContainer = styled.div`
  width: 92%;
  max-width: 1400px;
  margin: 0 auto;
`;

export const SectionTitle = styled.h2`
  font-size: 36px;
  font-weight: 800;
  color: #2D2D2D;
  text-align: center;
  margin-bottom: 60px;
`;

export const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

export const TestimonialCard = styled.div`
  padding: 40px;
  border-radius: 24px;
  background: #fdfaf5;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 1px solid #f0e6d2;
`;

export const StarRating = styled.div`
  color: #FFB800;
  display: flex;
  gap: 5px;
`;

export const Quote = styled.p`
  font-size: 16px;
  color: #444;
  font-style: italic;
  line-height: 1.6;
`;

export const CustomerInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 10px;
`;

export const CustomerAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #ddd;
`;

export const CustomerDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CustomerName = styled.span`
  font-weight: 700;
  color: #2D2D2D;
`;

export const CustomerRole = styled.span`
  font-size: 12px;
  color: #777;
`;
