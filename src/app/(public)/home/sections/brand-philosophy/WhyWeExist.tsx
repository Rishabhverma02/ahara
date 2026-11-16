"use client";

import {
  FavoriteTwoToneIcon,
  Diversity1TwoToneIcon,
  EmojiFoodBeverageTwoToneIcon,
  AutoAwesomeTwoToneIcon,
} from "@/src/components/ui/MaterialIcons";
import React from "react";
import {
  WhyAharaWrapper,
  WhyAharaContainer,
  FeatureGrid,
  FeatureItem,
  IconCircle,
  FeatureHeading,
  FeatureDesc,
} from "./styled";

import { SectionHeading } from "@/src/components";
import { useInView } from "@/src/hooks/useInView";

export const WhyWeExist = () => {
  const { ref: sectionRef, inView: isVisible } = useInView<HTMLDivElement>({ threshold: 0.1 });

  const features = [
    {
      icon: <FavoriteTwoToneIcon />,
      title: "Clean Label",
      desc: "100% pure & additive-free.",
    },
    {
      icon: <Diversity1TwoToneIcon />,
      title: "Ancient Wisdom",
      desc: "Time-tested Ayurvedic principles.",
    },
    {
      icon: <AutoAwesomeTwoToneIcon />,
      title: "High Quality",
      desc: "Sourced from premier farms.",
    },
    {
      icon: <EmojiFoodBeverageTwoToneIcon />,
      title: "Holistic Health",
      desc: "Nourishing body and mind.",
    },
  ];

  return (
    <WhyAharaWrapper id="about">
      <WhyAharaContainer ref={sectionRef} $animate={isVisible}>
        <SectionHeading subHeading="Why AHAARA" align="center" />
        <FeatureGrid>
          {features.map((item, index) => (
            <FeatureItem key={index}>
              <IconCircle>{item.icon}</IconCircle>
              <FeatureHeading>{item.title}</FeatureHeading>
              <FeatureDesc>{item.desc}</FeatureDesc>
            </FeatureItem>
          ))}
        </FeatureGrid>
      </WhyAharaContainer>
    </WhyAharaWrapper>
  );
};
