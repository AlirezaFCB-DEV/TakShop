"use client";

import { useState } from "react";

interface FAQProps {
  title: string;
  description: string;
}

const FAQ = ({ title, description }: FAQProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      className={`bg-[#f5f5f5] dark:bg-dark-7  overflow-hidden cursor-pointer group  transition-shadow rounded-lg  ${isOpen ? "" : "hover:shadow-lg"} `}
      onClick={() => setIsOpen((prevState) => !prevState)}
    >
      <section
        className={`flex justify-between items-center rounded-lg  transition-all duration-300 px-6 py-4 ${isOpen ? "text-main-500 border-b-2 border-main-500 shadow-[0_4px_0_0] shadow-main-100 dark:shadow-main-800" : "text-black "} dark:text-white`}
      >
        <h2 className="desktop-heading1 group-hover:text-main-500 ">{title}</h2>
        <section className="flex items-center relative">
          <section
            className={`absolute h-0.5 w-5 bg-black dark:bg-white ${isOpen ? "-rotate-40" : "rotate-40"} delay-200 left-1.5 group-hover:bg-main-500 transition-all duration-300`}
          ></section>
          <section
            className={`absolute h-0.5 w-5 bg-black dark:bg-white ${isOpen ? "rotate-40" : "-rotate-40"} -left-2 group-hover:bg-main-500 transition-all duration-300`}
          ></section>
        </section>
      </section>

      <section
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"} dark:text-white`}
      >
        <section className="overflow-hidden">
          <p className="text-lg px-6 py-4">{description}</p>
        </section>
      </section>
    </section>
  );
};

export default FAQ;
