"use client";

import styled, { keyframes } from "styled-components";
import { ArrowRight, RotateCcw } from "lucide-react";
import { Button, ButtonLink, Mascot } from "@/src/components/ui";
import { container, display } from "@/src/theme";

/** Shared layout for 404 / error screens — Kairo keeps them on-brand. */
function StatusView({
  code,
  title,
  body,
  actions,
  pose,
}: {
  code: string;
  title: React.ReactNode;
  body: string;
  actions: React.ReactNode;
  pose: "back" | "sideLeft" | "threeQuarter";
}) {
  return (
    <Wrap>
      <Mascot pose={pose} width={150} motion="bob" />
      <Code>{code}</Code>
      <Title>{title}</Title>
      <Body>{body}</Body>
      <Actions>{actions}</Actions>
    </Wrap>
  );
}

export const NotFoundView = () => (
  <StatusView
    pose="back"
    code="404"
    title={
      <>
        Kairo wandered off <em>this path.</em>
      </>
    }
    body="The page you're looking for doesn't exist or has moved."
    actions={
      <>
        <ButtonLink href="/shop" $size="lg">
          Browse the shop <ArrowRight aria-hidden />
        </ButtonLink>
        <ButtonLink href="/" $variant="ghost" $size="lg">
          Go home
        </ButtonLink>
      </>
    }
  />
);

export const ErrorView = ({ reset }: { reset: () => void }) => (
  <StatusView
    pose="sideLeft"
    code="Something went wrong"
    title={
      <>
        That didn&rsquo;t go <em>as planned.</em>
      </>
    }
    body="An unexpected error stopped this page from loading. Your cart is safe — try again in a moment."
    actions={
      <>
        <Button type="button" $size="lg" onClick={reset}>
          <RotateCcw aria-hidden /> Try again
        </Button>
        <ButtonLink href="/" $variant="ghost" $size="lg">
          Go home
        </ButtonLink>
      </>
    }
  />
);

const Wrap = styled.section`
  ${container};
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: calc(var(--header-h) + 3rem) 0 5rem;
  text-align: center;
`;

const Code = styled.p`
  margin-top: 1rem;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--olive);
`;

const Title = styled.h1`
  ${display};
  font-size: clamp(2.25rem, 1.6rem + 2.6vw, 3.75rem);

  em {
    font-style: italic;
    color: var(--olive);
  }
`;

const Body = styled.p`
  max-width: 34rem;
  color: var(--ink-2);
  font-size: 1.0625rem;
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1rem;
`;

/* ---------- route loading ---------- */
const shimmer = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(250%); }
`;

/** Thin progress bar shown during client-side route transitions. */
export const RouteLoading = () => (
  <Bar role="progressbar" aria-label="Loading page">
    <span />
  </Bar>
);

const Bar = styled.div`
  position: fixed;
  inset: 0 0 auto;
  z-index: 500;
  height: 3px;
  overflow: hidden;
  background: rgb(var(--olive-rgb) / 0.15);

  span {
    display: block;
    width: 40%;
    height: 100%;
    background: var(--olive);
    animation: ${shimmer} 1s var(--ease-out) infinite;
  }
`;
