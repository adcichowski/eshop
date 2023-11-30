import {
  GiftIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  GithubIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { Taglines } from "./components/Taglines";
import { Separator } from "components/Separator/Separator";

const joinUsIcons = [
  {
    href: "Facebook",
    Icon: FacebookIcon,
  },
  {
    href: "Instagram",
    Icon: InstagramIcon,
  },
  { href: "Linkedin", Icon: LinkedinIcon },
  { href: "Github", Icon: GithubIcon },
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

          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023
            <span className="mx-1">PosterWall™</span>. All Rights Reserved.
          </span>
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
      Join to us
    </h3>
    <ul className="flex flex-wrap md:justify-center items-center gap-4">
      {joinUsIcons.map(({ href, Icon }) => (
        <Link
          className="p-4 hover:bg-gray-100/5 hover:border-gray-100  border border-white bg-white"
          key={href}
          href={href}
        >
          <Icon size={30} strokeWidth={1.75} />
        </Link>
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
