import type { RefObject } from "react";
import { useEffect } from "react";

export function useClickOutside(
  ref: RefObject<HTMLDivElement>,
  handler: () => void
) {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      // Do nothing if target is element with attribute data-outside
      if (event.target instanceof Element) {
        const attribute = event.target.getAttribute("data-outside");
        if (attribute) {
          return;
        }
      }
      // Do nothing if clicking ref's element or descendent elements
      if (!event) return;
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions -- need asserts to repair type problems
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler();
    };
    const timeId = setTimeout(
      () => document.addEventListener("click", listener),
      0
    );

    return () => {
      clearTimeout(timeId);
      document.removeEventListener("click", listener);
    };
  }, [ref, handler]);
}
