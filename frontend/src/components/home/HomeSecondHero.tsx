import HeroSection from "../hero-section/hero-section";
import { SecondHeroSectionData } from "@/data/herosection/second-herosection-data";

/**
 * Wraps the second hero banner (placed between content rows).
 * Uses the same responsive full-frame image handling as the top hero.
 */
const HomeSecondHero = () => {
  return (
    <section>
      <HeroSection
        slides={SecondHeroSectionData.slides}
        loopSlides={SecondHeroSectionData.loopSlides}
      />
    </section>
  );
};

export default HomeSecondHero;
