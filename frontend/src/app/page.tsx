"use client";

import BackShadow from "@/components/BackShadow";
import PrimaryButton from "@/components/PrimaryButton";
import TakShopLogo from "@/components/TakShopLogo";
import { useModal } from "@/context/LoginModalContext";
import Link from "next/link";
import { useId, useState } from "react";
import { AiOutlineCamera } from "react-icons/ai";
import { BsCart3, BsSmartwatch } from "react-icons/bs";
import { CiHeadphones, CiHeart, CiMobile3, CiSearch } from "react-icons/ci";
import { IoIosArrowUp, IoIosGitNetwork } from "react-icons/io";
import { IoGameControllerOutline } from "react-icons/io5";
import { LiaLaptopSolid } from "react-icons/lia";
import { MdDarkMode } from "react-icons/md";

const Home = () => {
  const [isActiveDropDown, setIsActiveDropDown] = useState(false);
  
  const { isModalOpen, openModal, closeModal } = useModal();

  const inp_id = useId();
  const checkbox_id = useId();

  return (
    <>
      <nav className="bg-white flex justify-around py-6 border-2 border-b-main-500 rounded-b-lg shadow-md relative z-10">
        <section>
          <Link
            href={"/"}
            className="desktop-main-title flex gap-4 text-main-500"
          >
            <TakShopLogo />
          </Link>
        </section>
        <section>
          <ul className="flex gap-10 text-lg h-full z-10">
            <li className="header-menu_item">
              <Link href={"/"}>
                <span>صفحه اصلی</span>
              </Link>
            </li>
            <li
              className="header-menu_item gap-1 cursor-pointer group "
              onMouseEnter={() => setIsActiveDropDown(true)}
              onMouseLeave={() => setIsActiveDropDown(false)}
            >
              <span>دسته بندی کالاها</span>
              <IoIosArrowUp className="group-hover:-rotate-180 transition-transform" />
              <section
                className={`absolute translate-x-1/2 right-1/2 bg-white w-4/5 top-full transition-all ${isActiveDropDown ? "visible opacity-100 -translate-y-4" : " invisible translate-y-4 opacity-0"} rounded-b-md pl-4 flex h-min text-black cursor-default overflow-hidden`}
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
                      <h3 className="title-category_heading">
                        دسته‌بندی بر اساس برند
                      </h3>
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
                      <h3 className="title-category_heading">
                        دسته‌بندی بر اساس قیمت
                      </h3>
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
                      <h3 className="title-category_heading">
                        دسته‌بندی بر اساس عملکرد
                      </h3>
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
          <PrimaryButton onClick={openModal}>
            ثبت نام / ورود
          </PrimaryButton>
          <button className="icon-button">
            <BsCart3 />
          </button>
        </section>
      </nav>
      <section className={`absolute w-full h-dvh top-0 flex items-center justify-center z-10 transition-all ${isModalOpen ? "visible opacity-100" : "invisible opacity-0"}`}>
        <form className="bg-white border-2 border-main-500 rounded-2xl w-1/3 flex flex-col gap-4 py-8 px-12" onClick={(e) => e.stopPropagation()}>
          <h2 className="flex justify-center ">
            <TakShopLogo />
          </h2>
          <h3 className="desktop-heading2 flex justify-center">
            ورود / ثبت نام
          </h3>
          <section className="text-lg">
            <p>سلام به تک شاپ خوش اومدید!</p>
            <p>برای ورود لطفا شماره موبایل خود را وارد کنید</p>
          </section>

          <section className="p-1 bg-[#f9f9f9] shadow-md rounded-lg flex items-center gap-2 overflow-hidden">
            <input
              type="tel"
              className="flex-5 h-full outline-none text-2xl text-main-500"
              placeholder="9xx xxx xxxx"
              maxLength={10}
              id={inp_id}
            />
            <label htmlFor={inp_id}>
              <span className="flex items-center text-main-300 text-2xl py-2.5 px-2 flex-1 border-r-2">
                98+
              </span>
            </label>
          </section>
          <section className="flex items-center gap-2 text-lg ">
            <input
              type="checkbox"
              name="rememberMe"
              id={checkbox_id}
              className="accent-main-500 cursor-pointer w-6 h-6"
            />
            <label htmlFor={checkbox_id} className="flex gap-1 ">
              با
              <Link href={"#"} className="transition-colors text-main-500 hover:text-main-700"> قوانین و مقررات</Link>
              این سایت موافقت میکنم
            </label>
          </section>

          <PrimaryButton type="submit">ورود</PrimaryButton>
        </form>
      </section>
      <BackShadow isActiveState={isActiveDropDown || isModalOpen} onClick={closeModal}/>
    </>
  );
};

export default Home;
