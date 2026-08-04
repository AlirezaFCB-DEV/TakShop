"use client";

import AuthModal from "@/components/AuthModal";
import BackShadow from "@/components/BackShadow";
import CategoryMenu from "@/components/CategoryMenu/CategoryMenu";
import PrimaryButton from "@/components/PrimaryButton";
import TakShopLogo from "@/components/TakShopLogo";
import { useModal } from "@/contexts/LoginModalContext";
import { useTheme } from "@/hooks/useTheme";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowUp } from "react-icons/io";
import { MdDarkMode, MdSunny } from "react-icons/md";
import UserMenu from "./UserMenu";

const NavBar = () => {
  //! Ui States
  const { theme, setTheme } = useTheme();
  const [isActiveCategoryMenu, setIsActiveCategoryMenu] = useState(false);
  const [isActiveUserDropDown, setIsActiveUserDropDown] = useState(false);

  const [isLogin, setIsLogin] = useState(false);

  const { isModalOpen, openModal, closeModal } = useModal();

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else if (theme === "light") {
      setTheme("dark");
    }
  };

  return (
    <>
      <nav className="sticky top-0 text-black bg-white dark:bg-dark-8 dark:text-white flex justify-around border-b-2 border-b-main-500 rounded-b-lg shadow-md w-full z-20">
        <section className="flex items-center">
          <Link href={"/"} className="flex gap-4 text-main-500">
            <h1>
              <TakShopLogo />
            </h1>
          </Link>
        </section>
        <section>
          <ul className="flex gap-10 text-lg h-full z-10">
            <li className="nav-menu_item">
              <Link href={"/"} className="nav-menu_link">
                <span>صفحه اصلی</span>
              </Link>
            </li>
            <li
              className="nav-menu_item gap-1 cursor-pointer group "
              onMouseEnter={() => setIsActiveCategoryMenu(true)}
              onMouseLeave={() => setIsActiveCategoryMenu(false)}
            >
              <span>دسته بندی کالاها</span>
              <IoIosArrowUp className="group-hover:-rotate-180 transition-transform" />
              <CategoryMenu isActive={isActiveCategoryMenu} />
            </li>
            <li className="nav-menu_item">
              <Link href={"/blogs"} className="nav-menu_link">
                <span>بلاگ پست</span>
              </Link>
            </li>
            <li className="nav-menu_item">
              <Link href={"/offers"} className="nav-menu_link">
                <span>تخفیف</span>
              </Link>
            </li>
            <li className="nav-menu_item">
              <Link href={"/about-us"} className="nav-menu_link">
                <span>درباره ما</span>
              </Link>
            </li>
            <li className="nav-menu_item">
              <Link href={"/contact-us"} className="nav-menu_link">
                <span>تماس با‌ما</span>
              </Link>
            </li>
          </ul>
        </section>
        <section className="flex gap-4">
          <button className="icon-button">
            <CiSearch />
          </button>
          <PrimaryButton
            onClick={() => toggleTheme()}
            className="rounded-full"
            variant="icon"
          >
            {theme === "dark" ? <MdSunny /> : <MdDarkMode />}
          </PrimaryButton>
          {isLogin ? (
            <>
              <button
                type="button"
                className="icon-button"
                onMouseEnter={() => setIsActiveUserDropDown(true)}
                onMouseLeave={() => setIsActiveUserDropDown(false)}
              >
                <Link
                  href={"#"}
                  className="flex flex-row-reverse items-center "
                >
                  <AiOutlineUser />
                  <IoIosArrowUp
                    className={`text-[1.2rem] ${isActiveUserDropDown && "rotate-180"} transition-transform`}
                  />
                </Link>

                <UserMenu isActive={isActiveUserDropDown} />
              </button>
            </>
          ) : (
            <PrimaryButton onClick={openModal}>ثبت نام / ورود</PrimaryButton>
          )}
          <Link href={"/cart"} className="icon-button">
            <BsCart3 />
          </Link>
        </section>
      </nav>
      <AuthModal
        isActive={isModalOpen}
        setIsLogin={setIsLogin}
        closeModalMethod={closeModal}
      />
      <BackShadow
        isActiveState={
          isActiveCategoryMenu || isModalOpen || isActiveUserDropDown
        }
        onClick={closeModal}
      />
    </>
  );
};

export default NavBar;
