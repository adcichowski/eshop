import { useForm } from "components/Forms/useForm";
import { Input } from "components/Inputs/components/Input";
import { Star } from "./Star";
import clsx from "clsx";
import { addReviewSchema } from "./addReviewSchema";
import { Controller } from "react-hook-form";
import { useCreateReviewProductMutation } from "generated/graphql";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { ReviewByPerson } from "./ReviewByPerson";
type ReviewFormProps = {
  readonly name: string;
  readonly content: string;
  readonly rating: number;
};
export function ProductReviews() {
  const router = useRouter();
  const { productSlug } = router.query;
  const { register, errors, control, handleSubmit } =
    useForm<ReviewFormProps>(addReviewSchema);
  const session = useSession();
  const [createReview] = useCreateReviewProductMutation();
  const onSubmit = handleSubmit((data, e?: React.BaseSyntheticEvent) => {
    const email = session.data?.user?.email;
    e?.preventDefault();
    if (email && typeof productSlug === "string") {
      createReview({
        variables: {
          review: {
            ...data,
            email,
            rating: Number(data.rating),
            product: { connect: { slug: productSlug } },
          },
        },
      });
    }
  });
  return (
    <section className="col-span-2 mt-10">
      <h4 className="text-xl">Opinions about product (0)</h4>
      <ul className="mt-3 flex pl-12">
        <ReviewByPerson />
      </ul>
      <form onSubmit={onSubmit}>
        <fieldset className="flex flex-col">
          <Input
            id="name"
            size="small"
            error={errors.name?.message}
            text="Name or pseudonym"
            type="text"
            {...register("name")}
          />

          <label className="mt-[14px] text-sm" htmlFor="rangeRate">
            Your opinion
          </label>
          <Controller
            control={control}
            name="rating"
            render={({ field }) => {
              return (
                <ul className="my-[9px] flex gap-1">
                  {Array.from({ length: 5 }, (_, i) => i + 1).map(
                    (starRate) => (
                      <li key={starRate} className="relative h-7 w-7 ">
                        <label
                          className="-left-1 bottom-0 z-20 cursor-pointer"
                          htmlFor={`star-${starRate}`}
                        >
                          <span className="sr-only">Star with rate </span>
                          <div className="flex text-white">
                            <Star
                              selected={Number(field.value) >= starRate}
                              aria-hidden="true"
                            />
                          </div>
                        </label>
                        <input
                          type="radio"
                          id={`star-${starRate}`}
                          {...field}
                          value={starRate}
                          className="sr-only w-1"
                        />
                      </li>
                    )
                  )}
                </ul>
              );
            }}
          />
          <textarea
            className="border-200 text-md h-24 resize-none border border-gray-400 pt-2 pl-2 text-sm"
            {...register("content")}
          />
        </fieldset>
        <button className="mt-2 border border-primary px-6 py-3 text-base text-primary transition-colors hover:bg-primary hover:text-white">
          Send
        </button>
      </form>
    </section>
  );
}
