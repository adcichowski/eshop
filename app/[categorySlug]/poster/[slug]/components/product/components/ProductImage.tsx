"use client";
import { Orientation } from "lib/hygraph/generated/graphql";
import React, { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
export default function ProductImage({
  src,
  orientation,
  whiteFrame,
  name,
}: {
  src: string;
  orientation: Orientation;
  whiteFrame: boolean;
  name: string;
}) {
  const [isLoading, setLoading] = useState(true);
  const imageSize = {
    width: 376,
    height: orientation === "Vertical" ? 527 : 267,
  };
  return (
    <>
      <Image
        {...imageSize}
        onLoad={() => setLoading(false)}
        className={`my-auto w-full h-auto max-w-xs object-contain md:max-w-xl ${clsx(
          orientation === Orientation.Horizontal && "my-auto w-full",
          whiteFrame && "p-3 border",
          isLoading ? "bg-gray-300/20" : "bg-transparent",
        )}`}
        alt={name}
        src={src}
      />
    </>
  );
}
