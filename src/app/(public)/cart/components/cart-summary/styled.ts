import styled from "styled-components";

export const OrderSummaryCard = styled.div`
  background: #ffffff;
  border-radius: 10px;
  padding: 32px;
  border: 1px solid rgba(126, 124, 42, 0.1);
  box-shadow: 0 12px 36px rgba(42, 36, 30, 0.04);
  position: sticky;
  top: 130px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 960px) {
    position: static;
  }
`;

export const SummaryTitle = styled.h2`
  font-size: 22px;
  font-weight: 800;
  color: #5f320fff;
  margin: 0;
  letter-spacing: -0.5px;
  border-bottom: 1.5px solid #f0efe8;
  padding-bottom: 16px;
`;

export const SummaryRowsGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SummaryDivider = styled.div`
  height: 1px;
  background: #f0efe8;
  margin: 8px 0;
`;

export const SummaryRow = styled.div<{
  $isTotal?: boolean;
  $isDiscount?: boolean;
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${({ $isTotal }) => ($isTotal ? "18px" : "14px")};
  font-weight: ${({ $isTotal }) => ($isTotal ? "800" : "600")};
  color: ${({ $isTotal, $isDiscount }) =>
    $isTotal ? "#5f320fff" : $isDiscount ? "#496a35" : "#6c6959"};

  span:last-child {
    font-size: ${({ $isTotal }) => ($isTotal ? "24px" : "15px")};
    font-weight: 800;
    color: ${({ $isTotal, $isDiscount }) =>
      $isTotal ? "#5f320fff" : $isDiscount ? "#496a35" : "#48260bff"};
  }
`;

export const PromoCodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const PromoLabel = styled.label`
  font-size: 11px;
  font-weight: 800;
  color: #8a8775;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  gap: 4px;

  svg {
    color: #7e7c2a;
    font-size: 14px;
  }
`;

export const ActivePromoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f0f4ed;
  border: 1px solid rgba(73, 106, 53, 0.2);
  border-radius: 10px;
  padding: 8px 16px;

  button {
    background: none;
    border: none;
    color: #c0392b;
    font-size: 11px;
    font-weight: 700;
    cursor: pointer;
  }
`;

export const PromoInputWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const PromoInput = styled.input`
  flex: 1;
  padding: 12px 16px;
  background: #fdfaf5;
  border: 1.5px solid rgba(126, 124, 42, 0.15);
  border-radius: 10px;
  font-size: 13px;
  color: #5f320fff;
  font-weight: 600;
  outline: none;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  &::placeholder {
    color: #a7a48a;
  }

  &:focus {
    border-color: #7e7c2a;
    background: #ffffff;
    box-shadow: 0 0 0 4px rgba(126, 124, 42, 0.08);
  }
`;

export const PromoButton = styled.button`
  padding: 12px 24px;
  border: none;
  background: #5f320fff;
  color: #ffffff;
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.25s;

  &:hover {
    background: #7e7c2a;
    transform: translateY(-1.5px);
  }

  &:disabled {
    background: #c5c1b0;
    cursor: not-allowed;
  }
`;

export const PromoSuccessText = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #496a35;
  display: flex;
  align-items: center;
  gap: 4px;
  margin: 0;

  svg {
    color: #7e7c2a;
    font-size: 14px;
  }
`;

export const PromoErrorText = styled.span`
  font-size: 11px;
  color: #c0392b;
  font-weight: 600;
`;

export const CheckoutActionsGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 8px;
`;

export const CheckoutButton = styled.button`
  width: 100%;
  height: 54px;
  border: none;
  border-radius: 12px;
  background: #5f320fff;
  color: #ffffff;
  font-size: 14px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 8px 24px rgba(42, 36, 30, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    background: #7e7c2a;
    box-shadow: 0 12px 30px rgba(126, 124, 42, 0.25);
  }
  &:active {
    transform: scale(0.96);
    box-shadow: 0 4px 12px rgba(126, 124, 42, 0.15);
  }
`;

export const SecureCheckoutText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 11px;
  font-weight: 700;
  color: #a7a48a;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-top: 4px;

  svg {
    font-size: 14px;
    color: #7e7c2a;
  }
`;
