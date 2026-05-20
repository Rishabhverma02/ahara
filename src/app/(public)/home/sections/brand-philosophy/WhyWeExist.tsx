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

import { SectionHeading } from "@/src/components";
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import Diversity1TwoToneIcon from '@mui/icons-material/Diversity1TwoTone';
import EmojiFoodBeverageTwoToneIcon from '@mui/icons-material/EmojiFoodBeverageTwoTone';
import AutoAwesomeTwoToneIcon from '@mui/icons-material/AutoAwesomeTwoTone';

export const WhyWeExist = () => {
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
