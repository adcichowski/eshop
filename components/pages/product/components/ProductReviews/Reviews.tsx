import { useGetProductReviewsBySlugQuery } from "generated/graphql";
import { CreateReviewForm } from "./CreateReviewForm";
import { ReviewByPerson } from "./ReviewByPerson";

export function ProductReviews({ productSlug }: { productSlug: string }) {
  const { data } = useGetProductReviewsBySlugQuery({
    variables: { slug: productSlug },
  });

  return (
    <section className="col-span-2 mt-10">
      <h4 className="text-xl">
        Opinions about product ({`${data?.product?.reviews.length ?? "-"}`})
      </h4>
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
