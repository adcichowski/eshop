import { GiftIcon, FacebookIcon, InstagramIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Taglines } from "./components/Taglines";

const joinUsIcons = [
  {
    href: "Facebook",
    Icon: FacebookIcon,
  },
  {
    href: "Instagram",
    Icon: InstagramIcon,
  },
];
export function Footer() {
  return (
    <>
      <div
        aria-orientation="horizontal"
        role="separator"
        className="h-[1px] mx-auto max-w-3xl my-8 w-full bg-separator"
      ></div>
      <Taglines />
      <div className="bg-footerBg w-full">
        <footer className="p-4 max-w-[1440px] mx-auto grid md:grid-cols-2 gap-x-2">
          <aside
            aria-labelledby="headerGiftCard"
            aria-describedby="descGiftCard"
            className="flex flex-col gap-2"
          >
            <h3 className="font-semibold uppercase" id="headerGiftCard">
              Gift poster
            </h3>
            <p className="text-gray-200" id="descGiftCard">
              Discover the perfect gift posters for every occasion in our
              diverse online store.
            </p>
            <button className="bg-white py-3 border-gray-100 border flex items-center justify-center uppercase hover:bg-gray-100/5">
              <GiftIcon className="mb-[3px]" size={20} />
              <div>Give someone a poster</div>
            </button>
          </aside>
          <aside aria-labelledby="joinHeader" className="mx-auto">
            <h3 className="uppercase mb-2 font-semibold" id="joinHeader">
              Join to us
            </h3>
            <ul className="flex justify-center items-center gap-4">
              {joinUsIcons.map(({ href, Icon }) => (
                <Link
                  className="p-4 hover:bg-gray-100/5 hover:border-gray-100  border border-white bg-white"
                  key={href}
                  href={href}
                >
                  <Icon size={30} />
                </Link>
              ))}
            </ul>
          </aside>
        </footer>
      </div>
    </>
  );
}
