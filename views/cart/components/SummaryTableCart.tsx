import React from "react";
import { headerRows } from "./SummaryTableCart/constants/constants";

export default function SummaryTableCart() {
  return (
    <table className="mt-10 w-full">
      <thead>
        <tr className="border-b-2">
          {headerRows.map((row) => (
            <HeaderRow key={row.name} {...row} />
          ))}
        </tr>
      </thead>
    </table>
  );
}

const HeaderRow = ({ name, hidden }: { name: string; hidden?: boolean }) => {
  if (hidden) {
    return (
      <td>
        <div>&nbsp;</div>
      </td>
    );
  }
  return (
    <td>
      <div className="mx-10 rounded-t-md bg-green-100 text-center">{name}</div>
    </td>
  );
};

// const BodyRow = ({
//   name,
// }: {
//   name: string;
//   amount: number;
//   price: number;
// }) => {};
