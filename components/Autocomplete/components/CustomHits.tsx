import { connectHits, HitsProvided } from "react-instantsearch-core";
import Image from "next/image";
import Link from "next/link";
import { ResponseAlgolia } from "../types/types";

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
      className="mt-6 grid grid-cols-2 items-center gap-x-10 gap-y-5 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5"
    >
      {allSearchResults.map((poster) => (
        <li className="relative h-full w-full" key={poster.name}>
          <Link passHref href={poster.slug} className="cursor-pointer">
            <article className="flex h-full flex-col gap-y-2">
              <Image
                className="h-full self-center object-contain"
                src={poster.images[0].url}
                width={180}
                height={100}
                alt={poster.name}
              />

              <h3 className="truncate px-7 text-center text-xs xl:text-base">
                {poster.name}
              </h3>
            </article>
          </Link>
        </li>
      ))}
    </ul>
  );
};
