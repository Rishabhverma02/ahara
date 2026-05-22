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
  const [isVisible, setIsVisible] = React.useState(false);
  const sectionRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const currentElement = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (currentElement) {
            observer.unobserve(currentElement);
          }
        }
      },
      { threshold: 0.1 }
    );
    if (currentElement) {
      observer.observe(currentElement);
    }
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <CommunityWrapper>
      <CommunityContainer ref={sectionRef} $animate={isVisible}>
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
