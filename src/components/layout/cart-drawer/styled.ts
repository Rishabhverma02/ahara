import styled, { keyframes } from "styled-components";

export const fade = keyframes`from { opacity: 0 } to { opacity: 1 }`;

export const slide = keyframes`from { transform: translateX(100%) } to { transform: none }`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 400;
  background: rgb(29 33 22 / 0.4);
  animation: ${fade} 0.2s ease-out;
`;

export const Panel = styled.div`
  position: absolute;
  inset: 0 0 0 auto;
  width: min(440px, 100%);
  display: flex;
  flex-direction: column;
  background: var(--paper);
  animation: ${slide} 0.4s var(--ease-out);
`;

export const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid var(--line);

  h2 {
    font-family: var(--font-display);
    font-weight: 500;
    font-size: 1.5rem;
  }
  span {
    font-family: var(--font-sans);
    font-size: 1rem;
    color: var(--muted);
  }
`;

export const IconBtn = styled.button`
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border: 0;
  border-radius: 50%;
  background: none;
  color: var(--ink-2);

  &:hover {
    background: rgb(29 33 22 / 0.06);
    color: var(--ink);
  }
`;

export const Empty = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  padding: 2rem;
  text-align: center;
  color: var(--muted);
`;

export const Progress = styled.div`
  padding: 1rem 1.5rem;
  background: var(--olive-tint);
  font-size: 0.875rem;
  color: var(--ink-2);

  strong {
    color: var(--olive-600);
  }
`;

export const Bar = styled.div`
  height: 4px;
  margin-top: 0.6rem;
  border-radius: 2px;
  background: rgb(var(--olive-rgb) / 0.18);
  overflow: hidden;

  span {
    display: block;
    height: 100%;
    background: var(--olive);
    transition: width 0.5s var(--ease-out);
  }
`;

export const List = styled.ul`
  flex: 1;
  overflow-y: auto;
  list-style: none;
  padding: 0 1.5rem;
`;

export const Row = styled.li`
  display: grid;
  grid-template-columns: 72px 1fr auto;
  gap: 1rem;
  padding: 1.25rem 0;
  border-bottom: 1px solid var(--line);
`;

export const Thumb = styled.div`
  position: relative;
  width: 72px;
  height: 84px;
  border-radius: var(--radius-sm);
  overflow: hidden;
  background: var(--paper-2);

  img {
    object-fit: cover;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  min-width: 0;

  a {
    font-weight: 600;
    color: var(--ink);
    text-decoration: none;
    line-height: 1.3;
    &:hover {
      text-decoration: underline;
    }
  }
  small {
    color: var(--muted);
  }
`;

export const Qty = styled.div`
  display: inline-flex;
  align-items: center;
  width: fit-content;
  margin-top: 0.4rem;
  border: 1px solid var(--line-strong);
  border-radius: var(--radius-sm);

  button {
    display: grid;
    place-items: center;
    width: 32px;
    height: 32px;
    border: 0;
    background: none;
    &:disabled {
      opacity: 0.35;
    }
  }
  span {
    min-width: 24px;
    text-align: center;
    font-weight: 600;
    font-size: 0.875rem;
  }
`;

export const End = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;

export const Foot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.25rem 1.5rem max(1.25rem, env(safe-area-inset-bottom));
  border-top: 1px solid var(--line);
  background: var(--surface);

  small {
    color: var(--muted);
  }
`;

export const Subtotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  strong {
    font-family: var(--font-display);
    font-size: 1.5rem;
    font-weight: 500;
  }
`;

export const Actions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.6rem;
  margin-top: 0.5rem;
`;
