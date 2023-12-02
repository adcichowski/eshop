"use client";

import { useOrderContext } from "context/OrderContext/OrderContext";

export function PersonDeliveryDetails() {
  const { personData } = useOrderContext();
  if (!personData) throw Error("Create order by each step");
  return (
    <address>
      <div>{`${personData.firstName} ${personData.lastName} `}</div>
      <div>{personData.street}</div>
      <div>{`${personData.postalCode} ${personData.city} `}</div>
      <dl className="[&>div]:flex [&>div]:gap-1">
        <div>
          <dt>Phone:</dt>
          <dd>{personData.phoneNumber}</dd>
        </div>
        <div>
          <dt>Email:</dt>
          <dd>{personData.email}</dd>
        </div>
      </dl>
    </address>
  );
}
