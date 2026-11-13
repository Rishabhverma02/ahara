"use client";

import React from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { Wrap, Inner, Copy, Crumbs, Title, Sub, Frame } from "./styled";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface PageHeroProps {
  image?: StaticImageData;
  breadcrumbs?: BreadcrumbItem[];
  title: React.ReactNode;
  subtitle?: React.ReactNode;
}

/**
 * Inner-page header. Text sits on paper; the photo is a framed band to the
 * right instead of a full-bleed background (the old version loaded a 6000px
 * JPEG as a raw CSS background on every page).
 */
export const PageHero = ({ image, breadcrumbs, title, subtitle }: PageHeroProps) => (
  <Wrap>
    <Inner $hasImage={!!image}>
      <Copy>
        {breadcrumbs && breadcrumbs.length > 0 && (
          <Crumbs aria-label="Breadcrumb">
            <ol>
              {breadcrumbs.map((c, i) => {
                const last = i === breadcrumbs.length - 1;
                return (
                  <li key={c.label}>
                    {last || !c.href ? (
                      <span aria-current={last ? "page" : undefined}>{c.label}</span>
                    ) : (
                      <Link href={c.href}>{c.label}</Link>
                    )}
                  </li>
                );
              })}
            </ol>
          </Crumbs>
        )}
        <Title>{title}</Title>
        {subtitle && <Sub>{subtitle}</Sub>}
      </Copy>
      {image && (
        <Frame>
          <Image src={image} alt="" fill priority sizes="(max-width: 900px) 100vw, 45vw" placeholder="blur" />
        </Frame>
      )}
    </Inner>
  </Wrap>
);
