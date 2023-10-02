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
    <html lang="en" className={`${montserrat.className} w-full`}>
      <ClientContext>
        <body className="flex grow flex-col w-full items-center">
          <Header />
          <main className="max-w-[1440px] w-full flex min-h-screen flex-col">
            {children}
          </main>
          <div id="__next"></div>
        </body>
      </ClientContext>
    </html>
  );
}
