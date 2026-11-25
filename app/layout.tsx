import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const vazirMatnFont = localFont({
  src: [
    {
      path: "./fonts/Vazirmatn-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Vazirmatn-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Vazirmatn-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ARIS | خانه‌ای گرم‌تر",
  description: "فروشگاه آنلاین مبلمان و اکسسوری منزل با طراحی مدرن و مینیمال",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fa" dir="rtl" className={vazirMatnFont.className}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
