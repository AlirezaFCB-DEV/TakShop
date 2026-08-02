"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import { loopSlides, slides } from "./carouselSlidesData";

const Carousel = () => {
  const [position, setPosition] = useState(1);
  const [transition, setTransition] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const activeSlide =
    position === 0
      ? slides.length - 1
      : position === loopSlides.length - 1
        ? 0
        : position - 1;

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        setPosition((prev) => prev + 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isAnimating]);

  const handleTransitionEnd = () => {
    if (position === loopSlides.length - 1) {
      setTransition(false);
      requestAnimationFrame(() => {
        setPosition(1);
        requestAnimationFrame(() => {
          setTransition(true);
          setIsAnimating(false);
        });
      });

      return;
    } else if (position === 0) {
      setTransition(false);

      requestAnimationFrame(() => {
        setPosition(loopSlides.length - 2);
        requestAnimationFrame(() => {
          setTransition(true);
          setIsAnimating(false);
        });
      });
    }
    setIsAnimating(false);
  };

  const handleNext = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setPosition((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    setPosition((prev) => prev - 1);
  };

  return (
    <section className="w-full h-87.5 relative overflow-hidden rounded-3xl">
      <section
        className={`relative h-full w-full flex ${transition ? "transition-transform duration-500" : ""}`}
        style={{ transform: `translateX(${position * 100}%)` }}
        onTransitionEnd={handleTransitionEnd}
      >
        {loopSlides.map((item, index) => (
          <Link
            href={item.href}
            className="relative w-full h-full flex-none"
            key={index}
          >
            <Image
              fill
              draggable="false"
              className="w-full h-full object-cover"
              src={item.imageUrl}
              alt="slider-poster"
            />
          </Link>
        ))}
      </section>

      <section className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-4">
        {slides.map((ـ, index) => (
          <button
            aria-label={`go to slide ${index + 1}`}
            className={`h-3 rounded-full bg-main-400 ${activeSlide === index ? "w-6" : "w-3"} transition-all duration-500 cursor-pointer`}
            onClick={() => {
              if (isAnimating) return;
              setIsAnimating(true);
              setPosition(index + 1);
            }}
            key={index}
          ></button>
        ))}
      </section>

      <button className="slider-btn right-5" onClick={handlePrev}>
        <FaChevronRight />
      </button>
      <button className="slider-btn left-5" onClick={handleNext}>
        <FaChevronLeft />
      </button>
    </section>
  );
};

export default Carousel;
