"use client";

import { ArrowRight } from "lucide-react";
import { ButtonLink } from "../Button";
import { Mascot, type MascotPose } from "../Mascot";
import { Wrap, Text, Kicker } from "./styled";

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
    <Mascot
      pose={pose}
      width={pose === "parachute" ? 150 : 120}
      motion={pose === "parachute" ? "sway" : "bob"}
    />
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
