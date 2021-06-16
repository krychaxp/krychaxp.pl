import React, { useEffect, useState } from 'react';
import { getUserIpJson } from 'src/api';
import SEO from 'src/seo';
import { useRouter } from 'next/router';
import { TextField, Button, TableRow, Table, TableBody, TableCell, TableContainer } from '@material-ui/core';
import styled from 'styled-components';
import { useAlert } from 'src/hooks/useAlert';
import { useLoading } from 'src/hooks/useLoading';

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  & > * {
    margin: 10px !important;
  }
`;

const TableWrapper = styled.div`
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
  max-width: 700px;
  width: 100%;
  margin: 10px auto;
`;

const Box = () => {
  const [ipInfo, setIpInfo] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const { setAlert } = useAlert();
  const { setLoading } = useLoading();
  const router = useRouter();
  const { ip = '' } = router.query;

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push({ query: { ip: inputValue } });
  };

  useEffect(() => {
    setInputValue(ip);
    (async () => {
      try {
        setLoading(true);
        setIpInfo('');
        const userIpData = await getUserIpJson(ip);
        if (!ip) {
          router.push({ query: { ip: userIpData.query } });
        }
        setIpInfo(userIpData);
      } catch (e) {
        setAlert('error', 'Nie udało się pobrać danych IP');
      } finally {
        setLoading(false);
      }
    })();
  }, [ip]);

  return (
    <>
      <SEO title="Sprawdź swoje dano o IP" />
      <h1>IP info</h1>
      <Form onSubmit={handleSubmit}>
        <TextField
          label="Wpisz ip"
          variant="outlined"
          name="ip"
          value={inputValue}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => setInputValue(e.target.value)}
          margin="normal"
        />
        <Button variant="contained" type="submit" margin="normal" color="primary">
          szukaj
        </Button>
      </Form>
      {ipInfo && (
        <TableWrapper>
          <TableContainer>
            <Table size="small" aria-label="dense table">
              <TableBody>
                {Object.entries(ipInfo).map(([l, r]) => (
                  <TableRow key={l}>
                    <TableCell>{l}</TableCell>
                    <TableCell>{r}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TableWrapper>
      )}
    </>
  );
};

export default Box;
