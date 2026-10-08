"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaCircle } from "react-icons/fa";
import PrimaryButton from "@/components/PrimaryButton";
import FAQ from "@/components/faq/faq";
import { FAQCategories } from "@/data/FAQ/FAQ-category-data";
import { FAQItems } from "@/data/FAQ/FAQ-items-data";
import { FAQCategoryTitle } from "@/types/FAQ/faq-category-props";
import { FAQItemProps } from "@/types/FAQ/faq-props";

const FAQSection = () => {
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
    <section className="w-full h-full flex flex-col lg:flex-row justify-between gap-8 lg:gap-12">
      <section className="lg:flex-2 flex flex-col gap-9 dark:text-white">
        <p className="text-base lg:text-lg leading-8">
          در این قسمت شما میتوانید سوالات متداول را به صورت دسته بندی شده
          مشاهده بکنید. هدف ما این است که شما را به بهترین نحو راهنمایی کنیم.
        </p>
        <ul className="flex flex-col gap-2">
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
      <section className="lg:flex-5 flex flex-col gap-4">
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
  );
};

export default FAQSection;