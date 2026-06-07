import styled from "styled-components";

export const SummaryColumn = styled.div`
  position: sticky;
  top: 120px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 960px) {
    position: static;
  }
`;

export const StickySummaryCard = styled.div`
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 32px;
  border: 2px solid rgba(126, 124, 42, 0.1);
  box-shadow: 0 20px 40px -15px rgba(58, 47, 37, 0.05),
              0 0 0 1px rgba(255, 255, 255, 0.5) inset;
  display: flex;
  flex-direction: column;
  gap: 24px;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
`;

export const SummarySectionTitle = styled.h3`
  font-size: 16px;
  font-weight: 800;
  color: #5f320fff;
  margin: 0;
  border-bottom: 1.5px solid #fdfaf5;
  padding-bottom: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span.item-count {
    font-size: 11px;
    font-weight: 700;
    color: #7e7c2a;
    background: rgba(126, 124, 42, 0.08);
    padding: 2px 8px;
    border-radius: 10px;
  }
`;

export const MiniItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-height: 240px;
  overflow-y: auto;
  padding: 8px 6px;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const MiniItemRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding-bottom: 14px;
  border-bottom: 1px dashed rgba(126, 124, 42, 0.12);

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

export const MiniItemImageInner = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  position: relative;

  img {
    object-fit: cover;
  }
`;

export const MiniItemImage = styled.div`
  width: 48px;
  height: 48px;
  background: #fdfaf5;
  border-radius: 8px;
  position: relative;
  border: 1px solid rgba(126, 124, 42, 0.06);
  flex-shrink: 0;

  span.badge {
    position: absolute;
    top: -6px;
    right: -6px;
    background: #7e7c2a;
    color: #ffffff;
    font-size: 10px;
    font-weight: 800;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1.5px solid #ffffff;
    z-index: 5;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  }
`;

export const MiniItemDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;

  span.name {
    font-size: 13px;
    font-weight: 700;
    color: #48260bff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  span.variant {
    font-size: 10px;
    color: #a7a48a;
    font-weight: 600;
    text-transform: uppercase;
  }
`;

export const MiniItemPrice = styled.div`
  font-size: 13px;
  font-weight: 800;
  color: #5f320fff;
  text-align: right;
`;

export const FieldLabel = styled.label`
  font-size: 11px;
  font-weight: 700;
  color: #8a8775;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const PromoFieldLabel = styled(FieldLabel)`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 10px;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 14px 16px;
  background: rgba(255, 255, 255, 0.6);
  border: 1.5px solid rgba(126, 124, 42, 0.12);
  border-radius: 12px;
  font-size: 13px;
  color: #2a241e;
  font-weight: 600;
  outline: none;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  &::placeholder {
    color: #a7a48a;
    font-weight: 500;
  }

  &:hover {
    border-color: rgba(126, 124, 42, 0.3);
    background: rgba(255, 255, 255, 0.9);
  }

  &:focus {
    border-color: #7e7c2a;
    background: #ffffff;
    box-shadow: 0 0 0 4px rgba(126, 124, 42, 0.1);
  }
`;

export const ActionButton = styled.button`
  width: 100%;
  max-width: 300px;
  height: 60px;
  border: 1.5px solid #7e7c2a;
  border-radius: 12px;
  background: #5f320fff;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
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
    background: #7e7c2a;
    border-color: #7e7c2a;
    color: #ffffff;
    box-shadow: 0 12px 25px rgba(126, 124, 42, 0.2);
  }

  &:active {
    transform: scale(0.96);
  }
`;

export const PromoCodeBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ActivePromoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f0f4ed;
  border: 1px solid rgba(73, 106, 53, 0.2);
  border-radius: 10px;
  padding: 8px 16px;

  span {
    font-size: 12px;
    color: #496a35;
    font-weight: 700;
  }

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

  input {
    padding: 8px 16px;
    flex: 1;
  }
`;

export const PromoButton = styled(ActionButton)`
  margin: 0;
  width: auto;
  padding: 0 16px;
  height: 38px;
  font-size: 11px;
  border-radius: 10px;
`;

export const PromoErrorText = styled.span`
  font-size: 11px;
  color: #c0392b;
  font-weight: 600;
`;

export const CostsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FreeText = styled.span`
  color: #496a35;
  font-weight: 800;
`;

export const CostSummaryRow = styled.div<{
  $isTotal?: boolean;
  $isDiscount?: boolean;
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${({ $isTotal }) => ($isTotal ? "16px" : "13px")};
  font-weight: ${({ $isTotal }) => ($isTotal ? "800" : "600")};
  color: ${({ $isTotal, $isDiscount }) =>
    $isTotal ? "#5f320fff" : $isDiscount ? "#496a35" : "#6c6959"};

  span.value {
    font-size: ${({ $isTotal }) => ($isTotal ? "22px" : "14px")};
    font-weight: 800;
    color: ${({ $isTotal, $isDiscount }) =>
      $isTotal ? "#7e7c2a" : $isDiscount ? "#496a35" : "#48260bff"};
  }
`;

export const TrustBadgeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 16px;
  border-top: 1px solid #fdfaf5;
`;

export const TrustBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 11px;
  font-weight: 700;
  color: #8a8775;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  svg {
    color: #7e7c2a;
    font-size: 26px;
  }
`;
