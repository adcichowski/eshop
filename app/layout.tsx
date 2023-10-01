import ClientContext from "context/ClientContext";
import React from "react";
import { Montserrat } from "next/font/google";
import "../public/globals.css";
import "swiper/css";
import "swiper/css/navigation";
import { Header } from "components/Header/Header";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});
export default function GlobalLayout({ children }: { children: JSX.Element }) {
  return (
    <html lang="en" className={`${montserrat.className} w-full`}>
      <ClientContext>
        <body className="flex grow flex-col items-center">
          <Header />
          <main className="flex grow flex-col max-w-[1440px]">{children}</main>
          <div id="__next"></div>
        </body>
      </ClientContext>
    </html>
  );
}
