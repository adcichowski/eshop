import Portal from "components/Modal/Modal";
import SearchIcon from "public/searchIcon.svg";
import { useState } from "react";
import { SearchModal } from "./components/SearchModal";
export function Autocomplete() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleModal = () => {
    setIsOpenModal((prev) => !prev);
  };
  return (
    <div className="flex w-full justify-center">
      <Portal isOpen={isOpenModal}>
        <SearchModal handleModal={handleModal} />
      </Portal>
      <button
        onClick={handleModal}
        className="z-10 flex max-w-[225px] items-center sm:w-full sm:justify-between sm:border sm:pr-3 sm:pl-1"
      >
        <span className="sr-only z-0 text-gray-100 sm:not-sr-only">
          Search product...
        </span>
        <div className="h-5 w-5">
          <SearchIcon />
        </div>
      </button>
    </div>
  );
}
