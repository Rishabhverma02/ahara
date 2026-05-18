"use client";

import {
  WhyAharaWrapper,
  WhyAharaContainer,
  FeatureGrid,
  FeatureItem,
  IconCircle,
  FeatureHeading,
  FeatureDesc,
} from "./styled";
import {
  HiOutlineHeart,
  HiOutlineSparkles,
  HiOutlineShieldCheck,
  HiOutlineSun,
} from "react-icons/hi2";
import { SectionHeading } from "@/src/components";

export const WhyWeExist = () => {
  const features = [
    {
      icon: <HiOutlineHeart />,
      title: "Clean Label",
      desc: "No hidden chemicals or artificial preservatives. Just pure goodness.",
    },
    {
      icon: <HiOutlineSparkles />,
      title: "Ancient Wisdom",
      desc: "Rooted in time-tested Ayurvedic principles for modern health.",
    },
    {
      icon: <HiOutlineShieldCheck />,
      title: "High Quality",
      desc: "Sourced from the best farms with rigorous quality standards.",
    },
    {
      icon: <HiOutlineSun />,
      title: "Holistic Health",
      desc: "Designed to nourish both your body and your mind.",
    },
  ];

  return (
    <WhyAharaWrapper>
      <WhyAharaContainer>
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
