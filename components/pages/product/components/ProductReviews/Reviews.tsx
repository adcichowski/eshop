import { useForm } from "components/Forms/useForm";
import { Input } from "components/Inputs/components/Input";
import Star from "./Star.svg";
import { addReviewSchema } from "./addReviewSchema";
import { Controller, useWatch } from "react-hook-form";
type ReviewFormProps = {
  readonly name: string;
  readonly opinion: string;
  readonly rate: number;
};
export function ProductReviews() {
  const { register, errors, control, handleSubmit } =
    useForm<ReviewFormProps>(addReviewSchema);
  const selectedRate = useWatch({ name: "opinion", control });
  return (
    <section className="col-span-2 mr-2">
      <h4>Opinions about product</h4>
      <form>
        <fieldset className="flex flex-col">
          <Input
            id="name"
            size="small"
            error={errors.name?.message}
            text="Name or pseudonym"
            type="text"
            {...register("name")}
          />

          <label htmlFor="rangeRate" className="sr-only">
            Your opinion:
          </label>
          <Controller
            control={control}
            render={({ field }) => (
              <ul className="my-[9px] flex h-7 gap-[6px]">
                {Array.from({ length: 5 }, (_, i) => i).map((starRate) => (
                  <li key={starRate} className="relative w-7">
                    <label
                      className="fill-current absolute -left-1 bottom-0 z-20 h-full w-full cursor-pointer"
                      htmlFor={`star-${starRate}`}
                    >
                      <span className="sr-only">
                        Star with rate ${starRate}
                      </span>

                      <Star aria-hidden="true" />
                    </label>
                    <input
                      type="radio"
                      id={`star-${starRate}`}
                      {...field}
                      value={starRate}
                      className="relative hidden w-1 border-none"
                    />
                  </li>
                ))}
              </ul>
            )}
            name="rate"
          />

          <textarea
            className="border-200 resize-none border"
            {...register("opinion")}
          ></textarea>
        </fieldset>
        <button>Submit</button>
      </form>
    </section>
  );
}
