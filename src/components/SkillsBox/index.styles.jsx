import styled, { css } from "styled-components";

export const CardWrapper = styled.div`
  width: 200px;
  height: 250px;
  margin: 20px 10px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 7px 0px var(--black-to-white);
  background-color: ${({ bgcolor }) => bgcolor};
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 60px;
  flex: 1;
`;

export const Title = styled.div`
  height: 50px;
  font-size: 20px;
  color: #000;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 3px;
  text-align: center;
`;

export const SkillsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  color: black;
`;

export const RatingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  padding: 10px;
  box-shadow: 0 0 5px -1px var(--black-to-white);
  opacity: ${({ hasStars }) => +hasStars};
`;

export const ImgWrapper = styled.div`
  margin: 10px;
`;
