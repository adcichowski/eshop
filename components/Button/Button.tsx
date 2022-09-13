type ButtonProps = {
  children: string;
  blocked?: boolean;
} & JSX.IntrinsicElements["button"];

export function Button({ blocked, ...props }: ButtonProps) {
  return (
    <button
      aria-disabled={!!blocked}
      {...props}
      className={`font-semibold uppercase md:px-16 px-8 py-2 md:py-4 rounded-[10px] mt-6 text-base md:text-lg ${
        blocked
          ? "bg-white text-primary border-2 border-primary cursor-not-allowed"
          : "text-white bg-primary"
      }`}
    />
  );
}
