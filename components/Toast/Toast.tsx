import React from "react";
import { ToastContainer } from "react-toastify";

export function Toast() {
  return (
    <div className="my-2 flex items-center">
      <div className="absolute left-0 top-0 text-base w-full">
        <ToastContainer
          limit={1}
          bodyClassName="flex gap-3 ml-2 items-center"
          toastClassName="bg-primary font-semibold text-white flex rounded-md py-2 shadow shadow-primary"
          className="left-0 top-0 mx-36"
          closeButton
          hideProgressBar
          draggable={false}
        />
      </div>
    </div>
  );
}
