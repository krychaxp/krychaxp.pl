import { useEffect, useMemo, memo } from "react";
import Link from "next/link";
import styled, { css } from "styled-components";
import { useApp } from "src/context/AppProvider";
import { menuItems } from "src/utils/menuItems";
import useTranslation from "next-translate/useTranslation";

const Nav = styled.nav`
  z-index: 90;
  background-color: var(--white-to-dark);
  position: fixed;
  top: 80px;
  left: 100%;
  bottom: 0;
  width: min(100vw, 500px);
  transform: translateX(0);
  transition: transform 0.5s, box-shadow 0.5s, width 0.5s;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  ${({ navIsOpen }) =>
    navIsOpen &&
    css`
      transform: translateX(-100%);
      box-shadow: 5px 0 15px 5px var(--black-to-white);
    `}
`;

const ListItem = styled.a`
  display: block;
  text-transform: uppercase;
  padding: 20px 0;
  transition: color 0.5s;
  position: relative;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--black-to-white);
  overflow: hidden;
  width: 100%;
  font-weight: 500;
  &:focus-visible {
    outline: none;
  }
  &::before,
  &::after {
    content: "";
    height: 50%;
    width: 100%;
    position: absolute;
    z-index: -1;
    background-color: var(--blue-to-darker);
    transition: transform 0.3s;
  }

  &::before {
    top: 0;
    right: 100%;
  }

  &::after {
    bottom: 0;
    left: 100%;
  }

  &:hover,
  &:focus {
    color: #fff;

    &::after {
      transform: translateX(-100%);
    }

    &::before {
      transform: translateX(100%);
    }
  }
  & > svg {
    margin: 5px;
  }
`;

const isTheSameLang = (a, b) => a.lang === b.lang;

const NavList = ({ t, setNavIsOpen }) => {
  return menuItems.map(({ name, path, icon }) => {
    const title = t(name);
    return (
      <Link href={path} key={path}>
        <ListItem href={path} title={title} onClick={() => setNavIsOpen(false)}>
          {icon}
          <span>{title}</span>
        </ListItem>
      </Link>
    );
  });
};

const NavListMemo = memo(NavList, isTheSameLang);

const NavBar = () => {
  const { navIsOpen, setNavIsOpen } = useApp();
  const { t, lang } = useTranslation("menu");

  useEffect(() => {
    const handle = () => {
      if (navIsOpen) {
        setNavIsOpen(false);
      }
    };
    document.body.addEventListener("click", handle);
    return () => {
      document.body.removeEventListener("click", handle);
    };
  }, [navIsOpen]);

  return (
    <Nav navIsOpen={navIsOpen}>
      <NavListMemo lang={lang} t={t} setNavIsOpen={setNavIsOpen} />
    </Nav>
  );
};

export default NavBar;
