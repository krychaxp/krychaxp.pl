import React, { useState, useEffect } from 'react';
import { TextField, Button, Switch } from '@material-ui/core';
import SEO from 'components/Seo';
import { getFreeUrl } from 'apis';
import { useLoading } from 'hooks/useLoading';
import styled from 'styled-components';

export const Code = styled.pre`
  text-align: left;
  font-family: 'Lucida Console', Courier, monospace;
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

const ViewSource = () => {
  const [url, setUrl] = useState('');
  const [code, setCode] = useState('');
  const [resultData, setResultData] = useState('');
  const [prettify, setPrettify] = useState(true);
  const { setLoading } = useLoading();

  const prettifyResult = () => {
    const isObject = typeof resultData === 'object';
    return setCode(isObject ? JSON.stringify(resultData, null, prettify ? 2 : 0) : resultData);
  };

  const handleSearch = async (e) => {
    if (e) e.preventDefault();
    try {
      setLoading(true);
      const validUrl = url.replace(/^https?:\/\//u, '');
      const data = await getFreeUrl((prettify ? 'pretty/' : '') + validUrl);
      setResultData(data);
    } catch (err) {
      setCode(err.message);
    } finally {
      setLoading(false);
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
          <Switch checked={prettify} onChange={handlePretty} name="usepretty" color="primary" />
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
