/* eslint react/no-danger:"off" */

import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { ServerStyleSheets } from '@material-ui/core/styles';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const styledComponentsSheet = new ServerStyleSheet();
    const materialSheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            styledComponentsSheet.collectStyles(materialSheets.collect(<App {...props} />)),
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, materialSheets.getStyleElement(), styledComponentsSheet.getStyleElement()],
      };
    } finally {
      styledComponentsSheet.seal();
    }
  }

  render() {
    const googleAnalyticsUrl = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_TRACKING_ID}`;

    return (
      <Html>
        <Head>
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/favicon.ico" />
          <link rel="robots" href="/robots.txt" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
          <script async src={googleAnalyticsUrl} />
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

          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&family=Roboto&subset=latin-ext&display=swap"
          />
          <link rel="preconnect dns-prefetch" href="https//www.googletagmanager.com" />
          <link rel="preconnect dns-prefetch" href="https//www.google-analytics.com" />
          <link rel="preconnect dns-prefetch" href="https://fonts.gstatic.com" />
          <link rel="preload" as="script" href="https://www.google-analytics.com/analytics.js" />
          <link rel="preload" as="script" href={googleAnalyticsUrl} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
