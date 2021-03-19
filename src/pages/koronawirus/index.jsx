import SEO from "src/seo";
import dynamic from "next/dynamic";
import useTranslation from "next-translate/useTranslation";

const CoronavirusBox = dynamic(() => import("src/components/CoronavirusBox"), {
  ssr: false,
});

const Component = () => {
  const { t } = useTranslation("menu");
  const title = t("corona");
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
