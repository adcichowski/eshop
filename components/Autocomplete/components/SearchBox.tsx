import { useDebounce } from "hooks/useDebounce";
import { useEffect, useState } from "react";
import { connectSearchBox } from "react-instantsearch-dom";
import type { SearchBoxProvided } from "react-instantsearch-core";
const SearchBox = ({ refine }: SearchBoxProvided) => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    refine(debouncedSearchTerm ? searchTerm : "");
  }, [debouncedSearchTerm]);

  return (
    <form noValidate role="search">
      <input
        className="border-2"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </form>
  );
};

export const CustomSearchBox = connectSearchBox(SearchBox);
