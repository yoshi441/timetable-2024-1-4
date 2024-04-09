import type { Metadata } from "next";
import { M_PLUS_Rounded_1c } from "next/font/google";
import "./globals.css";

const inter = M_PLUS_Rounded_1c({
  weight: '400', 
  subsets: ["latin"]
 });

export const metadata: Metadata = {
  title: "2024年度2E掲示板",
  description: "2024年度の2年Eコースの時間割その他情報共有用のHPです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
