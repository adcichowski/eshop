import { Button } from "components/Button/Button";

import FavoriteIcon from "components/Header/icons/favorite.svg";
export function FavoritePopper() {
  return (
    <div>
      <div className="flex flex-col items-center px-10 text-center">
        <div className="justify-self-center">
          <FavoriteIcon />
        </div>
        <div className="line mt-1 whitespace-nowrap text-sm leading-6">
          Your likes list is empty
        </div>
        <Button className="mt-2 rounded-[10px] px-16 py-[5px] text-sm md:text-sm">
          <span className="whitespace-nowrap">Go to new products</span>
        </Button>
      </div>
    </div>
  );
}
