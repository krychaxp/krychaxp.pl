import styled, { css } from "styled-components";

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-left: 20px;
  background-color: rgba(255, 255, 255, 0.1);
  clip-path: polygon(0 50%, 30px 100%, 100% 100%, 100% 0, 30px 0);
  & > * {
    margin: 0 15px 0 0 !important;
  }
  @media (max-width: 500px) {
    & > * {
      margin: 0 !important;
    }
  }
`;

export const HeaderTop = styled.header`
  display: flex;
  position: fixed;
  background-color: var(--blue-to-darker);
  top: 0;
  z-index: 105;
  height: var(--header-height);
  left: 0;
  width: 100%;
  transition: box-shadow 0.3s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  &[data-scrolled="true"] {
    box-shadow: 0 -10px 20px 5px var(--black-to-white);
  }
`;

export const Logo = styled.a`
  font-size: min(7vw, 50px);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: 600;
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s;
  height: 100%;
  padding: 0 35px 0 15px;
  clip-path: polygon(
    0 0,
    0 100%,
    calc(100% - 30px) 100%,
    100% 50%,
    calc(100% - 30px) 0
  );
  background-color: rgba(255, 255, 255, 0.1);
  &:hover,
  &:focus {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;
