"use client";
import { Modal } from "components/Modal/Modal";
import { SearchIcon } from "lucide-react";
import { useState } from "react";
import { SearchModal } from "./components/SearchModal";
export function Autocomplete() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleModal = () => {
    setIsOpenModal((prev) => !prev);
  };
  return (
    <div className="flex w-full justify-center">
      <Modal isOpen={isOpenModal}>
        <SearchModal handleModal={handleModal} />
      </Modal>
      <button
        onClick={handleModal}
        className="z-10 flex max-w-[225px] items-center sm:w-full sm:justify-between sm:border sm:pr-3 sm:pl-1"
      >
        <span className="sr-only z-0 text-gray-100 sm:not-sr-only">
          Search product...
        </span>
        <SearchIcon size={25} strokeWidth={1.5} />
      </button>
    </div>
  );
}
