import {
  FAQCategoryProps,
  FAQCategoryTitle,
} from "@/types/FAQ/faq-category-props";
import { FaCircle } from "react-icons/fa";
import PrimaryButton from "../PrimaryButton";
import Link from "next/link";

interface FAQCategorySectionProps {
  categories: FAQCategoryProps[];
  setCurrentCategory: (title: FAQCategoryTitle) => void;
  currentCategory: FAQCategoryTitle;
}

const FAQCategorySection = ({
  categories,
  setCurrentCategory,
  currentCategory,
}: FAQCategorySectionProps) => {
  return (
    <section className="lg:flex-2 flex flex-col gap-9 dark:text-white">
      <ul className="flex flex-col gap-2">
        {categories.map((category) => (
          <li key={category.id}>
            <button
              type="button"
              className={`flex gap-2 desktop-heading3 items-center hover:text-main-500 cursor-pointer transition-colors ${currentCategory === category.title ? "text-main-500" : ""}`}
              onClick={() => setCurrentCategory(category.title)}
              aria-pressed={currentCategory === category.title}
            >
              <FaCircle />
              {category.title}
            </button>
          </li>
        ))}
      </ul>
      <Link href={"/contact-us"}>
        <PrimaryButton>تماس با پشتیبانی</PrimaryButton>
      </Link>
    </section>
  );
};

export default FAQCategorySection;
