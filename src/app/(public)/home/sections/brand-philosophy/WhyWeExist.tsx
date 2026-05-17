"use client";

import React from 'react';
import { 
  WhyAharaWrapper, 
  WhyAharaContainer, 
  SectionTitle, 
  FeatureGrid, 
  FeatureItem, 
  IconCircle, 
  FeatureHeading, 
  FeatureDesc 
} from './styled';
import { HiOutlineHeart, HiOutlineSparkles, HiOutlineShieldCheck, HiOutlineSun, HiOutlineCheckBadge } from 'react-icons/hi2';

export const WhyWeExist = () => {
  const features = [
    {
      icon: <HiOutlineHeart />,
      title: "Clean Label",
      desc: "No hidden chemicals or artificial preservatives. Just pure goodness."
    },
    {
      icon: <HiOutlineSparkles />,
      title: "Ancient Wisdom",
      desc: "Rooted in time-tested Ayurvedic principles for modern health."
    },
    {
      icon: <HiOutlineShieldCheck />,
      title: "High Quality",
      desc: "Sourced from the best farms with rigorous quality standards."
    },
    {
      icon: <HiOutlineSun />,
      title: "Holistic Health",
      desc: "Designed to nourish both your body and your mind."
    },
    {
      icon: <HiOutlineCheckBadge />,
      title: "Trustworthy",
      desc: "Transparent sourcing and honest communication always."
    }
  ];

  return (
    <WhyAharaWrapper>
      <WhyAharaContainer>
        <SectionTitle>Why AHAARA</SectionTitle>
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
