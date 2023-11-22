import * as Yup from "yup";

export const detailsDeliverySchema = Yup.object({
  emailOrder: Yup.string().required().label("Email"),
  firstName: Yup.string().required().label("First name"),
  lastName: Yup.string().required().label("Last name"),
  phoneNumber: Yup.string()
    .max(20, "Phone number should have small than 20 digits")
    .required()
    .label("Phone number"),
  street: Yup.string().required(),
  city: Yup.string().required(),
  postalCode: Yup.string().required().max(10).label("Postal Code"),
  acceptTerm: Yup.bool().oneOf([true], "Field must be checked"),
});

export type DetailsDeliverySchema = Yup.InferType<typeof detailsDeliverySchema>;
