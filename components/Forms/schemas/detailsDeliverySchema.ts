import * as Yup from "yup";

export const standardDeliverySchema = {
  firstName: Yup.string().required().label("First name"),
  lastName: Yup.string().required().label("Last name"),
  phoneNumber: Yup.string()
    .max(20, "Phone number should have small than 20 digits")
    .required()
    .label("Phone number"),
  street: Yup.string().required().label("Street"),
  city: Yup.string().required().label("City"),
  postalCode: Yup.string().required().max(10).label("Postal Code"),
  acceptTerm: Yup.bool().oneOf([true], "Field must be checked"),
};

export const detailsDeliverySchemaWithoutAccount = Yup.object(
  standardDeliverySchema,
);
export const detailsDeliverySchemaWithAccount = Yup.object({
  emailOrder: Yup.string().required().email("Invalid email").label("Email"),
  newPassword: Yup.string().required().label("Password"),
  repeatedNewPassword: Yup.string().required().label("Repeated password"),
  ...standardDeliverySchema,
});

export type DetailsDeliverySchemaWithAccountType = Yup.InferType<
  typeof detailsDeliverySchemaWithAccount
>;

export type DetailsDeliverySchemaWithoutAccountType = Yup.InferType<
  typeof detailsDeliverySchemaWithoutAccount
>;
