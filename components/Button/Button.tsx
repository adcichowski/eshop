type ButtonVariants = "primary" | "secondary";

type ButtonProps = {
  children: string;
  variant: ButtonVariants;
};

const variantsButton: Record<
  ButtonVariants,
  JSX.IntrinsicElements["button"]["className"]
> = {
  primary: "text-white bg-primary",
  secondary: "bg-white text-primary border-2 border-primary ",
};

export function Button(props: ButtonProps) {
  const { variant } = props;
  return (
    <button
      {...props}
      className={`font-semibold uppercase md:px-16 px-8 py-2 md:py-4 rounded-[10px] mt-6 text-base md:text-lg ${variantsButton[variant]}`}
    />
  );
}
