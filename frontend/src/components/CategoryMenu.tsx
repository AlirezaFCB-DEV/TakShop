"use client";

import Link from "next/link";
import { AiOutlineCamera } from "react-icons/ai";
import { BsSmartwatch } from "react-icons/bs";
import { CiHeadphones, CiHeart, CiMobile3 } from "react-icons/ci";
import { IoIosArrowUp, IoIosGitNetwork } from "react-icons/io";
import { IoGameControllerOutline } from "react-icons/io5";
import { LiaLaptopSolid } from "react-icons/lia";

interface CategoryMenuProps {
    isActive : boolean
}

const CategoryMenu = ({isActive} : CategoryMenuProps) => {
  return (
    <section
      className={`absolute translate-x-1/2 right-1/2 bg-white w-4/5 top-full transition-all ${isActive ? "visible opacity-100 -translate-y-4" : " invisible translate-y-4 opacity-0"} rounded-b-md pl-4 flex h-min text-black cursor-default overflow-hidden`}
    >
      <section className="border-l-3 border-transparent [border-image:linear-gradient(to_bottom,#fff,#831fc1,#fff)_1] flex-1">
        <ul className="text-black flex flex-col h-full">
          <li className="dropdown-category_item">
            <CiMobile3 className="category-title_icon" />
            <span>موبایل</span>
          </li>
          <li className="dropdown-category_item">
            <LiaLaptopSolid className="category-title_icon" />
            <span>لپ‌تاپ</span>
          </li>
          <li className="dropdown-category_item">
            <IoGameControllerOutline className="category-title_icon" />
            <span>لوازم جانبی لپ‌تاپ</span>
          </li>
          <li className="dropdown-category_item">
            <CiHeadphones className="category-title_icon" />
            <span>هدست و هدفون</span>
          </li>
          <li className="dropdown-category_item">
            <AiOutlineCamera className="category-title_icon" />
            <span>دوربین</span>
          </li>
          <li className="dropdown-category_item">
            <IoIosGitNetwork className="category-title_icon" />
            <span>اینترنت</span>
          </li>
          <li className="dropdown-category_item">
            <BsSmartwatch className="category-title_icon" />
            <span>ساعت هوشمند</span>
          </li>
        </ul>
      </section>
      <section className="flex-4 flex flex-col px-10  py-4 gap-6">
        <button className="cursor-pointer hover:text-button-hover transition-colors">
          <h2 className="flex items-center justify-center desktop-heading2">
            <CiHeart className="text-3xl" />
          </h2>
        </button>
        <Link
          href={"/"}
          className="flex items-center text-main-500 hover:text-main-700"
        >
          <h2 className="desktop-heading2">مشاهده همه محصولات </h2>
          <IoIosArrowUp className="-rotate-90 text-2xl" />
        </Link>
        <section className="flex justify-between">
          <section className="title-categories_container">
            <h3 className="title-category_heading">دسته‌بندی بر اساس برند</h3>
            <ul className="title-category_list">
              <li>
                <Link href={"#"} className="category-list_item">
                  آیفون
                </Link>
              </li>
              <li>
                <Link href={"#"} className="category-list_item">
                  سامسونگ
                </Link>
              </li>
              <li>
                <Link href={"#"} className="category-list_item">
                  شیائومی
                </Link>
              </li>
              <li>
                <Link href={"#"} className="category-list_item">
                  هواوی
                </Link>
              </li>
              <li>
                <Link href={"#"} className="category-list_item">
                  آنر
                </Link>
              </li>
              <li>
                <Link href={"#"} className="category-list_item">
                  ریلمی
                </Link>
              </li>
              <li>
                <Link href={"#"} className="category-list_item">
                  نوکیا
                </Link>
              </li>
            </ul>
          </section>
          <section className="title-categories_container">
            <h3 className="title-category_heading">دسته‌بندی بر اساس قیمت</h3>
            <ul className="title-category_list">
              <li>
                <Link href={"#"} className="category-list_item">
                  زیر پنج میلیون تومان
                </Link>
              </li>
              <li>
                <Link href={"#"} className="category-list_item">
                  بین پنج تا هفت میلیون تومان
                </Link>
              </li>
              <li>
                <Link href={"#"} className="category-list_item">
                  بین هفت تا ده میلیون تومان
                </Link>
              </li>
              <li>
                <Link href={"#"} className="category-list_item">
                  بین ده تا پونزده میلیون تومان
                </Link>
              </li>
              <li>
                <Link href={"#"} className="category-list_item">
                  بین پونزده تا بیست میلیون تومان
                </Link>
              </li>
              <li>
                <Link href={"#"} className="category-list_item">
                  بین بیست تا سی میلیون تومان
                </Link>
              </li>
              <li>
                <Link href={"#"} className="category-list_item">
                  بالای سی میلیون تومان
                </Link>
              </li>
            </ul>
          </section>
          <section className="title-categories_container">
            <h3 className="title-category_heading">دسته‌بندی بر اساس عملکرد</h3>
            <ul className="title-category_list">
              <li>
                <Link href={"#"} className="category-list_item">
                  آیفون
                </Link>
              </li>
              <li>
                <Link href={"#"} className="category-list_item">
                  سامسونگ
                </Link>
              </li>
              <li>
                <Link href={"#"} className="category-list_item">
                  شیائومی
                </Link>
              </li>
              <li>
                <Link href={"#"} className="category-list_item">
                  هواوی
                </Link>
              </li>
              <li>
                <Link href={"#"} className="category-list_item">
                  آنر
                </Link>
              </li>
              <li>
                <Link href={"#"} className="category-list_item">
                  ریلمی
                </Link>
              </li>
              <li>
                <Link href={"#"} className="category-list_item">
                  نوکیا
                </Link>
              </li>
            </ul>
          </section>
        </section>
      </section>
    </section>
  );
};

export default CategoryMenu;
