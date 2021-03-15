import React from "react";
import styled from "styled-components";

const Fixed = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  position: 999;
  background-color: ${({ bgcolor }) => bgcolor || "#000"};
`;

export default function Fixed(props) {
  return <Fixed {...props} />;
}
