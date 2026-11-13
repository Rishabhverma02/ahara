import styled from "styled-components";

export const FreeTag = styled.span`
  color: var(--success);
  font-weight: 700;
`;

export const OrderSummaryCard = styled.div`
  background: var(--surface);
  border-radius: 10px;
  padding: 32px;
  border: 1px solid rgb(var(--olive-rgb) / 0.1);
  box-shadow: 0 12px 36px rgb(29 33 22 / 0.04);
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
  font-family: var(--font-display);
  font-variation-settings: "opsz" 36;
  font-size: 22px;
  font-weight: 500;
  color: var(--ink);
  margin: 0;
  letter-spacing: -0.5px;
  border-bottom: 1.5px solid var(--paper);
  padding-bottom: 16px;
`;

export const SummaryRowsGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SummaryDivider = styled.div`
  height: 1px;
  background: var(--paper);
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
    $isTotal ? "var(--earth)" : $isDiscount ? "var(--success)" : "var(--muted)"};

  span:last-child {
    font-size: ${({ $isTotal }) => ($isTotal ? "24px" : "15px")};
    font-weight: 600;
    color: ${({ $isTotal, $isDiscount }) =>
      $isTotal ? "var(--earth)" : $isDiscount ? "var(--success)" : "var(--earth-700)"};
  }
`;

export const PromoCodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const PromoLabel = styled.label`
  font-size: 11px;
  font-weight: 600;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  gap: 4px;

  svg {
    color: var(--olive);
    font-size: 14px;
  }
`;

export const ActivePromoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--paper);
  border: 1px solid rgba(73, 106, 53, 0.2);
  border-radius: 10px;
  padding: 8px 16px;

  button {
    background: none;
    border: none;
    color: var(--danger);
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
  background: var(--surface);
  border: 1.5px solid rgb(var(--olive-rgb) / 0.15);
  border-radius: 10px;
  font-size: 13px;
  color: var(--ink);
  font-weight: 600;
  outline: none;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  &::placeholder {
    color: var(--muted-2);
  }

  &:focus {
    border-color: var(--olive);
    background: var(--surface);
    box-shadow: 0 0 0 4px rgb(var(--olive-rgb) / 0.08);
  }
`;

export const PromoButton = styled.button`
  padding: 12px 24px;
  border: none;
  background: var(--olive);
  color: #ffffff;
  font-size: 12px;
  font-weight: 600;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all 0.25s;

  &:hover {
    background: var(--olive);
    transform: translateY(-1.5px);
  }

  &:disabled {
    background: var(--muted-2);
    cursor: not-allowed;
  }
`;

export const PromoSuccessText = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: var(--success);
  display: flex;
  align-items: center;
  gap: 4px;
  margin: 0;

  svg {
    color: var(--olive);
    font-size: 14px;
  }
`;

export const PromoErrorText = styled.span`
  font-size: 11px;
  color: var(--danger);
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
  border-radius: var(--radius-sm);
  background: var(--olive);
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 8px 24px rgb(29 33 22 / 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    background: var(--olive);
    box-shadow: 0 12px 30px rgb(var(--olive-rgb) / 0.25);
  }
  &:active {
    transform: scale(0.96);
    box-shadow: 0 4px 12px rgb(var(--olive-rgb) / 0.15);
  }
`;

export const SecureCheckoutText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 11px;
  font-weight: 700;
  color: var(--muted-2);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-top: 4px;

  svg {
    font-size: 14px;
    color: var(--olive);
  }
`;
