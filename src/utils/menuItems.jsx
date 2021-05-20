import { FaHome, FaUserGraduate } from "react-icons/fa";
import { RiFileMarkLine, RiVirusLine } from "react-icons/ri";
import { MdPermContactCalendar } from "react-icons/md";
import { AiFillFolderOpen } from "react-icons/ai";

export const menuItems = [
  ["home", "/", <FaHome />],
  ["projects", "/projekty", <AiFillFolderOpen />],
  ["experience", "/doswiadczenie", <RiFileMarkLine />],
  ["skills", "/umiejetnosci", <FaUserGraduate />],
  ["contact", "/kontakt", <MdPermContactCalendar />],
  ["corona", "/koronawirus", <RiVirusLine />],
].map(([name, path, icon]) => ({
  path,
  name,
  icon,
}));
 