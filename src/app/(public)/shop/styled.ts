import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ShopPageWrapper = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const PageContainer = styled.div`
  width: 100%;
  padding: 50px ;
  background-color: #7e7d2a18;
  
`;

export const ActiveFiltersRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 32px;
  padding: 12px 20px;
  background: #fbfbf9;
  border: 1px solid rgba(126, 124, 42, 0.08);
  border-radius: 10px;
  min-height: 48px;
  animation: ${fadeIn} 0.4s ease;
  box-shadow: 0 4px 15px rgba(42, 36, 30, 0.01);
`;

export const ActiveFilterLabel = styled.span`
  font-size: 11px;
  font-weight: 800;
  color: #7e7c2a;
  letter-spacing: 1px;
  margin-right: 6px;
  text-transform: uppercase;
`;

export const FilterChip = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #ffffff;
  color: #5f320fff;
  border: 1px solid rgba(126, 124, 42, 0.15);
  border-radius: 100px;
  padding: 6px 14px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(42, 36, 30, 0.02);
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);

  span {
    font-weight: 600;
    font-size: 13px;
    color: rgba(126, 124, 42, 0.6);
    transition: color 0.25s ease;
  }

  &:hover {
    background: #bd5338; /* Beautiful coral-red on active filter tag hover for quick clear feedback */
    color: #ffffff;
    border-color: #bd5338;
    transform: translateY(-1px);
    box-shadow: 0 4px 10px rgba(189, 83, 56, 0.2);

    span {
      color: #ffffff;
    }
  }
`;

export const ClearAllBtn = styled.button`
  font-size: 11px;
  font-weight: 800;
  color: #bd5338; /* Coral red */
  background: rgba(189, 83, 56, 0.04);
  border: 1px solid rgba(189, 83, 56, 0.1);
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  padding: 6px 12px;
  border-radius: 100px;
  transition: all 0.25s ease;

  &:hover {
    background: #bd5338;
    color: #ffffff;
    border-color: #bd5338;
    box-shadow: 0 4px 10px rgba(189, 83, 56, 0.15);
  }
`;

export const ContentLayout = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 40px;
  align-items: flex-start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export const SidebarWrapper = styled.aside`
  background: #fbfbf9; /* Soft organic off-white/cream background */
  border: 1px solid rgba(126, 124, 42, 0.08);
  border-radius: 10px;
  padding: 32px 28px;
  position: sticky;
  top: 120px;
  max-height: calc(100vh - 160px);
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 40px rgba(42, 36, 30, 0.02);

  @media (max-width: 1024px) {
    position: static;
    max-height: none;
    box-shadow: none;
    border-radius: 16px;
    padding: 24px;
  }
`;

export const SidebarScrollArea = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 5px; /* Add a little padding so context will not scroll directly from the edge */
  margin: -5px; /* Compensate padding for alignment */

  /* hide scrollbar */
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1024px) {
    overflow-y: visible;
  }
`;

export const SidebarTitle = styled.h2`
  font-size: 15px;
  font-weight: 800;
  color: #5f320fff;
  margin-bottom: 24px;
  padding-bottom: 14px;
  border-bottom: 1px solid rgba(126, 124, 42, 0.08);
  letter-spacing: 1.5px;
  text-transform: uppercase;
`;

export const FilterSection = styled.div`
  margin-bottom: 24px;
  border-bottom: 1px solid rgba(126, 124, 42, 0.06);
  padding-bottom: 24px;

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

export const FilterSectionHeader = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-bottom: 16px;
`;

export const FilterSectionTitle = styled.span`
  font-size: 11px;
  font-weight: 800;
  color: #7e7c2a;
  text-transform: uppercase;
  letter-spacing: 1.2px;
`;

export const FilterChevron = styled.span<{ $open: boolean }>`
  font-size: 14px;
  color: #7e7c2a;
  transform: ${({ $open }) => ($open ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const FilterBody = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  animation: ${fadeIn} 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;

  & > div {
    width: 100%;
  }
`;

export const CheckboxLabel = styled.label`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  font-size: 12.5px;
  font-weight: 600;
  border-radius: 100px; /* Modern pill layout */
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  user-select: none;
  background: #ffffff;
  border: 1px solid rgba(126, 124, 42, 0.1);
  color: #5f320fff;

  /* Hide default checkbox */
  input[type="checkbox"] {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
    margin: 0;
    pointer-events: none;
  }

  &:hover {
    background: #fbfbf9;
    border-color: rgba(126, 124, 42, 0.3);
    color: #7e7c2a;
    transform: translateY(-1px);
  }

  /* Target label containing checked input */
  &:has(input:checked) {
    background: #7e7c2a;
    border-color: #7e7c2a;
    color: #ffffff;
    box-shadow: 0 4px 12px rgba(126, 124, 42, 0.15);
  }

  &:has(input:checked):hover {
    background: #6c6a23;
    border-color: #6c6a23;
  }
`;

/* Price Range */
export const PriceRangeWrapper = styled.div`
  padding: 4px 0;
`;

export const RangeSlider = styled.input`
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 4px;
  background: linear-gradient(
    to right,
    #7e7c2a 0%,
    #7e7c2a var(--val),
    #e8e6df var(--val),
    #e8e6df 100%
  );
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  margin: 14px 0 16px;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #ffffff;
    border: 2.5px solid #7e7c2a;
    box-shadow: 0 3px 8px rgba(126, 124, 42, 0.2);
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);

    &:hover {
      transform: scale(1.25);
      background: #7e7c2a;
      box-shadow: 0 4px 12px rgba(126, 124, 42, 0.35);
    }
  }
`;

export const PriceValues = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12.5px;
  color: #7e7c2a;
  font-weight: 700;
`;

export const MainArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  animation: ${fadeIn} 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
`;

export const ResultsBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
`;

export const ResultsCount = styled.span`
  font-size: 14.5px;
  color: #6f8b5b;
  font-weight: 500;
`;

export const SortSelect = styled.select`
  padding: 10px 40px 10px 16px;
  border: 1px solid rgba(126, 124, 42, 0.15);
  border-radius: 10px;
  background: #ffffff;
  color: #5f320fff;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M2 2l4 4 4-4' stroke='%237e7c2a' stroke-width='2' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 14px center;
  font-family: inherit;
  transition: all 0.25s ease;
  box-shadow: 0 2px 8px rgba(42, 36, 30, 0.02);

  &:focus,
  &:hover {
    border-color: #7e7c2a;
    box-shadow: 0 4px 12px rgba(126, 124, 42, 0.08);
  }
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const CardWrapper = styled.div`
  background: #ffffff;
  border: 1px solid rgba(126, 124, 42, 0.08);
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
  position: relative;
  box-shadow: 0 4px 20px rgba(42, 36, 30, 0.02);
  animation: ${fadeIn} 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 24px 50px rgba(42, 36, 30, 0.09);
    border-color: rgba(126, 124, 42, 0.25);
  }
`;

export const CardBadge = styled.span<{ $type: string }>`
  position: absolute;
  top: 14px;
  left: 14px;
  z-index: 2;
  font-size: 10.5px;
  font-weight: 800;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  padding: 5px 12px;
  border-radius: 100px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);

  ${({ $type }) =>
    $type === "Bestseller" &&
    css`
      background: #3a2f25;
      color: #ecf3d4;
    `}
  ${({ $type }) =>
    $type === "New" &&
    css`
      background: #7e7c2a;
      color: #ffffff;
    `}
  ${({ $type }) =>
    $type === "Sale" &&
    css`
      background: #c0392b;
      color: #ffffff;
    `}
`;

export const CardImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 1.05 / 1;
  background: #fbfbfa;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgba(126, 124, 42, 0.04);
  transition: background 0.3s ease;

  ${CardWrapper}:hover & {
    background: #f6f8ef;
  }
`;

export const CardBody = styled.div`
  padding: 20px 22px 24px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const ProductName = styled.h3`
  font-size: 16px;
  font-weight: 800;
  color: #2a241e;
  margin-bottom: 8px;
  line-height: 1.4;
  letter-spacing: -0.2px;
  transition: color 0.2s ease;

  ${CardWrapper}:hover & {
    color: #7e7c2a;
  }
`;

export const ProductDesc = styled.p`
  font-size: 13px;
  color: #6f8b5b;
  line-height: 1.5;
  margin-bottom: 16px;
  flex-grow: 1;
`;

export const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 16px;
`;

export const Tag = styled.span`
  font-size: 11px;
  font-weight: 700;
  color: #7e7c2a;
  background: rgba(126, 124, 42, 0.06);
  border: 1px solid rgba(126, 124, 42, 0.1);
  border-radius: 100px;
  padding: 4px 10px;
  letter-spacing: 0.2px;
`;

export const RatingRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 16px;
`;

export const Stars = styled.div`
  display: flex;
  gap: 3px;
  color: #d4af37;
  font-size: 14px;
`;

export const ReviewCount = styled.span`
  font-size: 12px;
  color: #a7a48a;
  font-weight: 500;
`;

export const PriceRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
  margin-bottom: 18px;
`;

export const Price = styled.span`
  font-size: 19px;
  font-weight: 800;
  color: #3a2f25;
`;

export const OriginalPrice = styled.span`
  font-size: 13.5px;
  color: #b5b09e;
  text-decoration: line-through;
  font-weight: 500;
`;

export const AddToCartBtn = styled.button`
  width: 100%;
  padding: 12px;
  background: transparent;
  border: 2px solid #7e7c2a;
  border-radius: 10px;
  color: #7e7c2a;
  font-size: 13.5px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  font-family: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    background: #7e7c2a;
    color: #ffffff;
    box-shadow: 0 8px 16px rgba(126, 124, 42, 0.15);
  }

  &:active {
    transform: scale(0.97);
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 96px 24px;
  color: #6f8b5b;
  background: #fcfbfa;
  border: 1px dashed rgba(126, 124, 42, 0.15);
  border-radius: 20px;

  h3 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
    color: #2a241e;
  }
  p {
    font-size: 14.5px;
  }
`;

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const PageBtn = styled.button<{ $active?: boolean; $arrow?: boolean }>`
  min-width: 40px;
  height: 40px;
  border-radius: 10px;
  border: 1.5px solid
    ${({ $active }) => ($active ? "#7e7c2a" : "rgba(126, 124, 42, 0.12)")};
  background: ${({ $active }) => ($active ? "#7e7c2a" : "#ffffff")};
  color: ${({ $active }) => ($active ? "#ffffff" : "#3a2f25")};
  font-size: 14px;
  font-weight: ${({ $active }) => ($active ? "700" : "600")};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  font-family: inherit;
  box-shadow: 0 2px 6px rgba(42, 36, 30, 0.01);

  &:hover:not(:disabled) {
    border-color: #7e7d2a2b;
    background: ${({ $active }) =>
      $active ? "#7e7c2a" : "rgba(126, 124, 42, 0.05)"};
    color: ${({ $active }) => ($active ? "#ffffff" : "#7e7c2a")};
  }

  &:disabled {
    opacity: 0.3;
  }
`;

export const MobileFilterToggle = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: #ffffff;
  border: 1.5px solid rgba(126, 124, 42, 0.15);
  border-radius: 10px;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 700;
  color: #5f320fff;
  cursor: pointer;
  transition: all 0.25s ease;
  font-family: inherit;
  margin-bottom: 24px;
  width: 100%;
  box-shadow: 0 2px 8px rgba(42, 36, 30, 0.02);

  svg {
    font-size: 16px;
  }

  &:hover {
    border-color: #7e7c2a;
    color: #7e7c2a;
    background: rgba(126, 124, 42, 0.02);
  }

  @media (max-width: 1024px) {
    display: flex;
  }
`;

/* Mobile filter drawer */
export const FilterDrawerOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(42, 36, 30, 0.4);
  backdrop-filter: blur(4px);
  z-index: 300;
  display: none;
  animation: ${fadeIn} 0.25s ease forwards;

  @media (max-width: 1024px) {
    display: block;
  }
`;

export const FilterDrawer = styled.aside`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 310px;
  background: #ffffff;
  z-index: 301;
  padding: 32px 28px;
  overflow-y: auto;
  box-shadow: 8px 0 36px rgba(42, 36, 30, 0.12);
  border-right: 1px solid rgba(126, 124, 42, 0.1);
  display: flex;
  flex-direction: column;

  /* hide scrollbar */
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const FilterDrawerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 28px;
`;

export const FilterDrawerClose = styled.button`
  background: none;
  border: 1px solid rgba(126, 124, 42, 0.15);
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #3a2f25;
  font-size: 18px;
  transition: all 0.25s ease;

  &:hover {
    border-color: #7e7c2a;
    color: #7e7c2a;
    background: rgba(126, 124, 42, 0.05);
    transform: rotate(90deg);
  }
`;
