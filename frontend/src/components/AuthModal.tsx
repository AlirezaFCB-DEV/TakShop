"use client";

import Link from "next/link";
import PrimaryButton from "./PrimaryButton";
import TakShopLogo from "./TakShopLogo";
import React, { useEffect, useId, useRef, useState } from "react";

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
  const [isPhoneInpFocus, setIsPhoneInpFocus] = useState(true);

  //! Auth States
  const [phoneNumber, setPhoneNumber] = useState("");
  const [OTP, setOTP] = useState(["", "", "", ""]);
  const [isSendOTP, setIsSendOTP] = useState(false);
  const [isValidateOTP, setIsValidateOTP] = useState(false);

  const phoneInpRef = useRef<HTMLInputElement | null>(null);
  const inp_id = useId();
  const checkbox_id = useId();

  const handleOTPChange = (index: number, value: string) => {
    const newOTP = [...OTP];
    newOTP[index] = value.slice(0, 1);
    setOTP(newOTP);

    if (value && index < 3) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput && (nextInput as HTMLInputElement).focus();
    }
  };

  useEffect(() => {
    if (isActive) {
      setTimeout(() => {
        phoneInpRef.current?.focus();
      }, 20);
    }
  }, [isActive]);

  return (
    <section
      className={`absolute w-full h-dvh top-0 flex items-center justify-center z-10 transition-all ${isActive ? "visible opacity-100" : "invisible opacity-0"}`}
    >
      <form
        className="bg-white border-2 border-main-500 rounded-2xl w-1/3 flex flex-col gap-4 py-8 px-12"
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
            <section
              className={`${isPhoneInpFocus ? "bg-main-50" : "bg-[#f9f9f9]"} p-1 shadow-md rounded-lg flex items-center gap-2 overflow-hidden transition-colors`}
            >
              <input
                type="tel"
                className="flex-5 h-full outline-none text-2xl text-main-500"
                placeholder="9xx xxx xxxx"
                maxLength={10}
                id={inp_id}
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
                onFocus={() => setIsPhoneInpFocus(true)}
                onBlur={() => setIsPhoneInpFocus(false)}
                ref={phoneInpRef}
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
                onChange={() => setIsAcceptRules((prevState) => !prevState)}
              />
              <label htmlFor={checkbox_id} className="flex gap-1 ">
                با
                <Link
                  href={"#"}
                  className="transition-colors text-main-500 hover:text-main-700"
                >
                  قوانین و مقررات
                </Link>
                این سایت موافقت میکنم
              </label>
            </section>
          </>
        ) : (
          <>
            <section className="flex gap-4" dir="ltr">
              <input
                type="tel"
                name="otp-num1"
                id="otp-0"
                value={OTP[0]}
                onChange={(e) => handleOTPChange(0, e.target.value)}
                maxLength={1}
                className="otp-code_inp"
                autoComplete="off"
              />
              <input
                type="tel"
                name="otp-num2"
                id="otp-1"
                value={OTP[1]}
                onChange={(e) => handleOTPChange(1, e.target.value)}
                maxLength={1}
                className="otp-code_inp"
                autoComplete="off"
              />
              <input
                type="tel"
                name="otp-num3"
                id="otp-2"
                value={OTP[2]}
                onChange={(e) => handleOTPChange(2, e.target.value)}
                maxLength={1}
                className="otp-code_inp"
                autoComplete="off"
              />
              <input
                type="tel"
                name="otp-num4"
                id="otp-3"
                value={OTP[3]}
                onChange={(e) => handleOTPChange(3, e.target.value)}
                maxLength={1}
                className="otp-code_inp"
                autoComplete="off"
              />
            </section>
            <section className="flex items-center justify-between ">
              <p>
                زمان ارسال مجدد کد:
                <span> 1</span>:<span>59</span>
                ثانیه
              </p>

              <Link
                href={"/"}
                className="text-main-300 hoزمان ارسال مجدد کد: 1:59ثانیهver:text-main-500 transition-colors"
              >
                ویرایش شماره موبایل
              </Link>
            </section>
          </>
        )}

        <PrimaryButton
          type={`${!isSendOTP ? "button" : "submit"}`}
          disabled={isAcceptRules ? false : true}
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
