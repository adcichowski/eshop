import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, MenuIcon, SearchIcon } from "@heroicons/react/solid";

const people = [
  { id: 1, name: "Wade Cooper" },
  { id: 2, name: "Arlene Mccoy" },
  { id: 3, name: "Devon Webb" },
  { id: 4, name: "Tom Cook" },
  { id: 5, name: "Tanya Fox" },
  { id: 6, name: "Hellen Schmidt" },
];

export function Autocomplete(props: { className?: string }) {
  const [selected, setSelected] = useState("");
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div {...props}>
      <div className="flex gap-2">
        <MenuIcon
          className="w-7 h-7 md:hidden cursor-pointer"
          aria-hidden="true"
        />
        <SearchIcon
          className="w-7 h-7 md:hidden text-gray-400  cursor-pointer"
          aria-hidden="true"
        />
      </div>
      <div className="top-16 md:w-70 hidden md:block">
        <Combobox value={selected} onChange={setSelected}>
          <InputDesktop
            query={query}
            setQuery={(text: string) => setQuery(text)}
            filteredPeople={filteredPeople}
          />
        </Combobox>
      </div>
    </div>
  );
}

const SearchButton = () => (
  <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
    <SearchIcon className="h-5 w-5" aria-hidden="true" />
  </Combobox.Button>
);

const InputDesktop = ({
  filteredPeople,
  setQuery,
  query,
}: {
  query: string;
  setQuery: (text: string) => void;
  filteredPeople: {
    id: number;
    name: string;
  }[];
}) => {
  return (
    <div className="relative mt-1 w-64">
      <div className="relative w-full cursor-default overflow-hidden rounded-sm bg-white text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 sm:text-sm">
        <Combobox.Input
          autoCorrect="false"
          placeholder="Szukaj..."
          className="w-full border-none py-1 pl-1 pr-10 placeholder-black text-sm leading-5 placeholder-opacity-70"
          displayValue={(person: { name: string }) => person.name}
          onChange={(event) => setQuery(event.target.value)}
        />
        <SearchButton />
      </div>
      <Transition
        as={Fragment}
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        afterLeave={() => setQuery("")}
      >
        <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          {filteredPeople.length === 0 && query !== "" ? (
            <div className="relative cursor-default select-none py-2 px-4">
              Nothing found.
            </div>
          ) : (
            filteredPeople.map((person) => (
              <Combobox.Option
                key={person.id}
                className={
                  "relative cursor-default select-none py-2 pl-10 pr-4"
                }
                value={person}
              >
                {({ selected, active }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {person.name}
                    </span>
                    {selected ? (
                      <span
                        className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                          active ? "text-white" : "text-teal-600"
                        }`}
                      >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Combobox.Option>
            ))
          )}
        </Combobox.Options>
      </Transition>
    </div>
  );
};
