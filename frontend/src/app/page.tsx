"use client";

import BestOffers from "@/components/bestOffers/BestOffers";
import HeroSection from "@/components/hero-section/hero-section";
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
          <HeroSection />
        </header>
        <main className="flex flex-col gap-16">
          <ContentSection>
            {CategoryCards.map((card, index) => (
              <CategoryCard {...card} key={index} />
            ))}
          </ContentSection>
          <BestOffers />
        </main>
      </section>
    </>
  );
};

export default Home;
