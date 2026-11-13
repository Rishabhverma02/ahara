"use client";

import React from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { container, display, lead, mq } from "@/src/theme";

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

const Wrap = styled.section`
  padding-top: calc(var(--header-h) + clamp(1.5rem, 4vw, 3.5rem));
  padding-bottom: clamp(2rem, 4vw, 3.5rem);
  border-bottom: 1px solid var(--line);
`;

const Inner = styled.div<{ $hasImage: boolean }>`
  ${container};
  display: grid;
  grid-template-columns: ${({ $hasImage }) => ($hasImage ? "1.1fr 0.9fr" : "1fr")};
  align-items: end;
  gap: clamp(1.5rem, 4vw, 4rem);

  ${mq.md} {
    grid-template-columns: 1fr;
  }
`;

const Copy = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding-bottom: 0.5rem;
`;

const Crumbs = styled.nav`
  ol {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    list-style: none;
    font-size: 0.8125rem;
    color: var(--muted);
  }
  li + li::before {
    content: "/";
    margin-right: 0.5rem;
    color: var(--muted-2);
  }
  a {
    text-decoration: none;
    &:hover {
      color: var(--ink);
    }
  }
  [aria-current] {
    color: var(--ink);
  }
`;

const Title = styled.h1`
  ${display};
  font-size: clamp(2.5rem, 1.8rem + 3.4vw, 4.75rem);

  em {
    font-style: italic;
    color: var(--olive);
  }
`;

const Sub = styled.p`
  ${lead};
  max-width: 34rem;
`;

const Frame = styled.div`
  position: relative;
  aspect-ratio: 16 / 10;
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: var(--paper-2);

  img {
    object-fit: cover;
  }

  ${mq.md} {
    aspect-ratio: 21 / 9;
  }
`;
