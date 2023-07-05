import SearchIcon from "public/searchIcon.svg";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import SearchModal from "./components/SearchModal";
export function Autocomplete() {
  const [isOpenModal, setOpenModal] = useState(false);
  const handleModal = useCallback(() => {
    setOpenModal((prev) => !prev);
  }, []);
  const ref = useRef<Element | null>(null);

  useEffect(() => {
    const modal = document.getElementById("__next");
    ref.current = modal;
    document.body.style.overflow = isOpenModal ? "hidden" : "visible";
  }, [isOpenModal, handleModal]);

  return (
    <div className="flex w-full justify-center">
      <button
        onClick={handleModal}
        className="z-10 flex w-full max-w-[225px] items-center sm:justify-between sm:border sm:pr-3 sm:pl-1"
      >
        <span className="sr-only z-0 text-gray-100 sm:not-sr-only">
          Search product...
        </span>
        <div className="h-5 w-5">
          <SearchIcon />
        </div>
      </button>
      {isOpenModal && ref.current ? (
        createPortal(<SearchModal handleModal={handleModal} />, ref.current)
      ) : (
        <></>
      )}
    </div>
  );
}
