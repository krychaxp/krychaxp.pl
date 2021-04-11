const nextTranslate = require("next-translate");
const { withGoogleFonts } = require("nextjs-google-fonts")

const options = withGoogleFonts({
  async rewrites() {
    return [
      {
        source: "/static/:path*",
        destination: `${process.env.CDN_URL_1}/:path*`,
      },
      {
        source: "/s3/:path*",
        destination: `${process.env.CDN_URL_2}/:path*`,
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
