import styled from "styled-components";
import Link from "next/link";
import { QtyBox } from "../../../shop/[slug]/styled";

export const CartItemsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
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

  img {
    object-fit: cover;
  }

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

export const CartQtyBox = styled(QtyBox)`
  transform: scale(0.95);
  margin: 0;
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

export const PriceEachLabel = styled.span`
  font-size: 12px;
  color: #a7a48a;
  font-weight: 600;
`;

export const ContinueShoppingLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: #7e7c2a;
  font-weight: 700;
  font-size: 14px;
  margin-top: 10px;
  align-self: flex-start;
`;
