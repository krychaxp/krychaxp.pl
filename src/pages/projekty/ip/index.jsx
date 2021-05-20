import React, { useEffect, useState } from "react";
import { getUserIpJson } from "src/api";
import SEO from "src/seo";
import { useRouter } from "next/router";
import {
  TextField,
  Button,
  TableRow,
  Table,
  TableBody,
  TableCell,
  TableContainer,
} from "@material-ui/core";
import styled from "styled-components";
import { useAlert } from "src/hooks/useAlert";
import { useLoading } from "src/hooks/useLoading";

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
  const router = useRouter();
  const [ipInfo, setIpInfo] = useState(null);
  const [currentIp, setCurrentIp] = useState(router.query.ip || "");
  const { setAlert } = useAlert();
  const { setLoading } = useLoading();
  const search = () => {
    (async () => {
      try {
        setLoading(true);
        setIpInfo("");
        const userIp = await getUserIpJson(currentIp);
        router.push({
          pathname: "/projekty/ip",
          query: { ip: userIp.query },
        });
        setCurrentIp(userIp.query);
        setIpInfo(userIp);
      } catch (e) {
        setAlert("error", "Nie udało się pobrać danych IP");
      } finally {
        setLoading(false);
      }
    })();
  };
  useEffect(search, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    search();
  };
  return (
    <>
      <SEO title="Sprawdź swoje dano o IP" />
      <h1>IP info</h1>
      <Form onSubmit={handleSubmit}>
        <TextField
          label="Wpisz ip"
          variant="outlined"
          name="ip"
          value={currentIp}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => setCurrentIp(e.target.value)}
          margin="normal"
        />
        <Button
          variant="contained"
          type="submit"
          margin="normal"
          color="primary"
        >
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
