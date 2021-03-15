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
  pwa: {
    disable: process.env.NODE_ENV === "development",
    dest: "public",
  },
});
//<iframe src="https://www.google.com/maps/d/embed?mid=1wetppM0lv2oIXLm23GoRr68Q_T9ul3M_" width="640" height="480"></iframe>
