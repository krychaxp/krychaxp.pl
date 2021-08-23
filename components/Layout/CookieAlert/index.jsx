import { useState, useEffect, memo } from 'react';
import { Button } from '@material-ui/core';
import Link from 'next/link';
import styled from 'styled-components';
import useTranslation from 'next-translate/useTranslation';

const cname = 'cookie_accepted';

const CookieBox = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px;
  z-index: 999;
  background-color: var(--white-to-dark);
  border-top: 2px solid #039;
  text-align: center;
  transform: translate(0);
  box-shadow: 0 0 5px 1px var(--black-to-white);
  @media print {
    display: none;
  }
`;

const Component = () => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation('common');
  const title = t('cookie-title');
  useEffect(() => {
    setOpen(localStorage[cname] !== 'true');
  }, []);
  const handleClose = () => {
    localStorage[cname] = 'true';
    setOpen(false);
  };
  if (!open) {
    return null;
  }
  return (
    <CookieBox>
      {t('cookie-enter')}{' '}
      <Link href="/polityka-prywatnosci">
        <a title={title}>
          <b>{title}</b>
        </a>
      </Link>
      <br />
      <Button variant="contained" color="primary" onClick={handleClose}>
        OK
      </Button>
    </CookieBox>
  );
};

export const CookieAlert = memo(Component);
