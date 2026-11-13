import styled from "styled-components";
import { mq } from "@/src/theme";

/*
 * Page-level layout only — component styles live in ./components/*.
 * (~30 stale duplicates of those component styles were removed from here.)
 */

export const CartPageWrapper = styled.div`
  background: var(--paper);
  min-height: 100vh;
`;

export const PageContainer = styled.div`
  width: min(100% - 2 * var(--gutter), var(--max-w));
  margin-inline: auto;
  padding-block: clamp(2rem, 4vw, 3.5rem) var(--section-y);
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const CartLayout = styled.div`
  display: grid;
  grid-template-columns: 1.8fr 1fr;
  gap: 3rem;
  align-items: flex-start;

  ${mq.md} {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const LoadingState = styled.div`
  text-align: center;
  padding: 6rem 0;
  color: var(--muted);
`;

export const CartMainColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;
