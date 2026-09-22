"use client";

import { useId } from "react";
import PrimaryButton from "../PrimaryButton";
import Link from "next/link";
import TakShopLogo from "../TakShopLogo";
import { FaChevronLeft, FaRegCopyright } from "react-icons/fa";
import { footerCategories } from "./FooterCategoriesData";
import { ShopInfos } from "./ShopInfoData";
import ShopInfo from "../ShopInfo/ShopInfo";
import { socials } from "./SocialData";
import Social from "../Social/Social";

const Footer = () => {
  const emailInp = useId();

  return (
    <footer className="bg-[#f5f5f5] dark:text-white dark:bg-dark-7">
      <section className="bg-main-900 text-gray-50 flex justify-between px-20 py-2 items-center">
        <section className="flex-1">
          <h3 className="text-2xl">خبرنامه</h3>
          <p className="">
            ایمیلتو توی باکس جلویی برام بنویس تا از اخبار جا نمونی!
          </p>
        </section>
        <section className="flex-1">
          <section className="border-gray-50 border p-1 rounded-md flex ">
            <input
              type="email"
              name="email"
              id={emailInp}
              placeholder="لطفا ایمیل خود را وارد کنید..."
              className="outline-none flex-3 px-2 text-lg"
            />
            <PrimaryButton
              variant="custom"
              className="px-4 py-2 rounded-md font-bold text-lg"
            >
              ثبت ایمیل
            </PrimaryButton>
          </section>
        </section>
      </section>
      <section className="px-20 py-8 flex flex-col gap-6">
        <section className="flex">
          <section className="flex-2 flex flex-col justify-between">
            <Link href={"/"} className="text-sm flex gap-4 text-main-500 w-max">
              <TakShopLogo sizeClass="text-3xl font-bold" />
            </Link>
            <p>
              فروشگاه اینترنتی تک شاپ فعالیت خود را از سال 1400 آغاز کرد و هدف
              اصلی آن ارائه بهترین و جدیدترین کالهای دیجیتال با قیمت مناسب و
              تضمین اصالت کالا است. با تیمی متخصص و پشتیبانی قوی، ما تلاش می
              کنیم تا تجربه خریدی راحت و مطمئن را برای شما فراهم کنیم.
            </p>

            <Link
              href={"/about-us"}
              className="flex items-center gap-1 text-main-500 hover:text-main-700 transition-colors text-xl group"
              aria-label="بیشتر درباره فروشگاه تک‌شاپ"
            >
              <span>بیشتر</span>
              <section className="flex items-center">
                <section className="w-0 group-hover:w-4 transition-all h-1.5 rounded-3xl bg-main-500"></section>
                <FaChevronLeft className="bg-transparent" />
              </section>
            </Link>
          </section>
          <section className="flex-5 flex justify-around">
            {footerCategories.map((category, index) => (
              <section className="text-center" key={index}>
                <h2 className="text-main-500 desktop-heading2">
                  {category.title}
                </h2>
                <ul className="flex flex-col gap-5 h-full">
                  {category.items.map((item, index) => (
                    <li key={index} className="group">
                      <Link
                        href={item.href}
                        className="group-hover:text-main-500 transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </section>
        </section>
        <section className="flex justify-around">
          <section className="flex gap-8 ">
            {ShopInfos.map((item, index) => (
              <ShopInfo
                key={index}
                title={item.title}
                icon={item.icon}
                data={item.data}
              />
            ))}
          </section>
          <section className=" flex gap-8">
            {socials.map((social, index) => (
              <Social href={social.href} icon={social.icon} key={index} />
            ))}
          </section>
        </section>
      </section>
      <section className="p-2 flex items-center justify-center gap-2 bg-main-700 text-gray-50">
        <FaRegCopyright className="text-xl" />
        <p>تمامی حقوق برای TakShop محفوظ است.</p>
      </section>
    </footer>
  );
};

export default Footer;
