import { DotsVerticalIcon } from "@heroicons/react/solid";
import { Pagination } from "@nextui-org/react";
import { Autocomplete } from "components/Autocomplete/Autocomplete";
import { Carrousel } from "components/Carrousel/Carrousel";
import { headerCategories } from "components/Header/constants";
import { Header } from "components/Header/Header";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useQuery } from "react-query";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <ul
        className="uppercase flex bg-black text-white font-medium gap-4 col-span-3 justify-center
        p-2 text-sm md:text-base"
        aria-label="poster categories"
      >
        {headerCategories.map((category) => (
          <li key={category}>
            <Link href={`/${category}`} passHref>
              <a>{category}</a>
            </Link>
          </li>
        ))}
      </ul>
      <Carrousel />
    </div>
  );
};

export default Home;
