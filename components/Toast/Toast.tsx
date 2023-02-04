import React from "react";
import { ToastContainer } from "react-toastify";

export function Toast() {
  return (
    <div className="absolute left-0 top-0 w-full flex items-center">
      <ToastContainer
        limit={1}
        bodyClassName="flex items-center h-6"
        toastClassName="bg-primary text-white flex h-6"
        className="w-1/2 left-0 top-0 m-auto h-6"
        hideProgressBar
      />
    </div>
  );
}
