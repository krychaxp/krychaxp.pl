import {
  ChartWrapper,
  Chart,
  Selectors,
  TableWrapper,
  NewTable,
} from "./index.styles";

import { TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { TextField, MenuItem } from "@material-ui/core";
import { Fab, Tooltip } from "@material-ui/core";
import { FiDownload } from "react-icons/fi";

export const periodArray = [
  { id: -7, period: "Ostatni tydzień" },
  { id: -30, period: "Ostatni miesiąć" },
  { id: -60, period: "Ostatnie 2 miesiące" },
  { id: 0, period: "Od początku" },
];

export const Loading = () => (
  <ChartWrapper>
    <Chart>
      <Skeleton variant="rect" width={200} height={60} />
      <Skeleton variant="rect" width={100} height={60} />
    </Chart>
    <Skeleton variant="rect" width={400} height={35} />
    <Skeleton variant="rect" width={200} height={25} />
    <Skeleton variant="rect" width={"100%"} height={300} />
    <Selectors>
      {Array(7)
        .fill()
        .map((v, i) => (
          <Skeleton variant="rect" key={i} width={130} height={25} />
        ))}
    </Selectors>
  </ChartWrapper>
);

export const CopyButton = ({ series, coronavirus, period, activeCountry }) => {
  const exportFileHandle = () => {
    let text = [];
    text.push(series.map(({ name }) => name).join(";"));
    text.push(
      coronavirus.date
        .slice(period)
        .map((v, i) => [v, ...series.map(({ data }) => data[i])].join(";"))
        .reverse()
        .join("\n")
    );
    return text.join("\n");
  };
  return (
    <a
      href={`data:,${exportFileHandle()}`}
      download={`coronavirus_in_${activeCountry}.txt`}
    >
      <Tooltip title="Pobierz" arrow>
        <Fab color="primary" aria-label="download" size="medium">
          <FiDownload fontSize="25px" />
        </Fab>
      </Tooltip>
    </a>
  );
};

export const SelectCountry = ({
  activeCountry,
  setActiveCountry,
  countries,
}) => (
  <TextField
    label="Wybierz kraj"
    select
    value={activeCountry}
    variant="outlined"
    color="primary"
    margin="normal"
    onChange={(e) => setActiveCountry(e.target.value)}
    SelectProps={{ MenuProps: { disableScrollLock: true } }}
  >
    {countries.map(({ Country, Slug }) => (
      <MenuItem key={Slug} value={Slug}>
        {Country}
      </MenuItem>
    ))}
  </TextField>
);

export const SelectPeriod = ({ period, setPeriod }) => (
  <TextField
    label="Wybierz okres"
    select
    value={period}
    variant="outlined"
    color="primary"
    margin="normal"
    onChange={(e) => setPeriod(+e.target.value)}
    SelectProps={{ MenuProps: { disableScrollLock: true } }}
  >
    {periodArray.map(({ id, period }) => (
      <MenuItem key={id} value={id}>
        {period}
      </MenuItem>
    ))}
  </TextField>
);

export const TableData = ({ series, coronavirus, period }) => (
  <TableWrapper>
    <NewTable aria-label="simple table" size="small">
      <TableHead>
        <TableRow>
          <TableCell>Data</TableCell>
          {series.map(({ name }) => (
            <TableCell align="right" key={name}>
              {name}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {coronavirus.date
          .slice(period)
          .map((v, i) => (
            <TableRow key={v}>
              <TableCell>{v}</TableCell>
              {series.map(({ data }, j) => (
                <TableCell key={j + "a" + i} align="right">
                  {data[i]}
                </TableCell>
              ))}
            </TableRow>
          ))
          .reverse()}
      </TableBody>
    </NewTable>
  </TableWrapper>
);
