import { useEffect } from 'react';
import Link from 'next/link';
import { useApp } from 'hooks/useApp';
import { menuItems } from 'utils/menuItems';
import useTranslation from 'next-translate/useTranslation';
import { NavWrapper, ListItem } from './index.styles';

export const Nav = () => {
  const { navIsOpen, setNavIsOpen } = useApp();
  const { t } = useTranslation('menu');

  useEffect(() => {
    const handle = () => {
      if (navIsOpen) {
        setNavIsOpen(false);
      }
    };
    document.body.addEventListener('click', handle);
    return () => {
      document.body.removeEventListener('click', handle);
    };
  }, [navIsOpen, setNavIsOpen]);

  return (
    <NavWrapper data-open={navIsOpen}>
      {menuItems.map(({ name, path, icon }) => {
        const title = t(name);
        return (
          <Link href={path} key={path} passHref>
            <ListItem href={path} title={title} onClick={() => setNavIsOpen(false)}>
              {icon}
              <span>{title}</span>
            </ListItem>
          </Link>
        );
      })}
    </NavWrapper>
  );
};
