"use client";

import { useModal } from "@/context/LoginModalContext";

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
      {children}
    </body>
  );
};

export default LayoutContent;
