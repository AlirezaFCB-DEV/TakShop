"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import { HeroSectionProps } from "@/types/herosection-props";

const HeroSection = ({ slides, loopSlides }: HeroSectionProps) => {
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
    }, 5000);

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
    <section className="hero-frame">
      <section
        className={`hero-track ${transition ? "transition-transform duration-500" : ""}`}
        style={{ transform: `translateX(${position * 100}%)` }}
        onTransitionEnd={handleTransitionEnd}
      >
        {loopSlides.map((item, index) => (
          <Link href={item.href} className="hero-slide" key={index}>
            <Image
              fill
              draggable="false"
              sizes="85vw"
              className="hero-image"
              src={item.imageUrl}
              alt={item.alt}
            />
          </Link>
        ))}
      </section>

      <section className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-4">
        {slides.map((_, index) => (
          <button
            aria-label={`go to slide ${index + 1}`}
            className={`hero-dot ${activeSlide === index ? "w-6" : "w-3"}`}
            onClick={() => {
              if (isAnimating) return;
              setIsAnimating(true);
              setPosition(index + 1);
            }}
            key={index}
          ></button>
        ))}
      </section>

      <button className="hero-section_btn right-0 sm:right-5" onClick={handlePrev}>
        <FaChevronRight />
      </button>
      <button className="hero-section_btn left-0 sm:left-5" onClick={handleNext}>
        <FaChevronLeft />
      </button>
    </section>
  );
};

export default HeroSection;
