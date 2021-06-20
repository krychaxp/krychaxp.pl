import React, { useState, useContext, createContext, useMemo, useEffect } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { useLocalStorage } from 'react-use';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  const muiTheme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: theme,
        },
      }),
    [theme]
  );

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <AppContext.Provider value={{ navIsOpen, setNavIsOpen, theme, setTheme }}>
      <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
