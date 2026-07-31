"use client";

import { FaShopify } from "react-icons/fa";

interface takShopLogoProps {
  sizeClass ?: string
}

const TakShopLogo = ({sizeClass = "desktop-main-title"} : takShopLogoProps) => {
  return (
      <section className={`${sizeClass} items-center flex gap-4 text-main-500`}>
      <FaShopify />
      <span>تک شاپ</span>
    </section>
  );
};

export default TakShopLogo;
