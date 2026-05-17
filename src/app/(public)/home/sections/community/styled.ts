import styled from "styled-components";

export const CommunityWrapper = styled.section`
  width: 100%;
  padding: 100px 0;
  background: #fdfaf5;
  text-align: center;
`;

export const CommunityContainer = styled.div`
  width: 92%;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const CommunityTitle = styled.h2`
  font-size: 36px;
  font-weight: 800;
  color: #2D2D2D;
  margin: 0;
`;

export const CommunitySubtitle = styled.p`
  font-size: 18px;
  color: #666;
  line-height: 1.6;
`;

export const FormWrapper = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  flex: 1;
  padding: 18px 25px;
  border-radius: 50px;
  border: 1px solid #ddd;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: #7E7C2A;
  }
`;

export const SubmitButton = styled.button`
  padding: 18px 40px;
  background: #2D2D2D;
  color: white;
  border: none;
  border-radius: 50px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #000;
    transform: translateY(-2px);
  }
`;
