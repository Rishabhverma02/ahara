import {
  BestSellers,
  Community,
  Featured,
  Hero,
  Ingredients,
  Journal,
  Kairo,
  Marquee,
  Story,
  Testimonials,
} from "./sections";

/**
 * Page rhythm: each "attraction point" gets one deliberate home —
 * constellation (Hero) → one ticker (Marquee) → products → editorial ingredients
 * → manifesto → full-bleed feature → reviews → Kairo's live chat → journal →
 * Kairo peeking over the newsletter.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <BestSellers />
      <Ingredients />
      <Story />
      <Featured />
      <Testimonials />
      <Kairo />
      <Journal />
      <Community />
    </>
  );
}
