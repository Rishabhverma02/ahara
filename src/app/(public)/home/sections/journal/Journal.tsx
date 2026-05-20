"use client";

import React from "react";
import {
  JournalWrapper,
  JournalContainer,
  SectionHeader,
  ViewAllLink,
  BlogGrid,
  FeaturedCard,
  SecondaryCard,
  BlogImageWrapper,
  BlogImage,
  BlogOverlay,
  BlogContent,
  BlogMeta,
  BlogMetaDot,
  BlogTag,
  BlogTitle,
  ReadMoreLink,
} from "./styled";
import { SectionHeading } from "@/src/components";

const posts = [
  {
    title: "5 Ancient Superfoods to Boost Your Immunity",
    date: "May 10, 2024",
    readTime: "6 min read",
    category: "Nutrition",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "The Art of Mindful Snacking: Tips from Experts",
    date: "May 05, 2024",
    readTime: "4 min read",
    category: "Wellness",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=700&auto=format&fit=crop",
  },
  {
    title: "Why Traditional Indian Wisdom is the Future of Wellness",
    date: "April 28, 2024",
    readTime: "5 min read",
    category: "Lifestyle",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=700&auto=format&fit=crop",
  },
];

const [featured, ...secondary] = posts;

export const Journal = () => {
  return (
    <JournalWrapper>
      <JournalContainer>
        <SectionHeader>
          <SectionHeading
            title="The Journal"
            subHeading="Insights & Wisdom"
            desc="Explore the science of ancient superfoods and modern wellness."
            align="left"
          />
          <ViewAllLink href="/journal">View All Journal →</ViewAllLink>
        </SectionHeader>

        <BlogGrid>
          {/* Featured large card */}
          <FeaturedCard>
            <BlogImageWrapper>
              <BlogImage
                className="blog-image"
                style={{
                  backgroundImage: `url(${featured.image})`,
                }}
              />
              <BlogOverlay />
              <BlogContent>
                <BlogMeta>
                  <BlogTag>{featured.category}</BlogTag>
                  <BlogMetaDot />
                  <span>{featured.date}</span>
                  <BlogMetaDot />
                  <span>{featured.readTime}</span>
                </BlogMeta>
                <BlogTitle>{featured.title}</BlogTitle>
                <ReadMoreLink href="/journal/post-slug" className="read-more-btn">
                  Read Article
                </ReadMoreLink>
              </BlogContent>
            </BlogImageWrapper>
          </FeaturedCard>

          {/* Two stacked secondary cards */}
          {secondary.map((post, index) => (
            <SecondaryCard key={index}>
              <BlogImageWrapper>
                <BlogImage
                  className="blog-image"
                  style={{
                    backgroundImage: `url(${post.image})`,
                  }}
                />
                <BlogOverlay />
                <BlogContent>
                  <BlogMeta>
                    <BlogTag>{post.category}</BlogTag>
                    <BlogMetaDot />
                    <span>{post.date}</span>
                    <BlogMetaDot />
                    <span>{post.readTime}</span>
                  </BlogMeta>
                  <BlogTitle>{post.title}</BlogTitle>
                  <ReadMoreLink href="/journal/post-slug" className="read-more-btn">
                    Read Article
                  </ReadMoreLink>
                </BlogContent>
              </BlogImageWrapper>
            </SecondaryCard>
          ))}
        </BlogGrid>
      </JournalContainer>
    </JournalWrapper>
  );
};
