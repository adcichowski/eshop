import { Button } from "components/Button/Button";
import React from "react";
import FavoriteIcon from "components/Header/icons/favorite.svg";
export function FavoritePopper() {
  return (
    <div>
      <div className="flex flex-col text-center px-10 items-center">
        <div className="justify-self-center">
          <FavoriteIcon />
        </div>
        <div className="text-sm line leading-6 whitespace-nowrap mt-1">
          Your likes list is empty
        </div>
        <Button className="md:text-sm px-16 py-[5px] rounded-[10px] text-sm mt-2">
          <span className="whitespace-nowrap">Go to new products</span>
        </Button>
      </div>
    </div>
  );
}
