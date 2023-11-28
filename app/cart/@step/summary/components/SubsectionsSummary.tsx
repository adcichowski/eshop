import { SubsectionWrapper } from "app/cart/@step/summary/components/SubsectionWrapper";
import { DiscountFrame } from "components/DiscountFrame/DiscountFrame";
import { useClientContext } from "context/ClientContext/ClientContext";
import { PersonDataType } from "context/OrderContext/OrderContext";
import { changeValueCurrency } from "utils/utils";
import { AmountProductCart } from "../../details/components/AmountProductCart";
import { getCartProducts } from "lib/actions/cart";
import Image from "next/image";
const dataPerson: PersonDataType = {
  email: "adam@gmail.com",
  firstName: "Adam",
  lastName: "Cichowski",
  city: "Iława",
  phoneNumber: "+48502211333",
  street: "Władysława Jagieły",
  postalCode: "13-113",
};
export function SubsectionsSummary() {
  const data = getCartProducts();
  const subsections = [
    {
      title: "Cart",
      content: (
        <>
          {data?.cart.map((product) => (
            <div
              key={product.id}
              className="ml-2 mr-1 flex items-center gap-x-6 gap-y-2"
            >
              <figure className="flex flex-wrap items-center gap-x-2 self-stretch xl:flex-nowrap">
                <Image src={product.image} alt="" width={60} height={100} />
                <figcaption className="mt-1 sm:mt-0 text-sm">
                  <div>{product.title}</div>
                  <div className="text-gray-200/90">55 cm x 75 cm</div>
                </figcaption>
              </figure>
              <div>{product.amount}</div>
              <div className="flex items-center gap-x-6 sm:justify-end">
                {changeValueCurrency(product.price)}
              </div>
            </div>
          ))}
        </>
      ),
    },
    {
      title: "Form of delivery",
      content: (
        <dl>
          <dt className="text-primary mb-1">Standard Courier</dt>
          <dd>Deliver to your address</dd>
        </dl>
      ),
    },
    {
      title: "Delivery address",
      content: (
        <address>
          <div>{`${dataPerson.firstName} ${dataPerson.lastName} `}</div>
          <div>{dataPerson.street}</div>
          <div>{`${dataPerson.postalCode} ${dataPerson.city} `}</div>
          <dl className="[&>div]:flex [&>div]:gap-1">
            <div>
              <dt>Phone:</dt>
              <dd>{dataPerson.phoneNumber}</dd>
            </div>
            <div>
              <dt>Email:</dt>
              <dd>{dataPerson.email}</dd>
            </div>
          </dl>
        </address>
      ),
    },
    { title: "Order value", content: <></> },
    { title: "Payment form", content: <></> },
    { title: "Comment to order", content: <></> },
  ] satisfies { title: string; content: JSX.Element }[];

  return (
    <div className="flex flex-wrap justify-between gap-2">
      {subsections.map(({ title, content }) => (
        <SubsectionWrapper key={title} title={title}>
          {content}
        </SubsectionWrapper>
      ))}
    </div>
  );
}
