import { slide } from "@/types/slide-props";

const slides: slide[] = [
  {
    imageUrl: "/posters/poster8.png",
    href: "/products?category=headphone",
    alt: "هدفون",
    width: 1878,
    height: 492,
  },
  {
    imageUrl: "/posters/poster9.png",
    href: "/products?category=accessory",
    alt: "لوازم جانبی لپتاپ",
    width: 1867,
    height: 486,
  },
  {
    imageUrl: "/posters/poster10.png",
    href: "/products?category=mobile",
    alt: "موبایل",
    width: 1244,
    height: 350,
  },
  {
    imageUrl: "/posters/poster4.png",
    href: "/products?category=accessory",
    alt: "لوازم جانبی",
    width: 1244,
    height: 350,
  },
  {
    imageUrl: "/posters/poster3.png",
    href: "/products?category=watch",
    alt: "ساعت",
    width: 1244,
    height: 350,
  },
  {
    imageUrl: "/posters/poster6.png",
    href: "/products?category=camera",
    alt: "دوربین",
    width: 1244,
    height: 350,
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
