import React from "react";
import {
  FaReact,
  FaCss3Alt,
  FaPhp,
  FaWordpressSimple,
  FaFigma,
  FaEdit,
  FaUniversalAccess,
  FaShieldAlt,
  FaSith,
  FaCubes,
  FaKey,
  FaBootstrap,
  FaChartBar,
  FaSass,
  FaNode,
  FaAws,
  FaGithub,
  FaNpm,
  FaAngular,
  FaVuejs,
} from "react-icons/fa";
import {
  DiJavascript1,
  DiMongodb,
  DiGoogleCloudPlatform,
} from "react-icons/di";
import { AiFillHtml5, AiOutlineCloudServer, AiFillBug } from "react-icons/ai";
import { IoLogoVercel } from "react-icons/io5";
import {
  GrMysql,
  GrOptimize,
  GrServices,
  GrDocker,
  GrGatsbyjs,
  GrGraphQl,
  GrTestDesktop,
} from "react-icons/gr";
import { MdDevices } from "react-icons/md";
import { BsTriangleHalf } from "react-icons/bs";
import { GiCube, GiServerRack } from "react-icons/gi";
import {
  SiNetlify,
  SiMicrosoftoffice,
  SiTypescript,
  SiOpslevel,
  SiNextDotJs,
  SiMaterialUi,
  SiStyledComponents,
  SiPostgresql,
  SiMicrosoftazure,
} from "react-icons/si";

const colors = ["#cc0000", "#ff9933", "#ffff00", "#00e600"];

const SkillsList = [
  [3, "HTML 5", <AiFillHtml5 />],
  [3, "CSS 3", <FaCss3Alt />],
  [3, "Javascript", <DiJavascript1 />],
  [3, "React", <FaReact />],
  [3, "RWD", <MdDevices />],
  [3, "Next.js", <SiNextDotJs />],
  [3, "Styled Components", <SiStyledComponents />],
  [3, "SCSS", <FaSass />],
  [3, "NodeJS/Express", <FaNode />],
  [3, "REST API", <AiOutlineCloudServer />],
  [3, "Netlify", <SiNetlify />],
  [3, "Vercel", <IoLogoVercel />],
  [3, "Microsoft Office", <SiMicrosoftoffice />],
  [3, "ES6+", "{...}"],
  [3, "NPM", <FaNpm />],
  [3, "JWT", <FaKey />],
  [3, "KISS", "KISS"],
  [3, "DRY", "DRY"],
  [2, "MongoDB", <DiMongodb />],
  [2, "MaterialUI", <SiMaterialUi />],
  [2, "Accessibility", <FaUniversalAccess />],
  [2, "SEO", <GrOptimize />],
  [2, "DevOps", <SiOpslevel />],
  [2, "Animacje", <FaSith />],
  [2, "Git/Github", <FaGithub />],
  [2, "Charts (Highcharts)", <FaChartBar />],
  [2, "AWS", <FaAws />],
  [2, "MySQL", <GrMysql />],
  [2, "Gatsby", <GrGatsbyjs />],
  [1, "Postgresql", <SiPostgresql />], //DiPostgresql
  [1, "Prisma", <BsTriangleHalf />],
  [1, "GCP", <DiGoogleCloudPlatform />],
  [1, "WebSocket", <GiServerRack />],
  [1, "PHP", <FaPhp />],
  [1, "TypeScript", <SiTypescript />],
  [1, "GraphQL", <GrGraphQl />],
  [1, "Figma", <FaFigma />],
  [1, "PWA", <FaShieldAlt />],
  [1, "Service Workers", <GrServices />],
  [1, "Wordpress", <FaWordpressSimple />],
  [1, "C++", "C++"],
  [1, "Canvas / Gry", <FaEdit />],
  [0, "Azure", <SiMicrosoftazure />],
  [0, "Redux", <AiFillBug />],
  [0, "Bootstrap", <FaBootstrap />],
  [0, "Docker", <GrDocker />],
  [0, "Three.js", <FaCubes />],
  [0, "Angular", <FaAngular />],
  [0, "Vue", <FaVuejs />],
  [0, "Webpack", <GiCube />],
  [0, "Tests", <GrTestDesktop />],
].map(([rating, name, icon]) => ({
  name,
  icon,
  color: colors[rating],
  rating,
}));

export default SkillsList;
