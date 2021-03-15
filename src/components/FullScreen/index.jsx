import React, { useRef } from "react";
import screenfull from "screenfull";
import styled from "styled-components";

const Wrapper = styled.div`
  border: none;
  box-sizing: border-box;
  outline: none;
  width: 100%;
  height: 100%;
  background-color: #000;
`;

const FullScreen = ({ info, children }) => {
  const ref = useRef();
  const handleClick = (e) => {
    e.stopPropagation();
    screenfull.toggle(ref.current);
  };
  return (
    <>
      {info && "Naciśnij podwójnie, aby wywołać fullscreen"}
      <Wrapper ref={ref} onDoubleClick={handleClick}>
        {children}
      </Wrapper>
    </>
  );
};
export default FullScreen;
