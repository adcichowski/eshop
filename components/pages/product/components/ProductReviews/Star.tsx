import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

export function Star({
  className,
  selected,
  halfStar,
}: {
  className?: string;
  selected: boolean;
  halfStar?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 20 19"
      fill="transparent"
      className={twMerge(
        clsx(
          "stroke-gray-100",
          selected && `fill-black stroke-black `,
          className
        )
      )}
      xmlns="http://www.w3.org/2000/svg"
    >
      {halfStar ? (
        <HalfStarPath />
      ) : (
        <path d="M10.0005 0.713731L12.4799 7.34508L12.5406 7.50753H12.7141H19.2223L13.9092 11.3169L13.7663 11.4193L13.8144 11.5884L15.7428 18.3732L10.1474 14.3127L10.0006 14.2062L9.85372 14.3127L4.25932 18.3732L6.18674 11.5884L6.23477 11.4193L6.09191 11.3169L0.777853 7.50753H7.28595H7.45936L7.52011 7.34511L10.0005 0.713731Z" />
      )}
    </svg>
  );
}

const HalfStarPath = () => (
  <path
    width="16"
    height="16"
    d="M21 7.24L13.4505 6.62L10.5 0L7.5495 6.63L0 7.24L5.733 11.97L4.011 19L10.5 15.27L16.989 19L15.2775 11.97L21 7.24ZM10.5 13.4V4.1L12.2955 8.14L16.8945 8.52L13.4085 11.4L14.4585 15.68L10.5 13.4Z"
    fill="black"
    stroke="transparent"
  />
);
