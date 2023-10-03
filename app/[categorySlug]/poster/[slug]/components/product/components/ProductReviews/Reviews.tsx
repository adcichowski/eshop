import { ReviewByPerson, StarsReview } from "./ReviewByPerson";
import { getProductReviewsBySlug } from "lib";
import { CreateReviewForm } from "./CreateReviewForm";

export async function ProductReviews({ productSlug }: { productSlug: string }) {
  const reviews = await getProductReviewsBySlug(productSlug);

  return (
    <div className="m-auto mt-10 w-4/6">
      <section
        className="flex items-center gap-1"
        aria-describedby="averageRate"
      >
        <h4 className="text-xl">
          Opinions about product ({`${reviews.length}`})
        </h4>
        {4 ? <StarsReview elementId="averageRate" rating={4} /> : <></>}
      </section>
      {reviews.length ? (
        <ul
          className="mt-3 flex flex-col items-stretch gap-4
      pl-12"
        >
          {reviews.map((review) => (
            <ReviewByPerson {...review} key={review.id} />
          ))}
        </ul>
      ) : (
        <div className="mt-4 w-full rounded-sm border py-12  text-center text-base">
          <p>There are no reviews for this product.</p>
        </div>
      )}
      <CreateReviewForm productSlug={productSlug} />
    </div>
  );
}
