import { useGetCategoriesQuery } from "generated/graphql";
import Link from "next/link";

const categories = (categories: { name: string; slug: string }[]) => [
  {
    name: "All posters",
    slug: "posters",
  },
  ...categories,
];

export function Categories() {
  const { data } = useGetCategoriesQuery();
  if (data?.categories === undefined) return <></>;

  return (
    <aside
      aria-describedby="categories"
      className="row-span-3 mx-auto w-full max-w-[230px]"
    >
      <h2 id="categories" className="text-xl font-medium">
        Posters
      </h2>
      <ul className="mt-[23px] w-full">
        {categories(data.categories).map(({ name, slug }) => (
          <li key={slug}>
            <Link href={slug}>
              <div>
                <span className="cursor-pointer text-sm">{name}</span>
                <hr className="my-[6px] h-[0.4px] border-gray-100" />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
