import clsx from "clsx";
import { twMerge } from "tailwind-merge";

type FontWeights = "medium" | "normal";
export function HeaderInStep({
  children,
  header,
  headingSize = "base",
  headingWeight = "font-medium",
}: {
  children: JSX.Element;
  header: string;
  headingSize?: "small" | "base";
  headingWeight?: `font-${FontWeights}`;
}) {
  return (
    <article id="content-section" className="mx-2 sm:mx-0">
      <h2
        className={twMerge(
          "my-4 text-xl font-weight-500",
          clsx(headingSize === "small" && "text-lg", headingWeight),
        )}
        aria-labelledby="content-section"
      >
        {header}
      </h2>
      {children}
    </article>
  );
}
