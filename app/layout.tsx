import ClientContext from "context/ClientContext";
import React from "react";
import { Montserrat } from "next/font/google";
import "../public/globals.css";
import "swiper/css/bundle";
import { Header } from "components/Header/Header";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});
export default function GlobalLayout({ children }: { children: JSX.Element }) {
  return (
    <html lang="en" className={`${montserrat.className}`}>
      <ClientContext>
        <body className="flex grow flex-col w-full items-center relative min-h-screen">
          <Header />
          <main className="max-w-[1440px] w-full flex grow flex-col">
            {children}
          </main>
          <div id="__next" className="absolute left-0"></div>
        </body>
      </ClientContext>
    </html>
  );
}
