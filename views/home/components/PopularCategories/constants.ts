import { StaticImageData } from "next/image";
import * as picture from "./assets/assets";

type CategoriesInPictures = { src: StaticImageData; alt: string }[];
export const pictures: CategoriesInPictures = [
  { src: picture.qoute, alt: "Typography & Quotes" },
  { src: picture.toys, alt: "For Kids" },
  { src: picture.mountains, alt: "Illustrations" },
  { src: picture.animals, alt: "Animals" },
  { src: picture.landscape, alt: "Landscapes" },
  { src: picture.artchitecture, alt: "Artchitecture" },
  { src: picture.nature, alt: "Nature" },
  { src: picture.ocean, alt: "Black-White" },
  { src: picture.blackWhite, alt: "Sea ​​& Ocean" },
];
