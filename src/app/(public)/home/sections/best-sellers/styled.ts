import styled from "styled-components";
import { container, mq, reveal, sectionY } from "@/src/theme";

export const Section = styled.section`
  ${container};
  ${sectionY};
`;

export const Head = styled.div<{ $in: boolean }>`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: clamp(2rem, 4vw, 3.5rem);
  ${({ $in }) => reveal($in)};

  ${mq.sm} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;

  ${mq.lg} {
    grid-template-columns: none;
    grid-auto-flow: column;
    grid-auto-columns: minmax(260px, 42%);
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
    margin-inline: calc(var(--gutter) * -1);
    padding-inline: var(--gutter);
    scroll-padding-inline: var(--gutter);
    &::-webkit-scrollbar {
      display: none;
    }
  }
  ${mq.sm} {
    grid-auto-columns: 80%;
  }
`;

export const Cell = styled.div<{ $in: boolean; $i: number }>`
  scroll-snap-align: start;
  ${({ $in, $i }) => reveal($in, 120 + $i * 90)};
`;

export const MobileOnly = styled.div`
  display: none;
  ${mq.lg} {
    display: block;
  }
`;
