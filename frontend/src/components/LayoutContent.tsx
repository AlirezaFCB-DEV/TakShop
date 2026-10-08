"use client";

import { useModal } from "@/contexts/LoginModalContext";
import BottomNavBar from "./BottomNavBar/BottomNavBar";
import NavBar from "./NavBar";
import Footer from "./Footer/Footer";

interface LayoutContentType {
  children: React.ReactNode;
  fontClassName: string;
}

const LayoutContent = ({ children, fontClassName }: LayoutContentType) => {
  const { isModalOpen, closeModal } = useModal();

  const handleBodyClick = () => {
    if (isModalOpen) {
      closeModal();
    }
  };

  return (
    <body
      onClick={handleBodyClick}
      className={`${fontClassName} relative dark:bg-dark-6  `}
    >
      <NavBar />
      <section className="container min-w-0 dark:bg-dark-6">
        {children}
      </section>
      <Footer />
      <BottomNavBar />
    </body>
  );
};

export default LayoutContent;
