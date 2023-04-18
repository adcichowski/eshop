import { useGetProductReviewsBySlugQuery } from "generated/graphql";
import { useMemo } from "react";
import { roundToNearestHalf } from "utils/utils";
import { CreateReviewForm } from "./CreateReviewForm";
import { ReviewByPerson, StarsReview } from "./ReviewByPerson";

export function ProductReviews({ productSlug }: { productSlug: string }) {
  const { data } = useGetProductReviewsBySlugQuery({
    variables: { slug: productSlug },
  });
  const averageRate = useMemo(() => {
    if (data?.product?.reviews === undefined) return undefined;
    return roundToNearestHalf(
      data?.product?.reviews.reduce((initial, rev) => initial + rev.rating, 0) /
        data?.product?.reviews.length
    );
  }, [data?.product?.reviews]);
  return (
    <section className="col-span-2 mt-10">
      <section
        className="flex items-center gap-1"
        aria-describedby="averageRate"
      >
        <h4 className="text-xl">
          Opinions about product ({`${data?.product?.reviews.length ?? "-"}`})
        </h4>
        {averageRate && (
          <StarsReview elementId="averageRate" rating={averageRate} />
        )}
        {averageRate}
      </section>
      <ul
        className="mt-3 flex flex-col items-stretch gap-4
      pl-12"
      >
        {data?.product?.reviews.map(({ content, name, id, rating, email }) => (
          <ReviewByPerson
            email={email}
            content={content}
            name={name}
            key={id}
            rating={rating}
          />
        ))}
      </ul>
      <CreateReviewForm productSlug={productSlug} />
    </section>
  );
}
