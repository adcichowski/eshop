import React from "react";

export function Star({ className }: { className: string }) {
  return (
    <svg
      width="27"
      height="25"
      viewBox="0 0 27 25"
      fill="transparent"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13.5007 1.39578L16.6971 9.72846L16.8202 10.0494H17.164H25.4116L18.6877 14.7481L18.3937 14.9536L18.4941 15.298L20.963 23.7643L13.7895 18.6905L13.5007 18.4863L13.212 18.6906L6.03981 23.7643L8.50747 15.2979L8.60783 14.9535L8.31381 14.7481L1.58864 10.0494H9.83603H10.1797L10.3028 9.72853L13.5007 1.39578Z" />
    </svg>
  );
}