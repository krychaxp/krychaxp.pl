module.exports = {
  siteUrl: "https://krychaxp.pl",
  website: "krychaxp.pl",
  title: "Krystian Frydryk (Krychaxp)- Fullstack Developer",
  description:
    "Krystian Frydryk (Krychaxp) - Fullstack Developer",
  keywords: [
    "www",
    "strony",
    "strony internetowe",
    "css",
    "html",
    "javascript",
    "react",
    "praca",
    "junior",
    "senior",
    "mid",
    "aws",
  ],
  image_src: "home.png",
  image_src_path: "/img/img_src/",
  author: {
    name: "Krychaxp",
    twitterName: "@krychaxp",
    officialName: "Krystian Frydryk",
    bio: "Something informations",
    activeEmail: "krychaxp.pl@gmail.com",
    contacts: {
      facebook: "https://www.facebook.com/krychaxp",
      github: "https://github.com/krychaxp",
      linkedin: "https://www.linkedin.com/in/krychaxp",
      instagram: "https://www.instagram.com/krychaxp",
    },
  },
  utm: "?utm_source=krychaxp.pl&utm_content=link",
  preconnect: [
    "https//www.googletagmanager.com",
    "https//www.google-analytics.com",
    "https://fonts.googleapis.com",
    "https://fonts.gstatic.com",
    process.env.NEXT_PUBLIC_API_URL,
  ],
  fonts: [
    "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&family=Roboto&subset=latin-ext&display=swap",
    // "https://fonts.googleapis.com/css?family=Roboto&display=swap",
    // "https://fonts.googleapis.com/icon?family=Material+Icons"
  ],
  scripts: [
    `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_TRACKING_ID}`,
    "https://www.google-analytics.com/analytics.js",
  ],
  isProduction: process.env.NODE_ENV === "production",
};
