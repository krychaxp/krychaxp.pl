import React from 'react';
import SEO from 'components/Seo';
import { utm } from 'config';
import useTranslation from 'next-translate/useTranslation';

const DefaultPage = () => {
  const { t } = useTranslation('home');
  return (
    <>
      <SEO title={t('title')} />
      <h1>{t('h1')}</h1>
      <div>
        {t('hi')}
        <br />
        {t('create')}
        <br />
        {t('my')}
        <br /> {t('in')}{' '}
        <a href={`http://www.lo8.poznan.pl/${utm}`} rel="noreferrer noopener" title="LO8" target="_blank">
          VIII LO Adama Mickiewicza {t('inp')}
        </a>
        , {t('stu')}
        <br />{' '}
        <a href={`https://www.put.poznan.pl/${utm}`} rel="noreferrer noopener" title="PUT Poznań" target="_blank">
          {t('pp')}
        </a>{' '}
        {t('nk')}{' '}
        <a href={`http://cat.put.poznan.pl/${utm}`} rel="noreferrer noopener" title="PUT Poznań" target="_blank">
          {t('inf')}
        </a>
        , {t('where')}{' '}
        <a href={`https://akai.org.pl/${utm}`} rel="noreferrer noopener" title="AKAI" target="_blank">
          AKAI
        </a>
        .
        <br />
        <br />
        {t('more')}
      </div>
    </>
  );
};

export default DefaultPage;
