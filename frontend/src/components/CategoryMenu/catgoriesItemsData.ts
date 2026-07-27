export interface shortByItemsProps {
  shortByTitle: string;
  items: { name: string; href: string }[];
}

interface categoriesItemsProps {
  title: string;
  items: shortByItemsProps[];
}

type categoriesItemsType = categoriesItemsProps[];

const categoriesItems: categoriesItemsType = [
  {
    title: "موبایل",
    items: [
      {
        shortByTitle: "مرتب‌سازی بر اساس برند",
        items: [
          { name: "آیفون", href: "/products?category=mobile&brand=apple" },
          { name: "سامسونگ", href: "/products?category=mobile&brand=samsung" },
          { name: "شیائومی", href: "/products?category=mobile&brand=xiaomi" },
          { name: "هواوی", href: "/products?category=mobile&brand=huawei" },
          { name: "آنر", href: "/products?category=mobile&brand=honor" },
          { name: "ریلمی", href: "/products?category=mobile&brand=realme" },
          { name: "نوکیا", href: "/products?category=mobile&brand=nokia" },
        ],
      },
      {
        shortByTitle: "مرتب‌سازی بر اساس قیمت",
        items: [
          { name: "زیر ۵ میلیون تومان", href: "/products?category=mobile&price=0-5" },
          { name: "بین ۵ تا ۷ میلیون تومان", href: "/products?category=mobile&price=5-7" },
          { name: "بین ۷ تا ۱۰ میلیون تومان", href: "/products?category=mobile&price=7-10" },
          { name: "بین ۱۰ تا ۱۵ میلیون تومان", href: "/products?category=mobile&price=10-15" },
          { name: "بین ۱۵ تا ۲۰ میلیون تومان", href: "/products?category=mobile&price=15-20" },
          { name: "بین ۲۰ تا ۳۰ میلیون تومان", href: "/products?category=mobile&price=20-30" },
          { name: "بالای ۳۰ میلیون تومان", href: "/products?category=mobile&price=30+" },
        ],
      },
      {
        shortByTitle: "مرتب‌سازی بر اساس عملکرد",
        items: [
          { name: "آیفون", href: "/products?category=mobile&performance=iphone" },
          { name: "سامسونگ", href: "/products?category=mobile&performance=samsung" },
          { name: "شیائومی", href: "/products?category=mobile&performance=xiaomi" },
          { name: "هواوی", href: "/products?category=mobile&performance=huawei" },
          { name: "آنر", href: "/products?category=mobile&performance=honor" },
          { name: "ریلمی", href: "/products?category=mobile&performance=realme" },
          { name: "نوکیا", href: "/products?category=mobile&performance=nokia" },
        ],
      },
    ],
  },
  {
    title: "لپتاپ",
    items: [
      {
        shortByTitle: "مرتب‌سازی بر اساس برند",
        items: [
          { name: "ایسوس", href: "/products?category=laptop&brand=asus" },
          { name: "لنوو", href: "/products?category=laptop&brand=lenovo" },
          { name: "اچ‌پی", href: "/products?category=laptop&brand=hp" },
          { name: "دل", href: "/products?category=laptop&brand=dell" },
          { name: "اپل", href: "/products?category=laptop&brand=apple" },
          { name: "مایکروسافت", href: "/products?category=laptop&brand=microsoft" },
          { name: "ایسر", href: "/products?category=laptop&brand=acer" },
          { name: "ام‌اس‌آی", href: "/products?category=laptop&brand=msi" },
          { name: "گیمینگ", href: "/products?category=laptop&brand=gaming" },
        ],
      },
      {
        shortByTitle: "مرتب‌سازی بر اساس قیمت",
        items: [
          { name: "زیر ۱۰ میلیون تومان", href: "/products?category=laptop&price=0-10" },
          { name: "بین ۱۰ تا ۲۰ میلیون تومان", href: "/products?category=laptop&price=10-20" },
          { name: "بین ۲۰ تا ۳۰ میلیون تومان", href: "/products?category=laptop&price=20-30" },
          { name: "بین ۳۰ تا ۴۰ میلیون تومان", href: "/products?category=laptop&price=30-40" },
          { name: "بالای ۴۰ میلیون تومان", href: "/products?category=laptop&price=40+" },
        ],
      },
      {
        shortByTitle: "مرتب‌سازی بر اساس پردازنده و رم",
        items: [
          { name: "اینتل Core i3", href: "/products?category=laptop&cpu=i3" },
          { name: "اینتل Core i5", href: "/products?category=laptop&cpu=i5" },
          { name: "اینتل Core i7", href: "/products?category=laptop&cpu=i7" },
          { name: "اینتل Core i9", href: "/products?category=laptop&cpu=i9" },
          { name: "AMD Ryzen 3", href: "/products?category=laptop&cpu=ryzen3" },
          { name: "AMD Ryzen 5", href: "/products?category=laptop&cpu=ryzen5" },
          { name: "AMD Ryzen 7", href: "/products?category=laptop&cpu=ryzen7" },
          { name: "رم ۸ گیگابایت", href: "/products?category=laptop&ram=8" },
          { name: "رم ۱۶ گیگابایت", href: "/products?category=laptop&ram=16" },
          { name: "رم ۳۲ گیگابایت", href: "/products?category=laptop&ram=32" },
        ],
      },
    ],
  },
  {
    title: "لوازم جانبی لپتاپ",
    items: [
      {
        shortByTitle: "مرتب‌سازی بر اساس برند",
        items: [
          { name: "لاجیتک", href: "/products?category=accessory&brand=logitech" },
          { name: "ریزر", href: "/products?category=accessory&brand=razer" },
          { name: "استیل‌سریز", href: "/products?category=accessory&brand=steelseries" },
          { name: "کورسیر", href: "/products?category=accessory&brand=corsair" },
          { name: "ایسوس", href: "/products?category=accessory&brand=asus" },
          { name: "اچ‌پی", href: "/products?category=accessory&brand=hp" },
          { name: "دل", href: "/products?category=accessory&brand=dell" },
          { name: "اپل", href: "/products?category=accessory&brand=apple" },
          { name: "مایکروسافت", href: "/products?category=accessory&brand=microsoft" },
        ],
      },
      {
        shortByTitle: "مرتب‌سازی بر اساس قیمت",
        items: [
          { name: "زیر ۱ میلیون تومان", href: "/products?category=accessory&price=0-1" },
          { name: "بین ۱ تا ۳ میلیون تومان", href: "/products?category=accessory&price=1-3" },
          { name: "بین ۳ تا ۵ میلیون تومان", href: "/products?category=accessory&price=3-5" },
          { name: "بین ۵ تا ۱۰ میلیون تومان", href: "/products?category=accessory&price=5-10" },
          { name: "بالای ۱۰ میلیون تومان", href: "/products?category=accessory&price=10+" },
        ],
      },
      {
        shortByTitle: "مرتب‌سازی بر اساس نوع محصول",
        items: [
          { name: "موس", href: "/products?category=accessory&type=mouse" },
          { name: "کیبورد", href: "/products?category=accessory&type=keyboard" },
          { name: "کیف و کاور", href: "/products?category=accessory&type=case" },
          { name: "هاب و داک", href: "/products?category=accessory&type=hub" },
          { name: "کابل و آداپتور", href: "/products?category=accessory&type=cable" },
          { name: "پایه و خنک‌کننده", href: "/products?category=accessory&type=stand" },
          { name: "محافظ صفحه", href: "/products?category=accessory&type=screen-protector" },
          { name: "کیس و باگ", href: "/products?category=accessory&type=bag" },
        ],
      },
    ],
  },
  {
    title: "هدست و هدفون",
    items: [
      {
        shortByTitle: "مرتب‌سازی بر اساس برند",
        items: [
          { name: "سونی", href: "/products?category=headphone&brand=sony" },
          { name: "باس", href: "/products?category=headphone&brand=bose" },
          { name: "جی‌بی‌ال", href: "/products?category=headphone&brand=jbl" },
          { name: "اپل", href: "/products?category=headphone&brand=apple" },
          { name: "شیائومی", href: "/products?category=headphone&brand=xiaomi" },
          { name: "سامسونگ", href: "/products?category=headphone&brand=samsung" },
          { name: "ریزر", href: "/products?category=headphone&brand=razer" },
          { name: "لاجیتک", href: "/products?category=headphone&brand=logitech" },
          { name: "استیل‌سریز", href: "/products?category=headphone&brand=steelseries" },
        ],
      },
      {
        shortByTitle: "مرتب‌سازی بر اساس قیمت",
        items: [
          { name: "زیر ۵۰۰ هزار تومان", href: "/products?category=headphone&price=0-0.5" },
          { name: "۵۰۰ هزار تا ۱ میلیون تومان", href: "/products?category=headphone&price=0.5-1" },
          { name: "۱ تا ۲ میلیون تومان", href: "/products?category=headphone&price=1-2" },
          { name: "۲ تا ۵ میلیون تومان", href: "/products?category=headphone&price=2-5" },
          { name: "بالای ۵ میلیون تومان", href: "/products?category=headphone&price=5+" },
        ],
      },
      {
        shortByTitle: "مرتب‌سازی بر اساس ویژگی‌ها",
        items: [
          { name: "بی‌سیم (بلوتوث)", href: "/products?category=headphone&feature=wireless" },
          { name: "با سیم", href: "/products?category=headphone&feature=wired" },
          { name: "دارای حذف نویز فعال", href: "/products?category=headphone&feature=anc" },
          { name: "گیمینگ", href: "/products?category=headphone&feature=gaming" },
          { name: "ورزشی و ضدآب", href: "/products?category=headphone&feature=sport" },
          { name: "هدفون روی گوشی", href: "/products?category=headphone&feature=on-ear" },
          { name: "هدست دورگوشی", href: "/products?category=headphone&feature=over-ear" },
          { name: "میکروفون جداشدنی", href: "/products?category=headphone&feature=detachable-mic" },
        ],
      },
    ],
  },
  {
    title: "دوربین",
    items: [
      {
        shortByTitle: "مرتب‌سازی بر اساس برند",
        items: [
          { name: "کانن", href: "/products?category=camera&brand=canon" },
          { name: "نیکون", href: "/products?category=camera&brand=nikon" },
          { name: "سونی", href: "/products?category=camera&brand=sony" },
          { name: "فوجی‌فیلم", href: "/products?category=camera&brand=fujifilm" },
          { name: "پاناسونیک", href: "/products?category=camera&brand=panasonic" },
          { name: "المپوس", href: "/products?category=camera&brand=olympus" },
          { name: "لایکا", href: "/products?category=camera&brand=leica" },
          { name: "گوپرو", href: "/products?category=camera&brand=gopro" },
        ],
      },
      {
        shortByTitle: "مرتب‌سازی بر اساس قیمت",
        items: [
          { name: "زیر ۵ میلیون تومان", href: "/products?category=camera&price=0-5" },
          { name: "۵ تا ۱۰ میلیون تومان", href: "/products?category=camera&price=5-10" },
          { name: "۱۰ تا ۲۰ میلیون تومان", href: "/products?category=camera&price=10-20" },
          { name: "۲۰ تا ۳۰ میلیون تومان", href: "/products?category=camera&price=20-30" },
          { name: "بالای ۳۰ میلیون تومان", href: "/products?category=camera&price=30+" },
        ],
      },
      {
        shortByTitle: "مرتب‌سازی بر اساس نوع و رزولوشن",
        items: [
          { name: "دوربین دیجیتال کامپکت", href: "/products?category=camera&type=compact" },
          { name: "دوربین بدون آینه (Mirrorless)", href: "/products?category=camera&type=mirrorless" },
          { name: "دوربین آینه‌ای (DSLR)", href: "/products?category=camera&type=dslr" },
          { name: "دوربین اکشن", href: "/products?category=camera&type=action" },
          { name: "۲۰ مگاپیکسل به بالا", href: "/products?category=camera&resolution=20+" },
          { name: "۳۰ مگاپیکسل به بالا", href: "/products?category=camera&resolution=30+" },
          { name: "۴۰ مگاپیکسل به بالا", href: "/products?category=camera&resolution=40+" },
          { name: "قابلیت فیلمبرداری ۴K", href: "/products?category=camera&feature=4k" },
        ],
      },
    ],
  },

  {
    title: "اینترنت",
    items: [
      {
        shortByTitle: "مرتب‌سازی بر اساس برند",
        items: [
          { name: "تندا", href: "/products?category=network&brand=tenda" },
          { name: "دیلینک", href: "/products?category=network&brand=dlink" },
          { name: "تی‌پی‌لینک", href: "/products?category=network&brand=tplink" },
          { name: "ایسوس", href: "/products?category=network&brand=asus" },
          { name: "نت‌گیر", href: "/products?category=network&brand=netgear" },
          { name: "سیسکو", href: "/products?category=network&brand=cisco" },
          { name: "هواوی", href: "/products?category=network&brand=huawei" },
          { name: "شیائومی", href: "/products?category=network&brand=xiaomi" },
        ],
      },
      {
        shortByTitle: "مرتب‌سازی بر اساس قیمت",
        items: [
          { name: "زیر ۱ میلیون تومان", href: "/products?category=network&price=0-1" },
          { name: "۱ تا ۳ میلیون تومان", href: "/products?category=network&price=1-3" },
          { name: "۳ تا ۵ میلیون تومان", href: "/products?category=network&price=3-5" },
          { name: "۵ تا ۱۰ میلیون تومان", href: "/products?category=network&price=5-10" },
          { name: "بالای ۱۰ میلیون تومان", href: "/products?category=network&price=10+" },
        ],
      },
      {
        shortByTitle: "مرتب‌سازی بر اساس نوع و کاربرد",
        items: [
          { name: "مودم", href: "/products?category=network&type=modem" },
          { name: "روتر وای‌فای", href: "/products?category=network&type=router" },
          { name: "سوییچ شبکه", href: "/products?category=network&type=switch" },
          { name: "اکسس پوینت", href: "/products?category=network&type=access-point" },
          { name: "پاورلاین", href: "/products?category=network&type=powerline" },
          { name: "مبدل فیبر نوری", href: "/products?category=network&type=converter" },
          { name: "سیم‌کارت‌خور (مروگر)", href: "/products?category=network&type=mobile-router" },
          { name: "قابل حمل (پاکت‌سایز)", href: "/products?category=network&type=pocket" },
        ],
      },
    ],
  },
  {
    title: "ساعت هوشمند",
    items: [
      {
        shortByTitle: "مرتب‌سازی بر اساس برند",
        items: [
          { name: "اپل", href: "/products?category=watch&brand=apple" },
          { name: "سامسونگ", href: "/products?category=watch&brand=samsung" },
          { name: "گارمین", href: "/products?category=watch&brand=garmin" },
          { name: "شیائومی", href: "/products?category=watch&brand=xiaomi" },
          { name: "هواوی", href: "/products?category=watch&brand=huawei" },
          { name: "فیت‌بیت", href: "/products?category=watch&brand=fitbit" },
          { name: "امازون", href: "/products?category=watch&brand=amazon" },
          { name: "سوپ", href: "/products?category=watch&brand=sup" },
        ],
      },
      {
        shortByTitle: "مرتب‌سازی بر اساس قیمت",
        items: [
          { name: "زیر ۳ میلیون تومان", href: "/products?category=watch&price=0-3" },
          { name: "۳ تا ۷ میلیون تومان", href: "/products?category=watch&price=3-7" },
          { name: "۷ تا ۱۲ میلیون تومان", href: "/products?category=watch&price=7-12" },
          { name: "۱۲ تا ۲۰ میلیون تومان", href: "/products?category=watch&price=12-20" },
          { name: "بالای ۲۰ میلیون تومان", href: "/products?category=watch&price=20+" },
        ],
      },
      {
        shortByTitle: "مرتب‌سازی بر اساس ویژگی‌ها",
        items: [
          { name: "دارای GPS", href: "/products?category=watch&feature=gps" },
          { name: "ضربان‌سنج و سنجش اکسیژن خون", href: "/products?category=watch&feature=heart-rate" },
          { name: "ضدآب (شنا)", href: "/products?category=watch&feature=waterproof" },
          { name: "نمایشگر AMOLED", href: "/products?category=watch&feature=amoled" },
          { name: "باتری طولانی‌مدت", href: "/products?category=watch&feature=long-battery" },
          { name: "مجهز به eSIM", href: "/products?category=watch&feature=esim" },
          { name: "مناسب ورزشی", href: "/products?category=watch&feature=sports" },
          { name: "دوربین نداشته باشد", href: "/products?category=watch&feature=no-camera" },
        ],
      },
    ],
  },
];

export default categoriesItems;