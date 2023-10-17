import { HeaderPoppers } from "components/Header/components/HeaderPoppers/HeaderPoppers";
import { Poppers } from "components/Header/components/HeaderPoppers/components/Poppers";
import { Modal } from "components/Modal/Modal";
import { Params } from "types/types";

export default function PopperView({ params }: { params: Params<"viewName"> }) {
  return (
    <HeaderPoppers isOpen={Boolean(params.viewName)}>
      <Poppers popper={params.viewName} />
    </HeaderPoppers>
  );
}
