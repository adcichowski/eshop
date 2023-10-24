"use client";
import { useSession } from "next-auth/react";
import clsx from "clsx";
import { StarsReview } from "./StarsReview";
export type ReviewByPersonProps = {
  id: string;
  rating: number;
  content: string;
  email: string;
  name: string;
};
export function ReviewByPerson({
  rating,
  content,
  email,
  name,
}: ReviewByPersonProps) {
  const { data } = useSession();
  return (
    <article className="flex flex-wrap items-center gap-3 md:flex-nowrap">
      <header className="text-base">
        <p
          className={`uppercase truncate max-w-[136px] ${clsx(
            data?.user?.email === email && "font-semibold text-primary",
          )}`}
        >
          {name}
        </p>
        <section
          aria-describedby="rateUser"
          className="flex items-center gap-2"
        >
          Rate
          <span>
            <StarsReview rating={rating} elementId="rateUser" />
          </span>
        </section>
      </header>
      <p className="mr-2 w-full basis-auto bg-reviewContent px-3 py-4 text-sm">
        {content}
      </p>
    </article>
  );
}
