"use client";

import PrimaryButton from "./PrimaryButton";
import TakShopLogo from "./TakShopLogo";
import { useEffect, useRef, useState } from "react";
import OTP from "./OTP";
import PhoneNumber from "./PhoneNumber";
import RulesCheckBox from "./RulesCheckBox";

interface AuthModalProps {
  isActive: boolean;
  setIsLogin: (isLogin: boolean) => void;
  closeModalMethod: () => void;
}

const AuthModal = ({
  isActive,
  setIsLogin,
  closeModalMethod,
}: AuthModalProps) => {
  //! Ui States
  const [isAcceptRules, setIsAcceptRules] = useState(false);

  //! Auth States
  const [isSendOTP, setIsSendOTP] = useState(false);
  const [isValidateOTP, setIsValidateOTP] = useState(false);

  const phoneInpRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isActive) {
      setTimeout(() => {
        phoneInpRef.current?.focus();
      }, 20);
    }
  }, [isActive]);

  return (
    <section
      className={`absolute w-full h-dvh top-0 flex items-center justify-center z-20 transition-all ${isActive ? "visible opacity-100" : "invisible opacity-0"}`}
    >
      <form
        className="bg-white dark:bg-dark-8 dark:text-white border-2 border-main-500 rounded-2xl w-1/3 flex flex-col gap-4 py-8 px-12"
        onClick={(e) => e.stopPropagation()}
        onSubmit={(e) => {
          e.preventDefault();
          if (isValidateOTP) {
            closeModalMethod();
            setIsLogin(true);
          }
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

        {!isSendOTP ? (
          <>
            <PhoneNumber ref={phoneInpRef} />
            <RulesCheckBox setIsAcceptRules={setIsAcceptRules} />
          </>
        ) : (
          <OTP />
        )}

        <PrimaryButton
          type={`${!isSendOTP ? "button" : "submit"}`}
          disabled={!isAcceptRules}
          className="disabled:bg-main-300"
          onClick={(e) => {
            if (isSendOTP) {
              setIsValidateOTP(true);
            } else {
              setIsSendOTP(true);
            }
          }}
        >
          {!isSendOTP ? "ورود" : "ثبت نهایی"}
        </PrimaryButton>
      </form>
    </section>
  );
};

export default AuthModal;
