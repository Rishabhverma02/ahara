"use client";

import React from "react";
import { StepsTimeline, TimelineStep, TimelineDivider } from "./styled";
import { useCheckoutStatus } from "../../useCheckout";

export const Timeline = () => {
  const { step } = useCheckoutStatus();

  return (
    <StepsTimeline aria-label={`Checkout progress: step ${step} of 3`}>
      <TimelineStep $active={step === 1} $completed={step > 1}>
        <span className="circle">1</span>
        <span className="text">Details</span>
      </TimelineStep>
      <TimelineDivider $completed={step > 1} />
      <TimelineStep $active={step === 2} $completed={step > 2}>
        <span className="circle">2</span>
        <span className="text">Payment</span>
      </TimelineStep>
      <TimelineDivider $completed={step > 2} />
      <TimelineStep $active={step === 3} $completed={false}>
        <span className="circle">3</span>
        <span className="text">Receipt</span>
      </TimelineStep>
    </StepsTimeline>
  );
};
