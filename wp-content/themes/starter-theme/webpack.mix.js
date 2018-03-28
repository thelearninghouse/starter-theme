let mix = require('laravel-mix');

mix.js('resources/js/scripts.js', 'public/js')
	.sass('resources/scss/style.scss', 'public/css')
  .disableNotifications()
  .options({
     processCssUrls: false
  });

// mix.browserSync({
// 	// https: true,
// 	proxy: 'starter.dev',
// 	files: ["./css/*.css", "./src/js/**/*.js"]
// })
// files: ["./css/*.css", "./js/build/production.min.js"]
