import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import { Button, TextField, InputAdornment } from '@material-ui/core';
import { AccountCircle, Mail } from '@material-ui/icons';
import styled from 'styled-components';
import { sendEmail } from 'apis';
import SEO from 'components/Seo';
import { useAlert } from 'hooks/useAlert';
import { useLoading } from 'hooks/useLoading';

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  padding: 5px;
  width: 100%;
  flex-direction: column;
`;

const send = (val) =>
  new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        resolve(await sendEmail(val));
      } catch (error) {
        reject(error);
      }
    }, 2000);
  });

const InputName = ({ register, errors }) => (
  <TextField
    label="Imię i Nazwisko"
    name="name"
    margin="normal"
    variant="outlined"
    fullWidth
    inputRef={register({
      required: 'Podaj imię i nazwisko',
      pattern: {
        value: /^\D{3,} \D{3,}$/u,
        message: 'Błędne imię lub nazwisko',
      },
    })}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <AccountCircle />
        </InputAdornment>
      ),
    }}
    error={!!errors.name}
    helperText={errors.name?.message}
  />
);

const InputEmail = ({ register, errors }) => (
  <TextField
    label="E-mail"
    name="email"
    margin="normal"
    variant="outlined"
    fullWidth
    inputRef={register({
      required: 'Wpisz swój email',
      pattern: {
        value: /^[\w\-\d.]{1,}@[\w\-\d.]{1,}\.\w{2,}$/u,
        message: 'Błędny email',
      },
    })}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <Mail />
        </InputAdornment>
      ),
    }}
    error={!!errors.email}
    helperText={errors.email?.message}
  />
);

const InputText = ({ register, errors }) => (
  <TextField
    label="Treść wiadomości"
    name="text"
    margin="normal"
    variant="outlined"
    fullWidth
    rows={5}
    multiline
    InputLabelProps={{ shrink: true }}
    inputRef={register({
      required: 'Wymagany jest opis',
      pattern: { value: /^.{5,}$/, message: 'Tekst musi mieć min. 5 znaków' },
    })}
    error={!!errors.text}
    helperText={errors.text?.message}
  />
);

const InputCaptcha = ({ register, setValue }) => {
  const name = 'recaptcha';
  const onChange = (e) => setValue(name, e);
  const onExpired = () => setValue(name, '');

  useEffect(() => {
    register({ name }, { required: 'Potwierdź, że nie jesteś robotem' });
  }, [register, name]);

  return <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_KEY} onChange={onChange} onExpired={onExpired} />;
};

const Component = () => {
  const { register, handleSubmit, setValue, errors } = useForm();
  const [messageWasSend, setMessageWasSend] = useState(false);
  const { setAlert } = useAlert();
  const { setLoading } = useLoading();
  const onSubmit = async (data) => {
    if (messageWasSend) {
      return setAlert('error', 'Już wysłałeś wiadomość');
    }
    try {
      setLoading(true);
      await send(data);
      setMessageWasSend(true);
      setAlert('success', 'Wiadomość została wysłana');
    } catch (e) {
      setAlert('error', 'Wiadomość nie została wysłana');
    } finally {
      setLoading(false);
    }
  };

  const onError = (e) => {
    const { recaptcha } = e;
    if (recaptcha) {
      const { message } = recaptcha;
      setAlert('error', message);
    }
  };

  return (
    <>
      <SEO title="Kontakt" />
      <h1>Kontakt</h1>
      <div>
        <Form onSubmit={handleSubmit(onSubmit, onError)}>
          <InputName register={register} errors={errors} />
          <InputEmail register={register} errors={errors} />
          <InputText register={register} errors={errors} />
          <InputCaptcha register={register} setValue={setValue} />
          <Button variant="contained" color="primary" type="submit" disabled={messageWasSend}>
            Wyślij
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Component;
