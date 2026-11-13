import styled from "styled-components";
import { mq } from "@/src/theme";

/*
 * Page-level layout only. Component styles live next to each component in
 * ./components/*. (This file previously also held ~50 stale copies of those
 * component styles plus four animated, blurred background blobs.)
 */

export const CheckoutWrapper = styled.div`
  min-height: 100vh;
  padding-top: var(--header-h);
  background: var(--paper);
`;

export const PageContainer = styled.div`
  width: min(100% - 2 * var(--gutter), 1200px);
  margin-inline: auto;
  padding-block: clamp(1.5rem, 3vw, 2.5rem) var(--section-y);
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const CheckoutLayout = styled.div`
  display: grid;
  grid-template-columns: 1.7fr 1fr;
  gap: 2.5rem;
  align-items: flex-start;

  ${mq.md} {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const CheckoutLoadingState = styled.div`
  text-align: center;
  padding: 6rem 0;
  color: var(--muted);
`;

export const EmptyContainer = styled(Container)`
  max-width: 640px;
  margin-inline: auto;
  padding-top: 2rem;
`;

export const ConfirmationContainer = styled(Container)`
  max-width: 680px;
  margin-inline: auto;
  align-items: center;
`;
