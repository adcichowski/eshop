// import LinkNext from "next/link";
// import type { LinkProps } from "next/link";
// import { twMerge } from "tailwind-merge";
// export function Link(
//   props: LinkProps & {
//     className?: string;
//     disabled?: boolean;
//     children: string;
//   },
// ) {
//   return (
//     <LinkNext
//       {...props}
//       href={props.disabled ? "" : props.href}
//       className={twMerge(
//         `rounded-[10px] text-base font-semibold uppercase transition-colors  ${
//           props.className
//         } ${
//           props.disabled
//             ? "border-primary text-primary cursor-not-allowed border-2 bg-white"
//             : "bg-primary text-white"
//         }`,
//       )}
//     >
//       {props.children}
//     </LinkNext>
//   );
// }
