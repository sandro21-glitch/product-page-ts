export type NavbarItem = {
  id: number;
  text: string;
  url: string;
};
export const navItems: NavbarItem[] = [
  { id: 1, text: "Collection", url: "/" },
  { id: 2, text: "Men", url: "/men" },
  { id: 3, text: "Women", url: "/women" },
  { id: 4, text: "About", url: "/about" },
  { id: 5, text: "Contact", url: "/contact" },
];
