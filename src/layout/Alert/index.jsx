import { useState, useEffect, memo } from "react";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
const Component = () => {
  const [value, setValue] = useState({});
  const [open, setOpen] = useState(false);
  const remove = () => setOpen(false);
  useEffect(() => {
    window.setAlert = (type = "info", text = "some text") => {
      setValue({ type, text });
      setOpen(true);
    };
  }, []);
  return (
    <Snackbar open={open} autoHideDuration={6000} style={{ zIndex: 9999 }}>
      <Alert
        onClose={remove}
        severity={value.type}
        variant="filled"
        elevation={6}
      >
        {value.text}
      </Alert>
    </Snackbar>
  );
};

export default memo(Component);
