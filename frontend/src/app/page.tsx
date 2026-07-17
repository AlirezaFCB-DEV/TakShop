"use client";

import PrimaryButton from "@/components/PrimaryButton";
import Link from "next/link";
import { AiOutlineCamera } from "react-icons/ai";
import { BsCart3, BsSmartwatch } from "react-icons/bs";
import { CiHeadphones, CiHeart, CiMobile3, CiSearch } from "react-icons/ci";
import { FaShopify } from "react-icons/fa";
import { IoIosArrowUp, IoIosGitNetwork } from "react-icons/io";
import { IoGameControllerOutline } from "react-icons/io5";
import { LiaLaptopSolid } from "react-icons/lia";
import { MdDarkMode } from "react-icons/md";

const Home = () => {
  return (
    <nav className="flex justify-around py-6 border-2 border-b-main-500 rounded-b-lg shadow-md relative z-10">
      <section>
        <Link
          href={"/"}
          className="desktop-main-title flex gap-4 text-main-500"
        >
          <FaShopify />
          <h1>تک شاپ</h1>
        </Link>
      </section>
      <section>
        <ul className="flex gap-10 text-lg h-full z-20">
          <li className="header-menu_item">
            <Link href={"#"}>
              <span>صفحه اصلی</span>
            </Link>
          </li>
          <li className="header-menu_item gap-1 cursor-pointer group ">
            <span>دسته بندی کالاها</span>
            <IoIosArrowUp className="group-hover:-rotate-180 transition-transform" />
            <section className="absolute translate-x-1/2 right-1/2 bg-white w-4/5 top-27 translate-y-3 opacity-0 transition-all invisible group-hover:visible group-hover:opacity-100 group-hover:-translate-y-4 rounded-b-md px-8 py-4 flex h-min text-black cursor-default shadow-xl">
              <section className="border-l-3 border-transparent [border-image:linear-gradient(to_bottom,#fff,#831fc1,#fff)_1] flex-1">
                <ul className="text-black flex flex-col justify-around h-full">
                  <li>
                    <button className="dropdown-category_item">
                      <span>موبایل</span>
                      <CiMobile3 className="category-title_icon" />
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-category_item">
                      <span>لپ‌تاپ</span>
                      <LiaLaptopSolid className="category-title_icon" />
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-category_item">
                      <span>لوازم جانبی لپ‌تاپ</span>
                      <IoGameControllerOutline className="category-title_icon" />
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-category_item">
                      <span>هدست و هدفون</span>
                      <CiHeadphones className="category-title_icon" />
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-category_item">
                      <span>دوربین</span>
                      <AiOutlineCamera className="category-title_icon" />
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-category_item">
                      <span>اینترنت</span>
                      <IoIosGitNetwork className="category-title_icon" />
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-category_item">
                      <span>ساعت هوشمند</span>
                      <BsSmartwatch className="category-title_icon" />
                    </button>
                  </li>
                </ul>
              </section>
              <section className="flex-4 flex flex-col px-10 gap-4">
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
                    <h3 className="title-category_heading">
                      دسته‌بندی بر اساس برند
                    </h3>
                    <ul className="title-category_list">
                      <li>
                        <Link href={"#"} className="category-list_item">آیفون</Link>
                      </li>
                      <li>
                        <Link href={"#"} className="category-list_item">سامسونگ</Link>
                      </li>
                      <li>
                        <Link href={"#"} className="category-list_item">شیائومی</Link>
                      </li>
                      <li>
                        <Link href={"#"} className="category-list_item">هواوی</Link>
                      </li>
                      <li>
                        <Link href={"#"} className="category-list_item">آنر</Link>
                      </li>
                      <li>
                        <Link href={"#"} className="category-list_item">ریلمی</Link>
                      </li>
                      <li>
                        <Link href={"#"} className="category-list_item">نوکیا</Link>
                      </li>
                    </ul>
                  </section>
                  <section className="title-categories_container">
                    <h3 className="title-category_heading">
                      دسته‌بندی بر اساس قیمت
                    </h3>
                    <ul className="title-category_list">
                      <li>
                        <Link href={"#"} className="category-list_item">زیر پنج میلیون تومان</Link>
                      </li>
                      <li>
                        <Link href={"#"} className="category-list_item">بین پنج تا هفت میلیون تومان</Link>
                      </li>
                      <li>
                        <Link href={"#"} className="category-list_item">بین هفت تا ده میلیون تومان</Link>
                      </li>
                      <li>
                        <Link href={"#"} className="category-list_item">بین ده تا پونزده میلیون تومان</Link>
                      </li>
                      <li>
                        <Link href={"#"} className="category-list_item">بین پونزده تا بیست میلیون تومان</Link>
                      </li>
                      <li>
                        <Link href={"#"} className="category-list_item">بین بیست تا سی میلیون تومان</Link>
                      </li>
                      <li>
                        <Link href={"#"} className="category-list_item">بالای سی میلیون تومان</Link>
                      </li>
                    </ul>
                  </section>
                  <section className="title-categories_container">
                    <h3 className="title-category_heading">
                      دسته‌بندی بر اساس عملکرد
                    </h3>
                    <ul className="title-category_list">
                      <li>
                        <Link href={"#"} className="category-list_item">آیفون</Link>
                      </li>
                      <li>
                        <Link href={"#"} className="category-list_item">سامسونگ</Link>
                      </li>
                      <li>
                        <Link href={"#"} className="category-list_item">شیائومی</Link>
                      </li>
                      <li>
                        <Link href={"#"} className="category-list_item">هواوی</Link>
                      </li>
                      <li>
                        <Link href={"#"} className="category-list_item">آنر</Link>
                      </li>
                      <li>
                        <Link href={"#"} className="category-list_item">ریلمی</Link>
                      </li>
                      <li>
                        <Link href={"#"} className="category-list_item">نوکیا</Link>
                      </li>
                    </ul>
                  </section>
                </section>
              </section>
            </section>
          </li>
          <li className="header-menu_item">
            <Link href={"#"}>
              <span>بلاگ پست</span>
            </Link>
          </li>
          <li className="header-menu_item">
            <Link href={"#"}>
              <span>تخفیف</span>
            </Link>
          </li>
          <li className="header-menu_item">
            <Link href={"#"}>
              <span>درباره ما</span>
            </Link>
          </li>
          <li className="header-menu_item">
            <Link href={"#"}>
              <span>تماس با‌ما</span>
            </Link>
          </li>
        </ul>
      </section>
      <section className="flex items-center gap-4 ">
        <button className="icon-button">
          <CiSearch />
        </button>
        <PrimaryButton className="rounded-full" variant="icon">
          <MdDarkMode />
        </PrimaryButton>
        <PrimaryButton>ثبت نام / ورود</PrimaryButton>
        <button className="icon-button">
          <BsCart3 />
        </button>
      </section>
    </nav>
  );
};

export default Home;
