"use client";

import Link from "next/link";
import styled, { css } from "styled-components";

type Variant = "primary" | "dark" | "outline" | "ghost" | "light";
type Size = "md" | "lg";

const base = css<{ $variant?: Variant; $size?: Size; $block?: boolean }>`
  --btn-bg: var(--olive);
  --btn-fg: #fff;
  --btn-bd: transparent;
  --btn-bg-hover: var(--olive-600);

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6em;
  width: ${({ $block }) => ($block ? "100%" : "auto")};
  padding: ${({ $size }) => ($size === "lg" ? "1.05rem 1.75rem" : "0.8rem 1.35rem")};
  border-radius: var(--radius-sm);
  border: 1px solid var(--btn-bd);
  background: var(--btn-bg);
  color: var(--btn-fg);
  font-family: var(--font-sans);
  font-size: ${({ $size }) => ($size === "lg" ? "1rem" : "0.9375rem")};
  font-weight: 600;
  letter-spacing: 0.005em;
  line-height: 1;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  transition:
    background-color 0.25s var(--ease-out),
    color 0.25s var(--ease-out),
    border-color 0.25s var(--ease-out),
    transform 0.25s var(--ease-out);

  svg {
    width: 1.1em;
    height: 1.1em;
    transition: transform 0.3s var(--ease-out);
  }

  &:hover {
    background: var(--btn-bg-hover);
  }
  &:hover svg:last-child {
    transform: translateX(3px);
  }
  &:active {
    transform: translateY(1px);
  }
  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }

  ${({ $variant }) =>
    $variant === "dark" &&
    css`
      --btn-bg: var(--forest);
      --btn-bg-hover: var(--ink);
    `}
  ${({ $variant }) =>
    $variant === "outline" &&
    css`
      --btn-bg: transparent;
      --btn-fg: var(--ink);
      --btn-bd: var(--line-strong);
      --btn-bg-hover: var(--paper-2);
    `}
  ${({ $variant }) =>
    $variant === "ghost" &&
    css`
      --btn-bg: transparent;
      --btn-fg: var(--ink);
      --btn-bg-hover: transparent;
      padding-inline: 0;
      border-radius: 0;
      text-decoration: underline;
      text-decoration-color: var(--line-strong);
      text-underline-offset: 6px;
      &:hover {
        text-decoration-color: currentColor;
      }
    `}
  ${({ $variant }) =>
    $variant === "light" &&
    css`
      --btn-bg: var(--paper);
      --btn-fg: var(--forest);
      --btn-bg-hover: #fff;
    `}
`;

export const Button = styled.button<{ $variant?: Variant; $size?: Size; $block?: boolean }>`
  ${base}
`;

export const ButtonLink = styled(Link)<{ $variant?: Variant; $size?: Size; $block?: boolean }>`
  ${base}
`;
