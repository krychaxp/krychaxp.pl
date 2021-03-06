import styled from 'styled-components';

export const CardWrapper = styled.div`
  width: 150px;
  height: 200px;
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
  font-size: 50px;
  flex: 1;
`;

export const Title = styled.div`
  height: 50px;
  font-size: 18px;
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

export const ImgWrapper = styled.a`
  margin: 10px;
`;
