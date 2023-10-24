import { Star } from "./Star";

export const StarsReview = ({
  rating,
  elementId,
}: {
  rating: number;
  elementId: string;
}) => {
  const [numberBeforeComma, numberAfterComma] = rating.toString().split(".");
  const isRatingWithHalf = numberAfterComma === "5";
  return (
    <ul id={elementId} className="flex gap-[3px]">
      {Array.from({ length: 5 }, (_, i) => (
        <li key={`star-${i}`}>
          <Star
            className="h-4 w-4"
            halfStar={isRatingWithHalf && Number(numberBeforeComma) - 1 === i}
            selected={rating - 1 >= i}
          />
        </li>
      ))}
    </ul>
  );
};
