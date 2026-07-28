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
import { BsBoxSeam, BsCart3 } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { IoIosArrowUp } from "react-icons/io";
import { LuGift } from "react-icons/lu";
import { MdDarkMode, MdNotificationsNone, MdSunny } from "react-icons/md";
import { RxExit } from "react-icons/rx";

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
      <nav className="sticky top-0 text-black bg-white dark:bg-dark-8 dark:text-white flex justify-around border-b-2 border-b-main-500 rounded-b-lg shadow-md w-full z-10">
        <section className="flex items-center">
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
              <Link href={"/blogs"}>
                <span>بلاگ پست</span>
              </Link>
            </li>
            <li className="header-menu_item">
              <Link href={"/offers"}>
                <span>تخفیف</span>
              </Link>
            </li>
            <li className="header-menu_item">
              <Link href={"/about-us"}>
                <span>درباره ما</span>
              </Link>
            </li>
            <li className="header-menu_item">
              <Link href={"/contact-us"}>
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
            {theme === "dark" ? <MdDarkMode /> : <MdSunny />}
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

                <section
                  className={`${isActiveUserDropDown ? "visible opacity-100 translate-y" : "-translate-y-4 opacity-0 invisible"} bg-white desktop-heading2 w-1/5 absolute left-0 rounded-b-xl rounded-tl-lg border-main-500 border-x-2 border-b-2 top-full cursor-default text-black transition-all dark:bg-dark-8 dark:text-white`}
                >
                  <ul>
                    <Link href={"/user/account"} className="group">
                      <li className="user-dropdown_item">
                        <AiOutlineUser className="user-dropdown_icon" />
                        <span>حساب کاربری</span>
                      </li>
                    </Link>
                    <Link href={"/user/notifications"} className="group">
                      <li className="user-dropdown_item">
                        <MdNotificationsNone className="user-dropdown_icon" />
                        <span>پیغام ها</span>
                      </li>
                    </Link>
                    <Link href={"/user/favorites"} className="group">
                      <li className="user-dropdown_item">
                        <FaRegHeart className="user-dropdown_icon" />
                        <span>دلخواه شما</span>
                      </li>
                    </Link>
                    <Link href={"/user/comments"} className="group">
                      <li className="user-dropdown_item">
                        <FaRegComment className="scale-x-[-1] user-dropdown_icon" />
                        <span>نظرات شما</span>
                      </li>
                    </Link>
                    <Link href={"/user/orders"} className="group">
                      <li className="user-dropdown_item">
                        <BsBoxSeam className="user-dropdown_icon" />
                        <span>سفارش های شما</span>
                      </li>
                    </Link>
                    <Link href={"/user/gift-cards"} className="group">
                      <li className="user-dropdown_item">
                        <LuGift className="user-dropdown_icon" />
                        <span>کارت های هدیه</span>
                      </li>
                    </Link>
                    <Link href={"/user/settings"} className="group">
                      <li className="user-dropdown_item">
                        <FiSettings className="user-dropdown_icon" />
                        <span>تنظیمات حساب کاربری</span>
                      </li>
                    </Link>
                    <Link href={"/user/exit-account"} className="group">
                      <li className="user-dropdown_item group-hover:text-red-600">
                        <RxExit className="user-dropdown_icon" />
                        <span>خروج از حساب کاربری</span>
                      </li>
                    </Link>
                  </ul>
                </section>
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
