import { useState, useContext, createContext } from 'react';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [value, setValue] = useState({});
  const [open, setOpen] = useState(false);

  const remove = () => setOpen(false);

  const setAlert = (type = 'info', text = 'some text') => {
    setValue({ type, text });
    setOpen(true);
  };

  const { type, text } = value;

  return (
    <AlertContext.Provider value={{ setAlert }}>
      {children}
      <Snackbar open={open} autoHideDuration={6000} style={{ zIndex: 9999 }}>
        <Alert onClose={remove} severity={type} variant="filled" elevation={6}>
          {text}
        </Alert>
      </Snackbar>
    </AlertContext.Provider>
  );
};

export const useAlert = () => useContext(AlertContext);
