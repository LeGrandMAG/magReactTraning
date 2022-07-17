import { nanoid } from "nanoid";
import img1 from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";
import img4 from "./img/4.jpg";

export default [
  {
    id: nanoid(),
    link: img1,
    isShown: false
  },
  {
    id: nanoid(),
    link: img2,
    isShown: false
  },
  {
    id: nanoid(),
    link: img3,
    isShown: false
  },
  {
    id: nanoid(),
    link: img4,
    isShown: false
  }
];
