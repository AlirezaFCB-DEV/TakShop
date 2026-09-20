"use client";

import Link from "next/link";
import Rail from "../rail/rail";
import { FaChevronLeft } from "react-icons/fa";

interface ContentSectionProps {
  children: React.ReactNode;
  carousel?: boolean;
  title: string;
  description: string;
  viewAllLinkHref?: string;
}

const ContentSection = ({
  children,
  title,
  description,
  carousel = false,
  viewAllLinkHref,
}: ContentSectionProps) => {
  return (
    <section className="flex flex-col gap-4">
      <section className="text-center">
        <section className="relative p-3">
          <h2 className="text-4xl font-bold text-main-500">{title}</h2>
          <section className="absolute h-2 w-1/12 bg-main-500 top-0 left-1/2 -translate-x-1/2 rounded-full"></section>
        </section>
        <p className="text-gray-300 text-xl">{description}</p>
      </section>
      {carousel && viewAllLinkHref ? (
        <>
          <Rail cardSpace={270}>{children}</Rail>
          <section className="flex items-center justify-center">
            <Link
              href={viewAllLinkHref}
              className="max-w-max group hover:text-shadow-sm text-shadow-main-100  text-main-500 text-nowrap flex items-center justify-center gap-2 text-xl transition-all"
            >
              <span>مشاهده همه </span>
              <section className="flex items-center">
                <section className="w-0 group-hover:w-4.5 transition-all h-1 rounded-3xl bg-white dark:bg-dark-6 group-hover:bg-main-500"></section>
                <FaChevronLeft className="text-xl bg-transparent" />
              </section>
            </Link>
          </section>
        </>
      ) : (
        <section className="w-full flex justify-between">{children}</section>
      )}
    </section>
  );
};

export default ContentSection;
