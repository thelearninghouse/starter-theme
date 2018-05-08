require('laravel-mix-purgecss');
require('./.MIX_EXTENSIONS/wp-hot.js');

const PurgecssWordpress = require('purgecss-with-wordpress');
const Config = require("./theme.config.js");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const Glob = require('glob-all');
const ImageMinPlugin = require("imagemin-webpack-plugin").default;
const Mix = require("laravel-mix");
const Path = require("path");
const ThemePathsArray = [
	Path.join(__dirname, '**/*.php'),
	Path.join(__dirname, 'src/scripts/**/*.js')
];


Mix.setPublicPath("public");

Glob.sync('src/scripts/*.js').map(function(file) {
	Mix.js(file, 'js');
});


/* Handles styles for HMR it's not necessary to import them into JS file(s)
 *****************************/
if (Mix.config.hmr) {
	Glob.sync('src/hmr-helpers/*.js').map(function(file) {
		Mix.js(file, 'js');
	});
}


/* ALL JS Files in the root of their respective directories
will be outputted as individual files for dev and building for production
 *****************************/

if (!Mix.config.hmr || Mix.config.production) {

	Glob.sync('src/styles/*.scss').map(function(file) {
		Mix.sass(file, 'css');
	});

	Mix.options({
		processCssUrls: false
	});

	Mix.webpackConfig({
		output: {
			chunkFilename: "js/[name].js",
			path: path.resolve(__dirname, 'public/'),
			publicPath: `/wp-content/themes/${Config.directoryName}/public/`,
		}
	});

	Mix.version();
}


/* This puts files in correct directory
 *****************************/
Mix.webpackConfig({
	resolve: {
		extensions: [".js", ".vue"],
		alias: {
			"@": Path.resolve(__dirname, "./src"),
			"themeConfig": Path.resolve(__dirname, "./theme.config.js")
		}
	},
	plugins: [
		new CopyWebpackPlugin([{
			from: "src/images",
			to: "images"
		}])
	]
});


/* Sets up development environment
 *****************************/
Mix.browserSync({
	proxy: process.env.DEV_URL,
	files: ["**/*.php", "public/css/*.css", "public/js/*.js"]
});


/* Removes unused CSS
 *****************************/
Mix.purgeCss({
	paths: Glob.sync(ThemePathsArray),
	whitelist: [...PurgecssWordpress.whitelist, ...Config.purgecssWhitelist],
	whitelistPatterns: [...PurgecssWordpress.whitelistPatterns, ...Config.purgecssWhitelistPatterns]
});


if (!Mix.config.production) {

	Mix.sourceMaps();
	Mix.webpackConfig({
		devtool: "inline-source-map",
	});
}

Mix.disableNotifications();

Mix.copy("src/fonts", "public/fonts");

Mix.babelConfig({
	plugins: ["syntax-dynamic-import"]
});

Mix.extract(["vue"])

Mix.wpHot();
