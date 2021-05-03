import React from "react";
import Head from "next/head";
import config from "config";
import { useRouter } from "next/router";
import { locales } from "i18n";
import { GoogleFonts } from "nextjs-google-fonts/GoogleFonts";

const setKeywords = (...arg) => {
  const arr = arg
    .join(" ")
    .toLowerCase()
    .match(/[^|()\/\s+:,]+/g)
    .filter((v) => v != "-");
  return [...new Set(arr)].join(",");
};

const setImage = (image) => {
  return /^http/.test(image)
    ? image
    : config.siteUrl + config.image_src_path + (image || config.image_src);
};

const SEO = ({ description = "", title, image, children, keywords = [] }) => {
  const metaTitle = `${title} | ${config.title}`;
  const metaImage = setImage(image);
  const metaKeywords = setKeywords(
    config.keywords.join(","),
    keywords.join(","),
    metaTitle,
    description
  );
  const metaDescription = description || config.description;
  const router = useRouter();
  const { defaultLocale, locale, pathname } = router;
  const lang = defaultLocale == locale ? "" : "/" + locale;
  const fullUrl = process.env.NEXT_PUBLIC_HOST_URL + lang + pathname;

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content={config.author.name} />
      <meta name="theme-color" content="#0059b2" />
      <meta
        name="google-site-verification"
        content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION}
      />

      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />

      <meta property="og:site_name" content={config.website} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:url" content={fullUrl} />

      <meta name="twitter:creator" content={config.author.twitterName} />
      <meta name="twitter:site" content={config.siteUrl} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />

      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon.ico" />
      <link rel="robots" href="/robots.txt" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      <link rel="image_src" href={metaImage} />
      <link rel="canonical" href={fullUrl} />
      {locales.map((v) => (
        <link
          key={v}
          rel="alternate"
          hrefLang={v}
          href={`${process.env.NEXT_PUBLIC_HOST_URL}/${v}`}
        />
      ))}
      {config.preconnect.map((v) => (
        <link key={v} rel="preconnect dns-prefetch" href={v} />
      ))}

      {config.scripts.map((v) => (
        <link key={v} rel="preload" as="script" href={v} />
      ))}
      {GoogleFonts()}
      {children}
    </Head>
  );
};
export default SEO;
