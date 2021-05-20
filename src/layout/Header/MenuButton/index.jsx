import styled, { css } from "styled-components";
import { useApp } from "src/hooks/useApp";
import { IconButton } from "@material-ui/core";

const Burger = styled.div`
  position: relative;
  outline: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  & > span {
    width: 80%;
    height: 3px;
    background-color: #fff;
    position: absolute;
    top: calc(50% - 2px);
    transition: 0.3s;
    &:nth-child(1) {
      transform: translateY(-8px);
    }
    &:nth-child(3) {
      transform: translateY(8px);
    }
  }
  ${({ navIsOpen }) =>
    navIsOpen &&
    css`
      & > span {
        &:nth-child(1) {
          transform: rotate(-45deg);
          width: 100%;
        }
        &:nth-child(2) {
          opacity: 0;
        }
        &:nth-child(3) {
          transform: rotate(45deg);
          width: 100%;
        }
      }
    `}
`;

export const MenuButton = () => {
  const { navIsOpen, setNavIsOpen } = useApp();
  return (
    <IconButton
      onClick={(e) => setNavIsOpen(!navIsOpen)}
      aria-label="Open Settings"
    >
      <Burger navIsOpen={navIsOpen}>
        <span />
        <span />
        <span />
      </Burger>
    </IconButton>
  );
};
