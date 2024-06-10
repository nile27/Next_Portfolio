import type { Metadata } from "next";

import { Noto_Sans } from "next/font/google";
import RecoilRootWrapper from "./RecoilWrapper";
import { ThemeProvider } from "@/components/Provider";

import "./globals.css";

const notoSansKr = Noto_Sans({
  subsets: ["latin"],
  variable: "--noto_sans",
  weight: ["100", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Mingyu's Portfolio",
  description: "안녕하세요. 프론트엔드 개발자 임민규의 포트폴리오 입니다.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Mingyu's Portfolio",
    description: "안녕하세요. 프론트엔드 개발자 임민규의 포트폴리오 입니다.",
    url: "https://mingyu-portfolio.vercel.app/",
    siteName: "Mingyu's Portfolio",
    images: [
      {
        url: "https://github.com/nile27/Next_Portfolio/assets/114140840/246b5222-5752-4818-aa0d-45697fda29a1", // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],

    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSansKr.variable} `}>
        <RecoilRootWrapper>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </RecoilRootWrapper>
      </body>
    </html>
  );
}
