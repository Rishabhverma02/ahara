"use client";

import React from "react";
import {
  CommunityWrapper,
  CommunityContainer,
  FormWrapper,
  Input,
  SubmitButton,
} from "./styled";
import { SectionHeading } from "@/src/components";

export const Community = () => {
  return (
    <CommunityWrapper>
      <CommunityContainer>
        <SectionHeading 
          title="Join Our Community" 
          subHeading="Stay Connected"
          desc="Be the first to know about new superfood launches, exclusive recipes, and wellness tips from our experts."
          align="center"
        />
        <FormWrapper>
          <Input type="email" placeholder="Enter your email address" />
          <SubmitButton>Join Now</SubmitButton>
        </FormWrapper>
      </CommunityContainer>
    </CommunityWrapper>
  );
};
