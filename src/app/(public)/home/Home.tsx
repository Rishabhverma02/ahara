import {
  AncientIngredients,
  BestSellers,
  Community,
  FeaturedSection,
  Hero,
  Journal,
  Testimonials,
  TrustBar,
  WhyWeExist,
} from "./sections";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <BestSellers />
      <AncientIngredients />
      <WhyWeExist />
      <FeaturedSection />
      <Testimonials />
      <Journal />
      <Community />
    </>
  );
}
