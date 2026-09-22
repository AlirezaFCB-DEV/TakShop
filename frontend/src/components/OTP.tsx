import Link from "next/link";
import React, { useRef, useState } from "react";

const OTP = () => {
  const [OTP, setOTP] = useState(["", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleOTPChange = (index: number, value: string) => {
    const newOTP = [...OTP];
    newOTP[index] = value.slice(0, 1);
    setOTP(newOTP);

    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const setInputRef = (index: number) => (el: HTMLInputElement | null) => {
    inputRefs.current[index] = el;
  };
  return (
    <>
      <section className="flex gap-4" dir="ltr">
        {OTP.map((digit, index) => (
          <input
            type="tel"
            id={`otp-${index}`}
            key={index}
            value={digit}
            onChange={(e) => handleOTPChange(index, e.target.value)}
            maxLength={1}
            className="otp-code_inp"
            autoComplete="off"
            ref={setInputRef(index)}
            onKeyDown={(e : React.KeyboardEvent<HTMLInputElement>) => {
              if (e.key == "Backspace" && !OTP[index] && index > 0) {
                inputRefs.current[index - 1]?.focus();
              }
            }}
          />
        ))}
      </section>
      <section className="flex items-center justify-between ">
        <p>
          زمان ارسال مجدد کد:
          <span> 1</span>:<span>59</span>
          ثانیه
        </p>

        <Link
          href={"/"}
          className="text-main-300 hover:text-main-500 transition-colors"
        >
          ویرایش شماره موبایل
        </Link>
      </section>
    </>
  );
};

export default OTP;
