import clsx from "clsx";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { getPaginationPages } from "./utils/utils";
import Link, { LinkProps } from "next/link";
import { Separator } from "components/Separator/Separator";

export const Pagination = ({
  checkedCurrentPage,
  pageSize,
}: {
  pageSize: number | null | undefined;
  checkedCurrentPage: number;
}) => {
  if (!pageSize) return <></>;

  const { pages, hasNextPage, hasPreviousPage } = getPaginationPages({
    pageSize,
    currentPage: checkedCurrentPage,
  });

  return (
    <div className="col-span-2 w-full my-8">
      <nav className="flex items-center justify-center">
        <PaginationLink
          disabled={!hasPreviousPage}
          href={{ query: { page: checkedCurrentPage - 1 } }}
        >
          <ChevronLeftIcon
            className={clsx(!hasPreviousPage && "opacity-40", "mt-1 mr-2")}
            size={20}
          />
        </PaginationLink>
        <ul className="flex gap-x-5">
          {pages.map((page) => {
            if (typeof page === "string") return <li key={page}>...</li>;
            return (
              <li key={page} aria-current="page">
                <PaginationLink
                  disabled={checkedCurrentPage === page}
                  href={{ query: { page } }}
                >
                  <div
                    className={clsx(
                      "p-2",
                      checkedCurrentPage === page && "bg-primary",
                    )}
                  >
                    {page}
                  </div>
                </PaginationLink>
              </li>
            );
          })}
        </ul>
        <PaginationLink
          disabled={!hasNextPage}
          href={{ query: { page: checkedCurrentPage + 1 } }}
        >
          <ChevronRightIcon
            size={20}
            className={clsx(!hasNextPage && "opacity-40", "mt-1 ml-2 h-auto")}
          />
        </PaginationLink>
      </nav>
    </div>
  );
};

const PaginationLink = ({
  disabled,
  href,
  children,
}: {
  disabled?: boolean;
  href: LinkProps["href"];
  children: JSX.Element;
}) => {
  if (disabled) {
    return (
      <button
        className={clsx(disabled && "cursor-default")}
        aria-disabled="true"
      >
        {children}
      </button>
    );
  }
  return <Link href={href}>{children}</Link>;
};
