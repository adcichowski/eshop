import { generate } from "@graphql-codegen/cli";
import clsx from "clsx";
import { Action } from "components/Action/Action";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { getPaginationPages } from "./utils/utils";

export const Pagination = ({
  checkedCurrentPage,
  pageSize,
}: {
  pageSize: number;
  checkedCurrentPage: number;
}) => {
  const paginationPages = getPaginationPages({
    pageSize,
    currentPage: checkedCurrentPage,
  });

  return (
    <nav className="flex items-center justify-center">
      <Action
        as="link"
        href={{ query: { page: checkedCurrentPage - 1 } }}
        className="mt-2"
      >
        <ChevronLeftIcon size={30} />
      </Action>
      <ul className="flex gap-x-5">
        {paginationPages.map((page, i) => {
          if (typeof page === "string") return <li key={page}>...</li>;
          return (
            <li key={page}>
              <Action
                className={clsx(
                  "p-2 pt-3",
                  checkedCurrentPage === page && "bg-primary",
                )}
                as="link"
                disabled={checkedCurrentPage === i}
                href={{ query: { page } }}
              >
                {page}
              </Action>
            </li>
          );
        })}
      </ul>
      <Action
        as="link"
        href={{ query: { page: checkedCurrentPage + 1 } }}
        className="mt-2"
      >
        <ChevronRightIcon size={30} />
      </Action>
    </nav>
  );
};
