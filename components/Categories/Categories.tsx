import clsx from "clsx";
import { Separator } from "components/Separator/Separator";
import { getAllCategories } from "lib";
import Link from "next/link";

export async function Categories({
  selectedCategory,
}: {
  selectedCategory?: string;
}) {
  const data = await getAllCategories();
  return (
    <aside aria-describedby="categories">
      <h2 id="categories" className="text-xl font-medium">
        Posters
      </h2>
      <ul className="mt-[23px] w-full">
        {data.map(({ name, slug }) => (
          <li key={slug}>
            <Link href={slug}>
              <span
                className={clsx(
                  "cursor-pointer text-sm",
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
