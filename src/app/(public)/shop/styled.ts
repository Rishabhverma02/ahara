import styled, { keyframes } from "styled-components";
import { container } from "@/src/theme";

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
  background: var(--paper);
`;

export const PageContainer = styled.div`
  ${container};
  padding-block: clamp(2rem, 4vw, 3.5rem) var(--section-y);
`;

export const ActiveFiltersRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 32px;
  padding: 12px 20px;
  background: var(--surface);
  border: 1px solid rgb(var(--olive-rgb) / 0.08);
  border-radius: 10px;
  min-height: 48px;
  animation: ${fadeIn} 0.4s ease;
  box-shadow: 0 4px 15px rgb(29 33 22 / 0.01);
`;

export const ActiveFilterLabel = styled.span`
  font-size: 11px;
  font-weight: 800;
  color: var(--olive);
  letter-spacing: 1px;
  margin-right: 6px;
  text-transform: uppercase;
`;

export const FilterChip = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #ffffff;
  color: var(--earth);
  border: 1px solid rgb(var(--olive-rgb) / 0.15);
  border-radius: 100px;
  padding: 6px 14px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 2px 4px rgb(29 33 22 / 0.02);
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);

  span {
    font-weight: 600;
    font-size: 13px;
    color: rgb(var(--olive-rgb) / 0.6);
    transition: color 0.25s ease;
  }

  &:hover {
    background: var(--danger); /* Beautiful coral-red on active filter tag hover for quick clear feedback */
    color: #ffffff;
    border-color: var(--danger);
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
  color: var(--danger); /* Coral red */
  background: rgba(189, 83, 56, 0.04);
  border: 1px solid rgba(189, 83, 56, 0.1);
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  padding: 6px 12px;
  border-radius: 100px;
  transition: all 0.25s ease;

  &:hover {
    background: var(--danger);
    color: #ffffff;
    border-color: var(--danger);
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
  background: var(--surface); /* Soft organic off-white/cream background */
  border: 1px solid rgb(var(--olive-rgb) / 0.08);
  border-radius: 10px;
  padding: 32px 28px;
  position: sticky;
  top: 120px;
  max-height: calc(100vh - 160px);
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 40px rgb(29 33 22 / 0.02);

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
  color: var(--earth);
  margin-bottom: 24px;
  padding-bottom: 14px;
  border-bottom: 1px solid rgb(var(--olive-rgb) / 0.08);
  letter-spacing: 1.5px;
  text-transform: uppercase;
`;

export const FilterSection = styled.div`
  margin-bottom: 24px;
  border-bottom: 1px solid rgb(var(--olive-rgb) / 0.06);
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
  color: var(--olive);
  text-transform: uppercase;
  letter-spacing: 1.2px;
`;

export const FilterChevron = styled.span<{ $open: boolean }>`
  font-size: 14px;
  color: var(--olive);
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
  border: 1px solid rgb(var(--olive-rgb) / 0.1);
  color: var(--earth);

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
    background: var(--surface);
    border-color: rgb(var(--olive-rgb) / 0.3);
    color: var(--olive);
    transform: translateY(-1px);
  }

  /* Target label containing checked input */
  &:has(input:checked) {
    background: var(--olive);
    border-color: var(--olive);
    color: #ffffff;
    box-shadow: 0 4px 12px rgb(var(--olive-rgb) / 0.15);
  }

  &:has(input:checked):hover {
    background: var(--olive-600);
    border-color: var(--olive-600);
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
    var(--olive) 0%,
    var(--olive) var(--val),
    var(--paper) var(--val),
    var(--paper) 100%
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
    border: 2.5px solid var(--olive);
    box-shadow: 0 3px 8px rgb(var(--olive-rgb) / 0.2);
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);

    &:hover {
      transform: scale(1.25);
      background: var(--olive);
      box-shadow: 0 4px 12px rgb(var(--olive-rgb) / 0.35);
    }
  }
`;

export const PriceValues = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12.5px;
  color: var(--olive);
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
  border: 1px solid rgb(var(--olive-rgb) / 0.15);
  border-radius: 10px;
  background: #ffffff;
  color: var(--earth);
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
  box-shadow: 0 2px 8px rgb(29 33 22 / 0.02);

  &:focus,
  &:hover {
    border-color: var(--olive);
    box-shadow: 0 4px 12px rgb(var(--olive-rgb) / 0.08);
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


export const Tag = styled.span`
  font-size: 11px;
  font-weight: 700;
  color: var(--olive);
  background: rgb(var(--olive-rgb) / 0.06);
  border: 1px solid rgb(var(--olive-rgb) / 0.1);
  border-radius: 100px;
  padding: 4px 10px;
  letter-spacing: 0.2px;
`;


export const Stars = styled.div`
  display: flex;
  gap: 3px;
  color: #d4af37;
  font-size: 14px;
`;



export const Price = styled.span`
  font-size: 19px;
  font-weight: 800;
  color: var(--ink);
`;



export const EmptyState = styled.div`
  text-align: center;
  padding: 96px 24px;
  color: #6f8b5b;
  background: #fcfbfa;
  border: 1px dashed rgb(var(--olive-rgb) / 0.15);
  border-radius: 20px;

  h3 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
    color: var(--ink);
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
    ${({ $active }) => ($active ? "var(--olive)" : "rgb(var(--olive-rgb) / 0.12)")};
  background: ${({ $active }) => ($active ? "var(--olive)" : "#ffffff")};
  color: ${({ $active }) => ($active ? "#ffffff" : "var(--ink)")};
  font-size: 14px;
  font-weight: ${({ $active }) => ($active ? "700" : "600")};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  font-family: inherit;
  box-shadow: 0 2px 6px rgb(29 33 22 / 0.01);

  &:hover:not(:disabled) {
    border-color: rgb(var(--olive-rgb) / 0.17);
    background: ${({ $active }) =>
      $active ? "var(--olive)" : "rgb(var(--olive-rgb) / 0.05)"};
    color: ${({ $active }) => ($active ? "#ffffff" : "var(--olive)")};
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
  border: 1.5px solid rgb(var(--olive-rgb) / 0.15);
  border-radius: 10px;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 700;
  color: var(--earth);
  cursor: pointer;
  transition: all 0.25s ease;
  font-family: inherit;
  margin-bottom: 24px;
  width: 100%;
  box-shadow: 0 2px 8px rgb(29 33 22 / 0.02);

  svg {
    font-size: 16px;
  }

  &:hover {
    border-color: var(--olive);
    color: var(--olive);
    background: rgb(var(--olive-rgb) / 0.02);
  }

  @media (max-width: 1024px) {
    display: flex;
  }
`;

/* Mobile filter drawer */
export const FilterDrawerOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgb(29 33 22 / 0.4);
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
  box-shadow: 8px 0 36px rgb(29 33 22 / 0.12);
  border-right: 1px solid rgb(var(--olive-rgb) / 0.1);
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
  border: 1px solid rgb(var(--olive-rgb) / 0.15);
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--ink);
  font-size: 18px;
  transition: all 0.25s ease;

  &:hover {
    border-color: var(--olive);
    color: var(--olive);
    background: rgb(var(--olive-rgb) / 0.05);
    transform: rotate(90deg);
  }
`;
