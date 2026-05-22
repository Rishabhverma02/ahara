"use client";

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
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import Diversity1TwoToneIcon from '@mui/icons-material/Diversity1TwoTone';
import EmojiFoodBeverageTwoToneIcon from '@mui/icons-material/EmojiFoodBeverageTwoTone';
import AutoAwesomeTwoToneIcon from '@mui/icons-material/AutoAwesomeTwoTone';

export const WhyWeExist = () => {
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
      icon: <EmojiFoodBeverageTwoToneIcon/>,
      title: "Holistic Health",
      desc: "Nourishing body and mind.",
    },
  ];

  return (
    <WhyAharaWrapper>
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
