export interface CategoryCardProps {
  href: string;
  image: string;
  alt: string;
  title: string;
}

type CategoryCardsType = CategoryCardProps[];

export const CategoryCards: CategoryCardsType = [
  {
    href: "/products?category=phone",
    image: "/categoryCards/phone.png",
    alt: "آیفون 17 پرومکس",
    title: "موبایل",
  },
  {
    href: "/products?category=laptop",
    image: "/categoryCards/laptop.png",
    alt: "مک بوک پرو",
    title: "لپتاپ",
  },
  {
    href: "/products?category=accessory",
    image: "/categoryCards/joystick.png",
    alt: "دسته پلی استیشن5",
    title: "لوازم جانبی",
  },
  {
    href: "/products?category=headphone",
    image: "/categoryCards/headset.png",
    alt: "هدست",
    title: "هدست و هدفون",
  },
  {
    href: "/products?category=camera",
    image: "/categoryCards/camera.png",
    alt: "دوربین",
    title: "دوربین",
  },
  {
    href: "/products?category=network",
    image: "/categoryCards/wlan.png",
    alt: "مودم",
    title: "اینترنت",
  },
  {
    href: "/products?category=watch",
    image: "/categoryCards/watch.png",
    alt: "ساعت هوشمند",
    title: "ساعت هوشمند",
  },
];
