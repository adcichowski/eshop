import { NavigationCart } from "views/cart/components/NavigationCart";

export default async function Layout(props: { step: React.ReactNode }) {
  return (
    <div className="m-2 md:mx-16">
      <NavigationCart />
      <aside className="mt-[30px] w-full bg-green-100 px-2 py-5 text-center text-sm md:text-base">
        Will you give it a try?
        <span className="font-bold"> Buy for an additional 46.40 USD </span>
        and qualify for <span className="font-bold">FREE</span> shipping!
      </aside>
      {props.step}
    </div>
  );
}
