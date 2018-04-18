require('laravel-mix-purgecss');
const Config = require("./theme.config.js");

const CopyWebpackPlugin = require("copy-webpack-plugin");

const glob = require('glob-all');

const ImageMinPlugin = require("imagemin-webpack-plugin").default;

const mix = require("laravel-mix");

const path = require("path");

const ThemePathsArray = [
	path.join(__dirname, '**/*.php'),
	path.join(__dirname, 'src/scrips/**/*.js')
];

mix.setPublicPath("./public");

/* ALL SCSS & JS Files in the root of their respective directories
will be outputted as individual files for dev and building for production
 *****************************/
glob.sync('src/styles/*.scss').map(function(file) {
	mix.sass(file, 'css');
});

glob.sync('src/scripts/*.js').map(function(file) {
	mix.js(file, 'js');
});

mix.disableNotifications()

mix
	.purgeCss({
		paths: glob.sync(ThemePathsArray)
	})
	.options({
		processCssUrls: false
	});


/* Sets up development environment
 *****************************/
mix.browserSync({
	proxy: process.env.DEV_URL,
	files: ["**/*.php", "public/css/*.css", "public/js/**/*.js"]
});

/* Only add Vue as a vendor &
	make it available during development if being used
 *****************************/
mix.extract(["vue"])
	.autoload(
		{ vue: ["Vue", "window.Vue"] }
	)


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
		new CopyWebpackPlugin([{
			from: "src/images",
			to: "images"
		}])
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
	mix.version()
}

if ( !mix.config.production ) {

	// Enable sourcemap for development
	mix.sourceMaps()
		.webpackConfig({
			devtool: "inline-source-map"
		});
}
