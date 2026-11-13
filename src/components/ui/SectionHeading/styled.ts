import styled from "styled-components";
import { eyebrow, h2, lead } from "@/src/theme";

export const Wrap = styled.header<{ $align: "left" | "center"; $inverse?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: ${({ $align }) => ($align === "center" ? "44rem" : "40rem")};
  margin-inline: ${({ $align }) => ($align === "center" ? "auto" : "0")};
  text-align: ${({ $align }) => $align};
  align-items: ${({ $align }) => ($align === "center" ? "center" : "flex-start")};

  ${({ $inverse }) =>
    $inverse &&
    `
    h1, h2 { color: var(--paper); }
    p { color: rgb(246 241 230 / 0.72); }
    span { color: var(--saffron); }
  `}
`;

export const Kicker = styled.span`
  ${eyebrow};
`;

export const Title = styled.h2`
  ${h2};

  em {
    font-style: italic;
    color: var(--olive);
  }
`;

export const Desc = styled.p`
  ${lead};
  max-width: 36rem;
`;
