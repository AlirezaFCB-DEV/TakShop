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
import { brands } from "@/data/brands-data";
import PopularBrand from "@/components/brand/brand";
import { newProducts } from "@/data/new-products-data";

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
            viewAllLinkHref={"/best-selling-products"}
          >
            {BestSellingProducts.map((product, index) => (
              <ProductCard {...product} key={index} />
            ))}
          </ContentSection>
          <ContentSection
            title="برند های محبوب"
            description="در این قسمت شما میتوانید برند های محبوب را که بیشترین فروش را دارن مشاهده بکنید"
            carousel
            viewAllLinkHref={"/popular-brands"}
          >
            {brands.map((brand) => (
              <PopularBrand
                src={brand.image}
                alt={brand.name}
                key={brand.name}
              />
            ))}
          </ContentSection>

          <ContentSection
            title="محصولات تازه"
            description="در این قسمت شما میتوانید محصولاتی را که جدیدا به سایت اضافه شده اند را مشاهده بکنید"
            carousel={true}
            viewAllLinkHref={"/new-products"}
          >
            {newProducts.map((product) => (
              <ProductCard {...product} key={product.title} />
            ))}
          </ContentSection>
        </main>
      </section>
    </>
  );
};

export default Home;
