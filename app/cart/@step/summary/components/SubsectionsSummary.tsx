import { SubsectionWrapper } from "app/cart/@step/summary/components/SubsectionWrapper";
import { PersonDataType } from "context/OrderContext/OrderContext";

const data: PersonDataType = {
  email: "adam@gmail.com",
  firstName: "Adam",
  lastName: "Cichowski",
  city: "Iława",
  phoneNumber: "+48502211333",
  street: "Władysława Jagieły",
  postalCode: "13-113",
};
export function SubsectionsSummary() {
  const subsections = [
    { title: "Cart", content: <></> },
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
          <div>{`${data.firstName} ${data.lastName} `}</div>
          <div>{data.street}</div>
          <div>{`${data.postalCode} ${data.city} `}</div>
          <dl className="[&>div]:flex [&>div]:gap-1">
            <div>
              <dt>Phone:</dt>
              <dd>{data.phoneNumber}</dd>
            </div>
            <div>
              <dt>Email:</dt>
              <dd>{data.email}</dd>
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
