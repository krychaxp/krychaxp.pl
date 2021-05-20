import React, { useRef } from "react";
import { useFullscreen, useToggle } from "react-use";
import styled from "styled-components";

const Wrapper = styled.div`
  border: none;
  box-sizing: border-box;
  outline: none;
  width: 100%;
  height: 100%;
  background-color: #000;
`;

export const FullScreen = ({ showInfo, children }) => {
  const ref = useRef();
  const [show, toggle] = useToggle(false);
  useFullscreen(ref, show);
  return (
    <>
      {showInfo && "Naciśnij podwójnie, aby wywołać fullscreen"}
      <Wrapper ref={ref} onDoubleClick={toggle}>
        {children}
      </Wrapper>
    </>
  );
};
