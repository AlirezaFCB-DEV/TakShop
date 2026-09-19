"use client";

import Rail from "../rail/rail";

interface ContentSectionProps {
  children: React.ReactNode;
  carousel?: boolean;
  title: string;
  description: string;
}

const ContentSection = ({
  children,
  title,
  description,
  carousel = false,
}: ContentSectionProps) => {
  return (
    <section className="flex flex-col gap-4">
      <section className="text-center">
        <section className="relative p-3">
          <h2 className="text-4xl font-bold text-main-500">{title}</h2>
          <section className="absolute h-2 w-1/12 bg-main-500 top-0 left-1/2 -translate-x-1/2 rounded-full"></section>
        </section>
        <p className="text-gray-500 text-xl">{description}</p>
      </section>
      {carousel ? (
        <Rail cardSpace={270}>{children}</Rail>
      ) : (
        <section className="flex gap-4">{children}</section>
      )}
    </section>
  );
};

export default ContentSection;
