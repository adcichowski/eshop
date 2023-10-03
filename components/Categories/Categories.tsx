import { getAllCategories } from "lib";
import Link from "next/link";

const generateCategories = (categories: { name: string; slug: string }[]) => [
  {
    name: "All posters",
    slug: "posters",
  },
  ...categories,
];

export async function Categories() {
  const data = await getAllCategories();

  return (
    <aside aria-describedby="categories">
      <h2 id="categories" className="text-xl font-medium">
        Posters
      </h2>
      <ul className="mt-[23px] w-full">
        {generateCategories(data).map(({ name, slug }) => (
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
