"use client";

import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import { BsBoxSeam } from "react-icons/bs";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { LuGift } from "react-icons/lu";
import { MdNotificationsNone } from "react-icons/md";
import { RxExit } from "react-icons/rx";

interface userMenuProps {
  isActive: boolean;
}

const UserMenu = ({ isActive }: userMenuProps) => {
  return (
    <section
      className={`${isActive ? "visible opacity-100 translate-y" : "-translate-y-4 opacity-0 invisible"} bg-white desktop-heading2 w-1/5 absolute left-0 rounded-b-xl rounded-tl-lg border-main-500 border-x-2 border-b-2 top-full cursor-default text-black transition-all dark:bg-dark-8 dark:text-white`}
    >
      <ul>
        <Link href={"/user/profile"} className="group">
          <li className="user-dropdown_item">
            <AiOutlineUser className="user-dropdown_icon" />
            <span>حساب کاربری</span>
          </li>
        </Link>
        <Link href={"/user/notifications"} className="group">
          <li className="user-dropdown_item">
            <MdNotificationsNone className="user-dropdown_icon" />
            <span>پیغام ها</span>
          </li>
        </Link>
        <Link href={"/user/favorites"} className="group">
          <li className="user-dropdown_item">
            <FaRegHeart className="user-dropdown_icon" />
            <span>دلخواه شما</span>
          </li>
        </Link>
        <Link href={"/user/comments"} className="group">
          <li className="user-dropdown_item">
            <FaRegComment className="scale-x-[-1] user-dropdown_icon" />
            <span>نظرات شما</span>
          </li>
        </Link>
        <Link href={"/user/orders"} className="group">
          <li className="user-dropdown_item">
            <BsBoxSeam className="user-dropdown_icon" />
            <span>سفارش های شما</span>
          </li>
        </Link>
        <Link href={"/user/gift-cards"} className="group">
          <li className="user-dropdown_item">
            <LuGift className="user-dropdown_icon" />
            <span>کارت های هدیه</span>
          </li>
        </Link>
        <Link href={"/user/account"} className="group">
          <li className="user-dropdown_item">
            <FiSettings className="user-dropdown_icon" />
            <span>تنظیمات حساب کاربری</span>
          </li>
        </Link>
        <Link href={"/user/exit-account"} className="group">
          <li className="user-dropdown_item group-hover:text-red-600">
            <RxExit className="user-dropdown_icon" />
            <span>خروج از حساب کاربری</span>
          </li>
        </Link>
      </ul>
    </section>
  );
};

export default UserMenu;
