import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { HomeDescription } from "@/components/home/descrition";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "마르투스 OMG",
  description: "OMG 테스트를 통해 나의 성향을 알아보자!",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "https://omg.ll3.kr/og.jpeg",
        width: 600,
        height: 600,
        alt: "마르투스 OMG",
      },
    ],
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko">
      <body className={cn(inter.className, "bg-gray-100 flex")}>
        <div className="w-full max-md:hidden">
          <HomeDescription />
        </div>
        <div className="min-h-screen md:w-[420px] lg:-translate-x-24 md:translate-x-0 max-md:w-full bg-white min-sm:w-full">
          {children}
        </div>
      </body>
    </html>
  );
}
