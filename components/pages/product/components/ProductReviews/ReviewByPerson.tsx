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

export const StarsReview = ({
  rating,
  elementId,
}: {
  rating: number;
  elementId: string;
}) => {
  const [numberBeforeComma, numberAfterComma] = rating.toString().split(".");
  const isRatingWithHalf = numberAfterComma === "5";
  console.log(numberBeforeComma, numberAfterComma, rating, isRatingWithHalf);
  return (
    <ul id={elementId} className="flex gap-[3px]">
      {Array.from({ length: 5 }, (_, i) => (
        <li key={`star-${i}`}>
          <Star
            className="h-4 w-4"
            halfStar={isRatingWithHalf && Number(numberBeforeComma) + 1 === i}
            selected={rating > i}
          />
        </li>
      ))}
    </ul>
  );
};
