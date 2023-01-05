const path = require("path");

module.exports = {
  i18n: {
    locales: ["tw", "en"],
    defaultLocale: "tw",
    //localeDetection: true,
    detection: {
      order: ["path", "cookie", "localStorage"],
      caches: ["localStorage", "cookie"], // cache user language on
    },
  },
  localePath: path.resolve("./src/locales"),
};
