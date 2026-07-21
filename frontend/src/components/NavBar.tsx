"use client"

import AuthModal from "@/components/AuthModal";
import BackShadow from "@/components/BackShadow";
import CategoryMenu from "@/components/CategoryMenu";
import PrimaryButton from "@/components/PrimaryButton";
import TakShopLogo from "@/components/TakShopLogo";
import { useModal } from "@/context/LoginModalContext";
import Link from "next/link";
import { useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowUp } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";

const NavBar = () => {
  const [isActiveCategoryMenu, setIsActiveCategoryMenu] = useState(false);

  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <>
      <nav className="sticky top-0 bg-white flex items-center justify-around border-2 border-b-main-500 rounded-b-lg shadow-md w-full z-10">
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
              onMouseEnter={() => setIsActiveCategoryMenu(true)}
              onMouseLeave={() => setIsActiveCategoryMenu(false)}
            >
              <span>دسته بندی کالاها</span>
              <IoIosArrowUp className="group-hover:-rotate-180 transition-transform" />
              <CategoryMenu isActive={isActiveCategoryMenu} />
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
          <PrimaryButton onClick={openModal}>ثبت نام / ورود</PrimaryButton>
          <button className="icon-button">
            <BsCart3 />
          </button>
        </section>
      </nav>
      <AuthModal isActive={isModalOpen} />
      <BackShadow
        isActiveState={isActiveCategoryMenu || isModalOpen}
        onClick={closeModal}
      />
    </>
  );
};

export default NavBar;
