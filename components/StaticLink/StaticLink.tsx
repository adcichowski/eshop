import Link from "next/link";

export function StaticLink({
  children,
  ...props
}: {
  readonly "aria-label": string;
  readonly href: string;
  readonly className?: string;
  readonly children: React.ReactNode;
}) {
  const isFirstSlash = props.href[0] === "/";
  if (isFirstSlash) {
    return <Link {...props}>{children}</Link>;
  }
  return <a {...props}>{children}</a>;
}
