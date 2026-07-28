"use client";

import { useModal } from "@/contexts/LoginModalContext";
import NavBar from "./NavBar";

interface LayoutContentType {
  children: React.ReactNode;
  fontClassName: string;
}

const LayoutContent = ({ children, fontClassName }: LayoutContentType) => {
  const { isModalOpen, closeModal } = useModal();

  const handleBodyClick = (e: React.MouseEvent<HTMLBodyElement>) => {
    if (isModalOpen) {
      closeModal();
    }
  };

  return (
    <body onClick={handleBodyClick} className={`${fontClassName} relative dark:bg-dark-6  `}>
      <NavBar />
      {children}
    </body>
  );
};

export default LayoutContent;
