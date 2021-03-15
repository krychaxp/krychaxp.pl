import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }
  render() {
    return (
      <Html>
        <Head>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);};
gtag('js', new Date());
gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_TRACKING_ID}', {
  page_path: window.location.pathname,
});
`,
            }}
          />
        </Head>
          <style>{`body {display: none;}`}</style>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
