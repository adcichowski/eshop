import { useSession } from "next-auth/react";
import { Star } from "./Star";
import clsx from "clsx";
type ReviewByPersonProps = {
  name: string;
  rating: number;
  content: string;
  email: string;
};
export function ReviewByPerson({
  name,
  rating,
  content,
  email,
}: ReviewByPersonProps) {
  const { data } = useSession();
  return (
    <article className="flex flex-wrap items-center gap-3 md:flex-nowrap">
      <header className="text-base">
        <p
          className={`uppercase ${clsx(
            data?.user?.email === email && "font-semibold"
          )}`}
        >
          {name}
        </p>
        <div className="flex items-center gap-2">
          Rate
          <span>
            <StarsReviewByPerson rating={rating} />
          </span>
        </div>
      </header>
      <p className="mr-2 w-full basis-auto bg-reviewContent px-3 py-4 text-sm">
        {content}
      </p>
    </article>
  );
}

const StarsReviewByPerson = ({ rating }: { rating: number }) => {
  return (
    <ul className="flex gap-[3px]">
      {Array.from({ length: 5 }, (_, i) => (
        <li key={`star-${i}`}>
          <Star className="h-4 w-4" selected={rating > i} />
        </li>
      ))}
    </ul>
  );
};
