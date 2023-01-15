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
  console.log(selectedRate);
  return (
    <section className="col-span-2 mr-2">
      <h4>Opinions about product</h4>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
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
              <ul className="flex gap-[6px] h-7 my-[9px]">
                {Array.from({ length: 5 }, (_, i) => i).map((starRate) => (
                  <li key={starRate} className="w-7 relative">
                    <label
                      className="absolute w-full h-full -left-1 bottom-0 z-20 cursor-pointer fill-current"
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
                      className="border-none hidden relative w-1"
                    />
                  </li>
                ))}
              </ul>
            )}
            name="rate"
          />

          <textarea
            className="border-gray border resize-none"
            {...register("opinion")}
          ></textarea>
        </fieldset>
        <button>Submit</button>
      </form>
    </section>
  );
}
