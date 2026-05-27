import React from "react";
import {
  HeroWrapper,
  HeroBreadcrumb,
  BreadcrumbLink,
  BreadcrumbSep,
  BreadcrumbCurrent,
  HeroTitle,
  HeroSubtitle,
} from "./styled";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface PageHeroProps {
  bg?: string;
  breadcrumbs?: BreadcrumbItem[];
  title: React.ReactNode;
  subtitle?: React.ReactNode;
}

export const PageHero: React.FC<PageHeroProps> = ({
  bg,
  breadcrumbs,
  title,
  subtitle,
}) => {
  return (
    <HeroWrapper $bg={bg}>
      {breadcrumbs && breadcrumbs.length > 0 && (
        <HeroBreadcrumb>
          {breadcrumbs.map((crumb, idx) => {
            const isLast = idx === breadcrumbs.length - 1;
            if (isLast) {
              return (
                <React.Fragment key={crumb.label}>
                  {idx > 0 && <BreadcrumbSep>›</BreadcrumbSep>}
                  <BreadcrumbCurrent>{crumb.label}</BreadcrumbCurrent>
                </React.Fragment>
              );
            }
            return (
              <React.Fragment key={crumb.label}>
                {idx > 0 && <BreadcrumbSep>›</BreadcrumbSep>}
                <BreadcrumbLink href={crumb.href || "/"}>
                  {crumb.label}
                </BreadcrumbLink>
              </React.Fragment>
            );
          })}
        </HeroBreadcrumb>
      )}
      <HeroTitle>{title}</HeroTitle>
      {subtitle && <HeroSubtitle>{subtitle}</HeroSubtitle>}
    </HeroWrapper>
  );
};
