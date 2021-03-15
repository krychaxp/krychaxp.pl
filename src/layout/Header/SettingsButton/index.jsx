import { IconButton } from "@material-ui/core";
import { AiOutlineSetting } from "react-icons/ai";
import { useApp } from "src/context/AppProvider";

function Settings() {
  const { setSettingsIsOpen } = useApp();
  const handleOpenSettings = () => setSettingsIsOpen(true);

  return (
    <IconButton onClick={handleOpenSettings} aria-label="Open Settings">
      <AiOutlineSetting color="white" />
    </IconButton>
  );
}

export default Settings;
