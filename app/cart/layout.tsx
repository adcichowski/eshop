import Image from "next/image";
import { getCartProducts } from "lib/actions/cart";
import { ProviderOrderContext } from "context/OrderContext/ProviderOrderContext";
export default function Layout(props: { step: React.ReactNode }) {
  const data = getCartProducts();
  if (!data?.cart || !data.cart.length) {
    return (
      <section
        aria-describedby="content"
        aria-labelledby="heading"
        className="flex items-center justify-center flex-wrap-reverse md:mt-10 m-auto"
      >
        <div className="text-center flex flex-col gap-5">
          <h2 id="heading" className="text-xl font-semibold">
            You do not have any products
          </h2>
          <p id="content">Go to home and add some products to your cart.</p>
        </div>
        <div>
          <Image
            width={350}
            height={100}
            alt=""
            className="w-full"
            src={"/empty-cart.png"}
          />
        </div>
      </section>
    );
  }
  return (
    <ProviderOrderContext>
      <div className="m-2 md:mx-8">{props.step}</div>
    </ProviderOrderContext>
  );
}
