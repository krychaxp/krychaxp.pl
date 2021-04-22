import styled from "styled-components";

export const ExpWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-flow: row wrap;
`;

export const Card = styled.div`
  max-width: 500px;
  width: 100%;
  box-sizing: border-box;
  margin: 10px;
  & > * {
    box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.4) !important;
  }
  cursor: pointer;
  text-align: left;
`;

export const ImgWrapper = styled.a`
  position: relative;
  display: block;
`;
