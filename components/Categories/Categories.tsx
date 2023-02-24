import { useGetCategoriesQuery } from "generated/graphql";
import Link from "next/link";
import React from "react";

export function Categories() {
  const { data } = useGetCategoriesQuery();
  if (data?.categories === undefined) return <div></div>;
  const categories = [
    {
      name: "All posters",
      slug: "posters",
    },
    ...data?.categories,
  ];
  return (
    <aside
      aria-describedby="categories"
      className="row-span-3 mx-auto max-w-[230px] w-full"
    >
      <h2 id="categories" className="mt-12 text-xl font-medium">
        Posters
      </h2>
      <ul className="mt-[23px] w-full">
        {categories.map(({ name, slug }) => (
          <li key={slug}>
            <Link href={slug}>
              <div>
                <span className="text-sm cursor-pointer">{name}</span>
                <hr className="my-[6px] h-[0.4px] border-gray-100" />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
