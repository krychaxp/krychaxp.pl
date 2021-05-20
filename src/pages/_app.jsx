import { useEffect } from "react";
import { Layout } from "src/layout";
import { AppProvider } from "src/hooks/useApp";
import { AlertProvider } from "src/hooks/useAlert";
import { LoadingProvider } from "src/hooks/useLoading";
import { GlobalStyle } from "../styles";

const MyApp = ({ Component, pageProps, router }) => {
  useEffect(() => {
    //https://github.com/vercel/next.js/blob/canary/examples/with-google-analytics/lib/gtag.js
    const handleRouteChange = (url) => {
      window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_TRACKING_ID, {
        page_path: url,
      });
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    console.log(
      "%c Hello in krychaxp website ;D",
      "color:#3dbeff;background:#222"
    );
  }, []);

  return (
    <AppProvider>
      <AlertProvider>
        <LoadingProvider>
          <Layout>
            <GlobalStyle />
            <Component {...pageProps} />
          </Layout>
        </LoadingProvider>
      </AlertProvider>
    </AppProvider>
  );
};

export default MyApp;
