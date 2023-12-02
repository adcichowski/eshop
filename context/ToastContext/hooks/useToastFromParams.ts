import { useEffect, useMemo } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import {
  PARAM_GET_TOAST,
  TOAST_FROM_PARAM,
  TYPES_TOASTS_IN_PARAM,
} from "../constants";
import { useRouter } from "next/navigation";
import { ToastContextType } from "../ToastContext";

export default function useToastFromParams({
  addToast,
}: {
  addToast: ToastContextType["addToast"];
}) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const toast = searchParams.get(PARAM_GET_TOAST) as TYPES_TOASTS_IN_PARAM;

  const toastsFromUrl = useMemo(
    () => (toast ? TOAST_FROM_PARAM?.[toast] : undefined),
    [toast, pathname],
  );
  useEffect(() => {
    if (toast && toastsFromUrl?.type) {
      router.replace(pathname);
      addToast(toastsFromUrl?.type, toastsFromUrl.text);
    }
  }, [pathname]);

  return toastsFromUrl ? [toastsFromUrl] : [];
}
