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
import { InteractiveCharacter } from "@/src/components";

export default function Home() {
  return (
    <>
      <InteractiveCharacter />
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
