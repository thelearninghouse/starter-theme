const mix = require('laravel-mix');
const path = require('path');
let ImageMinPlugin = require('imagemin-webpack-plugin').default;
let CopyWebpackPlugin = require('copy-webpack-plugin');
const Theme = require('./theme.config.js')

/* Files to be compiled and there compiled location
*****************************/
mix.js('src/scripts/scripts.js', 'js')
	.sass('src/styles/style.scss', 'css')
	.sass('src/styles/critical-home.scss', 'css')
	.sass('src/styles/launch-lp-style.scss', 'css')
	.sass('src/styles/lp-style.scss', 'css')
  .disableNotifications()
  .options({
     processCssUrls: false
  });


/* Sets up development environment
*****************************/
mix.browserSync({
	proxy: process.env.DEV_URL,
	files: [
		'**/*.php',
		'public/css/*.css',
		'public/js/**/*.js'
	]
})


/* Makes Vue available globally
*****************************/
mix.autoload({
	vue: ["Vue", "window.Vue"],
	// 'jquery': ['$', 'window.jQuery', 'jQuery']
});


/* Vendor libraries go here
*****************************/
mix.extract( ['vue'] );


/* Copies images to correct folder for dev and building for production
*****************************/
mix.copy("src/fonts","public/fonts")


/* This puts files in correct directory
*****************************/
mix.webpackConfig({
	resolve: {
    extensions: ['.js', '.styl'],
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
	output: {
			path: path.resolve(__dirname, 'public'),
			publicPath: `/wp-content/themes/${Theme.directoryName}/public/`,
	    chunkFilename: 'js/[name].[chunkhash].js',
	},
	plugins: [
	    new CopyWebpackPlugin([{
	        from: 'src/images',
	        to: 'images'
	    }]),
	    new ImageMinPlugin([{
	        test: /\.(jpe?g|png|gif|svg)$/i
	    }])
	]
});


/* Allows dynamic loading of JS files
*****************************/
mix.babelConfig({
	"plugins": [ "syntax-dynamic-import" ]
});
