"use client";

import { PostProps } from "@/types/post-props";
import Image from "next/image";
import Link from "next/link";
import { BsNewspaper } from "react-icons/bs";
import { FaChevronLeft } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";

const Post = ({ url, image, category, date, title }: PostProps) => {
  return (
    <Link href={url} className="group" draggable={false}>
      <section className=" w-65 h-80 pb-1  bg-[#f9f9f9] dark:bg-dark-7 dark:text-white text-black rounded-2xl overflow-hidden flex flex-col justify-between group-hover:shadow-lg transition-shadow">
        <section className="w-full h-35 relative">
          <Image
            src={image.src}
            alt={image.alt}
            className="absolute object-cover"
            fill
            draggable={false}
          />
        </section>
        <h3 className="text-center desktop-heading2 group-hover:text-main-500 transition-colors px-2">
          {title}
        </h3>
        <section className="flex items-center justify-between px-4">
          <section className="flex items-center text-lg gap-2">
            <MdOutlineDateRange />
            <span>{date}</span>
          </section>
          <section className="flex items-center text-lg gap-2">
            <BsNewspaper />
            <span>{category}</span>
          </section>
        </section>

        <button className=" group-hover:text-shadow-sm text-shadow-main-100  text-main-500 text-nowrap flex items-center justify-center gap-2 text-xl transition-all cursor-pointer">
          <span>ادامه مطلب </span>

          <FaChevronLeft className="text-xl bg-transparent" />
        </button>
      </section>
    </Link>
  );
};

export default Post;
