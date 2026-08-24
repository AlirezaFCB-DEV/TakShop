"use client";

import Image from "next/image";
import Link from "next/link";
import { popularBrands } from "./popularBrandsData";

const PopularBrands = () => {
  return (
    <section className="flex gap-6 overflow-x-auto scrollbar-none scroll-smooth py-2 justify-center flex-wrap">
      {popularBrands.map((brand) => (
        <Link
          href={brand.href}
          key={brand.name}
          className="group flex flex-col items-center gap-3 shrink-0"
        >
          <section className="size-24 rounded-full bg-white dark:bg-dark-7 border-2 border-main-100 dark:border-dark-5 flex items-center justify-center p-4 shadow-[0_2px_12px_rgba(131,31,193,0.12)] group-hover:border-main-300 group-hover:scale-105 transition-all">
            <Image
              src={brand.image}
              alt={brand.name}
              width={56}
              height={56}
              className="size-14 object-contain"
            />
          </section>
          <span className="text-lg font-semibold text-dark-6 dark:text-dark-1 group-hover:text-main-500 transition-colors">
            {brand.name}
          </span>
        </Link>
      ))}
    </section>
  );
};

export default PopularBrands;
