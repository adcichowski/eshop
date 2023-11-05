const SIZE_PAGINATION_NUMBER = 4;

export const getPaginationPages = ({
  currentPage,
  pageSize,
}: {
  pageSize: number;
  currentPage: number;
}) => {
  const isBiggestRightDistance =
    pageSize < currentPage + SIZE_PAGINATION_NUMBER;
  const isBiggestLeftDistance = currentPage - SIZE_PAGINATION_NUMBER < 1;

  const generatedPages = Array.from(
    { length: pageSize },
    (_, i) => i + 1,
  ).filter((page) => {
    const lastMiddle = page === currentPage + 1;
    const firstMiddle = page === currentPage - 1;
    const middle = currentPage === page;

    if (isBiggestRightDistance) {
      return pageSize <= page + SIZE_PAGINATION_NUMBER || lastMiddle;
    }

    if (isBiggestLeftDistance) {
      return page - SIZE_PAGINATION_NUMBER <= 1 || lastMiddle;
    }

    return firstMiddle || middle || lastMiddle;
  });
  return addDotsToPages([...new Set([1, ...generatedPages, pageSize])]);
};

export const addDotsToPages = (pages: number[]) =>
  pages.flatMap((v, i, arr) => {
    const previous = arr[i - 1];
    if (typeof previous === "number" && previous + 1 !== v) {
      return [`dots instead ${previous}`, v];
    }
    return v;
  });
