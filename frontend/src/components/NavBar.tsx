"use client";

import AuthModal from "@/components/AuthModal";
import BackShadow from "@/components/BackShadow";
import CategoryMenu from "@/components/CategoryMenu";
import PrimaryButton from "@/components/PrimaryButton";
import TakShopLogo from "@/components/TakShopLogo";
import { useModal } from "@/context/LoginModalContext";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BsBoxSeam, BsCart3 } from "react-icons/bs";
import { CiHeart, CiSearch } from "react-icons/ci";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { IoIosArrowUp, IoIosNotificationsOutline } from "react-icons/io";
import { LuGift } from "react-icons/lu";
import { MdDarkMode, MdNotificationsNone } from "react-icons/md";
import { RxExit } from "react-icons/rx";

const NavBar = () => {
  const [isActiveCategoryMenu, setIsActiveCategoryMenu] = useState(false);
  const [isActiveUserDropDown, setIsActiveUserDropDown] = useState(false);

  const [isLogin, setIsLogin] = useState(false);

  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <>
      <nav className="sticky top-0 bg-white flex items-center justify-around border-b-2 border-b-main-500 rounded-b-lg shadow-md w-full z-10">
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
                  className="flex flex-row-reverse items-center group "
                >
                  <AiOutlineUser />
                  <IoIosArrowUp className="text-[1.2rem] group-hover:rotate-180 transition-transform" />
                </Link>

                <section
                  className={`${isActiveUserDropDown ? "visible opacity-100 translate-y" : "-translate-y-4 opacity-0 invisible"} bg-white desktop-heading2 w-1/5 absolute left-0 rounded-br-2xl rounded-l-2xl border-x-2 border-b-2 top-full cursor-default text-black transition-all`}
                >
                  <ul>
                    <Link href={"/"} className="group">
                      <li className="user-dropdown_item">
                        <AiOutlineUser className="user-dropdown_icon" />
                        <span>حساب کاربری</span>
                      </li>
                    </Link>
                    <Link href={"/"} className="group">
                      <li className="user-dropdown_item">
                        <MdNotificationsNone className="user-dropdown_icon" />
                        <span>پیغام ها</span>
                      </li>
                    </Link>
                    <Link href={"/"} className="group">
                      <li className="user-dropdown_item">
                        <FaRegHeart className="user-dropdown_icon" />
                        <span>دلخواه شما</span>
                      </li>
                    </Link>
                    <Link href={"/"} className="group">
                      <li className="user-dropdown_item">
                        <FaRegComment className="scale-x-[-1] user-dropdown_icon" />
                        <span>نظرات شما</span>
                      </li>
                    </Link>
                    <Link href={"/"} className="group">
                      <li className="user-dropdown_item">
                        <BsBoxSeam className="user-dropdown_icon" />
                        <span>سفارش های شما</span>
                      </li>
                    </Link>
                    <Link href={"/"} className="group">
                      <li className="user-dropdown_item">
                        <LuGift className="user-dropdown_icon" />
                        <span>کارت های هدیه</span>
                      </li>
                    </Link>
                    <Link href={"/"} className="group">
                      <li className="user-dropdown_item">
                        <FiSettings className="user-dropdown_icon" />
                        <span>تنظیمات حساب کاربری</span>
                      </li>
                    </Link>
                    <Link href={"/"} className="group">
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
          <Link href={"#"} className="icon-button">
            <BsCart3 />
          </Link>
        </section>
      </nav>
      <AuthModal isActive={isModalOpen} setIsLogin={setIsLogin} closeModalMethod={closeModal} />
      <BackShadow
        isActiveState={isActiveCategoryMenu || isModalOpen}
        onClick={closeModal}
      />
    </>
  );
};

export default NavBar;
