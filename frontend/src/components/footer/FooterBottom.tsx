"use client";

import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";
import { footerCategories } from "../Footer/FooterCategoriesData";
import TakShopLogo from "../TakShopLogo";
import { ShopInfos } from "../Footer/ShopInfoData";
import ShopInfo from "../ShopInfo/ShopInfo";
import { socials } from "../Footer/SocialData";
import Social from "../Social/Social";

/**
 * Footer content keeps its two-row desktop arrangement and centers on smaller screens.
 */
const FooterBottom = () => {
  return (
    <section className="flex flex-col gap-6">
      <section className="flex flex-col items-center gap-8 text-center lg:flex-row lg:items-stretch lg:text-right">
        {/* About / store column */}
        <section className="flex w-full min-w-0 flex-col items-center justify-between gap-4 lg:flex-2 lg:items-start">
          <Link
            href="/"
            className="text-sm flex w-max justify-center gap-4 text-main-500 mx-auto lg:mx-0"
          >
            <TakShopLogo sizeClass="text-3xl font-bold" />
          </Link>
          <p className="wrap-break-word lg:text-right">
            فروشگاه اینترنتی تک شاپ فعالیت خود را از سال 1400 آغاز کرد و هدف
            اصلی آن ارائه بهترین و جدیدترین کالهای دیجیتال با قیمت مناسب و
            تضمین اصالت کالا است. با تیمی متخصص و پشتیبانی قوی، ما تلاش می
            کنیم تا تجربه خریدی راحت و مطمئن را برای شما فراهم کنیم.
          </p>

          <Link
            href="/about-us"
            className="flex w-max items-center justify-center gap-1 text-main-500 hover:text-main-700 transition-colors text-xl group"
            aria-label="بیشتر درباره فروشگاه تک‌شاپ"
          >
            <span>بیشتر</span>
            <section className="flex items-center">
              <section className="w-0 group-hover:w-4 transition-all h-1.5 rounded-3xl bg-main-500"></section>
              <FaChevronLeft className="bg-transparent" />
            </section>
          </Link>
        </section>

        {/* Navigation links stay on the left in the desktop layout. */}
        <section className="flex w-full min-w-0 flex-wrap justify-center gap-8 lg:flex-5 lg:justify-around lg:gap-0">
          {footerCategories.map((category, index) => (
            <section key={index} className="mb-6 text-center lg:mb-0">
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

      <section className="flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-around lg:text-right">
        {/* Contact details stay on the right; social links stay on the left. */}
        <section className="flex w-full flex-wrap justify-center gap-6 sm:gap-8 lg:w-auto lg:flex-nowrap">
          {ShopInfos.map((item, index) => (
            <ShopInfo
              key={index}
              title={item.title}
              icon={item.icon}
              data={item.data}
            />
          ))}
        </section>
        <section className="flex w-full max-w-full flex-wrap justify-center gap-4 sm:gap-6 lg:w-auto lg:flex-nowrap lg:gap-8">
          {socials.map((social, index) => (
            <Social href={social.href} icon={social.icon} key={index} />
          ))}
        </section>
      </section>
    </section>
  );
};

export default FooterBottom;
