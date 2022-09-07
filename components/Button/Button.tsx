type ButtonVariants = "primary" | "secondary";

type ButtonProps = JSX.IntrinsicElements["button"] & {
  variant: ButtonVariants;
};

const variantsButton: Record<
  ButtonVariants,
  JSX.IntrinsicElements["button"]["className"]
> = {
  primary: "text-white bg-primary",
  secondary: "bg-white text-primary",
};

export function Button(props: ButtonProps) {
  const { variant, className } = props;
  return (
    <button
      {...props}
      className={`font-semibold uppercase ${variantsButton[variant]} ${className}`}
    />
  );
}
