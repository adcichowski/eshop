import { GiftIcon, LinkedinIcon, GithubIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Taglines } from "./components/Taglines";
import { Separator } from "components/Separator/Separator";

const projectedUs = [
  {
    href: "https://www.linkedin.com/in/adcichowski/",
    Icon: LinkedinIcon,
    label: "Profile in linkedin",
  },
  {
    href: "https://github.com/adcichowski",
    Icon: GithubIcon,
    label: "Profile in github",
  },
];
export function Footer() {
  return (
    <>
      <Separator orientation="horizontal" className="max-w-3xl my-10" />
      <Taglines />
      <div className="bg-footerBg w-full">
        <footer className="p-4 max-w-[1240px] mx-auto flex justify-around items-center gap-6 flex-wrap">
          <JoinToAside />

          <GiftPoster />

          <p className="text-sm text-gray-500 sm:text-center dark:text-gray-400 w-[1440px]">
            © 2023
            <span className="mx-1">PosterWall™</span>. All Rights Reserved.
            <div>
              Designed by:
              <Link
                className="underline ml-1"
                href={"mailto:martynaklukowska7@gmail.com"}
              >
                Martyna Klukowska
              </Link>
            </div>
          </p>
        </footer>
      </div>
    </>
  );
}

const JoinToAside = () => (
  <aside
    aria-labelledby="joinHeader"
    className="w-full md:text-center md:w-auto"
  >
    <h3 className="uppercase mb-2 font-semibold" id="joinHeader">
      Projected Us
    </h3>
    <ul className="flex flex-wrap md:justify-center items-center gap-4">
      {projectedUs.map(({ href, Icon, label }) => (
        <li
          className="w-14 h-14 hover:bg-gray-100/5 hover:border-gray-100  border border-white"
          key={href}
        >
          <Link
            href={href}
            className="w-full h-full flex items-center"
            aria-label={label}
          >
            <Icon className="m-auto" size={30} strokeWidth={1.75} />
          </Link>
        </li>
      ))}
    </ul>
  </aside>
);

const GiftPoster = () => (
  <aside
    aria-labelledby="headerGiftCard"
    aria-describedby="descGiftCard"
    className="flex flex-col gap-2"
  >
    <h3 className="font-semibold uppercase" id="headerGiftCard">
      Gift poster
    </h3>
    <p className="text-gray-200" id="descGiftCard">
      Discover the perfect gift posters for every occasion in our diverse online
      store.
    </p>
    <button className="bg-white py-3 border-gray-100 border flex items-center justify-center uppercase hover:bg-gray-100/5">
      <GiftIcon className="mb-[3px] mr-1" size={20} />
      <div>Give someone a poster</div>
    </button>
  </aside>
);
