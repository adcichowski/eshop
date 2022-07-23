import { DotsVerticalIcon } from "@heroicons/react/solid";
import { Pagination } from "@nextui-org/react";
import { Autocomplete } from "components/Autocomplete/Autocomplete";
import { Carrousel } from "components/Carrousel/Carrousel";
import { Header } from "components/Header/Header";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useQuery } from "react-query";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <main className="flex-grow">
        <Carrousel />
      </main>
      <footer>Footer</footer>
    </div>
  );
};

export default Home;
