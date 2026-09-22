import { FAQCategoryTitle } from "./faq-category-props";

export interface FAQItemProps {
  id: number;
  category: FAQCategoryTitle;
  title: string;
  description: string;
}
