import { Radio } from "components/Inputs/components/Radio";
import BoxWithSelects from "../BoxWithSelects/BoxWithSelects";

const deliveryTypes = {
  address: [
    { label: "Courier InPost", value: 1190 },
    { label: "Courier DPD", value: 1191 },
  ],
  collectionPoint: [
    { label: "Collection Point InPost 24/7", value: 990 },
    { label: "Collection Point DPD", value: 991 },
  ],
};
export function DeliverySelect() {
  return (
    <BoxWithSelects id="delivery-method" header="Choose a delivery method">
      <ul className="flex flex-col gap-y-8">
        <li>
          <HeadingDeliveryName name="Delivery to your address" />
          <ul>
            {deliveryTypes.address.map((delivery) => (
              <ListItemRadio key={delivery.value}>
                <Radio name="delivery" {...delivery} />
              </ListItemRadio>
            ))}
          </ul>
        </li>
        <li>
          <HeadingDeliveryName name="Delivery to collection point" />
          <ul>
            {deliveryTypes.collectionPoint.map((delivery) => (
              <ListItemRadio key={delivery.value}>
                <Radio name="delivery" {...delivery} />
              </ListItemRadio>
            ))}
          </ul>
        </li>
      </ul>
    </BoxWithSelects>
  );
}

const HeadingDeliveryName = ({ name }: { name: string }) => (
  <h4 className="border-b border-gray-300 pb-5 pl-4">{name}</h4>
);

const ListItemRadio = ({ children }: { children: JSX.Element }) => (
  <li className="border-b border-gray-300 py-5 pl-4">{children}</li>
);
