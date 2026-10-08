import Link from "next/link";
import Rail from "../rail/rail";
import { FaChevronLeft } from "react-icons/fa";
import SectionHeader from "../SectionHeader";

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
      <SectionHeader title={title} description={description} />
      {carousel && viewAllLinkHref ? (
        <>
          <Rail cardSpace={270}>{children}</Rail>
          <section className="flex items-center justify-center">
            <Link
              href={viewAllLinkHref}
              className="max-w-max group hover:text-shadow-sm text-shadow-main-100  dark:text-shadow-main-600 text-main-500 text-nowrap flex items-center justify-center gap-2 text-xl transition-all"
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
        <section className="w-full flex flex-wrap items-center justify-center gap-4 md:gap-0 md:justify-between">
          {children}
        </section>
      )}
    </section>
  );
};

export default ContentSection;
