import algoliasearch from "algoliasearch";
import React, { useRef } from "react";
import { Configure, InstantSearch, PoweredBy } from "react-instantsearch-dom";
import { CustomHits } from "./CustomHits";
import { CustomSearchBox } from "./SearchBox";
import SearchIcon from "public/searchIcon.svg";
import CloseIcon from "public/close-icon.svg";
import { useClickOutside } from "hooks/useClickOutside";
const searchClient = () => {
  if (!process.env.NEXT_PUBLIC_ALGOLIA) return new Error("Set Algolia Api Key");
  return algoliasearch("WA189JW1IR", process.env.NEXT_PUBLIC_ALGOLIA);
};

export function SearchModal({ handleModal }: { handleModal: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, handleModal);
  return (
    <InstantSearch searchClient={searchClient()} indexName="eshop">
      <div className="fixed top-0 h-full w-full animate-fade-down flex-col bg-white/75 duration-100">
        <div className="max-w-[1440px] self-stretch">
          <Configure clickAnalytics />
          <form
            className="relative flex items-center justify-center gap-x-4 border-b-2 border-gray-100/25 bg-white py-7 px-2"
            aria-label="search"
          >
            <button type="button" className="h-6 w-6" onClick={handleModal}>
              <CloseIcon />
            </button>
            <div
              ref={ref}
              className="flex max-w-md grow items-center self-center"
            >
              <div role="search" className="relative max-w-md grow">
                <CustomSearchBox />
              </div>
              <button className="ml-2 h-6 w-6">
                <SearchIcon />
              </button>
              <PoweredBy className="absolute bottom-0 right-8 flex w-28 items-center gap-x-2 whitespace-nowrap text-xs" />
            </div>
          </form>
          <CustomHits />
        </div>
      </div>
    </InstantSearch>
  );
}
