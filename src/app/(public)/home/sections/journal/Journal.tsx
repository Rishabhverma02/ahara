"use client";

import React from "react";
import {
  JournalWrapper,
  JournalContainer,
  SectionHeader,
  ViewAllLink,
  BlogGrid,
  BlogCard,
  BlogImage,
  BlogMeta,
  BlogTitle,
  ReadMoreLink,
} from "./styled";
import { SectionHeading } from "@/src/components";

const posts = [
  {
    title: "5 Ancient Superfoods to Boost Your Immunity",
    date: "May 10, 2024",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "The Art of Mindful Snacking: Tips from Experts",
    date: "May 05, 2024",
    image:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Why Traditional Indian Wisdom is the Future of Wellness",
    date: "April 28, 2024",
    image:
      "https://images.unsplash.com/photo-1502489597346-dad15683d4c2?q=80&w=600&auto=format&fit=crop",
  },
];

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
          <ViewAllLink href="/journal">View All Journal</ViewAllLink>
        </SectionHeader>

        <BlogGrid>
          {posts.map((post, index) => (
            <BlogCard key={index}>
              <BlogImage
                style={{
                  backgroundImage: `url(${post.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <BlogMeta>
                <span>JOURNAL</span>
                <span>•</span>
                <span>{post.date}</span>
              </BlogMeta>
              <BlogTitle>{post.title}</BlogTitle>
              <ReadMoreLink href="/journal/post-slug">Read More</ReadMoreLink>
            </BlogCard>
          ))}
        </BlogGrid>
      </JournalContainer>
    </JournalWrapper>
  );
};
