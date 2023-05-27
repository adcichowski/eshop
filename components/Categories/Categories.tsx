import { useGetCategoriesQuery } from "generated/graphql";
import Link from "next/link";

type CategoriesProps = {
  categories?: { name: string; slug: string }[];
  className?: string;
};
const categoriesList = (categories: { name: string; slug: string }[]) => [
  {
    name: "All posters",
    slug: "posters",
  },
  ...categories,
];

export function Categories({ categories, className }: CategoriesProps) {
  const { data } = useGetCategoriesQuery({
    skip: categories !== undefined,
  });
  if (data?.categories === undefined) return <></>;

  return (
    <aside
      aria-describedby="categories"
      className={`row-span-3 mx-auto w-full max-w-[230px] ${className}`}
    >
      <h2 id="categories" className="text-xl font-medium">
        Posters
      </h2>
      <ul className="mt-[23px] w-full">
        {categoriesList(data.categories).map(({ name, slug }) => (
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
