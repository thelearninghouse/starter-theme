const mix = require('laravel-mix');

mix.js('src/scripts/scripts.js', 'public/js')
	.sass('src/styles/style.scss', 'public/css')
	.sass('src/styles/critical-home.scss', 'public/css')
	.sass('src/styles/launch-lp-style.scss', 'public/css')
	.sass('src/styles/lp-style.scss', 'public/css')
  .disableNotifications()
  .options({
     processCssUrls: false
  });


mix.copyDirectory('src/images', 'public/images');
mix.browserSync({
	proxy: 'starter2.dev',
	files: [
		'**/*.php',
		'public/css/*.css',
		'public/js/**/*.js'
	]
})
