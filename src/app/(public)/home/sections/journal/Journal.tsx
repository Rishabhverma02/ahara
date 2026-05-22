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
import journal_1 from "@/src/assets/images/section-images/Moringa2.webp";
import journal_2 from "@/src/assets/images/section-images//makahannn.webp";

const posts = [
  {
    title: "Ancient Superfoods to Boost Your Immunity",
    date: "Jan 20, 2023",
    readTime: "6 min read",
    category: "Nutrition",
    featured: true,
    image: journal_1.src,
  },
  {
    title: "The Art of Mindful Snacking: Tips from Experts",
    date: "May 05, 2024",
    readTime: "5 min read",
    category: "Wellness",
    featured: false,
    image: journal_2.src,
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

  return (
    <JournalWrapper>
      <JournalContainer ref={sectionRef} $animate={isVisible}>
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
                <ReadMoreLink
                  href={"https://pmc.ncbi.nlm.nih.gov/articles/PMC9916933/"}
                  className="read-more-btn"
                >
                  Read Article
                </ReadMoreLink>
              </BlogContent>
            </BlogImageWrapper>
          </FeaturedCard>

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
                  <ReadMoreLink
                    href="https://www.apollo247.com/blog/article/makhana-benefits-traditional-superfood-and-a-healthy-snacking-alternative"
                    className="read-more-btn"
                  >
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
