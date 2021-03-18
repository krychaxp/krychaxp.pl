const nextTranslate = require("next-translate");
const fs = require("fs");

module.exports = nextTranslate({
  rewrites: async () => {
    const file = fs.readFileSync("_rewrites", "utf-8");
    return file
      .split("\n")
      .map((v) => v.split(" "))
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
});