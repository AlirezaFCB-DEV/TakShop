// import fetchData from "@/utils/fetchData";
import FAQSectionClient from "./FAQSectionClient";
import { FAQCategoryProps } from "@/types/FAQ/faq-category-props";
import { FAQItemProps } from "@/types/FAQ/faq-props";

const FAQSection = async () => {
  // const [categories, faqs] = (await Promise.all([
  //   fetchData("/data/json/faq-categories.json"),
  //   fetchData("/data/json/faq-items.json"),
  // ])) as [FAQCategoryProps[], FAQItemProps[]];

  const categories: FAQCategoryProps[] = [];
  const faqs: FAQItemProps[] = [];

  return <FAQSectionClient categories={categories} faqs={faqs} />;
};

export default FAQSection;
