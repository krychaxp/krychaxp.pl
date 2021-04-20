import { useEffect, useState, memo } from "react";
import { CircularProgress } from "@material-ui/core";
import styled from "styled-components";

const Box = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  z-index: 9999 !important;
`;

const Component = () => {
  const [value, setValue] = useState(false);
  useEffect(() => {
    window.loading = {
      open: () => setValue(true),
      close: () => setValue(false),
    };
  }, []);

  return (
    value && (
      <Box>
        <CircularProgress color="inherit" />
      </Box>
    )
  );
};

export const Loading = memo(Component);
