"use client";

import { ArrowRight } from "lucide-react";
import { ButtonLink, Mascot } from "@/src/components/ui";
import { Wrap } from "./styled";

/** Placeholder for features that need external setup (e.g. accounts). */
export const ComingSoon = ({ title, body }: { title: string; body: string }) => (
  <Wrap>
    <Mascot pose="threeQuarter" width={130} motion="bob" />
    <span>Coming soon</span>
    <h1>{title}</h1>
    <p>{body}</p>
    <ButtonLink href="/shop" $size="lg">
      Continue shopping <ArrowRight aria-hidden />
    </ButtonLink>
  </Wrap>
);
