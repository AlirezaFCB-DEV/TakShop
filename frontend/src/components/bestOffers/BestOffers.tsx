"use client";

import Link from "next/link";
import BestOffersTimer from "./bestOffersTimer/BestOffersTimer";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ProductCard from "../productCard/ProductCard";
import { BestOffersProducts } from "./BestOffersProductsData";
import { useEffect, useRef, useState } from "react";

const BestOffers = () => {
  const trackRef = useRef<HTMLElement | null>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const cardSpace = 256;

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const update = () => {
      const scrollLeft = Math.abs(track.scrollLeft);
      const maxScroll = track.scrollWidth - track.clientWidth;

      setAtStart(scrollLeft < cardSpace);
      setAtEnd(scrollLeft > maxScroll - cardSpace);
    };

    update();

    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      track.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollByAmount = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * cardSpace, behavior: "smooth" });
  };

  return (
    <section className="bg-main-600 text-white rounded-2xl relative">
      <button
        onClick={() => scrollByAmount(1)}
        className={`carousel-navigation_btn right-5 ${atStart ? "opacity-0 invisible" : "opacity-100 visible"}`}
      >
        <FaChevronRight />
      </button>

      <section
        className="flex gap-10 overflow-x-scroll scrollbar-none scroll-smooth px-6 py-5 "
        ref={trackRef}
      >
        <section className="min-w-1/5 text-center flex flex-col gap-4 justify-center">
          <h2 className="text-3xl font-bold px-4 ">
            کالاهایی با بیشترین تخفیف
          </h2>
          <p>
            در این قسمت شما میتوانید کالاهایی که تخفیف زیادی دارن رو مشاهده
            کنید.
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
            className="text-xl group flex justify-center items-center gap-2 w-60 bg-[#f9f9f9] text-black  dark:bg-dark-7 dark:text-white rounded-2xl transition-colors hover:text-main-500"
          >
            <span>مشاهده همه </span>
            <section className="flex items-center">
              <section className="w-0 group-hover:w-4 transition-all h-1.5 rounded-3xl bg-white group-hover:bg-main-500"></section>
              <FaChevronLeft className="text-2xl bg-transparent" />
            </section>
          </Link>
        </section>
      </section>

      <button
        className={`carousel-navigation_btn left-5 ${atEnd ? "opacity-0 invisible" : "opacity-100 visible"}`}
        onClick={() => scrollByAmount(-1)}
      >
        <FaChevronLeft />
      </button>
    </section>
  );
};

export default BestOffers;
