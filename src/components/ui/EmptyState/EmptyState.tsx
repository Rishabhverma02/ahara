"use client";

import styled from "styled-components";
import { ArrowRight } from "lucide-react";
import { h3 } from "@/src/theme";
import { ButtonLink } from "../Button";
import { Mascot, type MascotPose } from "../Mascot";

export interface EmptyStateProps {
  pose?: MascotPose;
  kicker?: string;
  title: string;
  description: string;
  btnText: string;
  btnHref?: string;
}

/**
 * Empty states are where Kairo earns his keep — a moment of personality where
 * the page would otherwise be blank. Replaces the pulse rings, sparkles and
 * three emoji pills.
 */
export const EmptyState = ({
  pose = "parachute",
  kicker,
  title,
  description,
  btnText,
  btnHref = "/shop",
}: EmptyStateProps) => (
  <Wrap>
    <Mascot pose={pose} width={pose === "parachute" ? 150 : 120} motion={pose === "parachute" ? "sway" : "bob"} />
    <Text>
      {kicker && <Kicker>{kicker}</Kicker>}
      <h2>{title}</h2>
      <p>{description}</p>
    </Text>
    <ButtonLink href={btnHref} $size="lg">
      {btnText} <ArrowRight aria-hidden />
    </ButtonLink>
  </Wrap>
);

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.75rem;
  padding: clamp(2.5rem, 6vw, 4.5rem) 1.5rem;
  border: 1px dashed var(--line-strong);
  border-radius: var(--radius-lg);
  background: var(--surface);
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  max-width: 28rem;

  h2 {
    ${h3};
    font-size: clamp(1.5rem, 1.2rem + 1vw, 2rem);
  }
  p {
    color: var(--muted);
  }
`;

const Kicker = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--olive);
`;
