import { HeartIcon } from "lucide-react";

export function FavoriteInput({ id }: { readonly id: string }) {
  return (
    <>
      <input
        type="checkbox"
        id={id}
        name="A3-confirmation"
        value="yes"
        className="favorite absolute  box-border h-full w-full cursor-pointer opacity-0"
      />
      <div>
        <HeartIcon />
      </div>
      <label htmlFor={id} className="sr-only">
        Favorite product
      </label>
    </>
  );
}
