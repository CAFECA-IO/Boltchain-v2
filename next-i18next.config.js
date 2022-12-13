const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "tw",
    locales: ["tw", "en"],
  },
  localePath: path.resolve("./src/locales"),
};
