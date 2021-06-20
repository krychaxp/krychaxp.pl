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
  ],
};

module.exports = nextTranslate(options);
