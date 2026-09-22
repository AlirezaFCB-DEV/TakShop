"use client";

import BestOffers from "@/components/bestOffers/BestOffers";
import HeroSection from "@/components/hero-section/hero-section";
import CategoryCard from "@/components/categoryCard/CategoryCard";
import { CategoryCards } from "@/components/categoryCard/categoryCardsData";
import ContentSection from "@/components/contentSection/ContentSection";
import { BestSellingProducts } from "@/data/best-offers/best-selling-products-data";
import ProductCard from "@/components/productCard/ProductCard";
import { brands } from "@/data/brands-data";
import PopularBrand from "@/components/brand/brand";
import { newProducts } from "@/data/new-products-data";
import { firstHeroSectionData } from "@/data/herosection/first-herosection-data";
import { SecondHeroSectionData } from "@/data/herosection/second-herosection-data";
import { posts } from "@/data/posts-data";
import Post from "@/components/post/post";
import { FaCircle } from "react-icons/fa";
import PrimaryButton from "@/components/PrimaryButton";
import Link from "next/link";
import FAQ from "@/components/faq/faq";
import { FAQCategories } from "@/data/FAQ/FAQ-category-data";
import { useEffect, useState } from "react";
import { FAQCategoryTitle } from "@/types/FAQ/faq-category-props";
import { FAQItemProps } from "@/types/FAQ/faq-props";
import { FAQItems } from "@/data/FAQ/FAQ-items-data";

const Home = () => {
  const [currentCategory, setCurrentCategory] = useState<FAQCategoryTitle>(
    "سوالات مربوط به تک شاپ",
  );

  const [FAQs, setFAQs] = useState<FAQItemProps[] | null>(null);

  useEffect(() => {
    const update = () => {
      const currentFAQs: FAQItemProps[] = FAQItems.filter(
        (item) => item.category === currentCategory,
      );

      setFAQs(currentFAQs);
    };

    update();
  }, [currentCategory]);

  return (
    <>
      <section className="flex flex-col gap-16">
        <header>
          <HeroSection
            slides={firstHeroSectionData.slides}
            loopSlides={firstHeroSectionData.loopSlides}
          />
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
          <HeroSection
            slides={SecondHeroSectionData.slides}
            loopSlides={SecondHeroSectionData.loopSlides}
          />

          <ContentSection
            title="بلاگ پست"
            description="در این قسمت شما میتوانید اخبار و مقالات تک شاپ را مشاهده بکنید"
            carousel={true}
            viewAllLinkHref="/posts"
          >
            {posts.map((post) => (
              <Post {...post} key={post.title} />
            ))}
          </ContentSection>

          <ContentSection
            title="سوالات متداول"
            description="در این قسمت شما میتوانید سوالات متداول را به صورت دسته بندی شده مشاهده کنید"
          >
            <section className="w-full h-full flex justify-between gap-12">
              <section className="flex-2 flex flex-col gap-9 dark:text-white">
                <p className="">
                  در این قسمت شما میتوانید سوالات متداول را به صورت دسته بندی
                  شده مشاهده بکنید. هدف ما این است که شما را به بهترین نحو
                  راهنمایی کنیم.
                </p>
                <ul className="flex flex-col gap-2n;kj">
                  {FAQCategories.map((category) => (
                    <li
                      className={`flex gap-2 desktop-heading3 items-center hover:text-main-500 cursor-pointer transition-colors ${currentCategory === category.title ? "text-main-500" : ""}`}
                      key={category.id}
                      onClick={() => setCurrentCategory(category.title)}
                    >
                      <FaCircle />
                      {category.title}
                    </li>
                  ))}
                </ul>
                <Link href={"/contact-us"}>
                  <PrimaryButton>تماس با پشتیبانی</PrimaryButton>
                </Link>
              </section>
              <section className="flex-5 flex flex-col gap-4">
                {FAQs &&
                  FAQs.map((faq) => (
                    <FAQ
                      key={faq.id}
                      title={faq.title}
                      description={faq.description}
                    />
                  ))}
              </section>
            </section>
          </ContentSection>
        </main>
      </section>
    </>
  );
};

export default Home;
