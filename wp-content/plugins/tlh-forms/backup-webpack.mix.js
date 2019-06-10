const mix = require("laravel-mix");
const path = require("path");
let assetsProductionDirectory = '/wp-content/plugins/tlh-forms/'

mix.webpackConfig({
	output: {
		chunkFilename: "admin/production/js/[name].[chunkhash].js",
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

mix
  .setPublicPath("./")
  .js("src/admin/js/vue-admin.js", "admin/production/js")
  .sass("src/admin/sass/app.scss", "admin/production/css")
  .extract(["vue", "vuetify"], `admin/production/js/vendor.js`);

mix.disableNotifications();

mix.browserSync({
  proxy: "forms2.dev",
  port: 4001,
  files: ["./admin/production/css/*.css", "./admin/production/js/*.js"]
});

mix.combine(
  [
    "pluginFiles/js/jsonp.js",
    "pluginFiles/js/form-analytics.js",
    "node_modules/axios/dist/axios.min.js",
    "node_modules/vue/dist/vue.js",
    "node_modules/vee-validate/dist/vee-validate.js"
    // "node_modules/vlh-forms/dist/vlh-forms.js"
  ],
  "frontend/js/vendors-bundle.js"
);

mix.copy(
  ["node_modules/vlh-forms/dist/vlh-forms.js"],
  "frontend/js/vlh-forms.js"
);

mix.autoload({
  jquery: ["$", "window.jQuery", "jQuery"],
  vue: ["Vue", "window.Vue"]
});

// if (mix.inProduction()) mix.version();
//  else {
// 	mix.webpackConfig({
// 		devtool: "inline-source-map"
// 	});
// 	mix.sourceMaps();
// }