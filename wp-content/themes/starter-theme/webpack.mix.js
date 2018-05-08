require('laravel-mix-purgecss');
require('./mix-extensions/wp-hot.js');

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


/* ALL JS Files in the root of their respective directories
will be outputted as individual files for dev and building for production
 *****************************/
if (!Mix.config.hmr && !Mix.config.production) {

	Glob.sync('src/styles/*.scss').map(function(file) {
		Mix.sass(file, 'css');
	});

	Mix.options({
		processCssUrls: false
	});

	Mix.version();

}

Glob.sync('src/scripts/*.js').map(function(file) {
	Mix.js(file, 'js');
});


Mix.disableNotifications();
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
	// devServer: {
	// 		disableHostCheck: true,
	// 		headers: {
	// 				'Access-Control-Allow-Origin': '*',
	// 		}
	// 		// watchOptions: {
	// 		//     poll: false,
	// 		// },
	// },
	// stats: "verbose",
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


/* Only add Vue as a vendor & make it available during development if being used
 *****************************/
Mix.extract(["vue"])

/* Building For Prodcution
 *****************************/
if (Mix.config.production) {

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

	// Versioning for handling cache busting
	Mix.version();
}

if (!Mix.config.production) {
	Mix.sourceMaps();

	if (!Mix.config.hmr) {
		Mix.webpackConfig({
			devtool: "inline-source-map",
			output: {
				chunkFilename: "js/[name].js",
				path: path.resolve(__dirname, 'public/'),
				publicPath: `/wp-content/themes/${Config.directoryName}/public/`,
			}
		});
	}
}

Mix.wpHot();
