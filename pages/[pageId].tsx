import {
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import { useState } from "react";
import { QueryClient, useQuery } from "react-query";

export async function getStaticPaths() {
  return {
    paths: Array.from({ length: 10 }, (_, i) => ({
      params: {
        pageId: i.toString(),
      },
    })),
    fallback: false,
  };
}
export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ pageId: string }>) {
  if (params?.pageId) {
    const res = await fetch(
      `https://naszsklep-api.vercel.app/api/products?take=25&offset=${
        (Number(params?.pageId) - 1) * 25
      }`
    );
    const data = await res.json();

    return {
      props: { data }, // will be passed to the page component as props
    };
  }
}

const Home = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  console.log(data);
  const page =
    router.query.pageId === undefined ? 1 : Number(router.query.pageId);

  return (
    <div className="flex flex-col min-h-screen ">
      <main className="flex-grow">
        <nav className="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0">
          <Link href={`/${page - 1}`} passHref>
            <a>Prev</a>
          </Link>
          {Array.from({ length: 10 }, (_, i) => {
            const pageNumber = i + 1;
            return (
              <Link href={`/${pageNumber}`}>
                <a
                  key={i}
                  href={`/${pageNumber}`}
                  className={`border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium ${
                    Number(router.query.pageId) === pageNumber && "bg-red-400"
                  }`}
                >
                  {i + 1}
                </a>
              </Link>
            );
          })}

          <Link href={`/${page + 1}`} passHref>
            <a>Prev</a>
          </Link>
        </nav>
      </main>

      <footer>Footer</footer>
    </div>
  );
};

export default Home;
