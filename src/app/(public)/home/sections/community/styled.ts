import styled, { keyframes, css } from "styled-components";
import { text16 } from "@/src/theme/Typography";

export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const CommunityWrapper = styled.section`
  width: 100%;
  padding: 100px 0;
  background: #fdfaf5;
  text-align: center;

  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

export const CommunityContainer = styled.div<{ $animate?: boolean }>`
  width: 92%;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 30px;

  opacity: 0;
  ${({ $animate }) =>
    $animate &&
    css`
      animation: ${fadeInUp} 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    `}
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
    gap: 12px;
  }
`;

export const Input = styled.input`
  flex: 1;
  padding: 18px 25px;
  border-radius: 50px;
  border: 1px solid #ddd;
  ${text16};
  outline: none;

  &:focus {
    border-color: #7E7C2A;
  }
`;

export const SubmitButton = styled.button`
  padding: 18px 40px;
  background: #7E7C2A;
  color: white;
  border: none;
  border-radius: 50px;
  font-weight: 700;
  ${text16};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #676623ff;
    transform: translateY(-2px);
  }
`;
