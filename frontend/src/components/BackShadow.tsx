"use client";

interface BackShadowProps {
  isActiveState: boolean;
  onClick?: () => void;
}

const BackShadow = ({ isActiveState, onClick }: BackShadowProps) => {
  return (
    <section
    className={`fixed bg-black/50 transition-all ${isActiveState ? "visible opacity-100 backdrop-blur-xl " : "invisible opacity-0"} w-full h-dvh top-0 z-10`}
      onClick={onClick}
    ></section>
  );
};

export default BackShadow;
