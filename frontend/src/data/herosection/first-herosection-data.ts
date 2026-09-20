import { slide } from "@/types/slide-props";

const slides: slide[] = [
  {
    imageUrl: "/posters/poster7.jpeg",
    href: "/products?category=camera",
    alt: "دوربین",
  },
  {
    imageUrl: "/posters/poster8.png",
    href: "/products?category=headphone",
    alt: "هدفون",
  },
  {
    imageUrl: "/posters/poster9.png",
    href: "/products?category=accessory",
    alt: "لوازم جانبی لپتاپ",
  },
  {
    imageUrl: "/posters/poster10.png",
    href: "/products?category=mobile",
    alt: "موبایل",
  },
  {
    imageUrl: "/posters/poster11.png",
    href: "/products?category=watch",
    alt: "ساعت",
  },
];

const firstSlide = slides[0];
const lastSlide = slides[slides.length - 1];

const loopSlides = [lastSlide, ...slides, firstSlide];

const firstHeroSectionData = {
  slides,
  loopSlides,
};

export { firstHeroSectionData };
