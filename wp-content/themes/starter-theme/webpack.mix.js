const mix = require('laravel-mix');

mix.js('resources/js/scripts.js', 'public/js')
	.sass('resources/scss/style.scss', 'public/css')
	.sass('resources/scss/critical-home.scss', 'public/css')
	.sass('resources/scss/launch-lp-style.scss', 'public/css')
	.sass('resources/scss/lp-style.scss', 'public/css')
  .disableNotifications()
  .options({
     processCssUrls: false
  });


mix.copyDirectory('resources/images', 'public/images');
mix.browserSync({
	proxy: 'starter2.dev',
	files: [
		'**/*.php',
		'public/css/*.css',
		'public/js/**/*.js'
	]
})
