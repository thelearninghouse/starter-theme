require('laravel-mix-purgecss');

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

/* ALL SCSS & JS Files in the root of their respective directories
will be outputted as individual files for dev and building for production
 *****************************/
Glob.sync('src/styles/*.scss').map(function(file) {
	Mix.sass(file, 'css');
});

Glob.sync('src/scripts/*.js').map(function(file) {
	Mix.js(file, 'js');
});

Mix.setPublicPath("public");
Mix.disableNotifications();
Mix.options({
	processCssUrls: false
});
Mix.copy("src/fonts", "public/fonts");

/* Allows dynamic loading of JS files
 *****************************/
Mix.babelConfig({
	plugins: ["syntax-dynamic-import"]
});


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
	output: {
		path: Path.resolve(__dirname, "public"),
		publicPath: `/wp-content/themes/${Config.directoryName}/public/`,
		chunkFilename: "js/[name].js"
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
	files: ["**/*.php", "public/css/*.css", "public/js/**/*.js"]
});


/* Removes unused CSS
 *****************************/
Mix.purgeCss({
	paths: Glob.sync(ThemePathsArray),
	whitelist: [...PurgecssWordpress.whitelist, ...Config.purgecssWhitelist],
	whitelistPatterns: [...PurgecssWordpress.whitelistPatterns, ...Config.purgecssWhitelistPatterns]
});


/* Only add Vue as a vendor &
	make it available during development if being used
 *****************************/
Mix.extract(["vue"])
Mix.autoload({
	vue: ["Vue", "window.Vue"]
});


/* Versioning and Sourcemaps
 *****************************/
if (Mix.config.production) {
	/* Building For Prodcution */
	Mix.version();

} else {
	/* In Development */
	Mix.sourceMaps();
	Mix.webpackConfig({
		devtool: "inline-source-map"
	});

}
