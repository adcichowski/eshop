import { useEffect, useMemo } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import {
  PARAM_GET_TOAST,
  TOAST_FROM_PARAM,
  TYPES_TOASTS_IN_PARAM,
} from "../constants";
import { useRouter } from "next/navigation";

export default function useToastFromParams() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const toast = searchParams.get(PARAM_GET_TOAST) as TYPES_TOASTS_IN_PARAM;

  const toastsFromUrl = useMemo(
    () => (toast ? TOAST_FROM_PARAM?.[toast] : undefined),
    [toast],
  );
  useEffect(() => {
    if (toast) router.replace(pathname);
  }, [pathname, router, toast, toastsFromUrl]);

  return toastsFromUrl ? [toastsFromUrl] : [];
}
