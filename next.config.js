const nextTranslate = require('next-translate');

const options = {
  rewrites: () => [
    {
      source: '/static/:path*',
      destination: `${process.env.CDN_URL_1}/:path*`,
    },
    {
      source: '/s3/:path*',
      destination: `${process.env.CDN_URL_2}/:path*`,
    },
    {
      source: '/api/coronavirus/countries',
      destination: `https://api.covid19api.com/countries`,
    },
    {
      source: '/api/coronavirus/country/:path*',
      destination: `https://api.covid19api.com/total/dayone/country/:path*`,
    },
  ],
};

module.exports = nextTranslate(options);
