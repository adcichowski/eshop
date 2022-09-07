import Link from "next/link";

export function StaticLink({
  children,
  ...props
}: {
  "aria-label": string;
  href: string;
  children: React.ReactNode;
}) {
  const isFirstSlash = props.href[0] === "/";
  if (isFirstSlash) {
    return <Link {...props}>{children}</Link>;
  }
  return <a {...props}>{children}</a>;
}
