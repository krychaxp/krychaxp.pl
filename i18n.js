module.exports = {
  pages: {
    '*': ['common', 'menu'],
    '/': ['home'],
    '/polityka-prywatnosci': ['policy'],
    '/projekty': ['projects'],
  },
  locales: ['pl', 'en'],
  defaultLocale: 'pl',

  /*
   * LoadLocaleFrom: async (lang, ns) => {
   *   const result = await import(`./locales/${lang}/${ns}.json`);
   *   return result.default;
   * },
   */
};
