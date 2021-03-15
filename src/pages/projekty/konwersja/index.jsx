import React, { useState, useEffect } from "react";
import SEO from "src/seo";
import { TextField, MenuItem } from "@material-ui/core";
import styled from "styled-components";
import { conversion } from "src/utils";

const Wrapper = styled.div`
  padding: 5px;
  box-sizing: border-box;
`;

const numbers = Array(35)
  .fill()
  .map((v, i) => i + 2);

const Conversion = () => {
  const [values, setValues] = useState({
    value1: "",
    value2: "",
    system1: 10,
    system2: 10,
    checking: true,
  });
  const handleInput = (e) => {
    const name = e.target.name;
    const val = e.target.value;
    setValues((v) => ({ ...v, [name]: val, checking: true }));
  };
  useEffect(() => {
    if (!values.checking) return;
    setValues((v) => {
      const { value1, system1, system2 } = v;
      const newValue1 = value1
        .split("")
        .filter((v) => !isNaN(parseInt(v, system1)))
        .join("");
      const newValue2 = conversion(newValue1, system1, system2);
      return { ...v, value1: newValue1, value2: newValue2, checking: false };
    });
  }, [values.checking]);
  return (
    <>
      <SEO title="Konwersja liczb: hex, dec, oct itp." />
      <h1>Konwersja</h1>
      <Wrapper>
        <TextField
          margin="normal"
          select
          name="system1"
          value={values.system1}
          onChange={handleInput}
          helperText="Wybierz system z jakiego chcesz zamieniać"
          SelectProps={{ MenuProps: { disableScrollLock: true } }}
        >
          {numbers.map((v, i) => (
            <MenuItem key={i} value={v} children={v} />
          ))}
        </TextField>
        <TextField
          label="Wpisz tekst w wybranym poniżej systemie"
          multiline
          rows="4"
          name="value1"
          value={values.value1}
          onChange={handleInput}
          variant="outlined"
          fullWidth={true}
        />
        <TextField
          margin="normal"
          select
          name="system2"
          SelectProps={{ MenuProps: { disableScrollLock: true } }}
          value={values.system2}
          onChange={handleInput}
          helperText="Wybierz system na jaki chcesz zamieniać"
        >
          {numbers.map((v, i) => (
            <MenuItem key={i} value={v} children={v} />
          ))}
        </TextField>
        <TextField
          label="Wynik:"
          multiline
          rows="4"
          name="value2"
          disabled
          fullWidth={true}
          value={values.value2}
          variant="outlined"
        />
      </Wrapper>
    </>
  );
};
export default Conversion;
