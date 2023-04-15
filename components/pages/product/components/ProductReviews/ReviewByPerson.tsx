import { Star } from "./Star";

export function ReviewByPerson() {
  return (
    <article className="flex flex-wrap items-center gap-3 md:flex-nowrap">
      <header className="text-base">
        <p className="uppercase">Adam</p>
        <div className="flex items-center gap-2">
          Rate
          <span>
            <StarsReviewByPerson rating={2} />
          </span>
        </div>
      </header>
      <p className="mr-2 basis-auto bg-reviewContent px-3 py-4 text-sm ">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste beatae
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
