type CategoriesInPictures = {
  src: string;
  alt: string;
  dataBlur?: string;
  href: string;
}[];
export const pictures: CategoriesInPictures = [
  {
    src: "/popular-categories/botanics.jpg",
    alt: "Botanic",
    href: "/botanic",
  },
  {
    src: "/popular-categories/for-kids.jpg",
    alt: "For Kids",
    href: "/kids",
  },
  {
    src: "/popular-categories/architecture.jpg",
    alt: "Architecture",
    href: "/architecture",
  },
  {
    src: "/popular-categories/landscape.jpg",
    alt: "Landscape",
    href: "/landscape",
  },
  { src: "/popular-categories/animals.jpg", alt: "Animals", href: "/animals" },
  {
    src: "/popular-categories/black&white.jpg",
    alt: "Black-White",
    href: "/black-and-white",
  },
];
