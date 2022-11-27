import * as Yup from "yup";
const MAX_CHARS_FIELD_OPINION = 60;
export const addReviewSchema = Yup.object().shape({
  name: Yup.string().required("Field is required"),
  rate: Yup.string()
    .required("Field is required")
    .max(6, "Max rate can be 6")
    .min(1, "Min rate can be 6"),
  opinion: Yup.string()
    .required("Field is required")
    .test(
      "opinion",
      "Max number is 60 chars.",
      (reviewText) =>
        !reviewText || reviewText?.length < MAX_CHARS_FIELD_OPINION
    ),
});
