import { useState } from 'react';
import { IconButton } from '@material-ui/core';
import { AiOutlineSetting } from 'react-icons/ai';
import { Settings } from '../Settings';

export const SettingsButton = () => {
  const [settingsIsOpen, setSettingsIsOpen] = useState(false);
  const handleOpenSettings = () => setSettingsIsOpen(true);

  return (
    <>
      <IconButton onClick={handleOpenSettings} aria-label="Open Settings">
        <AiOutlineSetting color="white" />
      </IconButton>
      <Settings settingsIsOpen={settingsIsOpen} setSettingsIsOpen={setSettingsIsOpen} />
    </>
  );
};
