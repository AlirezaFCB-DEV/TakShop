"use client";

import Link from "next/link";
import { IoIosArrowUp } from "react-icons/io";
import Categories from "./CategoriesData";
import { useEffect, useState } from "react";
import categoriesItems, { shortByItemsProps } from "./catgoriesItemsData";

interface CategoryMenuProps {
  isActive: boolean;
}

const CategoryMenu = ({ isActive }: CategoryMenuProps) => {
  const [mainCategory, setMainCategory] = useState("موبایل");
  const [mainCategoryItems, setMainCategoryItems] = useState<
    shortByItemsProps[] | null
  >(null);

  useEffect(() => {
    const foundCategory = categoriesItems.find(
      (item) => item.title === mainCategory,
    );

    setTimeout(() => {
      setMainCategoryItems(foundCategory ? foundCategory.items : null);
    }, 100);
  }, [mainCategory]);

  useEffect(() => {
    if (!isActive) {
      setMainCategory("موبایل");
    }
  }, [isActive]);

  return (
    <section
      className={`absolute translate-x-1/2 right-1/2 bg-white dark:bg-dark-8 dark:text-white w-4/5 top-full transition-all ${isActive ? "visible opacity-100 translate-y" : " invisible -translate-y-4 opacity-0"} rounded-b-md pl-4 flex h-min text-black cursor-default overflow-hidden border-x-2 border-b-2 border-main-500 max-h-117.5`}
    >
      <section className="border-l-3 border-transparent [border-image:linear-gradient(to_bottom,transparent,#831fc1,transparent)_1] flex-1">
        <ul className="text-black flex flex-col h-full">
          {Categories.map((category) => (
            <li
              className="category-dropdown_item"
              key={category.id}
              onMouseEnter={() => setMainCategory(category.title)}
            >
              {category.icon}
              <span>{category.title}</span>
            </li>
          ))}
        </ul>
      </section>
      <section className="flex-4 flex flex-col px-10  py-4 gap-6 overflow-y-scroll scrollbar-thumb-main-500">
        <Link
          href={"/products"}
          className="flex items-center text-main-500 hover:text-main-700"
        >
          <h2 className="desktop-heading2">مشاهده همه محصولات </h2>
          <IoIosArrowUp className="-rotate-90 text-2xl" />
        </Link>
        <section className="flex justify-between">
          {/* mainCategory Map */}
          {mainCategoryItems?.map((item, index) => (
            <section className="title-categories_container" key={index}>
              <h3 className="title-category_heading">{item.shortByTitle}</h3>
              <ul className="title-category_list">
                {/* items map */}
                {item.items.map((item, index) => (
                  <li key={index}>
                    <Link href={item.href} className="category-list_item">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </section>
      </section>
    </section>
  );
};

export default CategoryMenu;
