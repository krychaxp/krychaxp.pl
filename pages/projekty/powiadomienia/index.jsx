/* eslint no-new:"off" */

import SEO from 'components/Seo';
import { TextField, Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useAlert } from 'hooks/useAlert';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > * {
    margin: 10px !important;
  }
`;

const Alert = styled.div`
  width: 350px;
  padding: 20px;
  box-shadow: 0 5px 10px 3px rgba(0, 0, 0, 0.6);
  background-color: #333;
  margin: 10px auto;
  display: flex;
  align-items: stretch;
`;

const Icon = styled.img`
  width: 70px;
  height: 70px;
  display: block;
`;

const TextWrapper = styled.div`
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  text-align: left;
  flex: 1;
`;

const Title = styled.div`
  color: white;
  font-weight: bold;
`;
const Text = styled.div`
  color: #aaa;
  font-size: 17px;
`;

const defaultValues = {
  title: 'Krychaxp website',
  icon: '/favicon.ico',
  text: 'Some text ...',
};

const Notifications = () => {
  const { register, handleSubmit, getValues, watch } = useForm({
    defaultValues,
  });
  const { setAlert } = useAlert();

  const onSubmit = async () => {
    const { title, icon, text } = getValues();
    const res = await Notification.requestPermission();

    switch (res) {
      case 'granted': {
        new Notification(title, {
          body: text,
          icon,
        });
        break;
      }
      case 'default':
        setAlert('warning', 'Musisz najpierw zezwolić na powiadomienia.');
        break;
      case 'denied':
        setAlert('error', 'Masz wyłączone powiadomienia! Musisz to zmienić, aby korzystać z tej funkcji.');
        break;
      default:
    }
  };

  return (
    <>
      <SEO title="Powiadomienia" />
      <h1>Powiadomienia</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <TextField variant="outlined" label="Tytuł" name="title" inputRef={register} />
        <TextField variant="outlined" label="Ikonka" name="icon" inputRef={register} />
        <TextField variant="outlined" label="Treść" name="text" inputRef={register} />
        <Button variant="outlined" type="submit">
          Wyślij
        </Button>
      </Form>
      <Alert>
        <Icon src={watch('icon')} alt="icon" />
        <TextWrapper>
          <Title>{watch('title')}</Title>
          <Text>{watch('text')}</Text>
        </TextWrapper>
      </Alert>
    </>
  );
};

export default Notifications;

/** ******** */
