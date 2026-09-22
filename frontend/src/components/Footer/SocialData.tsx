import { FaInstagram } from "react-icons/fa";
import { LiaFacebookSquare } from "react-icons/lia";
import { PiTelegramLogo } from "react-icons/pi";
import { TbBrandX } from "react-icons/tb";

export interface socialProps {
  href: string;
  icon: React.ReactNode;
}

export const socials: socialProps[] = [
  {
    href: "https://t.me/TakShop",
    icon: <PiTelegramLogo className="footer-icon" />,
  },
  {
    href: "https://instagram.com/TakShop",
    icon: <FaInstagram className="footer-icon" />,
  },
  { href: "https://x.com/TakShop", icon: <TbBrandX className="footer-icon" /> },
  {
    href: "https://facebook.com/TakShop",
    icon: <LiaFacebookSquare className="footer-icon" />,
  },
];
