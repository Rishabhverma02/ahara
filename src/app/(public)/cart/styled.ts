import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const CartPageWrapper = styled.div`
  background: #ffffff;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
`;

export const PageContainer = styled.div`
  width: 100%;
  padding: 50px 48px;
  background-color: #7e7d2a18;
  display: flex;
  justify-content: center;

  @media (max-width: 960px) {
    padding: 30px 20px;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;


export const CartLayout = styled.div`
  display: grid;
  grid-template-columns: 1.8fr 1fr;
  gap: 48px;
  align-items: flex-start;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

/* ─── Left Section: Items ────────────────────────────────────── */
export const CartItemsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ShippingProgressContainer = styled.div`
  background: #ffffff;
  border-radius: 20px;
  padding: 20px;
  border: 1px solid rgba(126, 124, 42, 0.08);
  box-shadow: 0 4px 12px rgba(42, 36, 30, 0.01);
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ShippingProgressText = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #3a2f25;
  display: flex;
  align-items: center;
  gap: 6px;

  span {
    color: #7e7c2a;
    font-weight: 800;
  }
`;

export const ProgressBarWrapper = styled.div`
  width: 100%;
  height: 8px;
  background: #e8e6df;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`;

export const ProgressBarFill = styled.div<{ $percent: number }>`
  height: 100%;
  width: ${({ $percent }) => Math.min(100, $percent)}%;
  background: linear-gradient(90deg, #7e7c2a 0%, #496a35 100%);
  border-radius: 10px;
  transition: width 0.6s cubic-bezier(0.16, 1, 0.3, 1);
`;

export const CartItemCard = styled.div`
  background: #ffffff;
  border-radius: 24px;
  padding: 20px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 24px;
  align-items: center;
  border: 1px solid rgba(126, 124, 42, 0.08);
  box-shadow: 0 6px 20px rgba(42, 36, 30, 0.02);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(126, 124, 42, 0.06);
    border-color: rgba(126, 124, 42, 0.15);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 16px;
  }
`;

export const ItemImageWrapper = styled.div`
  width: 96px;
  height: 96px;
  background: #f6f8ef;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  border: 1px solid rgba(126, 124, 42, 0.05);

  @media (max-width: 600px) {
    margin: 0 auto;
  }
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ItemName = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #2a241e;
  margin: 0;

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s;
    &:hover { color: #7e7c2a; }
  }
`;

export const ItemVariant = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: #a7a48a;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const QtyAndActions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 10px;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  font-size: 13px;
  color: #c0392b;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: all 0.2s;
  padding: 4px 8px;
  border-radius: 6px;

  &:hover {
    background: rgba(192, 57, 43, 0.08);
    transform: scale(1.02);
  }
`;

export const PriceAndQtyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 12px;

  @media (max-width: 600px) {
    align-items: center;
  }
`;

export const ItemPrice = styled.span`
  font-size: 20px;
  font-weight: 800;
  color: #2a241e;
`;

/* ─── Right Section: Order Summary ───────────────────────────── */
export const OrderSummaryCard = styled.div`
  background: #ffffff;
  border-radius: 28px;
  padding: 32px;
  border: 1px solid rgba(126, 124, 42, 0.1);
  box-shadow: 0 12px 36px rgba(42, 36, 30, 0.04);
  position: sticky;
  top: 130px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  animation: ${fadeIn} 0.5s ease-out;

  @media (max-width: 960px) {
    position: static;
  }
`;

export const SummaryTitle = styled.h2`
  font-size: 22px;
  font-weight: 800;
  color: #2a241e;
  margin: 0;
  letter-spacing: -0.5px;
  border-bottom: 1.5px solid #f0efe8;
  padding-bottom: 16px;
`;

export const SummaryRow = styled.div<{ $isTotal?: boolean; $isDiscount?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${({ $isTotal }) => ($isTotal ? "18px" : "14px")};
  font-weight: ${({ $isTotal }) => ($isTotal ? "800" : "600")};
  color: ${({ $isTotal, $isDiscount }) =>
    $isTotal ? "#2a241e" : $isDiscount ? "#496a35" : "#6c6959"};

  span:last-child {
    font-size: ${({ $isTotal }) => ($isTotal ? "24px" : "15px")};
    font-weight: 800;
    color: ${({ $isTotal, $isDiscount }) =>
      $isTotal ? "#2a241e" : $isDiscount ? "#496a35" : "#3a2f25"};
  }
`;

export const PromoCodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const PromoInputWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const PromoInput = styled.input`
  flex: 1;
  padding: 12px 16px;
  background: #FDFAF5;
  border: 1.5px solid rgba(126, 124, 42, 0.15);
  border-radius: 100px;
  font-size: 13px;
  color: #3a2f25;
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
  background: #2a241e;
  color: #ffffff;
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  border-radius: 100px;
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
  margin-top: 4px;
`;

export const CheckoutButton = styled.button`
  width: 100%;
  height: 54px;
  border: none;
  border-radius: 100px;
  background: #2a241e;
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
    transform: translateY(-3px);
    box-shadow: 0 12px 30px rgba(126, 124, 42, 0.25);
  }

  &:active {
    transform: translateY(-1px);
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
    color: #496a35;
  }
`;

/* ─── Suggestions Section ────────────────────────────────────── */
export const SuggestionsSection = styled.div`
  width: 100%;
  border-top: 1.5px solid #f0efe8;
  padding-top: 56px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const SectionTitle = styled.h2`
  font-size: 28px;
  font-weight: 800;
  color: #2a241e;
  margin: 0;
  letter-spacing: -0.6px;
`;

export const SuggestionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
