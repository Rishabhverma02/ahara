import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: 100%;
  background: #7e7c2a;
  padding: 80px 0 40px;
  color: #fff;
  border-top: none;
`;

export const FooterContainer = styled.div`
  width: 92%;
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 2fr;
  gap: 40px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FooterTitle = styled.h4`
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 10px;
`;

export const FooterLink = styled.a`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: #fff;
  }
`;

export const FooterText = styled.p`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
`;

export const NewsletterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const NewsletterInputWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const NewsletterInput = styled.input`
  flex: 1;
  padding: 12px 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  font-size: 14px;
  outline: none;
  color: #fff;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    border-color: #fff;
  }
`;

export const NewsletterButton = styled.button`
  padding: 12px 24px;
  background: #fff;
  color: #7e7c2a;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;
`;

export const SocialIcon = styled.a`
  font-size: 20px;
  color: #fff;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-3px);
  }
`;

export const FooterBottom = styled.div`
  width: 92%;
  max-width: 1400px;
  margin: 60px auto 0;
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
`;

export const Copyright = styled.p`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
`;

export const PaymentIcons = styled.div`
  display: flex;
  gap: 15px;
  font-size: 24px;
  color: rgba(255, 255, 255, 0.6);
`;
