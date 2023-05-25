import { InstantSearch, Configure } from "react-instantsearch-dom";
import algoliasearch from "algoliasearch";
import { CustomSearchBox } from "./components/SearchBox";
import { CustomHits } from "./components/CustomHits";
const searchClient = () => {
  if (!process.env.NEXT_PUBLIC_ALGOLIA) return new Error("Set Algolia Api Key");
  return algoliasearch("WA189JW1IR", process.env.NEXT_PUBLIC_ALGOLIA);
};
export function Autocomplete() {
  return (
    <div className="relative">
      <InstantSearch searchClient={searchClient()} indexName="eshop">
        <Configure clickAnalytics />
        <CustomSearchBox />
        <CustomHits />
      </InstantSearch>
    </div>
  );
}
