import styled, { css } from "styled-components";

export const NavWrapper = styled.nav`
  z-index: 90;
  background-color: var(--white-to-dark);
  position: fixed;
  top: var(--header-height);
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
  &[data-open="true"] {
    transform: translateX(-100%);
    box-shadow: 5px 0 15px 5px var(--black-to-white);
  }
`;

export const ListItem = styled.a`
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
