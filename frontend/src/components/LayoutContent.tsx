"use client";

import { useModal } from "@/context/LoginModalContext";
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
    <body onClick={handleBodyClick} className={`${fontClassName} relative`}>
      <NavBar />
      {children}
    </body>
  );
};

export default LayoutContent;
