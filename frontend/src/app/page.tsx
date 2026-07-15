"use client";

import PrimaryButton from "@/components/PrimaryButton";
import Link from "next/link";
import { BsCart3 } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FaShopify } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";

const Home = () => {
  return (
    <nav className="flex items-center justify-around px-8 py-7 border-2 border-b-main-500 rounded-b-lg shadow-md">
      <section>
        <Link href={"/"} className="desktop-main-title flex gap-4 text-main-500">
          <FaShopify />
          <h1>تک شاپ</h1>
        </Link>
      </section>
      <section>
        <ul className="flex gap-10 text-lg">
          <li className="header-menu_item">
            <Link href={"#"}>
              <span>صفحه اصلی</span>
            </Link>
          </li>
          <li className="header-menu_item">
            <Link className="flex items-center" href={"#"}>
              <span>دسته بندی کالاها</span>
              <IoChevronDown />
            </Link>
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
