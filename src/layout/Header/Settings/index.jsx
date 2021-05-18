import { useRef } from "react";
import {
  DialogTitle,
  Dialog,
  MenuItem,
  DialogActions,
  Button,
  Switch,
  IconButton,
  TextField,
} from "@material-ui/core";
import { GiResize } from "react-icons/gi";
import { useApp } from "src/context/AppProvider";
import { useFullscreen, useToggle } from "react-use";
import useTranslation from "next-translate/useTranslation";
import i18n from "i18n";
import styled from "styled-components";
import setLanguage from "next-translate/setLanguage";

const { locales } = i18n;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > * {
    margin-left: 15px !important;
  }
`;

export const Settings = ({ settingsIsOpen, setSettingsIsOpen }) => {
  const { t, lang } = useTranslation("common");
  const { setDarkMode, darkMode } = useApp();
  const handleCloseSettings = () => setSettingsIsOpen(false);
  const handleMode = (e) => setDarkMode(e.target.checked);
  const handleChangeLanguage = async (e) => await setLanguage(e.target.value);

  const ref = useRef(
    typeof window !== "undefined" && window.document.querySelector("body")
  );
  const [show, toggle] = useToggle(false);

  useFullscreen(ref, show);

  return (
    <Dialog
      id="settings"
      onClose={handleCloseSettings}
      open={settingsIsOpen}
      maxWidth="sm"
      fullWidth={true}
    >
      <DialogTitle>{t("settings")}</DialogTitle>
      <Content>
        Dark mode:{" "}
        <Switch color="primary" checked={darkMode} onChange={handleMode} />
      </Content>
      <Content>
        FullScreen:{" "}
        <IconButton onClick={toggle}>
          <GiResize />
        </IconButton>
      </Content>

      <Content>
        Language:{" "}
        <TextField
          select
          margin="dense"
          variant="outlined"
          value={lang}
          onChange={handleChangeLanguage}
        >
          {locales.map((v) => (
            <MenuItem key={v} value={v}>
              {v}
            </MenuItem>
          ))}
        </TextField>
      </Content>
      <DialogActions>
        <Button onClick={handleCloseSettings}>{t("close")}</Button>
      </DialogActions>
    </Dialog>
  );
};
