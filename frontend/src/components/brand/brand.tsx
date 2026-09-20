"use client";

import Image from "next/image";

interface brandCompProps {
  src: string;
  alt: string;
}

const PopularBrand = ({ src, alt }: brandCompProps) => {
  return (
    <section className="relative grayscale-100 hover:grayscale-0 transition-all min-w-30 min-h-30 scroll-smooth">
      <Image src={src} alt={alt} fill className="object-contain w-full h-full" draggable={false} />
    </section>
  );
};

export default PopularBrand;
