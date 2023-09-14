import { ReviewByPerson, StarsReview } from "./ReviewByPerson";
import { getProductReviewsBySlug } from "lib";
import { CreateReviewForm } from "./CreateReviewForm";

export async function ProductReviews({ productSlug }: { productSlug: string }) {
  const data = await getProductReviewsBySlug(productSlug);

  return (
    <div className="m-auto mt-10 w-4/6">
      <section
        className="flex items-center gap-1"
        aria-describedby="averageRate"
      >
        <h4 className="text-xl">
          Opinions about product ({`${data.product?.reviews.length}`})
        </h4>
        {4 ? <StarsReview elementId="averageRate" rating={4} /> : <></>}
      </section>
      {data?.product?.reviews.length ? (
        <ul
          className="mt-3 flex flex-col items-stretch gap-4
      pl-12"
        >
          {data?.product?.reviews.map(
            ({ content, name, id, rating, email }) => (
              <ReviewByPerson
                email={email}
                content={content}
                name={name}
                key={id}
                rating={rating}
              />
            ),
          )}
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
