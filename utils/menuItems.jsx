import { FaHome, FaUserGraduate } from 'react-icons/fa';
import { RiFileMarkLine, RiVirusLine } from 'react-icons/ri';
import { MdPermContactCalendar } from 'react-icons/md';
import { AiFillFolderOpen } from 'react-icons/ai';

export const menuItems = [
  { name: 'home', path: '/', icon: <FaHome /> },
  { name: 'projects', path: '/projekty', icon: <AiFillFolderOpen /> },
  { name: 'experience', path: '/doswiadczenie', icon: <RiFileMarkLine /> },
  { name: 'skills', path: '/umiejetnosci', icon: <FaUserGraduate /> },
  { name: 'contact', path: '/kontakt', icon: <MdPermContactCalendar /> },
  { name: 'corona', path: '/koronawirus', icon: <RiVirusLine /> },
];
