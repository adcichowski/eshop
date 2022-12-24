import type { MutableRefObject, RefObject } from "react";
import { useEffect } from "react";

export function useClickOutside(
  /*
  Hook to run handler if click in document not contained ref then the handler will be running.
  */
  ref: RefObject<HTMLDivElement>,
  handler: () => void
) {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!event) return;
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions -- need asserts to repair type problems
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler();
    };
    document.addEventListener("click", listener);
    return () => {
      document.removeEventListener("click", listener);
    };
  }, [ref, handler]);
}
