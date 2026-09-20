"use client";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { RailProps } from "@/types/rail-props";
import { useEffect, useRef, useState } from "react";

const Rail = ({ children , cardSpace}: RailProps) => {
  const trackRef = useRef<HTMLElement | null>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const update = () => {
      const scrollLeft = Math.abs(track.scrollLeft);
      const maxScroll = track.scrollWidth - track.clientWidth;

      setAtStart(scrollLeft < cardSpace / 2);
      setAtEnd(scrollLeft > maxScroll - cardSpace / 2);
    };

    update();

    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      track.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [cardSpace]);

  const scrollByAmount = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * cardSpace, behavior: "smooth" });
  };

  return (
    <section className="relative">
      <button
        onClick={() => scrollByAmount(1)}
        className={`carousel-navigation_btn right-5 ${atStart ? "opacity-0 invisible" : "opacity-100 visible"}`}
      >
        <FaChevronRight />
      </button>

      <section
        className="flex gap-5 overflow-x-scroll scrollbar-none scroll-smooth px-6 py-5 "
        ref={trackRef}
      >
        {children}
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

export default Rail;
