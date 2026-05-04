import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { SubHeroStrip } from "@/components/sections/sub-hero-strip";
import { Problem } from "@/components/sections/problem";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Audiences } from "@/components/sections/audiences";
import { Features } from "@/components/sections/features";
import { Pricing } from "@/components/sections/pricing";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <SubHeroStrip />
        <Problem />
        <HowItWorks />
        <Audiences />
        <Features />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
