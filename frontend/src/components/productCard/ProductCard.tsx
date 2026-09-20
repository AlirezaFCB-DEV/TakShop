"use client";

import {ProductCardProps} from "@/types/ProductCardProps";
import Image from "next/image";
import Link from "next/link";
import { FaStar, FaTruck } from "react-icons/fa";

const ProductCard = ({
  image,
  title,
  rate,
  isFreeShipping,
  offer = 0,
  price,
}: ProductCardProps) => {
  const offerPrice = (offer * price) / 100;
  const lastPrice = price - offerPrice;

  return (
    <Link href={"#"} className="group" draggable={false}>
      <section className="w-60 h-75.5 group-hover:scale-102 transition-transform pb-1 bg-[#f9f9f9] dark:bg-dark-7 dark:text-white text-black rounded-2xl overflow-hidden flex flex-col justify-between">
        <section className="">
          <Image
            src={image.src}
            alt={image.alt}
            className="px-2 w-60 h-32.5 object-contain"
            width={240}
            height={130}
            draggable={false}
          />
        </section>
        <h3 className="text-center desktop-heading3 group-hover:text-main-500 transition-colors px-2">
          {title}
        </h3>
        <section className="flex flex-row-reverse items-center justify-between px-3">
          <section className="flex justify-end gap-0.5 text-yellow-400">
            <span className="">{rate}</span>
            <FaStar className="" />
          </section>
          {isFreeShipping && (
            <section className="flex items-center justify-start px-2 rounded-2xl bg-main-100 text-main-500 gap-2">
              <FaTruck />
              <span className="text-sm">رایگان</span>
            </section>
          )}
        </section>
        {offer > 0 && (
          <section className="flex items-center justify-between px-3">
            <section className="flex items-center bg-red-500 text-white text-sm px-3 rounded-2xl">
              <span>{offer}%</span>
            </section>
            <section className="flex items-center gap-0.5">
              <span className="line-through">
                {price.toLocaleString("fa-IR")}
              </span>
              <span>تومان</span>
            </section>
          </section>
        )}
        <p className="text-center font-bold text-xl group-hover:text-main-500 transition-colors">
          <span>{lastPrice.toLocaleString("fa-IR")}</span>
          <span>تومان</span>
        </p>
      </section>
    </Link>
  );
};

export default ProductCard;
