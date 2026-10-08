"use client";

import PrimaryButton from "../PrimaryButton";

interface FooterNewsletterProps {
  emailInp: string;
}

/**
 * Newsletter, strip at the top of the footer.
 * Center-aligned on mobile, right-aligned on desktop.
 */
const FooterNewsletter = ({ emailInp }: FooterNewsletterProps) => {
  return (
    <section className="bg-main-900 text-gray-50">
      <section className="flex w-full flex-col items-center gap-4 px-4 py-4 text-center sm:px-8 lg:flex-row lg:px-20 lg:py-2 lg:text-right">
        <section className="flex-1">
          <h3 className="text-xl md:text-2xl">خبرنامه</h3>
          <p>
            ایمیلتو توی باکس جلویی برام بنویس تا از اخبار جا نمونی!
          </p>
        </section>
        <section className="w-full min-w-0 lg:flex-1">
          <section className="flex min-w-0 rounded-md border border-gray-50 p-1">
            <input
              type="email"
              name="email"
              id={emailInp}
              placeholder="لطفا ایمیل خود را وارد کنید..."
              className="w-full min-w-0 flex-1 px-2 text-lg outline-none"
            />
            <PrimaryButton
              variant="custom"
              className="px-4 py-2 rounded-md font-bold text-lg"
            >
              ثبت ایمیل
            </PrimaryButton>
          </section>
        </section>
      </section>
    </section>
  );
};

export default FooterNewsletter;
