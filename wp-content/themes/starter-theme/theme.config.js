module.exports = {
  directoryName: "starter-theme",
  selectors: {
    accordion: ".accordion",
    mixItUp: ".mixitup",
    socialShare: ".social-link",
    sticky: ".sticky",
    slider: ".glide",
    dialog: ".dialog",
    smoothScroll: ".smooth-scroll"
  },
  useVue: true,
  purgecssWhitelist: [
    "requestinfo",
    "menu-main-menu",
    "current_page_item",
    "fieldset",
    "legend",
    "label",
    "current-menu-item",
    "ol",
    "columns-2"
  ],
  purgecssWhitelistPatterns: [
    /^elp(_.*)?$/,
    /^keep-nested-children/,
    /^largeCopy/,
    /^fancyNumbers/
  ]
};
