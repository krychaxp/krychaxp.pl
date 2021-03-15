import React, { useState, useRef, useEffect } from "react";
import { TextField, Button, Switch } from "@material-ui/core";
import SEO from "src/seo";
import { getFreeUrl } from "src/api";

const ViewSource = () => {
  const [url, setUrl] = useState("");
  const [code, setCode] = useState("");
  const [resultData, setResultData] = useState("");
  const [prettify, setPrettify] = useState(true);
  
  const prettifyResult = () => {
    const isObject = typeof resultData === "object";
    return setCode(
      isObject ? JSON.stringify(resultData, null, prettify ? 2 : 0) : resultData
    );
  };

  const handleSearch = async (e) => {
    if (e) e.preventDefault();
    try {
      window.loading.open();
      const data = await getFreeUrl((prettify ? "pretty/" : "") + url);
      setResultData(data);
    } catch (e) {
      setCode(typeof e === "string" ? e : "Nie udało się pobrać danych");
    } finally {
      window.loading.close();
    }
  };

  const handlePretty = () => setPrettify(!prettify);

  useEffect(prettifyResult, [resultData, prettify]);

  return (
    <>
      <SEO title="View Source" />
      <h1>View Source</h1>
      <Form onSubmit={handleSearch}>
        <TextField
          label="Wpisz link"
          vaule={url}
          InputLabelProps={{ shrink: true }}
          name="url"
          onChange={(e) => setUrl(e.target.value)}
          fullWidth
        />
        <div>
          Use prettify:
          <Switch
            checked={prettify}
            onChange={handlePretty}
            name="usepretty"
            color="primary"
          />
        </div>
        <Button variant="outlined" color="primary" type="submit">
          Szukaj
        </Button>
      </Form>
      <br />
      <Code>{code}</Code>
    </>
  );
};

export default ViewSource;

/******* */

import styled from "styled-components";

export const Code = styled.pre`
  text-align: left;
  font-family: "Lucida Console", Courier, monospace;
  font-size: 14px;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  background-color: #eee;
  color: black;
  white-space: pre-wrap;
  word-break: break-word;
`;

export const Form = styled.form`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`;
