import HomeHeader from "@/components/home/HomeHeader";
import HomeSecondHero from "@/components/home/HomeSecondHero";
import HomeCategoriesSection from "@/components/home/HomeCategoriesSection";
import HomeBestOffersSection from "@/components/home/HomeBestOffersSection";
import HomeBestSellingSection from "@/components/home/HomeBestSellingSection";
import HomePopularBrandsSection from "@/components/home/HomePopularBrandsSection";
import HomeNewProductsSection from "@/components/home/HomeNewProductsSection";
import HomeBlogSection from "@/components/home/HomeBlogSection";
import HomeFAQSection from "@/components/home/HomeFAQSection";

const Home = () => {
  return (
    <main className="home-page">
      <HomeHeader />
      <section className="home-content">
        <HomeCategoriesSection />
        <HomeBestOffersSection />
        <HomeBestSellingSection />
        <HomePopularBrandsSection />
        <HomeNewProductsSection />
      </section>
      <HomeSecondHero />
      <section className="home-content">
        <HomeBlogSection />
        <HomeFAQSection />
      </section>
    </main>
  );
};

export default Home;
