import { utm } from "config";

const stack = [
  { id: 1, item: "HTML" },
  { id: 2, item: "CSS" },
  { id: 3, item: "JS" },
  { id: 4, item: "React" },
  { id: 5, item: "Next.js" },
  { id: 6, item: "MaterialUI" },
  { id: 7, item: "REST API" },
  { id: 8, item: "SCSS" },
  { id: 9, item: "PHP" },
  { id: 10, item: "MySql" },
  { id: 11, item: "PostgreSQL" },
  { id: 12, item: "styled components" },
  { id: 13, item: "Prisma" },
  { id: 14, item: "Express" },
];

const getItem = (id) => stack.find((v) => v.id === id).item;

const getStack = (...arg) => arg.map(getItem).join(", ");

export const websites = [
  {
    link: `https://krychaxp.pl`,
    name: "krychaxp.pl",
    img: "/img/img_src/home.png",
    position: "Fullstack",
    stack: getStack(1, 3, 4, 5, 6, 7, 8, 12),
    descr: "",
  },
  {
    link: `https://strefadb.pl/${utm}`,
    name: "strefadb.pl",
    img: "/img/img_src/strefadb.png",
    position: "Frontend",
    stack: getStack(1, 2, 3),
    descr: "",
  },
  {
    link: `http://cfg.lo8.poznan.pl/${utm}`,
    name: "cfg.lo8.poznan.pl",
    img: "/img/img_src/cfg.png",
    position: "Fullstack",
    stack: getStack(1, 2, 3, 7, 9, 10),
    descr: "",
  },
  {
    link: `https://akai.org.pl/${utm}`,
    name: "akai.org.pl",
    img: "/img/img_src/akai.png",
    position: "Frontend",
    stack: getStack(1, 8, 3, 4, 5),
    descr: "",
  },
  {
    link: `https://swq.netlify.app/${utm}`,
    name: "swq.netlify.app (Hackyeah task)",
    img: "/img/img_src/swq.png",
    position: "Frontend",
    stack: getStack(1, 8, 3, 4, 5),
    descr: "",
  },
  {
    link: `https://mmorpg.org.pl/${utm}`,
    name: "mmorpg.org.pl",
    img: "/img/img_src/mmo.png",
    position: "Fullstack",
    stack: getStack(1, 3, 4, 5, 7, 8, 11, 12, 13),
    descr: "",
  },
];
