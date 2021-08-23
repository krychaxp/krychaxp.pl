/* eslint react/no-array-index-key:"off" */

import { TableBody, TableCell, TableHead, TableRow, TextField, MenuItem, Fab, Tooltip } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

import { FiDownload } from 'react-icons/fi';
import { ChartWrapper, Chart, Selectors, TableWrapper, NewTable } from './index.styles';

export const periodArray = [
  { id: -7, period: 'Ostatni tydzień' },
  { id: -30, period: 'Ostatni miesiąć' },
  { id: -60, period: 'Ostatnie 2 miesiące' },
  { id: 0, period: 'Od początku' },
];

export const Loading = () => (
  <ChartWrapper>
    <Chart>
      <Skeleton variant="rect" width={200} height={60} />
      <Skeleton variant="rect" width={100} height={60} />
    </Chart>
    <Skeleton variant="rect" width={400} height={35} />
    <Skeleton variant="rect" width={200} height={25} />
    <Skeleton variant="rect" width="100%" height={300} />
    <Selectors>
      {Array(7)
        .fill()
        .map((v, i) => i)
        .map((v) => (
          <Skeleton variant="rect" key={v} width={130} height={25} />
        ))}
    </Selectors>
  </ChartWrapper>
);

export const CopyButton = ({ series, coronavirus, period, activeCountry }) => {
  const exportFileHandle = () => {
    const text = [];
    text.push(series.map(({ name }) => name).join(';'));
    text.push(
      coronavirus.date
        .slice(period)
        .map((v, i) => [v, ...series.map(({ data }) => data[i])].join(';'))
        .reverse()
        .join('\n')
    );
    return text.join('\n');
  };
  return (
    <a href={`data:,${exportFileHandle()}`} download={`coronavirus_in_${activeCountry}.txt`}>
      <Tooltip title="Pobierz" arrow>
        <Fab color="primary" aria-label="download" size="medium">
          <FiDownload fontSize="25px" />
        </Fab>
      </Tooltip>
    </a>
  );
};

export const SelectCountry = ({ activeCountry, setActiveCountry, countries }) => (
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

export const SelectPeriod = ({ period: currentPeriod, setPeriod }) => (
  <TextField
    label="Wybierz okres"
    select
    value={currentPeriod}
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
                <TableCell key={`${j}a${i}`} align="right">
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
