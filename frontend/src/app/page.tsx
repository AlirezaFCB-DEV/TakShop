"use client";

import BackShadow from "@/components/BackShadow";
import CategoryMenu from "@/components/CategoryMenu";
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
  const [isActiveCategoryMenu, setIsActiveCategoryMenu] = useState(false);
  
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
              onMouseEnter={() => setIsActiveCategoryMenu(true)}
              onMouseLeave={() => setIsActiveCategoryMenu(false)}
            >
              <span>دسته بندی کالاها</span>
              <IoIosArrowUp className="group-hover:-rotate-180 transition-transform" />
             <CategoryMenu isActive={isActiveCategoryMenu}/>
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
      <BackShadow isActiveState={isActiveCategoryMenu || isModalOpen} onClick={closeModal}/>
    </>
  );
};

export default Home;
