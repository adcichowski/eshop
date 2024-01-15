import { connectHits, HitsProvided } from "react-instantsearch-core";
import Image from "next/image";
import Link from "next/link";
import { ResponseAlgolia } from "../types/types";
import clsx from "clsx";
const HitsBoxStates = ({ hits }: HitsProvided<ResponseAlgolia>) => {
  if (hits.length === 0) return <HitsEmpty />;
  return <HitsProducts allSearchResults={hits} />;
};

const HitsBox = ({ children }: { children: JSX.Element }) => (
  <section
    aria-label="Search results"
    className="flex max-h-[calc(100vh-94px)] flex-col items-center overflow-y-auto bg-white p-4 md:mx-12"
  >
    <h2
      id="titleSearch"
      className="text-md w-full self-start border-b-2 border-gray-300 pb-2 font-semibold"
    >
      Search Results
    </h2>
    {children}
  </section>
);

export const CustomHits = connectHits(Hits);
function Hits(props: HitsProvided<ResponseAlgolia>) {
  return (
    <HitsBox>
      <HitsBoxStates {...props} />
    </HitsBox>
  );
}

const HitsEmpty = () => (
  <p className="my-12 w-full text-center">No matching results were found.</p>
);

const HitsProducts = ({
  allSearchResults,
}: {
  allSearchResults: ResponseAlgolia[];
}) => {
  return (
    <ul
      id="search-hits-list"
      aria-labelledby="#ariaSearch"
      aria-orientation="horizontal"
      role="listbox"
      className="mt-6 grid grid-cols-2 items-center gap-x-10 gap-y-5 sm:grid-cols-3 md:grid-cols-4"
    >
      {allSearchResults.map((poster) => (
        <li className="relative" key={poster.name}>
          <Link
            passHref
            href={`/${poster.categories[0]?.slug}/poster/${poster.slug}`}
            className="cursor-pointer"
          >
            <article className="grid grid-rows-[258.41px_1fr] gap-y-2 place-items-center">
              <Image
                className={clsx(
                  poster.whiteFrame && "p-3",
                  `h-auto self-center object-contain border`,
                )}
                src={poster.images[0].url}
                width={180}
                height={100}
                alt={poster.name}
              />
              <h3 className="truncate px-7 text-center text-xs xl:text-base max-w-sm">
                {poster.name}
              </h3>
            </article>
          </Link>
        </li>
      ))}
    </ul>
  );
};
