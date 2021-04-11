const nextTranslate = require("next-translate");
const fs = require("fs");
const { withGoogleFonts } = require("nextjs-google-fonts")
const options = withGoogleFonts({
  rewrites: async () => {
    return [
      {
        source: "/static/:slug*",
        destination: `${process.env.CDN_URL_1}/:slug*`,
      },
      {
        source: "/s3/:slug*",
        destination: `${process.env.CDN_URL_2}/:slug*`,
      },
    ];
  },
  headers: async () => {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
        ],
      },
    ];
  },
  future: {
    webpack5: true,
  },
  googleFonts: {
    fonts: [
      "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&family=Roboto&subset=latin-ext&display=swap",
    ],
  },
});

module.exports = nextTranslate(options);
