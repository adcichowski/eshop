import { useForm } from "components/Forms/useForm";
import { Input } from "components/Inputs/components/Input";
import { Star } from "./Star";
import { addReviewSchema } from "./addReviewSchema";
import { Controller } from "react-hook-form";
import { useCreateReviewProductMutation } from "generated/graphql";
import { useSession } from "next-auth/react";
import { ErrorInInput } from "components/Inputs/components/ErrorInInput";

type ReviewFormProps = {
  readonly name: string;
  readonly content: string;
  readonly rating: number;
};

export function CreateReviewForm({ productSlug }: { productSlug: string }) {
  const { register, errors, control, handleSubmit } =
    useForm<ReviewFormProps>(addReviewSchema);
  const [createReview] = useCreateReviewProductMutation();
  const session = useSession();
  if (session.status === "unauthenticated" || !session.data) {
    return <></>;
  }
  const onSubmit = handleSubmit((data, e?: React.BaseSyntheticEvent) => {
    e?.preventDefault();
    createReview({
      variables: {
        review: {
          ...data,
          email: session.data.user.email,
          rating: Number(data.rating),
          product: { connect: { slug: productSlug } },
        },
      },
    });
  });
  return (
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

        <label className="mt-[14px] text-sm" htmlFor="rating">
          Your opinion
        </label>
        <Controller
          control={control}
          name="rating"
          render={({ field }) => {
            return (
              <ul className="my-[9px] flex gap-1">
                {Array.from({ length: 5 }, (_, i) => i + 1).map((starRate) => (
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
                ))}
              </ul>
            );
          }}
        />
        <div className="mb-2">
          <ErrorInInput error={errors.rating?.message} id="rating" />
        </div>

        <textarea
          className="border-200 text-md h-24 resize-none border border-gray-400 pt-2 pl-2 text-sm"
          {...register("content")}
        />
        <div className="mt-[1px]">
          <ErrorInInput error={errors.content?.message} id="content" />
        </div>
      </fieldset>
      <button className="mt-2 border border-primary px-6 py-3 text-base text-primary transition-colors hover:bg-primary hover:text-white">
        Send
      </button>
    </form>
  );
}
