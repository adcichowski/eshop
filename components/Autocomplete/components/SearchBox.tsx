import { useDebounce } from "hooks/useDebounce";
import { useEffect, useState } from "react";
import { connectSearchBox } from "react-instantsearch-dom";
import type { SearchBoxProvided } from "react-instantsearch-core";
export const SearchBox = connectSearchBox<
  { handleModal: () => void } & SearchBoxProvided
>(({ refine, handleModal }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  useEffect(() => {
    if (debouncedSearchTerm) refine(debouncedSearchTerm ? searchTerm : "");
  }, [debouncedSearchTerm, refine, searchTerm]);

  return (
    <input
      aria-controls="search-hits-list"
      aria-autocomplete="list"
      autoComplete="off"
      onKeyDown={(e) => {
        if (e.key === "Escape") handleModal();
      }}
      autoCorrect="off"
      autoCapitalize="off"
      spellCheck={false}
      autoFocus
      placeholder="Search product..."
      className="w-full border-2 p-1 placeholder:pl-1 placeholder:text-sm"
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
});
