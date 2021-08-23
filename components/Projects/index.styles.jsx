import styled from 'styled-components';

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
`;

export const ListItem = styled.a`
  border: 1px solid #ddd;
  border-radius: 10px;
  font-weight: normal;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-shadow: 0 0 7px 0px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s;
  margin: 10px;
  padding: 20px;
  width: 100%;
  text-transform: capitalize;
  position: relative;
  & > svg {
    margin-right: 20px;
  }
  &:hover {
    background-color: #eee;
    color: black;
  }
  max-width: ${({ isList }) => (isList ? 600 : 250)}px;
`;

export const NewWindowIcon = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
`;
