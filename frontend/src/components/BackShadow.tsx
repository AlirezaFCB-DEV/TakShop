"use client";

interface BackShadowProps {
  isActiveState: boolean;
  onClick?: () => void;
}

const BackShadow = ({ isActiveState, onClick }: BackShadowProps) => {
  return (
    <section
          className={`absolute bg-black transition-all ${isActiveState ? "visible opacity-40" : "invisible opacity-0"} w-full h-dvh top-0 z-0`}
          onClick={onClick}
    ></section>
  );
};

export default BackShadow;
