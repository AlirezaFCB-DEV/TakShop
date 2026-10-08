"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import {
  FaHome,
  FaInfoCircle,
  FaCommentDots,
  FaPhoneAlt,
  FaThLarge,
} from "react-icons/fa";
import CategorySheet from "./CategorySheet";
import { BsCart3 } from "react-icons/bs";

interface BottomNavItem {
  key: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  href?: string;
  type?: "sheet";
}

const items: BottomNavItem[] = [
  { key: "home", title: "خانه", icon: FaHome, href: "/" },
  { key: "categories", title: "دسته‌ها", icon: FaThLarge, type: "sheet" },
  { key: "cart", title: "سبد خرید", icon: BsCart3, href: "/cart" },
  {
    key: "about",
    title: "درباره",
    icon: FaInfoCircle,
    href: "/about-us",
  },
  { key: "contact", title: "تماس", icon: FaPhoneAlt, href: "/contact-us" },
];

const BottomNavBar = () => {
  const pathname = usePathname();
  const [isCategorySheetOpen, setIsCategorySheetOpen] = useState(false);

  return (
    <>
      <nav className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white dark:bg-dark-8 border-t-2 border-main-500 shadow-[0_-4px_12px_rgba(0,0,0,0.08)]">
        <ul className="flex">
          {items.map((item) => {
            const Icon = item.icon;
            const active =
              item.type === "sheet"
                ? isCategorySheetOpen
                : pathname === item.href;
            const itemClasses = `flex min-h-16 flex-col items-center justify-center gap-1 px-0.5 py-1.5 text-center text-[10px] leading-tight font-medium transition-colors sm:text-xs ${
              active ? "text-main-500" : "text-dark-4 dark:text-dark-2"
            }`;
            return (
              <li key={item.key} className="flex-1 min-w-0">
                {item.type === "sheet" ? (
                  <button
                    type="button"
                    aria-label={item.title}
                    onClick={() => setIsCategorySheetOpen(true)}
                    className={`w-full cursor-pointer ${itemClasses}`}
                  >
                    <Icon className="text-xl sm:text-2xl" />
                    <span>{item.title}</span>
                  </button>
                ) : (
                  <Link href={item.href ?? "/"} className={itemClasses}>
                    <Icon className="text-xl sm:text-2xl" />
                    <span>{item.title}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
      <CategorySheet
        isActive={isCategorySheetOpen}
        onClose={() => setIsCategorySheetOpen(false)}
      />
    </>
  );
};

export default BottomNavBar;
