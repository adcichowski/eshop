import { Layout } from "components/Layout/Layout";
import ClientContext from "context/ClientContext";
import React from "react";
import { Montserrat } from "next/font/google";
import "../public/globals.css";
import "swiper/css";
import "swiper/css/navigation";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});
export default function GlobalLayout({ children }: { children: JSX.Element }) {
  return (
    <html lang="en" className={montserrat.className}>
      <ClientContext>
        <body className="relative mx-auto flex  max-w-[1440px] flex-col">
          <Layout>{children}</Layout>
          <div id="__next"></div>
        </body>
      </ClientContext>
    </html>
  );
}
