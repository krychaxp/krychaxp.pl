// Const fs = require("fs");

// Const globby = require("globby");
// Const priority = (path) => {
//   Const count = path.split("/").filter((v) => v).length;
//   Return ((12 - count) ** 2 / 100).toFixed(2);
// };
// (async () => {
//   Const pages = (
//     Await globby(["src/pages/**/*", "!src/pages/_*.jsx", "!src/pages/api"])
//   )
//     .filter((v) => /^[^\[\]]*\.jsx?$/.test(v)) // usuwanie xx/[xx]
//     .map((v) => v.match(/^src\/pages\/(.*).jsx?$/)[1]) // usuwanie src/pages
//     .map((v) => v.replace(/index$/, "")) // usuwanie index
//     .map((v) => (v.slice(-1) == "/" ? v.slice(0, -1) : v))
//     .map((v) => `${process.env.NEXT_PUBLIC_HOST_URL}/${v}`); // dodawanie website
//   Const time = new Date().toISOString().slice(0, 19);
//   Const sitemap = `
// <?xml version="1.0" encoding="UTF-8"?>
// <urlset
//       xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
//       Xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
//       Xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
//       http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
// ${pages
//   .map(
//     (path) => ` <url>
//     <loc>${path}</loc>
//     <lastmod>${time}+00:00</lastmod>
//     <priority>${priority(path)}</priority>
//   </url>
// `
//   )
//   .join("")}
// </urlset>
// `;

/*
 *   Const formatted = sitemap;
 *   fs.writeFileSync("public/sitemap.xml", formatted);
 *   console.log(
 *     "> [Sitemap] Successfully created sitemap.xml in '/public/sitemap.xml'"
 *   );
 * })();
 */
