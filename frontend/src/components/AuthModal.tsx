"use client";

import Link from "next/link";
import PrimaryButton from "./PrimaryButton";
import TakShopLogo from "./TakShopLogo";
import { useId } from "react";

interface AuthModalProps {
  isActive: boolean;
  setIsLogin: (isLogin: boolean) => void;
  closeModalMethod: () => void;
}

const AuthModal = ({isActive , setIsLogin , closeModalMethod} : AuthModalProps) => {
  const inp_id = useId();
  const checkbox_id = useId();

  return (
    <section
      className={`absolute w-full h-dvh top-0 flex items-center justify-center z-10 transition-all ${isActive ? "visible opacity-100" : "invisible opacity-0"}`}
    >
      <form
        className="bg-white border-2 border-main-500 rounded-2xl w-1/3 flex flex-col gap-4 py-8 px-12"
        onClick={(e) => e.stopPropagation()}
        onSubmit={(e) => {
          e.preventDefault();
          closeModalMethod();
        }}
      >
        <h2 className="flex justify-center ">
          <TakShopLogo />
        </h2>
        <h3 className="desktop-heading2 flex justify-center">ورود / ثبت نام</h3>
        <section className="text-lg">
          <p>سلام به تک شاپ خوش اومدید!</p>
          <p>برای ورود لطفا شماره موبایل خود را وارد کنید</p>
        </section>

        <section className="p-1 bg-[#f9f9f9] shadow-md rounded-lg flex items-center gap-2 overflow-hidden">
          <input
            type="tel"
            className="flex-5 h-full outline-none text-2xl text-main-500"
            placeholder="9xx xxx xxxx"
            maxLength={10}
            id={inp_id}
          />
          <label htmlFor={inp_id}>
            <span className="flex items-center text-main-300 text-2xl py-2.5 px-2 flex-1 border-r-2">
              98+
            </span>
          </label>
        </section>
        <section className="flex items-center gap-2 text-lg ">
          <input
            type="checkbox"
            name="rememberMe"
            id={checkbox_id}
            className="accent-main-500 cursor-pointer w-6 h-6"
          />
          <label htmlFor={checkbox_id} className="flex gap-1 ">
            با
            <Link
              href={"#"}
              className="transition-colors text-main-500 hover:text-main-700"
            >
              {" "}
              قوانین و مقررات
            </Link>
            این سایت موافقت میکنم
          </label>
        </section>

        <PrimaryButton type="submit">ورود</PrimaryButton>
      </form>
    </section>
  );
};

export default AuthModal;
