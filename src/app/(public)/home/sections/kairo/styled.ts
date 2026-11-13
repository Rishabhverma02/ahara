import styled, { css, keyframes } from "styled-components";
import { container, mq, reveal, sectionY } from "@/src/theme";

export const Section = styled.section`
  ${sectionY};
  background:
    radial-gradient(50% 60% at 75% 55%, var(--glow) 0%, transparent 70%),
    var(--paper-2);
  overflow: hidden;
`;

export const Inner = styled.div`
  ${container};
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: clamp(2.5rem, 6vw, 6rem);
  align-items: center;

  ${mq.md} {
    grid-template-columns: 1fr;
  }
`;

export const Copy = styled.div<{ $in: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  ${({ $in }) => reveal($in)};
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem 1.5rem;

  small {
    font-size: 0.875rem;
    color: var(--muted);
  }
`;

export const Stage = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: end;
  gap: 1rem;
  min-height: 460px;

  ${mq.sm} {
    grid-template-columns: 1fr;
    min-height: 0;
  }
`;

export const Chat = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 0.75rem;
  min-height: 360px;
  padding-bottom: 4rem;

  ${mq.sm} {
    min-height: 300px;
    padding-bottom: 0;
  }
`;

export const pop = keyframes`
  from { opacity: 0; transform: translateY(10px) scale(0.96); }
  to { opacity: 1; transform: none; }
`;

export const Bubble = styled.p<{ $from: "you" | "kairo" }>`
  max-width: 30ch;
  padding: 0.85rem 1.1rem;
  border-radius: 18px;
  font-size: 0.9375rem;
  line-height: 1.45;
  animation: ${pop} 0.45s var(--ease-out) both;

  ${({ $from }) =>
    $from === "you"
      ? css`
          align-self: flex-start;
          background: var(--surface);
          color: var(--ink);
          border: 1px solid var(--line);
          border-bottom-left-radius: 4px;
        `
      : css`
          align-self: flex-end;
          background: var(--forest);
          color: var(--paper);
          border-bottom-right-radius: 4px;
        `}
`;

export const blink = keyframes`
  0%, 80%, 100% { opacity: 0.3; transform: translateY(0); }
  40% { opacity: 1; transform: translateY(-3px); }
`;

export const Typing = styled.span`
  display: inline-flex;
  gap: 4px;
  padding: 4px 2px;

  i {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: currentColor;
    animation: ${blink} 1.2s infinite;
  }
  i:nth-child(2) {
    animation-delay: 0.15s;
  }
  i:nth-child(3) {
    animation-delay: 0.3s;
  }
`;

export const Character = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${mq.sm} {
    order: -1;
    > div:first-child {
      width: 130px !important;
    }
  }
`;

export const Shadow = styled.div`
  width: 140px;
  height: 18px;
  margin-top: -6px;
  border-radius: 50%;
  background: radial-gradient(closest-side, rgb(76 40 14 / 0.22), transparent);
`;
