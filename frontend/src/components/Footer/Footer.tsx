"use client";

import { useId } from "react";
import { FaRegCopyright } from "react-icons/fa";
import FooterNewsletter from "../footer/FooterNewsletter";
import FooterBottom from "../footer/FooterBottom";

const Footer = () => {
  const emailInp = useId();

  return (
    <footer className="bg-[#f5f5f5] dark:text-white dark:bg-dark-7 pb-20 xl:pb-0">
      <FooterNewsletter emailInp={emailInp} />
      <section className="px-4 py-8 sm:px-8 lg:px-20">
        <FooterBottom />
      </section>
      <section className="p-2 flex items-center justify-center gap-2 bg-main-700 text-gray-50">
        <FaRegCopyright className="text-xl" />
        <p>تمامی حقوق برای TakShop محفوظ است.</p>
      </section>
    </footer>
  );
};

export default Footer;
