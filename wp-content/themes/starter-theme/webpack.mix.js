const mix = require('laravel-mix');
const config = require('./theme.config.js');
const path = require('path');
const glob = require('glob-all');
const purgecssWordpress = require('purgecss-with-wordpress');
require('laravel-mix-purgecss');

let assetsProductionDirectory = `/wp-content/themes/${config.directoryName}/public/`;
let resourceRoot = mix.config.hmr ? 'http://localhost:8080/' : assetsProductionDirectory;
let themePathsArray = [
	path.join(__dirname, '**/*.php'),
	path.join(__dirname, 'src/scripts/**/*.js')
];


/** Main Settings - Not dependant on if HMR, dev, or production modes
 ****************************************/
glob.sync('src/scripts/*.js').map(function(file) {
	mix.js(file, 'js');
});
glob.sync('src/styles/*.scss').map(function(file) {
	mix.sass(file, 'css');
});


mix.disableNotifications()
	.setPublicPath('public')
	.setResourceRoot(resourceRoot)
	.browserSync({
		proxy: process.env.DEV_URL,
		files: ["**/*.php", "public/css/*.css", "public/js/*.js"]
	})
	.copy("src/fonts", "public/fonts")
	.copy("src/images", "public/images")
	.extract(['vue']);


mix.options({
	processCssUrls: false,
	autoprefixer: {
		options: {
			grid: true,
		}
	}
});


mix.webpackConfig({
	resolve: {
		extensions: [".js", ".vue"],
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"themeConfig": path.resolve(__dirname, "./theme.config.js")
		}
	},
	output: {
		chunkFilename: "js/[name].js",
		publicPath: mix.config.hmr ? 'http://localhost:8080/' : assetsProductionDirectory
	}
})


/* Removes unused CSS
 *****************************/
mix.purgeCss({
	paths: glob.sync(themePathsArray),
	whitelist: config.purgecssWhitelist,
	whitelistPatterns: [...purgecssWordpress.whitelistPatterns, ...config.purgecssWhitelistPatterns],
	whitelistPatternsChildren: config.purgeCSSWhitelistPatternsChildren
});


if (mix.inProduction()) {
	mix.version();
} else {
	mix.webpackConfig({
		devtool: "inline-source-map",
	})
	mix.sourceMaps();
}
