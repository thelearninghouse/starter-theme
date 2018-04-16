const mix = require("laravel-mix");
const path = require("path");
let ImageMinPlugin = require("imagemin-webpack-plugin").default;
let CopyWebpackPlugin = require("copy-webpack-plugin");
const Config = require("./theme.config.js");

mix.setPublicPath("./public");
/* Files to be compiled and there compiled location
*****************************/
mix
	.js("src/scripts/scripts.js", "js")
	.sass("src/styles/style.scss", "css")
	.sass("src/styles/critical-home.scss", "css")
	.sass("src/styles/launch-lp-style.scss", "css")
	.sass("src/styles/lp-style.scss", "css")
	.disableNotifications()
	.options({
		processCssUrls: false
	});

/* Sets up development environment
*****************************/
mix.browserSync({
	proxy: process.env.DEV_URL,
	files: ["**/*.php", "public/css/*.css", "public/js/**/*.js"]
});

/* Makes Vue available globally
*****************************/
mix.autoload({
	vue: ["Vue", "window.Vue"]
	// 'jquery': ['$', 'window.jQuery', 'jQuery']
});

/* Vendor libraries go here
*****************************/
if (Config.useVue) {
	mix.extract(["vue"]);
}

/* Copies images to correct folder for dev and building for production
*****************************/
mix.copy("src/fonts", "public/fonts");

/* This puts files in correct directory
*****************************/
mix.webpackConfig({
	resolve: {
		extensions: [".js", ".vue"],
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"themeConfig": path.resolve(__dirname, "./theme.config.js")
		}
	},
	output: {
		path: path.resolve(__dirname, "public"),
		publicPath: `/wp-content/themes/${Config.directoryName}/public/`,
		chunkFilename: "js/[name].js"
	},
	plugins: [
		new CopyWebpackPlugin([
			{
				from: "src/images",
				to: "images"
			}
		])
		// new ImageMinPlugin([{
		//     test: /\.(jpe?g|png|gif|svg)$/i
		// }])
	]
});

/* Allows dynamic loading of JS files
*****************************/
mix.babelConfig({
	plugins: ["syntax-dynamic-import"]
});

/* Versioning and Sourcemaps
*****************************/
if (mix.config.production) {
	// Enable cache busting in production
	mix.version();
} else {
	// Enable sourcemap for development

	mix.webpackConfig({
		devtool: "inline-source-map"
	});
	mix.sourceMaps();
}
