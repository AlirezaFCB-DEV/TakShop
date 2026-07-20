import type { Metadata } from "next";
import localFont from "next/font/local"
import "./globals.css";

const YekanBakh = localFont({
  src: [
    {
      path :  "../../public/fonts/yekan-bakh-regular.woff",
      weight: "400",
      style : "normal"
    },
    {
      path: "../../public/fonts/yekan-bakh-medium.woff",
      weight: "600",
      style: "normal",
    },
    {
      path :  "../../public/fonts/yekan-bakh-bold.woff",
      weight : "800",
      style : "normal"
    },
    {
      path :  "../../public/fonts/yekan-bakh-heavy.woff",
      weight: "900",
      style : "normal"
    }
  ],
  variable : "--yekan-bakh"
})

export const metadata: Metadata = {
  icons: "/fav_ico.ico",
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
      <body className={`${YekanBakh.className} relative`}>{children}</body>
    </html>
  );
}
