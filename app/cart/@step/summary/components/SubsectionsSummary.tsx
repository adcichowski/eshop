import { SubsectionWrapper } from "app/cart/@step/summary/components/SubsectionWrapper";
import { PersonDataType } from "context/OrderContext/OrderContext";
import { ProductOrderSummary } from "./ProductOrderSummary";
import { getCartProducts } from "lib/actions/cart";
import { DetailsOrderSummary } from "./DetailsOrderSummary";
import { getOrder } from "lib";
const dataPerson: PersonDataType = {
  email: "adam@gmail.com",
  firstName: "Adam",
  lastName: "Cichowski",
  city: "Iława",
  phoneNumber: "+48502211333",
  street: "Władysława Jagieły",
  postalCode: "13-113",
};
export async function SubsectionsSummary() {
  const data = getCartProducts();
  const order = await getOrder("cllpou7inxz570bun74sbnrwg");
  const subsections = [
    {
      title: "Cart",
      content: (
        <div className="max-h-[250px] overflow-y-auto flex flex-col gap-2">
          {data?.cart.map((product) => (
            <ProductOrderSummary key={product.id} {...product} />
          ))}
        </div>
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
    {
      title: "Order value",
      content: (
        <div className="mt-1">
          <DetailsOrderSummary
            totalOrder={order.total}
            discount={0}
            delivery={1199}
          />
        </div>
      ),
    },
    {
      title: "Payment form",
      content: (
        <div>
          <p className="text-primary">Credit Card</p>
          <dl className="flex gap-1">
            <dt>Status payment:</dt>
            <dd className="text-primary">Success</dd>
          </dl>
        </div>
      ),
    },
    {
      title: "Comment to order",
      content: <p className="text-gray-100">No comments</p>,
    },
  ] satisfies { title: string; content: JSX.Element }[];

  return (
    <div className="flex flex-wrap justify-center md:justify-between gap-2">
      {subsections.map(({ title, content }) => (
        <SubsectionWrapper key={title} title={title}>
          {content}
        </SubsectionWrapper>
      ))}
    </div>
  );
}
