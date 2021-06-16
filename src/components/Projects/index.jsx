import { useMemo } from 'react';
import Link from 'next/link';
import SEO from 'src/seo';
import { FcOpenedFolder } from 'react-icons/fc';
import { FaListUl, FaGripHorizontal } from 'react-icons/fa';
import { IoMdOpen } from 'react-icons/io';
import { IconButton } from '@material-ui/core';
import { useLocalStorage } from 'react-use';
import useTranslation from 'next-translate/useTranslation';
import { ButtonsWrapper, LinksWrapper, ListItem, NewWindowIcon } from './index.styles';
import { projectsList } from './index.constants';

export const Projects = () => {
  const { t } = useTranslation();
  const title = t('menu:projects');
  const [layoutStyle, setLayoutStyle] = useLocalStorage('projects_style', 'list');

  const projectsListSeo = useMemo(() => projectsList.map((v) => v.name).reduce((t, v) => `${t}, ${v}`), []);

  const isList = useMemo(() => layoutStyle === 'list', [layoutStyle]);

  const handleChange = (a) => () => setLayoutStyle(a);

  return (
    <>
      <SEO title={title} description={`Moje projekty małe i duże: ${projectsListSeo}`} />
      <h1>{title}</h1>
      <h3>{t('projects:subtitle')}</h3>
      <br />
      <ButtonsWrapper>
        <IconButton color={isList ? 'primary' : 'default'} onClick={handleChange('list')}>
          <FaListUl />
        </IconButton>
        <IconButton color={!isList ? 'primary' : 'default'} onClick={handleChange('tiles')}>
          <FaGripHorizontal />
        </IconButton>
      </ButtonsWrapper>
      <LinksWrapper>
        {projectsList.map(({ path, name, isTarget }, i) => (
          <Link href={path} key={i}>
            <ListItem href={path} title={name} isList={isList} target={isTarget ? '_blank' : undefined} rel="noopener">
              <FcOpenedFolder /> {name}
              {isTarget && (
                <NewWindowIcon>
                  <IoMdOpen />
                </NewWindowIcon>
              )}
            </ListItem>
          </Link>
        ))}
      </LinksWrapper>
    </>
  );
};
