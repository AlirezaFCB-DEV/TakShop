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
    <section className="flex min-w-0 flex-col gap-16">
      <HomeHeader />
      <main className="flex min-w-0 flex-col gap-16">
        <HomeCategoriesSection />
        <HomeBestOffersSection />
        <HomeBestSellingSection />
        <HomePopularBrandsSection />
        <HomeNewProductsSection />
        <HomeSecondHero />
        <HomeBlogSection />
        <HomeFAQSection />
      </main>
    </section>
  );
};

export default Home;
