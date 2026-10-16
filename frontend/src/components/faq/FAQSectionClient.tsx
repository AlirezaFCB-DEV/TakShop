"use client";

import { FAQItems } from "@/data/FAQ/FAQ-items-data";
import { FAQItemProps } from "@/types/FAQ/faq-props";
import { useEffect, useState } from "react";
import FAQCategorySection from "./faq-category";
import FAQ from "./faq";
import {
  FAQCategoryProps,
  FAQCategoryTitle,
} from "@/types/FAQ/faq-category-props";

interface FAQSectionClientProps {
  categories: FAQCategoryProps[];
  faqs: FAQItemProps[];
}

const FAQSectionClient = ({ categories, faqs }: FAQSectionClientProps) => {
  const [currentCategory, setCurrentCategory] = useState<FAQCategoryTitle>(
    "سوالات مربوط به تک شاپ",
  );

  const filteredFAQs: FAQItemProps[] = faqs.filter(
    (item) => item.category === currentCategory,
  );

  return (
    <section className="w-full h-full flex flex-col lg:flex-row justify-between gap-8 lg:gap-12">
      <FAQCategorySection
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      />
      <section className="lg:flex-5 flex flex-col gap-4">
        {filteredFAQs &&
          filteredFAQs.map((faq) => (
            <FAQ key={faq.id} title={faq.title} description={faq.description} />
          ))}
      </section>
    </section>
  );
};

export default FAQSectionClient;
