// import fetchData from "@/utils/fetchData";
// import HeroSection from "../hero-section/hero-section";
// import { slide } from "@/types/slide-props";
/**
 * Wraps the first (page-top) hero banner.
 * Kept as its own component to keep the page orchestrator clean.
 */
const HomeHeader = async() => {

  // const slides = await fetchData("/data/json/first-hero-section.json") as slide[];
  
  // const firstSlide = slides[0];
  // const lastSlide = slides[slides.length - 1];
  
  // const loopSlides = [lastSlide, ...slides, firstSlide];

  return (
    <header className="sm:pt-18">
      {/* <HeroSection
        slides={slides}
        loopSlides={loopSlides}
      /> */}
    </header>
  );
};

export default HomeHeader;
