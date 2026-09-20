import { slide } from "@/types/slide-props";

const slides: slide[] = [
  {
    imageUrl: "/posters/poster1.png",
    href: "/products?category=laptop",
    alt: "لپتاپ",
  },
  {
    imageUrl: "/posters/poster2.png",
    href: "/products?category=headphone",
    alt: "هدفون",
  },
  {
    imageUrl: "/posters/poster3.png",
    href: "/products?category=watch",
    alt: "ساعت",
  },
  {
    imageUrl: "/posters/poster4.png",
    href: "/products?category=accessory",
    alt: "لوازم جانبی",
  },
  {
    imageUrl: "/posters/poster5.png",
    href: "/products?category=mobile",
    alt: "موبایل",
  },
  {
    imageUrl: "/posters/poster6.png",
    href: "/products?category=camera",
    alt: "دوربین",
  },
];

const firstSlide = slides[0];
const lastSlide = slides[slides.length - 1];

const loopSlides = [lastSlide, ...slides, firstSlide];

const SecondHeroSectionData = {
  slides,
  loopSlides,
};

export { SecondHeroSectionData };
