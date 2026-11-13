import styled from "styled-components";
import Link from "next/link";

export const FormCard = styled.div<{ $disabled?: boolean }>`
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 40px;
  border: 2px solid rgb(var(--olive-rgb) / 0.1);
  box-shadow: 0 20px 40px -15px rgba(58, 47, 37, 0.05),
              0 0 0 1px rgba(255, 255, 255, 0.5) inset;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  opacity: ${({ $disabled }) => ($disabled ? 0.6 : 1)};
  pointer-events: ${({ $disabled }) => ($disabled ? "none" : "auto")};

  @media (max-width: 600px) {
    padding: 24px 20px;
    border-radius: 16px;
  }
`;

export const ConfirmationCard = styled(FormCard)`
  width: 100%;
  text-align: center;
  padding: 40px;
`;

export const SuccessIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto 24px auto;
`;

export const ConfirmationTitle = styled.h1`
  font-family: var(--font-display);
  font-variation-settings: "opsz" 36;
  font-size: 28px;
  font-weight: 500;
  color: var(--ink);
  margin: 0 0 8px 0;
`;

export const ConfirmationMessage = styled.p`
  font-size: 14px;
  color: var(--muted);
  margin: 0 0 24px 0;
  line-height: 1.6;

  strong {
    color: var(--ink);
  }
`;

export const OrderDetailsCard = styled.div`
  background: var(--surface);
  border-radius: 16px;
  border: 1px solid rgb(var(--olive-rgb) / 0.08);
  padding: 20px;
  text-align: left;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const OrderDetailRow = styled.div<{ $isTotal?: boolean }>`
  display: flex;
  justify-content: space-between;
  font-size: ${({ $isTotal }) => ($isTotal ? "15px" : "13px")};
  align-items: center;

  span.label {
    color: ${({ $isTotal }) => ($isTotal ? "var(--earth)" : "var(--muted)")};
    font-weight: ${({ $isTotal }) => ($isTotal ? 800 : 600)};
  }

  span.value {
    font-weight: ${({ $isTotal }) => ($isTotal ? 900 : 700)};
    color: ${({ $isTotal }) => ($isTotal ? "var(--olive)" : "var(--earth)")};
    font-size: ${({ $isTotal }) => ($isTotal ? "18px" : "13px")};
    text-transform: capitalize;
    text-align: right;
  }

  span.value-uppercase {
    text-transform: uppercase;
  }
`;

export const DetailsDivider = styled.div`
  height: 1px;
  background: rgb(var(--olive-rgb) / 0.08);
  margin: 4px 0;
`;

export const ActionButton = styled.button`
  width: 100%;
  max-width: 300px;
  height: 60px;
  border: 1.5px solid var(--olive);
  border-radius: var(--radius-sm);
  background: var(--olive);
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 8px 20px rgba(27, 22, 18, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 16px;
  position: relative;
  overflow: hidden;

  &:hover {
    background: var(--olive);
    border-color: var(--olive);
    color: #ffffff;
    box-shadow: 0 12px 25px rgb(var(--olive-rgb) / 0.2);
  }

  &:active {
    transform: scale(0.96);
  }
`;

export const ShopLink = styled(Link)`
  text-decoration: none;
`;

export const ContinueButton = styled(ActionButton)`
  margin: 0 auto;
  max-width: 240px;
`;
