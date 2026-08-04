"use client";

import Carousel from "@/components/carousel/Carousel";
import CategoryCard from "@/components/categoryCard/CategoryCard";
import { CategoryCards } from "@/components/categoryCard/categoryCardsData";
import ContentSection from "@/components/contentSection/ContentSection";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <section className="flex flex-col gap-16">
        <header>
          <Carousel />
        </header>
        <main>
          <ContentSection>
            {CategoryCards.map((card, index) => (
              <CategoryCard {...card} key={index} />
            ))}
          </ContentSection>
        </main>
      </section>
    </>
  );
};

export default Home;
