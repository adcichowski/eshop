import * as Yup from "yup";

export const shippingDetailsSchema = {
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

export const shippingLoggedUser = Yup.object(shippingDetailsSchema);

export const shippingAsGuest = Yup.object({
  ...shippingDetailsSchema,
  emailOrder: Yup.string().required().email("Invalid email").label("Email"),
});

export const shippingWithRegistration = Yup.object({
  emailOrder: Yup.string().required().email("Invalid email").label("Email"),
  newPassword: Yup.string().required().label("Password").min(8),
  repeatedNewPassword: Yup.string().required().label("Repeated password"),
  ...shippingDetailsSchema,
});

export type ShippingLoggedUserType = Yup.InferType<typeof shippingLoggedUser>;

export type ShippingAsGuestType = Yup.InferType<typeof shippingAsGuest>;

export type ShippingWithRegistrationType = Yup.InferType<
  typeof shippingWithRegistration
>;
