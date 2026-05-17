"use client";

import React from "react";
import {
  TestimonialsWrapper,
  TestimonialsContainer,
  TestimonialGrid,
  TestimonialCard,
  StarRating,
  Quote,
  CustomerInfo,
  CustomerAvatar,
  CustomerDetails,
  CustomerName,
  CustomerRole,
} from "./styled";
import { HiStar } from "react-icons/hi";
import { SectionHeading } from "@/src/components";

const testimonials = [
  {
    name: "Aditi Sharma",
    role: "Yoga Instructor",
    quote:
      "The Roasted Makhana is my absolute favorite snack after a long yoga session. It's light, crunchy, and healthy!",
    rating: 5,
  },
  {
    name: "Rahul Mehra",
    role: "Fitness Enthusiast",
    quote:
      "Finally, a brand that cares about both taste and nutrition. The Granola is a game changer for my breakfasts.",
    rating: 5,
  },
  {
    name: "Sneha Kapoor",
    role: "Nutritionist",
    quote:
      "I highly recommend Ahara products to all my clients looking for clean-label, ancient superfood options.",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <TestimonialsWrapper>
      <TestimonialsContainer>
        <SectionHeading 
          title="Customer Stories" 
          subHeading="Loved by You"
          desc="Real experiences from people who have embraced the Ahara lifestyle."
          align="center"
        />
        <TestimonialGrid>
          {testimonials.map((t, index) => (
            <TestimonialCard key={index}>
              <StarRating>
                {[...Array(5)].map((_, i) => (
                  <HiStar key={i} />
                ))}
              </StarRating>
              <Quote>&ldquo;{t.quote}&rdquo;</Quote>
              <CustomerInfo>
                <CustomerAvatar />
                <CustomerDetails>
                  <CustomerName>{t.name}</CustomerName>
                  <CustomerRole>{t.role}</CustomerRole>
                </CustomerDetails>
              </CustomerInfo>
            </TestimonialCard>
          ))}
        </TestimonialGrid>
      </TestimonialsContainer>
    </TestimonialsWrapper>
  );
};
