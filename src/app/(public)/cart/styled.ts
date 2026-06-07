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
  background: #fdfaf5;
  border-radius: 10px;
  padding: 16px 20px;
  border: 1px solid rgba(126, 124, 42, 0.12);
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
`;

export const ShippingProgressText = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #3a2f25;
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    font-weight: 700;
    color: #7e7c2a;
  }
`;

export const ProgressBarWrapper = styled.div`
  width: 100%;
  height: 4px;
  background: #e8e6df;
  border-radius: 2px;
  position: relative;
  margin: 64px 0 16px 0;
`;

export const ProgressBarFill = styled.div<{ $percent: number }>`
  height: 100%;
  width: ${({ $percent }) => {
    const pct = Math.min(100, $percent);
    return `calc(${pct}% + ${1.105 * (100 - pct)}px)`;
  }};
  background: #7e7c2a;
  border-radius: 2px;
  transition: width 3s cubic-bezier(0.22, 1, 0.36, 1);
  position: absolute;
  left: 0;
  top: 0;
`;

export const RewardCheckpoint = styled.div<{ $percent: number }>`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: ${({ $percent }) => ($percent >= 50 ? "#7e7c2a" : "#e8e6df")};
  border: 2px solid #fdfaf5;
  box-shadow: 0 0 0 2px
    ${({ $percent }) =>
      $percent >= 50 ? "rgba(126, 124, 42, 0.4)" : "rgba(232, 230, 223, 0.4)"};
  z-index: 5;
  transition: all 0.5s ease;

  &::after {
    content: "";
    position: absolute;
    top: -24px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 14px;
    opacity: ${({ $percent }) => ($percent >= 50 ? 0.4 : 1)};
    transition: opacity 0.5s ease;
  }
`;

const firePulse = keyframes`
  0% {
    transform: translateX(-50%) scale(0.95);
    box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3), 0 0 0 0 rgba(239, 68, 68, 0.5);
  }
  50% {
    transform: translateX(-50%) scale(1.05);
    box-shadow: 0 6px 16px rgba(249, 115, 22, 0.5), 0 0 0 8px rgba(249, 115, 22, 0);
  }
  100% {
    transform: translateX(-50%) scale(0.95);
    box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3), 0 0 0 0 rgba(239, 68, 68, 0);
  }
`;

export const FireRewardPopup = styled.div`
  position: absolute;
  top: -52px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #ef4444 0%, #f97316 100%);
  color: #ffffff;
  padding: 8px 14px;
  border-radius: 30px;
  font-size: 11px;
  font-weight: 700;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 6px;
  animation: ${firePulse} 1.5s infinite ease-in-out;
  cursor: pointer;
  z-index: 15;
  pointer-events: auto;
  border: 1px solid rgba(255, 255, 255, 0.2);

  &::after {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 6px 6px 0;
    border-style: solid;
    border-color: #f97316 transparent transparent;
  }

  &:hover {
    filter: brightness(1.1);
  }
`;

export const TruckProgressMarker = styled.div<{ $percent: number }>`
  position: absolute;
  top: -68px;
  left: ${({ $percent }) => Math.min(100, $percent)}%;
  transform: ${({ $percent }) =>
    `translate(${-85 * (Math.min(100, $percent) / 100)}%, 0)`};
  width: 130px;
  height: 80px;
  transition:
    left 3s cubic-bezier(0.22, 1, 0.36, 1),
    transform 3s cubic-bezier(0.22, 1, 0.36, 1);
  z-index: 10;
  pointer-events: none;

  img {
    object-fit: contain;
  }
`;

export const CartItemCard = styled.div`
  background: #ffffff;
  border-radius: 10px;
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
  width: 120px;
  height: 120px;
  background: #f6f8ef;
  border-radius: 10px;
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
  color: #5f320fff;
  margin: 0;

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s;
    &:hover {
      color: #7e7c2a;
    }
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
  color: #5f320fff;
`;

/* ─── Right Section: Order Summary ───────────────────────────── */
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
  animation: ${fadeIn} 0.5s ease-out;

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
  margin-top: 4px;
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
  color: #5f320fff;
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

export const LoadingState = styled.div`
  text-align: center;
  padding: 100px 0;
  color: #7e7c2a;
  font-size: 18px;
  font-weight: 600;
`;

export const CartMainColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

