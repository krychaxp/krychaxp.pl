import React, { useState } from "react";
import SEO from "src/seo";
import { TextField } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import { AiFillInfoCircle } from "react-icons/ai";
import styled from "styled-components";
import { calculateONP } from "src/utils";

const OnpWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 30px;
  height: 30px;
  padding: 0 5px;
  background-color: var(--blue-to-darker);
  color: white;
  border-radius: 5px;
  margin: 2px;
`;

const ResultWrapper = ({ items }) => {
  const arr = calculateONP(items);
  return (
    <OnpWrapper>
      {arr.map((v, i) => (
        <Row key={i}>
          {v.map((text, j) => (
            <Item key={j}>{text}</Item>
          ))}
        </Row>
      ))}
    </OnpWrapper>
  );
};

const ONP = () => {
  const [value, setValue] = useState("");
  const handleInput = (e) => {
    const val = (e.target.value.match(/[0-9*\-+/ ]/g) || []).join("");
    setValue(val);
  };
  return (
    <>
      <SEO title="Odwrotna notacja polska (ONP)" />
      <h1>Odwrotna notacja polska (ONP)</h1>
      <TextField
        label="Wpisz [ 0-9 , - , + , * , / ]"
        onChange={handleInput}
        value={value}
        style={{ maxWidth: "400px" }}
        fullWidth
        helperText="Wpisuj znaki z odstępem spacji"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <a
                href="https://pl.wikipedia.org/wiki/Odwrotna_notacja_polska"
                target="_blank"
                rel="nofollow noreferrer"
                style={{ fontSize: "25px" }}
              >
                <AiFillInfoCircle />
              </a>
            </InputAdornment>
          ),
        }}
      />
      <ResultWrapper items={value} />
    </>
  );
};

export default ONP;

export const getStaticProps = () => {
  return { props: {} };
};