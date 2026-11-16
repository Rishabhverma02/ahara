"use client";

import React from "react";
import { CommunityWrapper, CommunityContainer, FormWrapper, Input, SubmitButton, FormNote } from "./styled";
import { SectionHeading } from "@/src/components";
import { useInView } from "@/src/hooks/useInView";
import { useNewsletter } from "@/src/hooks/useNewsletter";

export const Community = () => {
  const { ref: sectionRef, inView: isVisible } = useInView<HTMLDivElement>({ threshold: 0.1 });
  const { email, setEmail, status, error, submit } = useNewsletter();

  return (
    <CommunityWrapper id="community">
      <CommunityContainer ref={sectionRef} $animate={isVisible}>
        <SectionHeading
          title="Join Our Community"
          subHeading="Stay Connected"
          desc="Be the first to know about new superfood launches, exclusive recipes, and wellness tips from our experts."
          align="center"
        />
        <FormWrapper as="form" onSubmit={submit} noValidate>
          <label htmlFor="community-email" className="sr-only">
            Email address
          </label>
          <Input
            id="community-email"
            type="email"
            autoComplete="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={status === "error"}
            aria-describedby={status === "error" ? "community-error" : undefined}
          />
          <SubmitButton type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Joining…" : status === "done" ? "Joined ✓" : "Join Now"}
          </SubmitButton>
        </FormWrapper>
        {status === "error" && (
          <FormNote id="community-error" role="alert">
            {error}
          </FormNote>
        )}
      </CommunityContainer>
    </CommunityWrapper>
  );
};
