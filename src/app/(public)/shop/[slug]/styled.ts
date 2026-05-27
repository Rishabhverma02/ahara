import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

/* ─── Page wrapper ──────────────────────────────────────────── */
export const DetailPageWrapper = styled.div`
  background: #FDFAF5;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 150px; /* Generous top padding to fully clear transparent fixed header */

  @media (max-width: 768px) { padding-top: 110px; }
`;

/* ─── Breadcrumb ────────────────────────────────────────────── */
export const Breadcrumb = styled.nav`
  width: fit-content;
  padding: 8px 20px;
  margin-bottom: 36px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #a7a48a;
  background: #ffffff;
  border: 1px solid rgba(126, 124, 42, 0.08);
  border-radius: 100px;
  margin-left: 48px;
  align-self: flex-start;
  box-shadow: 0 4px 12px rgba(42, 36, 30, 0.01);

  a {
    color: #7e7c2a;
    text-decoration: none;
    transition: color 0.2s;
    &:hover { color: #1a1714; }
  }

  span { color: #d4d0c4; }

  @media (max-width: 960px) {
    margin-left: 20px;
    margin-bottom: 24px;
  }
`;

/* ─── Top section grid ──────────────────────────────────────── */
export const TopSection = styled.section`
  width: 100%;
  max-width: 1280px;
  padding: 0 48px 72px;
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 72px;
  align-items: flex-start;
  animation: ${fadeIn} 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    gap: 36px;
    padding: 0 20px 48px;
  }
`;

/* ─── Image gallery ─────────────────────────────────────────── */
export const GalleryColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: sticky;
  top: 130px;

  @media (max-width: 960px) {
    position: static;
  }
`;

export const MainImage = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  background: #ffffff;
  border: 1px solid rgba(126, 124, 42, 0.08);
  border-radius: 28px;
  overflow: hidden;
  position: relative;
  cursor: zoom-in;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
  box-shadow: 0 12px 40px rgba(126, 124, 42, 0.03);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 48px rgba(126, 124, 42, 0.06);
  }
`;

export const ThumbnailRow = styled.div`
  display: flex;
  gap: 12px;
`;

export const Thumbnail = styled.button<{ $active?: boolean }>`
  width: 72px;
  height: 72px;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  background: #ffffff;
  border: 2px solid ${({ $active }) => ($active ? "#7e7c2a" : "transparent")};
  box-shadow: ${({ $active }) => ($active ? "0 4px 12px rgba(126, 124, 42, 0.15)" : "0 4px 10px rgba(0, 0, 0, 0.02)")};
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  padding: 0;
  opacity: ${({ $active }) => ($active ? 1 : 0.75)};

  &:hover {
    border-color: #7e7c2a;
    opacity: 1;
    transform: translateY(-2px);
  }
`;

/* ─── Info column ───────────────────────────────────────────── */
export const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ProductHeaderGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ProductName = styled.h1`
  font-size: 40px;
  font-weight: 800;
  color: #2a241e;
  line-height: 1.15;
  letter-spacing: -1.2px;
  margin: 0;

  @media (max-width: 768px) { font-size: 30px; }
`;

export const ShortDesc = styled.p`
  font-size: 16px;
  color: #6c6959;
  line-height: 1.6;
  margin: 0;
`;

export const TagPills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

export const TagPill = styled.span`
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #7e7c2a;
  background: #ffffff;
  border: 1px solid rgba(126, 124, 42, 0.12);
  border-radius: 100px;
  padding: 6px 16px;
  box-shadow: 0 2px 6px rgba(126, 124, 42, 0.02);
`;

export const PriceBlock = styled.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
`;

export const BigPrice = styled.span`
  font-size: 36px;
  font-weight: 800;
  color: #2a241e;
  letter-spacing: -0.5px;
`;

export const OldPrice = styled.span`
  font-size: 18px;
  color: #c5c1b0;
  text-decoration: line-through;
  font-weight: 500;
`;

export const Divider = styled.hr`
  border: none;
  height: 1px;
  background: #f0efe8;
  margin: 0;
  width: 100%;
`;

export const SizeSelectorGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SizeLabel = styled.span`
  font-size: 11px;
  font-weight: 800;
  color: #8a8775;
  text-transform: uppercase;
  letter-spacing: 1.2px;
`;

export const SizeRow = styled.div`
  display: flex;
  gap: 8px;
`;

export const SizeChip = styled.button<{ $active?: boolean }>`
  padding: 12px 28px;
  border-radius: 100px;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  font-family: inherit;
  border: 1.5px solid ${({ $active }) => ($active ? "#7e7c2a" : "rgba(126, 124, 42, 0.15)")};
  background: ${({ $active }) => ($active ? "#7e7c2a" : "#ffffff")};
  color: ${({ $active }) => ($active ? "#ffffff" : "#3a2f25")};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.02);

  &:hover {
    border-color: #7e7c2a;
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(126, 124, 42, 0.08);
  }
`;

export const ActionRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`;

export const QtyBox = styled.div`
  display: flex;
  align-items: center;
  border: 1.5px solid #e8e6df;
  border-radius: 100px;
  overflow: hidden;
  background: #ffffff;
`;

export const QtyBtn = styled.button`
  width: 46px;
  height: 48px;
  border: none;
  background: transparent;
  font-size: 16px;
  color: #3a2f25;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
  font-family: inherit;

  &:hover { background: #f7f7f4; }
`;

export const QtyValue = styled.span`
  width: 32px;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  color: #2a241e;
`;

export const AddToCartBtn = styled.button`
  flex: 1.2;
  min-width: 180px;
  height: 52px;
  border: none;
  border-radius: 100px;
  background: #2a241e;
  color: #ffffff;
  font-size: 13px;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  font-family: inherit;
  letter-spacing: 1px;
  text-transform: uppercase;
  box-shadow: 0 10px 25px rgba(42, 36, 30, 0.12);

  &:hover {
    background: #7e7c2a;
    transform: translateY(-3px);
    box-shadow: 0 15px 30px rgba(126, 124, 42, 0.22);
  }
`;

export const BuyNowBtn = styled.button`
  flex: 1;
  min-width: 140px;
  height: 52px;
  border: 2px solid #2a241e;
  border-radius: 100px;
  background: transparent;
  color: #2a241e;
  font-size: 13px;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  font-family: inherit;
  letter-spacing: 1px;
  text-transform: uppercase;

  &:hover {
    background: #2a241e;
    color: #ffffff;
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(42, 36, 30, 0.08);
  }
`;

export const DeliveryNote = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #6c6959;
  font-weight: 600;

  svg { font-size: 16px; color: #7e7c2a; }
`;

export const CleanLabelSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const CleanLabelTitle = styled.h3`
  font-size: 11px;
  font-weight: 800;
  color: #8a8775;
  margin: 0;
  letter-spacing: 1.2px;
  text-transform: uppercase;
`;

export const CleanLabelGrid = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

export const CleanLabelItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background: #ffffff;
  border: 1px solid rgba(126, 124, 42, 0.08);
  border-radius: 100px;
  padding: 8px 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.01);
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);

  svg { font-size: 18px; color: #7e7c2a; }

  &:hover {
    border-color: rgba(126, 124, 42, 0.3);
    transform: translateY(-1.5px);
    box-shadow: 0 6px 16px rgba(126, 124, 42, 0.06);
  }
`;

export const CleanLabelText = styled.span`
  font-size: 11px;
  font-weight: 700;
  color: #3a2f25;
`;

export const TabsSection = styled.section`
  width: 100%;
  max-width: 1280px;
  padding: 0 48px 80px;

  @media (max-width: 768px) { padding: 0 20px 60px; }
`;

export const TabBar = styled.div`
  display: flex;
  gap: 0;
  border-bottom: 1.5px solid #f0efe8;
  overflow-x: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`;

export const TabButton = styled.button<{ $active?: boolean }>`
  padding: 18px 32px;
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  border: none;
  background: transparent;
  cursor: pointer;
  color: ${({ $active }) => ($active ? "#2a241e" : "#c5c1b0")};
  border-bottom: 3px solid ${({ $active }) => ($active ? "#7e7c2a" : "transparent")};
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  white-space: nowrap;
  font-family: inherit;

  &:hover { color: #2a241e; }
`;

export const TabContent = styled.div`
  padding: 40px 0;
  animation: ${fadeIn} 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
`;

export const StoryLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 56px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`;

export const StoryImage = styled.div`
  width: 100%;
  aspect-ratio: 4 / 3;
  background: #ffffff;
  border: 1px solid rgba(126, 124, 42, 0.08);
  border-radius: 24px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.02);
`;

export const StoryText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  h3 {
    font-size: 24px;
    font-weight: 800;
    color: #2a241e;
    margin: 0;
    letter-spacing: -0.5px;
  }

  p {
    font-size: 15px;
    color: #6c6959;
    line-height: 1.75;
    margin: 0;
  }
`;

export const TextBlock = styled.div`
  font-size: 15px;
  color: #3a2f25;
  line-height: 1.85;
  max-width: 640px;
`;

export const NutritionTable = styled.table`
  width: 100%;
  max-width: 480px;
  border-collapse: collapse;

  tr {
    border-bottom: 1.5px solid #f0efe8;
  }

  td {
    padding: 16px 0;
    font-size: 14px;

    &:first-child {
      font-weight: 700;
      color: #3a2f25;
    }

    &:last-child {
      text-align: right;
      color: #7e7c2a;
      font-weight: 800;
    }
  }
`;

export const ReviewsPlaceholder = styled.div`
  text-align: center;
  padding: 48px 0;
  color: #c5c1b0;
  font-size: 14px;
  font-weight: 500;
`;
