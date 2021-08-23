import React, { useState, useEffect } from 'react';
import SEO from 'components/Seo';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Tooltip,
  ClickAwayListener,
} from '@material-ui/core';
import { BiExit, BiShareAlt } from 'react-icons/bi';
import { RiFileCopyLine } from 'react-icons/ri';
import { useCopyToClipboard } from 'react-use';
import { useAlert } from 'hooks/useAlert';

const getErrorInfo = (error) => {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      return 'Odmowa dostępu do lokalizacji.';
    case error.POSITION_UNAVAILABLE:
      return 'Pobranie lokalizacji jest niemożliwe.';
    case error.TIMEOUT:
      return 'Upłynął limit czasu żądania pobrania lokalizacji użytkownika.';
    default:
      return 'Error';
  }
};

const CoordsTable = ({ coords }) => (
  <TableContainer component={Paper}>
    <Table aria-label="simple table">
      <TableBody>
        <TableRow>
          <TableCell>latitude</TableCell>
          <TableCell>{coords.latitude.toFixed(9)}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>longitude</TableCell>
          <TableCell>{coords.longitude.toFixed(9)}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
);

const MapsLink = ({ link }) => (
  <Button href={link} target="_blank" variant="outlined" color="primary" size="large">
    Sprawdź w Google maps &nbsp;
    <BiExit fontSize="30px" />
  </Button>
);

const CopyLink = ({ link }) => {
  const [open, setOpen] = useState(false);
  const [, copyToClipboard] = useCopyToClipboard();

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <Tooltip title="Skopiowano!" placement="bottom" open={open}>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          onClick={() => {
            setOpen(true);
            copyToClipboard(link);
          }}
        >
          Kopiuj link do Google maps &nbsp;
          <RiFileCopyLine fontSize="30px" />
        </Button>
      </Tooltip>
    </ClickAwayListener>
  );
};

const ShareLink = ({ link }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    if (navigator.share) {
      const shareData = {
        title: 'Moja lokalizacja',
        text: 'Sprawdź gdzie jestem',
        url: link,
      };
      navigator.share(shareData);
    } else {
      setOpen(true);
    }
  };
  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <Tooltip title="Ta funkcja nie działa na tym urządzeniu" placement="bottom" open={open}>
        <Button variant="outlined" color="primary" size="large" onClick={handleClick}>
          Udostępnij swoją lokalizację &nbsp;
          <BiShareAlt fontSize="28px" />
        </Button>
      </Tooltip>
    </ClickAwayListener>
  );
};

const ONP = () => {
  const [coords, setCoords] = useState(null);
  const [link, setLink] = useState('');
  const { setAlert } = useAlert();

  const handleClick = () => {
    navigator.geolocation.getCurrentPosition(
      (res) => {
        setCoords(res.coords);
      },
      (error) => {
        setAlert('error', getErrorInfo(error));
      }
    );
  };

  useEffect(() => {
    if (coords) {
      setLink(`https://www.google.com/maps/?q=${coords.latitude.toFixed(9)},${coords.longitude.toFixed(9)}`);
    }
  }, [coords]);

  return (
    <>
      <SEO title="Sprawdź swoją lokalizacje" />
      <h1>Lokalizacja</h1>
      <Button onClick={handleClick} variant="outlined" color="primary">
        Znajdź mnie
      </Button>
      <br />
      {coords && (
        <div style={{ color: 'white !important' }}>
          <CoordsTable coords={coords} />
          <br />
          <MapsLink link={link} />
          <br />
          <br />
          <CopyLink link={link} />
          <br />
          <br />
          <ShareLink link={link} />
        </div>
      )}
    </>
  );
};
export default ONP;
