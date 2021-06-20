import { useRef } from 'react';
import { DialogTitle, Dialog, MenuItem, DialogActions, Button, Switch, IconButton, TextField } from '@material-ui/core';
import { GiResize } from 'react-icons/gi';
import { useFullscreen, useToggle } from 'react-use';
import useTranslation from 'next-translate/useTranslation';
import { locales } from 'i18n';
import styled from 'styled-components';
import setLanguage from 'next-translate/setLanguage';
import { useApp } from 'src/hooks/useApp';

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > * {
    margin-left: 15px !important;
  }
`;

export const Settings = ({ settingsIsOpen, setSettingsIsOpen }) => {
  const [show, toggle] = useToggle(false);
  const { t, lang } = useTranslation('common');
  const { theme, setTheme } = useApp();

  const handleCloseSettings = () => setSettingsIsOpen(false);
  const handleMode = (e) => setTheme(e.target.checked ? 'dark' : 'light');
  const handleChangeLanguage = async (e) => await setLanguage(e.target.value);

  const ref = useRef(typeof window !== 'undefined' && window.document.querySelector('body'));

  useFullscreen(ref, show);

  return (
    <Dialog id="settings" onClose={handleCloseSettings} open={settingsIsOpen} maxWidth="sm" fullWidth={true}>
      <DialogTitle>{t('settings')}</DialogTitle>
      <Content>
        Dark mode: <Switch color="primary" checked={theme === 'dark'} onChange={handleMode} />
      </Content>
      <Content>
        FullScreen:{' '}
        <IconButton onClick={toggle}>
          <GiResize />
        </IconButton>
      </Content>

      <Content>
        Language:{' '}
        <TextField select margin="dense" variant="outlined" value={lang} onChange={handleChangeLanguage}>
          {locales.map((v) => (
            <MenuItem key={v} value={v}>
              {v}
            </MenuItem>
          ))}
        </TextField>
      </Content>
      <DialogActions>
        <Button onClick={handleCloseSettings}>{t('close')}</Button>
      </DialogActions>
    </Dialog>
  );
};
