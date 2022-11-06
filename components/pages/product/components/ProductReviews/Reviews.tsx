import { useForm } from "components/Forms/useForm";
import { Input } from "components/Inputs/components/Input";
import { addReviewSchema } from "./addReviewSchema";
type ReviewFormProps = {
  readonly name: string;
  readonly opinion: string;
  readonly rate: number;
};
export function ProductReviews() {
  const { register, errors } = useForm<ReviewFormProps>(addReviewSchema);
  return (
    <>
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
            Your rate:
          </label>
          <input id="rangeRate" type="range" />
          <textarea
            className="border-gray border resize-none"
            {...register("opinion")}
          ></textarea>
        </fieldset>
      </form>
    </>
  );
}
