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
        <Input
          id="name"
          error={errors.name?.message ?? ""}
          text="Name or pseudonym"
          type="text"
          {...register("name")}
        />
        <div>Rate</div>
        <textarea {...register("opinion")}></textarea>
      </form>
    </>
  );
}
