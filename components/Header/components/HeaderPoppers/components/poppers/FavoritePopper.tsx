import { Action } from "components/Action/Action";
import { HeartIcon } from "lucide-react";
// import "server-only";
export function FavoritePopper() {
  return (
    <div>
      <div className="flex flex-col items-center gap-y-2 px-10 text-center">
        <div className="justify-self-center">
          <HeartIcon size={30} strokeWidth={1.5} />
        </div>
        <div className="line whitespace-nowrap text-sm leading-6">
          Your likes list are empty
        </div>
        <Action as="link" href="/">
          <span className="whitespace-nowrap">Go to new products</span>
        </Action>
      </div>
    </div>
  );
}
