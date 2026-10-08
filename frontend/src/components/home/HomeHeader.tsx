import HeroSection from "../hero-section/hero-section";
import { firstHeroSectionData } from "@/data/herosection/first-herosection-data";

/**
 * Wraps the first (page-top) hero banner.
 * Kept as its own component to keep the page orchestrator clean.
 */
const HomeHeader = () => {
  return (
    <header>
      <HeroSection
        slides={firstHeroSectionData.slides}
        loopSlides={firstHeroSectionData.loopSlides}
      />
    </header>
  );
};

export default HomeHeader;
