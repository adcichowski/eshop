type ButtonProps = {
  children: string;
} & JSX.IntrinsicElements["button"];

export function Button({ ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`transition-colors font-semibold uppercase md:px-16 px-8 py-2 md:py-4 rounded-[10px] mt-6 text-base md:text-lg ${
        props.disabled
          ? "bg-white text-primary border-2 border-primary cursor-not-allowed"
          : "text-white bg-primary"
      }`}
    />
  );
}
