import clsx from "clsx";

export const Separator = ({
  orientation,
  className,
}: {
  className?: string;
  orientation: "vertical" | "horizontal";
}) => (
  <div
    aria-orientation={orientation}
    role="separator"
    className={clsx(
      "bg-separator",
      orientation === "horizontal" && "h-[1px] w-full px-2",
      orientation === "vertical" && "w-[1px] h-full",
      className,
    )}
  ></div>
);
