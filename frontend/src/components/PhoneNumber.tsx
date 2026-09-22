import React, { useId, useState } from "react";

interface phoneNumberProps {
    ref: React.Ref<HTMLInputElement > | null
}

const PhoneNumber = ({ref} : phoneNumberProps) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isPhoneInpFocus, setIsPhoneInpFocus] = useState(true);

  const inp_id = useId();

  return (
    <section
      className={`${isPhoneInpFocus ? "bg-main-50 dark:bg-dark-6" : "bg-[#f9f9f9] dark:bg-dark-7"} p-1 shadow-md rounded-lg flex items-center gap-2 overflow-hidden transition-colors`}
    >
      <input
        type="tel"
        className="flex-5 h-full outline-none text-2xl text-main-500 dark:text-white"
        placeholder="9xx xxx xxxx"
        maxLength={10}
        id={inp_id}
        onChange={(e) => setPhoneNumber(e.target.value)}
        value={phoneNumber}
        onFocus={() => setIsPhoneInpFocus(true)}
        onBlur={() => setIsPhoneInpFocus(false)}
        ref={ref}
      />
      <label htmlFor={inp_id}>
        <span className="flex items-center text-main-300 dark:text-white text-2xl py-2.5 px-2 flex-1 border-r-2">
          98+
        </span>
      </label>
    </section>
  );
};

export default PhoneNumber;
