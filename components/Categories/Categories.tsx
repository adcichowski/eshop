import clsx from "clsx";
import { Separator } from "components/Separator/Separator";
import { getAllCategories } from "lib";
import Link from "next/link";

export async function Categories({
  selectedCategory,
  Heading,
}: {
  selectedCategory?: string;
  Heading: "h2" | "h3";
}) {
  const data = await getAllCategories();
  return (
    <aside aria-describedby="categories">
      <Heading id="categories" className="text-xl font-medium">
        Posters
      </Heading>
      <ul className="mt-[23px] w-full">
        {data.map(({ name, slug }) => (
          <li key={slug}>
            <Link href={`/${slug}`}>
              <span
                className={clsx(
                  "cursor-pointer text-sm capitalize",
                  slug === "bestsellers" && "text-red-300",
                  selectedCategory === slug && "font-semibold",
                )}
              >
                {name}
              </span>
              <Separator
                orientation="horizontal"
                className="my-[6px] h-[0.4px]"
              />
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
