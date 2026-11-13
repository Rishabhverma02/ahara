import styled from "styled-components";
import { container, display, eyebrow, mq, reveal } from "@/src/theme";

export const Band = styled.section`
  position: relative;
  min-height: clamp(520px, 70vh, 720px);
  display: flex;
  align-items: center;
  overflow: hidden;
  color: var(--paper);

  > img {
    object-fit: cover;
  }
`;

export const Shade = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgb(20 24 12 / 0.88) 0%, rgb(20 24 12 / 0.6) 40%, rgb(20 24 12 / 0) 75%);

  ${mq.md} {
    background: linear-gradient(180deg, rgb(20 24 12 / 0.25) 0%, rgb(20 24 12 / 0.85) 70%);
  }
`;

export const Inner = styled.div`
  ${container};
  position: relative;
  padding-block: 4rem;

  ${mq.md} {
    align-self: flex-end;
  }
`;

export const Copy = styled.div<{ $in: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  max-width: 34rem;
  ${({ $in }) => reveal($in)};

  > span {
    ${eyebrow};
    color: var(--saffron);
  }
  h2 {
    ${display};
    color: var(--paper);
    font-size: var(--fs-h2);
  }
  em {
    font-style: italic;
    color: var(--saffron-tint);
  }
  p {
    color: rgb(246 241 230 / 0.82);
    font-size: 1.0625rem;
  }
`;
