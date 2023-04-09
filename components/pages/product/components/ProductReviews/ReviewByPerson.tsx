import { Star } from "./Star";

export function ReviewByPerson() {
  return (
    <article className="flex items-center gap-3">
      <header className="text-base">
        <p className="uppercase">Adam</p>
        <div className="flex items-center">
          Rate
          <span>
            <StarsReviewByPerson rating={2} />
          </span>
        </div>
      </header>
      <p className="bg-reviewContent px-2 py-3 text-sm">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste beatae
        sed repellendus placeat natus, tempora fugiat accusamus ducimus
        voluptatum officiis!
      </p>
    </article>
  );
}

const StarsReviewByPerson = ({ rating }: { rating: number }) => {
  return (
    <ul className="flex gap-[3px]">
      {Array.from({ length: 5 }, (_, i) => (
        <li key={`star-${i}`}>
          <Star className="h-4 w-4" selected={rating >= i} />
        </li>
      ))}
    </ul>
  );
};
