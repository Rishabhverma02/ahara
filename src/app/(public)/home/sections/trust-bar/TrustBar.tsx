"use client";

import React from "react";
import { TrustBarWrapper, TrustBarContainer, TrustItem } from "./styled";
import { HiOutlineBadgeCheck, HiOutlineTruck, HiOutlineShieldCheck, HiOutlineSparkles, HiOutlineGlobeAlt } from "react-icons/hi";

export const TrustBar = () => {
  const items = [
    { icon: <HiOutlineBadgeCheck />, text: "Authentic Ingredients" },
    { icon: <HiOutlineTruck />, text: "Fast Delivery" },
    { icon: <HiOutlineShieldCheck />, text: "Safe Payments" },
    { icon: <HiOutlineSparkles />, text: "Modern Wellness" },
    { icon: <HiOutlineGlobeAlt />, text: "Sustainable Sourcing" },
  ];

  return (
    <TrustBarWrapper>
      <TrustBarContainer>
        {items.map((item, index) => (
          <TrustItem key={index}>
            {item.icon}
            <span>{item.text}</span>
          </TrustItem>
        ))}
      </TrustBarContainer>
    </TrustBarWrapper>
  );
};
