import Link from "next/link";
import { useId } from "react";

interface RulesCheckBoxProps {
    setIsAcceptRules: (value: boolean | ((prev: boolean) => boolean)) => void;
}

const RulesCheckBox = ({setIsAcceptRules} : RulesCheckBoxProps) => {
  const checkbox_id = useId();
    
  return (
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
  );
};

export default RulesCheckBox;
