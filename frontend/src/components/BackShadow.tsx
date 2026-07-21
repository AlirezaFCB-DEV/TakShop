"use client";

interface BackShadowProps {
  isActiveState: boolean;
}

const BackShadow = ({ isActiveState }: BackShadowProps) => {
  return (
    <section
      className={`absolute bg-black transition-all ${isActiveState ? "visible opacity-40" : "invisible opacity-0"} w-full h-dvh top-0 z-0`}
    ></section>
  );
};

export default BackShadow;
