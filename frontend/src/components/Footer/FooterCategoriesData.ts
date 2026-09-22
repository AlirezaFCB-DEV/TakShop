interface footerCategoriesItems {
  name: string;
  href: string;
}

interface footerCategoriesProps {
  title: string;
  items: footerCategoriesItems[];
}

type footerCategoriesType = footerCategoriesProps[];

export const footerCategories: footerCategoriesType = [
  {
    title: "دسته بندی",
    items: [
      { name: "موبایل", href: "/products?category=mobile" },
      { name: "لپتاپ", href: "/products?category=laptop" },
      { name: "لوازم جانبی لپتاپ", href: "/products?category=accessory" },
      { name: "دوربین", href: "/products?category=camera" },
      { name: "ساعت هوشمند", href: "/products?category=watch" },
    ],
  },
  {
    title: "لینک ها",
    items: [
      { name: "تماس با ما", href: "/contact-us" },
      { name: "درباره ما", href: "/about-us" },
      { name: "سوالات متداول", href: "/faq" },
      { name: "شرایط و قوانین", href: "/terms" },
      { name: "حریم خصوصی", href: "/privacy-policy" },
    ],
  },
  {
    title: "خدمات",
    items: [
      { name: "پیگیری سفارش", href: "/order-tracking" },
      { name: "گارانتی", href: "/warranty" },
      { name: "روش های پرداخت", href: "/payment-methods" },
      { name: "روش های سفارش", href: "/how-to-order" },
      { name: "خدمات پس از فروش", href: "/after-sales-service" },
    ],
  },
];
