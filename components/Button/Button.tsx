type ButtonProps = {
  readonly children: string;
} & JSX.IntrinsicElements["button"];

export function Button({ ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`transition-colors font-semibold uppercase rounded-[10px] text-base md:text-lg ${
        props.className
      } ${
        props.disabled
          ? "bg-white text-primary border-2 border-primary cursor-not-allowed"
          : "text-white bg-primary"
      }`}
    />
  );
}
