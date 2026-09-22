import type { Metadata } from "next";
import { useModal, ModalProvider } from "@/contexts/LoginModalContext";
import localFont from "next/font/local";
import "./globals.css";
import LayoutContent from "@/components/LayoutContent";
import { ThemeProvider } from "@/providers/ThemeProvider";

const YekanBakh = localFont({
  src: [
    {
      path: "../../public/fonts/yekan-bakh-regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/yekan-bakh-medium.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/yekan-bakh-bold.woff",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/yekan-bakh-heavy.woff",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--yekan-bakh",
});

export const metadata: Metadata = {
  icons: "favicon.ico",
  title: "TakShop",
  description: "A amazing shop for you .",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      className={`${YekanBakh.variable} h-full antialiased`}
      dir="rtl"
    >
      <ThemeProvider>
        <ModalProvider>
          <LayoutContent fontClassName={YekanBakh.className}>
            {children}
          </LayoutContent>
        </ModalProvider>
      </ThemeProvider>
    </html>
  );
}
