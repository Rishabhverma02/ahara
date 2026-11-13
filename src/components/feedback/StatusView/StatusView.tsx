"use client";

import { ArrowRight, RotateCcw } from "lucide-react";
import { Button, ButtonLink, Mascot } from "@/src/components/ui";
import { Wrap, Code, Title, Body, Actions, Bar } from "./styled";

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

/* ---------- route loading ---------- */
/** Thin progress bar shown during client-side route transitions. */
export const RouteLoading = () => (
  <Bar role="progressbar" aria-label="Loading page">
    <span />
  </Bar>
);
