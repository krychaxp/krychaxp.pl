const nextTranslate = require("next-translate");
const fs = require("fs");
const { withGoogleFonts } = require("nextjs-google-fonts");

const options = withGoogleFonts({
  rewrites: async () => {
    const file = fs.readFileSync("_rewrites", "utf-8");
    return file
      .split("\n")
      .map((v) => v.replace(/\r/g, "").split(" "))
      .map(([source, destination]) => ({
        source,
        destination,
      }));
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
