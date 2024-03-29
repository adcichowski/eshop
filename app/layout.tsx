import { ProviderContext } from "context/ProviderContext";
import React from "react";
import { Inter } from "next/font/google";
import "../public/globals.css";
import "swiper/css/bundle";
import { Header } from "components/Header/Header";
import type { Metadata } from "next";
import { getFavoriteProducts } from "lib/actions/favorite";
import { getCartProducts } from "lib/actions/cart";
import { Footer } from "components/Footer/Footer";
import { Analytics } from "@vercel/analytics/react";
import { baseUrl } from "constants/constants";
const montserrat = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PosterWall - Buy Poster To Your Wall",
  description: "Welcome to PosterWall",
  icons: {
    apple: "/logo.png",
  },
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
        url: "https://i.ibb.co/4RgjZtt/banner-eshop.png",
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
    <html lang="en" className={`${montserrat.className}`}>
      <link rel="icon" href="/logo.png" sizes="any" />
      <meta
        name="google-site-verification"
        content="akX5gDkHNwWBpYqMfiSQynPVbhqCB3zXXzBX2rlsrFw"
      />
      <ProviderContext favorites={favorites?.products} cart={data?.cart}>
        <body className="flex grow flex-col w-full items-center">
          <Header />
          <main className="max-w-[1440px] w-full flex grow flex-col">
            {children}
          </main>
          <Footer />
          <div id="__next" />
          <Analytics />
        </body>
      </ProviderContext>
    </html>
  );
}
