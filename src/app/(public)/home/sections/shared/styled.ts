import styled from "styled-components";

export const DotRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
  margin-top: 1.5rem;

  button {
    position: relative;
    width: 28px;
    height: 24px;
    border: 0;
    background: none;
    padding: 0;

    &::after {
      content: "";
      position: absolute;
      left: 4px;
      right: 4px;
      top: 11px;
      height: 2px;
      border-radius: 2px;
      background: var(--line-strong);
      transition: background 0.3s;
    }
    &[aria-current="true"]::after {
      background: var(--olive);
    }
  }
`;
