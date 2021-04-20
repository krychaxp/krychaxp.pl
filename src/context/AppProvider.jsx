import React, {
  useState,
  useContext,
  createContext,
  useMemo,
  useEffect,
} from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { useLocalStorageBoolean } from "react-use-window-localstorage";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useLocalStorageBoolean("dark-mode", false);
  const [navIsOpen, setNavIsOpen] = useState(false);
  const darkTheme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: darkMode ? "dark" : "light",
        },
      }),
    [darkMode]
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);
  
  return (
    <AppContext.Provider
      value={{
        darkMode,
        setDarkMode,
        navIsOpen,
        setNavIsOpen,
      }}
    >
      <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
