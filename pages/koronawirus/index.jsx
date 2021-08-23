import SEO from 'components/Seo';
import useTranslation from 'next-translate/useTranslation';
import { CoronavirusBox } from 'components/CoronavirusBox';

const Component = () => {
  const { t } = useTranslation('menu');
  const title = t('corona');
  return (
    <>
      <SEO
        title={title}
        image="koronawirus.png"
        description="Statystyki koronawirusa / COVID-19 / SARS-CoV-2 na świecie (Data - Zarażonych (ogółem/aktywnych/nowych) - Zgony (ogółem/nowych) -	Wyzdrowień (ogółem/nowych) - wykresy + tabela (możliwość pobrania)"
      />
      <h1>{title}</h1>
      <CoronavirusBox />
    </>
  );
};

export default Component;
