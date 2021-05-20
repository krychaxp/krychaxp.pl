import React, { useEffect } from "react";
import { Header } from "./Header";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Main } from "./Main";
import { CookieAlert } from "./CookieAlert";
import { useAlert } from "src/hooks/useAlert";

export const Layout = ({ children }) => {
  const { setAlert } = useAlert();

  useEffect(() => {
    const onOnline = () => {
      setAlert("info", "Ponownie połączono z internetem.");
    };
    const onOffline = () => {
      setAlert("warning", "Stracono połączenie z internetem.");
    };
    window.addEventListener("offline", onOffline);
    window.addEventListener("online", onOnline);
    return () => {
      window.removeEventListener("offline", onOffline);
      window.removeEventListener("online", onOnline);
    };
  }, []);

  return (
    <>
      <Header />
      <Nav />
      <Main>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        {children}
      </Main>
      <Footer />
      <CookieAlert />
    </>
  );
};
