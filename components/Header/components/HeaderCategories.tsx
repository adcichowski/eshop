import React from "react";
import { headerCategories } from "../constants";
import Link from "next/link";

export default function HeaderCategories() {
  return (
    <ul
      className="hidden justify-center gap-4 bg-black p-2 text-sm font-medium uppercase
    text-white sm:flex md:text-base"
      aria-label="poster categories"
    >
      {headerCategories.map((category) => (
        <li key={category.title}>
          <Link
            className="cursor-pointer"
            aria-label={`Go to category ${category.title}`}
            href={`/${category.slug || category.title}`}
          >
            {category.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
