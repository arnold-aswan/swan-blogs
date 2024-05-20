import {
  FaSquareInstagram,
  FaPinterest,
  FaXTwitter,
  FaFacebook,
} from "react-icons/fa6";

export const navigation = [
  { name: "HomePage", href: "/" },
  { name: "Contact", href: "/contact" },
  { name: "About", href: "/about" },
];

export const socialIcons = [
  { name: "instagram", icon: FaSquareInstagram, color: "pink", size: 27 },
  { name: "twitter", icon: FaXTwitter, color: "black", size: 27 },
  { name: "facebook", icon: FaFacebook, color: "blue", size: 27 },
  { name: "pinterest", icon: FaPinterest, color: "red", size: 27 },
];

export const categories = [
  "style",
  "fashion",
  "coding",
  "travel",
  "business",
  "gaming",
];

export const comments = [
  {
    id: 1,
    name: "Jane Doe",
    date: "23 Oct 2023",
    comment: "Incididunt duis nostrud nostrud commodo proident.",
  },
  {
    id: 2,
    name: "Jackane Doe",
    date: "23 Aug 2023",
    comment:
      "Proident laborum sit velit dolore enim consequat id dolore dolore elit duis sint irure tempor.",
  },
  {
    id: 3,
    name: "Tracy Knight",
    date: "23 Jun 2023",
    comment:
      "Deserunt laboris excepteur qui consectetur pariatur ex veniam et fugiat consequat deserunt aliqua magna ut. Quis ut amet cillum consectetur. In ea magna nostrud ea elit qui enim aliqua sint ipsum ea amet veniam. Dolore labore eu nisi dolore officia cupidatat reprehenderit et occaecat consequat laborum et ad. Dolore dolore ea est occaecat veniam. Est incididunt ipsum do magna officia laboris veniam ut cillum reprehenderit ad ea adipisicing qui.",
  },
  {
    id: 4,
    name: "Bishop Arkane",
    date: "23 Feb 2023",
    comment:
      "Culpa sunt aute et ad id mollit ut ullamco consequat nulla in dolore. Deserunt consequat anim cillum culpa amet irure est proident deserunt. Nostrud cillum reprehenderit ipsum culpa eu quis cupidatat sit ex cupidatat ullamco nisi consequat.",
  },
];
