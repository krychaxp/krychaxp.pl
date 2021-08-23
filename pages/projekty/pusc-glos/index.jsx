import React, { useState, useEffect } from 'react';
import SEO from 'components/Seo';
import { TextField, Button, MenuItem } from '@material-ui/core';

const Component = () => {
  const [text, setText] = useState('');
  const [speaker, setSpeaker] = useState({ name: '' });
  const [voices, setVoices] = useState([]);
  const handleClick = (e) => {
    e.preventDefault();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = speaker;
    window.speechSynthesis.speak(utterance);
  };
  const handleChange = (e) => {
    setSpeaker(voices.find((v) => v.name === e.target.value));
  };
  useEffect(() => {
    window.speechSynthesis.onvoiceschanged = () => {
      const vo = window.speechSynthesis.getVoices();
      setVoices(vo);
      setSpeaker(vo[0]);
    };
  }, []);
  return (
    <>
      <SEO title="Puść głos" />
      <h1>Puść głos</h1>
      <form onSubmit={handleClick}>
        <TextField
          label="Napisz jakiś tekst"
          multiline
          rows="4"
          value={text}
          onChange={(e) => setText(e.target.value)}
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          select
          fullWidth
          label="Lektor"
          value={speaker.name}
          onChange={handleChange}
          SelectProps={{ MenuProps: { disableScrollLock: true } }}
          variant="outlined"
          margin="normal"
        >
          {voices.map(({ name }) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </TextField>
        <Button color="primary" type="submit" variant="contained">
          Puść głos
        </Button>
        {voices.length === 0 && 'Brak dostępnych głosów na tym urządzeniu.'}
      </form>
    </>
  );
};

export default Component;
