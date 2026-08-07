"use client";

import Image from "next/image";
import Link from "next/link";
import { CategoryCardProps } from "./categoryCardsData";

const CategoryCard = ({ href, image, title, alt }: CategoryCardProps) => {
  return (
    <Link href={href} className="flex-1 group">
      <section className="bg-[#f9f9f9] dark:bg-dark-8 p-2 rounded-xl text-center w-max h-full flex flex-col  justify-center gap-8 overflow-hidden group-hover:shadow-[0_0_8px_1px_rgba(0,0,0,0.3)] dark:group-hover:shadow-[0_0_8px_1px_rgba(255,255,255,0.3)] group-hover:scale-105 transition-all">
        <Image src={image} width={150} height={150} alt={alt} className="h-full object-contain"/>

        <h3 className="font-bold dark:text-white text-xl group-hover:text-main-500">{title}</h3>
      </section>
    </Link>
  );
};

export default CategoryCard;
