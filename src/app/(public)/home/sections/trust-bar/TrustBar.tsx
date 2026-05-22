"use client";

import React from "react";
import { TrustBarWrapper, TrustBarContainer, TrustItem } from "./styled";
import { HiOutlineBadgeCheck, HiOutlineTruck, HiOutlineShieldCheck, HiOutlineSparkles, HiOutlineGlobeAlt } from "react-icons/hi";

export const TrustBar = () => {
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

  const items = [
    { icon: <HiOutlineBadgeCheck />, text: "Authentic Ingredients" },
    { icon: <HiOutlineTruck />, text: "Fast Delivery" },
    { icon: <HiOutlineShieldCheck />, text: "Safe Payments" },
    { icon: <HiOutlineSparkles />, text: "Modern Wellness" },
    { icon: <HiOutlineGlobeAlt />, text: "Sustainable Sourcing" },
  ];

  return (
    <TrustBarWrapper>
      <TrustBarContainer ref={sectionRef} $animate={isVisible}>
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
