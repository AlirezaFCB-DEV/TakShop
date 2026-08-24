"use client";

import Link from "next/link";
import BestOffersTimer from "./bestOffersTimer/BestOffersTimer";
import { FaChevronLeft } from "react-icons/fa";
import ProductCard from "../productCard/ProductCard";
import { BestOffersProducts } from "./BestOffersProductsData";

const BestOffers = () => {
  const step = 280;

  return (
    <section className="bg-main-600 text-white rounded-2xl px-6 py-5 flex gap-10 overflow-x-scroll scrollbar-none scroll-smooth">
      <section className="min-w-1/5 text-center flex flex-col gap-4 justify-center">
        <h2 className="text-3xl font-bold px-4 ">کالاهایی با بیشترین تخفیف</h2>
        <p >
          در این قسمت شما میتوانید کالاهایی که تخفیف زیادی دارن رو مشاهده کنید.
        </p>
        <BestOffersTimer />
        <Link
          href={"/best-offers-products"}
          className="text-xl group flex justify-center items-center gap-2"
        >
          <span>مشاهده همه </span>
          <section className="flex items-center">
            <section className="w-0 group-hover:w-4 transition-all h-1.5 rounded-3xl bg-white"></section>
            <FaChevronLeft className="text-2xl bg-transparent" />
          </section>
        </Link>
      </section>
      <section className="flex gap-4 ">
        {BestOffersProducts.map((product, index) => (
          <ProductCard {...product} key={index} />
        ))}
        <Link
          href={"/best-offers-products"}
          className="text-xl group flex justify-center items-center gap-2 w-60 bg-[#f9f9f9] text-black  dark:bg-dark-7 rounded-2xl transition-colors hover:text-main-500"
        >
          <span>مشاهده همه </span>
          <section className="flex items-center">
            <section className="w-0 group-hover:w-4 transition-all h-1.5 rounded-3xl bg-white group-hover:bg-main-500"></section>
            <FaChevronLeft className="text-2xl bg-transparent" />
          </section>
        </Link>
      </section>
    </section>
  );
};

export default BestOffers;
