import styled, { keyframes } from "styled-components";

export const enter = keyframes`
  from { opacity: 0; transform: translateY(12px) scale(0.98); }
  to { opacity: 1; transform: none; }
`;

export const Region = styled.div`
  position: fixed;
  right: max(1rem, env(safe-area-inset-right));
  bottom: max(1rem, env(safe-area-inset-bottom));
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: min(380px, calc(100vw - 2rem));
  pointer-events: none;
`;

export const Item = styled.div`
  pointer-events: auto;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.9rem 0.9rem 0.9rem 1rem;
  border-radius: var(--radius);
  background: var(--forest);
  color: var(--paper);
  box-shadow: var(--shadow);
  animation: ${enter} 0.35s var(--ease-out);
`;

export const Icon = styled.span`
  display: grid;
  place-items: center;
  width: 22px;
  height: 22px;
  margin-top: 1px;
  border-radius: 50%;
  background: var(--saffron);
  color: var(--forest);
  flex-shrink: 0;
`;

export const Body = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-size: 0.875rem;
  line-height: 1.4;

  span {
    color: rgb(246 241 230 / 0.7);
  }
`;

export const Action = styled.button`
  align-self: flex-start;
  margin-top: 0.35rem;
  padding: 0;
  border: 0;
  background: none;
  color: var(--saffron);
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 3px;
`;

export const Close = styled.button`
  background: none;
  border: 0;
  padding: 2px;
  color: rgb(246 241 230 / 0.6);
  &:hover {
    color: var(--paper);
  }
`;
