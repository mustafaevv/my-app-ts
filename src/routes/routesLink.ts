interface LinksType {
  id: number;
  name: string;
  link: string;
}

const links: LinksType[] = [
  {
    id: 0,
    name: "Home",
    link: "/",
  },
  {
    id: 1,
    name: "Product",
    link: "/product",
  },
  {
    id: 2,
    name: "about",
    link: "/about",
  },
  {
    id: 3,
    name: "contact",
    link: "/contact",
  },
  {
    id: 4,
    name: "settings",
    link: "/settings",
  },
];

export default links;
