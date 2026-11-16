import styled, { keyframes } from "styled-components";

export const enter = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: none; }
`;

export const Region = styled.div`
  position: fixed;
  right: max(24px, env(safe-area-inset-right));
  bottom: max(24px, env(safe-area-inset-bottom));
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: min(420px, calc(100vw - 32px));
  pointer-events: none;
`;

/* Matches the original MUI Snackbar content from the main-branch design */
export const Item = styled.div`
  pointer-events: auto;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 14px 12px 18px;
  border-radius: 8px;
  background: #fffffff5;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid #549a2947;
  border-left: 4px solid #549a29ff;
  box-shadow: 0 10px 25px #549a2931;
  font-family: inherit;
  animation: ${enter} 0.3s cubic-bezier(0.16, 1, 0.3, 1);
`;

export const Icon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #549a29ff;
  flex-shrink: 0;
`;

export const Body = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px 6px;
  font-size: 13px;

  strong {
    color: #549a29ff;
    font-weight: 700;
  }
  span {
    color: #3e6e21ff;
    font-weight: 500;
  }
`;

export const Action = styled.button`
  padding: 0;
  border: 0;
  background: none;
  color: #7e7c2a;
  font-size: 13px;
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 3px;
`;

export const Close = styled.button`
  display: grid;
  place-items: center;
  padding: 2px;
  border: 0;
  background: none;
  color: #a7a48a;

  &:hover {
    color: #3a2f25;
  }
`;
