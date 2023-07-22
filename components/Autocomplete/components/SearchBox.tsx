import { useDebounce } from "hooks/useDebounce";
import { useEffect, useState } from "react";
import { connectSearchBox } from "react-instantsearch-dom";
import type { SearchBoxProvided } from "react-instantsearch-core";
const SearchBox = ({ refine, ...rest }: SearchBoxProvided) => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  useEffect(() => {
    console.log(rest, "HALO");
    if (debouncedSearchTerm) refine(debouncedSearchTerm ? searchTerm : "");
  }, [debouncedSearchTerm, refine, searchTerm]);

  return (
    <input
      autoFocus
      placeholder="Search product..."
      className="w-full border-2 p-1 placeholder:pl-1 placeholder:text-sm"
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export const CustomSearchBox = connectSearchBox(SearchBox);
