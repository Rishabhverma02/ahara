"use client";

import { AutoAwesomeTwoToneIcon } from "@/src/components/ui/MaterialIcons";
import React from "react";
import { useRouter } from "next/navigation";
import { playClick } from "@/src/lib/sound";
import {
  EmptyStateWrapper,
  FloatingTag,
  Badge,
  EmptyIconWrapper,
  EmptyTextGroup,
  ShopNowBtn,
} from "./styled";

export interface FloatingTagItem {
  text: string;
  delay: string;
  style: React.CSSProperties;
}

export interface EmptyStateProps {
  icon: React.ReactNode;
  badgeText: string;
  title: string;
  description: string;
  btnText: string;
  btnHref?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  floatingTags?: FloatingTagItem[];
}

const defaultTags: FloatingTagItem[] = [
  { text: "🍿 Makhana Crunch", delay: "0s", style: { top: "12%", left: "-30px" } as React.CSSProperties },
  { text: "💪 Sattu Power", delay: "1.5s", style: { bottom: "24%", left: "-35px" } as React.CSSProperties },
  { text: "🌿 Pure Moringa", delay: "0.7s", style: { top: "30%", right: "-45px" } as React.CSSProperties },
];

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  badgeText,
  title,
  description,
  btnText,
  btnHref = "/shop",
  onClick,
  floatingTags = defaultTags,
}) => {
  const router = useRouter();

  const handleButtonClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    playClick();

    if (onClick) {
      onClick(e);
    }

    // Delay navigation slightly so the click sound is heard immediately on click
    setTimeout(() => {
      router.push(btnHref);
    }, 165);
  };

  return (
    <EmptyStateWrapper>
      {floatingTags.map((tag, idx) => (
        <FloatingTag key={idx} $delay={tag.delay} style={tag.style}>
          {tag.text}
        </FloatingTag>
      ))}

      <EmptyIconWrapper>
        <div className="icon-pulse-ring" />
        {icon}
        <AutoAwesomeTwoToneIcon className="sparkle-1" sx={{ fontSize: 16 }} />
        <AutoAwesomeTwoToneIcon className="sparkle-2" sx={{ fontSize: 12 }} />
      </EmptyIconWrapper>

      <EmptyTextGroup>
        <Badge>{badgeText}</Badge>
        <h2>{title}</h2>
        <p>{description}</p>
      </EmptyTextGroup>

      <ShopNowBtn href={btnHref} onClick={handleButtonClick}>
        <span>{btnText}</span>
        <AutoAwesomeTwoToneIcon sx={{ fontSize: 16 }} />
      </ShopNowBtn>
    </EmptyStateWrapper>
  );
};
