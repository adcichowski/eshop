import {
  ShieldCheckIcon,
  Package2Icon,
  CalendarRangeIcon,
  MessagesSquareIcon,
} from "lucide-react";

const taglines = [
  {
    text: "Protected payment",
    Icon: ShieldCheckIcon,
  },
  {
    text: "Deliver in 2 business days",
    Icon: Package2Icon,
  },
  {
    text: "Events posters",
    Icon: CalendarRangeIcon,
  },
  {
    text: "Info about package",
    Icon: MessagesSquareIcon,
  },
];
export function Taglines() {
  return (
    <aside aria-labelledby="taglinesHeader" className="mb-8">
      <h3 id="taglinesHeader" className="sr-only">
        Taglines
      </h3>
      <ul className="grid grid-cols-2 xl:grid-cols-4 gap-x-10 md:gap-x-12 gap-y-8">
        {taglines.map(({ text, Icon }) => (
          <div
            className="flex flex-col sm:flex-row flex-wrap items-center gap-3 justify-center text-center"
            key={text}
          >
            <Icon strokeWidth={1.2} size={25} />
            <p>{text}</p>
          </div>
        ))}
      </ul>
    </aside>
  );
}
