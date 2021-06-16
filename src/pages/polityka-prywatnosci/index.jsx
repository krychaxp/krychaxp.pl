import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import SEO from 'src/seo';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 800px;
  text-align: justify;
`;

export default function Component() {
  const { t } = useTranslation('policy');
  const title = t('title');
  return (
    <>
      <SEO title={title} />
      <h1>{title}</h1>
      <Wrapper dangerouslySetInnerHTML={{ __html: t('text') }}>
        {/* <b>Ciasteczka (ang. cookies)</b> – niewielkie informacje tekstowe,
        wysyłane przez serwer WWW i zapisywane po stronie użytkownika (zazwyczaj
        na twardym dysku). Domyślne parametry ciasteczek pozwalają na odczytanie
        informacji w nich zawartych jedynie serwerowi, który je utworzył.
        Ciasteczka są stosowane najczęściej w przypadku liczników, sond, sklepów
        internetowych, stron wymagających logowania, reklam i do monitorowania
        aktywności odwiedzających.
        <br />
        <br />
        Pliki cookie pozwalające zapamiętać wybory dokonane przez Użytkownika i
        używane m.in. przy logowaniu. Pozostają na urządzeniu użytkownika do
        czasu wylogowania z serwisu lub zamknięcia przeglądarki.
        <br />
        <br />
        Pliki cookie służące do analiz takich jak <b>Google Analytics</b>,
        pozwalające zbierać dane związane ze sposobem korzystania z witryny
        internetowej, w tym treści klikane przez użytkownika podczas
        przeglądania witryny, i umożliwiające ulepszanie działania oraz
        struktury serwisu.
        <br />
        <br />
        Każdy rodzaj przeglądarki oferuje możliwość blokowania i kasowania
        plików cookie. */}
      </Wrapper>
    </>
  );
}
