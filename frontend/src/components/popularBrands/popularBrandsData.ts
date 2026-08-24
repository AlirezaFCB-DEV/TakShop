export interface PopularBrandProps {
  href: string;
  name: string;
  image: string;
}

export const popularBrands: PopularBrandProps[] = [
  { href: "/products?brand=apple", name: "اپل", image: "/brands/apple.svg" },
  {
    href: "/products?brand=samsung",
    name: "سامسونگ",
    image: "/brands/samsung.svg",
  },
  { href: "/products?brand=sony", name: "سونی", image: "/brands/sony.svg" },
  {
    href: "/products?brand=xiaomi",
    name: "شیائومی",
    image: "/brands/xiaomi.svg",
  },
  {
    href: "/products?brand=huawei",
    name: "هواوی",
    image: "/brands/huawei.svg",
  },
  { href: "/products?brand=canon", name: "کانن", image: "/brands/canon.svg" },
  { href: "/products?brand=msi", name: "ام‌اس‌آی", image: "/brands/msi.svg" },
  {
    href: "/products?brand=lenovo",
    name: "لنوو",
    image: "/brands/lenovo.svg",
  },
  { href: "/products?brand=hp", name: "اچ‌پی", image: "/brands/hp.svg" },
  { href: "/products?brand=asus", name: "ایسوس", image: "/brands/asus.svg" },
];
