const mix = require("laravel-mix");
const config = require("./plugin.config.js");
const path = require("path");
// let assetsProductionDirectory = "/wp-content/plugins/tlh-forms/";

let assetsProductionDirectory = `/wp-content/plugins/${
  config.pluginName
}/dist/`;
let resourceRoot = mix.config.hmr
  ? "http://localhost:8080/"
  : assetsProductionDirectory;

mix
  .disableNotifications()
  .setPublicPath("dist")
  .setResourceRoot(resourceRoot)
  .js("src/admin/js/vue-admin.js", "js")
  .sass("src/admin/sass/app.scss", "css")
  .extract(["vue", "vuetify"]);

mix.webpackConfig({
  output: {
    chunkFilename: "js/[name].js",
    // chunkFilename: "admin/production/js/[name].[chunkhash].js",
    publicPath: mix.config.hmr
      ? "http://localhost:8080/"
      : assetsProductionDirectory
  },
  resolve: {
    modules: [
      path.join(__dirname, "node_modules"),
      path.join(__dirname, "src/admin", "js"),
      path.join(__dirname, "src/admin", "css"),
      path.join(__dirname, "src/admin", "scss")
    ],
    extensions: [".js", ".vue"],
    alias: {
      "@": path.resolve(__dirname, "src/admin/js")
    }
  }
});

mix.browserSync({
  proxy: "tlh-forms.loca",
  // port: 4002,
  files: ["./admin/production/css/*.css", "./admin/production/js/*.js"]
});

mix.combine(
  [
    "pluginFiles/js/jsonp.js",
    "pluginFiles/js/form-analytics.js",
    "node_modules/axios/dist/axios.min.js",
    "node_modules/vue/dist/vue.js",
    "node_modules/vee-validate/dist/vee-validate.js"
  ],
  "dist/frontend/js/vendors-bundle.js"
);

mix.copy(
  "node_modules/vlh-forms/dist/vlh-forms.umd.min.js",
  "dist/frontend/js/vlh-forms.js"
);

mix.autoload({
  jquery: ["$", "window.jQuery", "jQuery"],
  vue: ["Vue", "window.Vue"]
});

if (mix.inProduction()) {
  mix.combine(
    [
      "pluginFiles/js/jsonp.js",
      "pluginFiles/js/form-analytics.js",
      "node_modules/axios/dist/axios.min.js",
      "node_modules/vee-validate/dist/vee-validate.js"
    ],
    "dist/frontend/js/vendors-bundle-without-vue.js"
  );  
  mix.version();  
}
else {
  mix.webpackConfig({
    devtool: "inline-source-map"
  });
  mix.sourceMaps();
}