"use client";

import Link from "next/link";
import { useState } from "react";
import { FaChevronRight, FaTimes } from "react-icons/fa";
import Categories from "../CategoryMenu/CategoriesData";
import categoriesItems, {
  shortByItemsProps,
} from "../CategoryMenu/catgoriesItemsData";

interface CategorySheetProps {
  isActive: boolean;
  onClose: () => void;
}

const CategorySheet = ({ isActive, onClose }: CategorySheetProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    null,
  );

  const selectedItems: shortByItemsProps[] | null = selectedCategory
    ? (categoriesItems.find(
        (item) => item.title === selectedCategory,
      )?.items ?? null)
    : null;

  const handleClose = () => {
    onClose();
  };

  return (
    <section
      className={`xl:hidden fixed inset-0 z-50 ${
        isActive ? "visible" : "invisible"
      }`}
      aria-hidden={!isActive}
    >
      {/* backdrop */}
      <section
        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleClose}
      ></section>

      {/* panel */}
      <section
        className={`absolute bottom-0 inset-x-0 bg-white dark:bg-dark-8 text-black dark:text-white rounded-t-2xl transition-transform duration-300 ${
          isActive ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <section className="flex items-center justify-between px-4 py-3 border-b border-black/5 dark:border-white/10">
          <h2 className="text-lg font-bold text-main-500">
            {selectedCategory ?? "دسته بندی کالاها"}
          </h2>
          <button
            type="button"
            aria-label="بستن"
            onClick={handleClose}
            className="text-2xl p-1 cursor-pointer transition-colors hover:text-main-500"
          >
            <FaTimes />
          </button>
        </section>

        <section className="max-h-[70dvh] overflow-y-auto scrollbar-none p-4">
          {selectedCategory === null ? (
            <ul className="grid grid-cols-2 gap-2">
              {Categories.map((category) => (
                <li key={category.id}>
                  <button
                    type="button"
                    onClick={() => setSelectedCategory(category.title)}
                    className="category-sheet_item"
                  >
                    {category.icon}
                    <span className="line-clamp-2 min-w-0 leading-tight">
                      {category.title}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <>
              <button
                type="button"
                onClick={() => setSelectedCategory(null)}
                className="flex items-center gap-1 text-main-500 text-sm mb-4 cursor-pointer"
              >
                <FaChevronRight className="text-lg" />
                <span>دسته بندی ها</span>
              </button>
              <div className="flex flex-col gap-5">
                {selectedItems?.map((group, index) => (
                  <section key={index}>
                    <h3 className="title-category_heading mb-2">
                      {group.shortByTitle}
                    </h3>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
                      {group.items.map((item, index) => (
                        <li key={index}>
                          <Link
                            href={item.href}
                            onClick={handleClose}
                            className="block py-1.5 text-sm sm:text-base hover:text-main-500 transition-colors"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </>
          )}
        </section>
      </section>
    </section>
  );
};

export default CategorySheet;
