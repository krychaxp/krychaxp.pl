import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { ServerStyleSheets } from '@material-ui/core/styles';
import { scripts, preconnect, fonts } from 'config';

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
    const [googleAnalyticsUrl] = scripts;

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

          {fonts.map((fontUrl) => (
            <link rel="stylesheet" href={fontUrl} key={fontUrl} />
          ))}

          {preconnect.map((url) => (
            <link key={url} rel="preconnect dns-prefetch" href={url} />
          ))}

          {scripts.map((scriptUrl) => (
            <link key={scriptUrl} rel="preload" as="script" href={scriptUrl} />
          ))}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
