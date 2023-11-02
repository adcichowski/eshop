import { ProviderContext } from "context/ProviderContext";
import React from "react";
import { Montserrat } from "next/font/google";
import "../public/globals.css";
import "swiper/css/bundle";
import { Header } from "components/Header/Header";
import type { Metadata } from "next";
import { baseUrl } from "../constants";
import { getFavoriteProducts } from "lib/actions/favorite";
import { getCartProducts } from "lib/actions/cart";
import { Footer } from "components/Footer/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PosterWall - Buy Poster To Your Wall",
  description: "Welcome to PosterWall",
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL(baseUrl),
  openGraph: {
    title: "PosterWall - Shop with posters",
    description:
      "Discover a world of artistry with our stunning e-shop poster! Immerse yourself in a visual masterpiece that is sure to captivate your senses.",
    images: [
      {
        url: "/_next/image?url=%2Fcarrousel%2Fswiper-1.jpg&w=3840&q=75",
        width: 1200,
        height: 630,
        alt: "PosterWall Shop",
      },
    ],
  },
};

export default function GlobalLayout({ children }: { children: JSX.Element }) {
  const favorites = getFavoriteProducts();
  const data = getCartProducts();
  return (
    <html lang="en" className={`${montserrat.className} h-full`}>
      <ProviderContext favorites={favorites?.products} cart={data?.cart}>
        <body className="flex grow flex-col w-full items-center min-h-screen">
          <Header />
          <main className="max-w-[1440px] w-full flex grow flex-col">
            {children}
          </main>
          <Footer />
          <div id="__next" />
        </body>
      </ProviderContext>
    </html>
  );
}
