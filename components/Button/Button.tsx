import { HTMLAttributes } from "react";

type ButtonVariants = "primary" | "secondary";
type ButtonProps = JSX.IntrinsicElements["button"] & {
  variant: ButtonVariants;
  rounded?: boolean;
};

const variantsButton: Record<
  ButtonVariants,
  JSX.IntrinsicElements["button"]["className"]
> = {
  primary: "text-white bg-primary",
  secondary: "text-black bg-white border-2 border-primary text-primary",
};

export function Button(props: ButtonProps) {
  const { rounded, variant } = props;
  return (
    <button
      className={` py-4 px-12 font-semibold uppercase ${
        variantsButton[variant]
      } ${rounded ? "rounded-[10px]" : ""}`}
      {...props}
    />
  );
}
