"use client";

import BestOffers from "@/components/bestOffers/BestOffers";
import HeroSection from "@/components/hero-section/hero-section";
import CategoryCard from "@/components/categoryCard/CategoryCard";
import { CategoryCards } from "@/components/categoryCard/categoryCardsData";
import ContentSection from "@/components/contentSection/ContentSection";
import Link from "next/link";
import { BestSellingProducts } from "@/data/best-offers/best-selling-products-data";
import ProductCard from "@/components/productCard/ProductCard";
import { FaChevronLeft } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <section className="flex flex-col gap-16">
        <header>
          <HeroSection />
        </header>
        <main className="flex flex-col gap-16">
          <ContentSection
            title="دسته بندی محصولات"
            description="در این قسمت شما میتوانید محصولات مارا به صورت دسته بندی مشاهده کنید"
          >
            {CategoryCards.map((card, index) => (
              <CategoryCard {...card} key={index} />
            ))}
          </ContentSection>
          <BestOffers />
          <ContentSection
            title="محصولات پرفروش"
            description="در این قسمت شما میتوانید محصولات پر فروش تک شاپ را در طول هفته گذشته مشاهده بکنید"
            carousel={true}
          >
            {BestSellingProducts.map((product, index) => (
              <ProductCard {...product} key={index} />
            ))}
            <Link
              href={"/best-selling-products"}
              className="min-w-60 group hover:text-main-500 text-nowrap flex items-center justify-center gap-2 text-xl dark:text-white"
            >
              <span>مشاهده همه </span>
              <section className="flex items-center">
                <section className="w-0 group-hover:w-4 transition-all h-1.5 rounded-3xl bg-white dark:bg-dark-6 group-hover:bg-main-500"></section>
                <FaChevronLeft className="text-2xl bg-transparent" />
              </section>
            </Link>
          </ContentSection>
        </main>
      </section>
    </>
  );
};

export default Home;
