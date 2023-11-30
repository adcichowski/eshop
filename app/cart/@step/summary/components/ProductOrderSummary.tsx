import { changeValueCurrency } from "utils/utils";
import Image from "next/image";

export function ProductOrderSummary({
  id,
  image,
  title,
  price,
  amount,
}: {
  id: string;
  image: string;
  title: string;
  price: number;
  amount: number;
}) {
  return (
    <article key={id} className="ml-2 mr-1 flex items-center gap-x-6 gap-y-2 ">
      <figure className="flex flex-wrap items-center gap-x-2 self-stretch xl:flex-nowrap">
        <Image src={image} alt="" width={60} height={100} />
        <figcaption className="mt-1 sm:mt-0 text-sm">
          <div>{title}</div>
          <div className="text-gray-200/90">55 cm x 75 cm</div>
        </figcaption>
      </figure>
      <div>{amount}</div>
      <div className="flex items-center gap-x-6 sm:justify-end">
        {changeValueCurrency(price)}
      </div>
    </article>
  );
}
