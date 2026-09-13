interface slides {
  imageUrl: string;
  href: string;
  alt: string;
}

const slides: slides[] = [
  {
    imageUrl: "/camera-poster.jpeg",
    href: "/products?category=camera",
    alt: "دوربین",
  },
  {
    imageUrl: "/headset-poster.png",
    href: "/products?category=headphone",
    alt: "هدفون",
  },
  {
    imageUrl: "/watch-poster.png",
    href: "/products?category=watch",
    alt: "ساعت",
  },
  {
    imageUrl: "/phone-poster.png",
    href: "/products?category=mobile",
    alt: "موبایل",
  },
  {
    imageUrl: "/laptop_tools-poster.png",
    href: "/products?category=accessory",
    alt: "لوازم جانبی لپتاپ",
  },
];

const firstSlide = slides[0];
const lastSlide = slides[slides.length - 1];

const loopSlides = [lastSlide, ...slides, firstSlide];

export {slides , loopSlides}