import styled from "styled-components";
import { Table } from "@material-ui/core";

export const ChartWrapper = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  span {
    margin: 5px;
    display: block;
  }
`;

export const Chart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Selectors = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
`;

export const TableWrapper = styled.div`
  margin: 10px;
  overflow-y: auto;
  max-height: 600px;
  box-sizing: border-box;
  box-shadow: 0 0 7px -1px var(--black-to-white);
`;

export const NewTable = styled(Table)`
  box-sizing: border-box;
  thead tr {
    th {
      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: #aaa;
      }
      background-color: white;
      position: sticky;
      top: 0;
      background-color: var(--white-to-dark);
      color: var(--black-to-white);
    }
  }
`;

export const FullWidth = styled.div`
  width: 100%;
`;
