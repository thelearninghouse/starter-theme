// Require Modules
const pkg = require('./package.json');
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var minifyCss = require('gulp-minify-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var browserSync = require('browser-sync').create();
var gutil = require('gulp-util');
var rename = require('gulp-rename');
var gulp = require('gulp');
var fancyLog = require('fancy-log')
var pa11y = require('pa11y')
var fs = require('fs')
var htmlReporter = require('pa11y/reporter/html');
var a11yResultsDirectory = 'accessibility'
var a11yTest = pa11y({
	// Log what's happening to the console
	log: {
		debug: console.log.bind(console),
		error: console.error.bind(console),
		info: console.log.bind(console)
	}
});

var paths = {
	sass: {
		src: ['scss/*.scss', 'scss/**/*.scss'],
		dest: 'css/',
	},
	scripts: {
		src: ['js/libs/*.js', 'js/scripts.js'],
		dest: 'js/build/',
	},
	imagemin: {
		src: 'images/*',
		dest: 'images/',
	}
};

// ACCESSIBILITY TEST TASK
gulp.task("a11y", (callback) => {
	handleResultsDirectoryPath();
	handleUrlsArray(pkg.urls);
	callback();
});

// BROWSERSYNC
gulp.task('browser-sync', function() {
	browserSync.init({
		proxy: "starter-git.dev"
	});
});

// SASS
gulp.task('sass', function() {
	return gulp.src(paths.sass.src)
		.pipe(sass()) // Using gulp-sass
		.on('error', onError)
		.pipe(autoprefixer())
		.pipe(gulp.dest(paths.sass.dest))
		.pipe(minifyCss({
			compatibility: 'ie9'
		}))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest(paths.sass.dest))
		.pipe(browserSync.stream());
});

// CONCAT JS FILES
gulp.task('scripts', function() {
	return gulp.src(paths.scripts.src)
		.pipe(concat('production.js'))
		.pipe(gulp.dest(paths.scripts.dest))
		.pipe(uglify())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest(paths.scripts.dest))
		.pipe(browserSync.stream());
});

// IMAGEMIN
gulp.task('imagemin', function() {
	return gulp.src(paths.imagemin.src)
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{
				removeViewBox: false
			}],
			use: [pngquant()]
		}))
		.pipe(gulp.dest(paths.imagemin.dest));
});

// WATCH STYLES
gulp.task('watch:styles', function() {
	gulp.watch(paths.sass.src, gulp.series('sass'));
});

// WATCH SCRIPTS
gulp.task('watch:scripts', function() {
	gulp.watch(paths.scripts.src, gulp.series('scripts'));
});

// WATCH
gulp.task('default', gulp.parallel('browser-sync', 'watch:styles', 'watch:scripts'));

// DEPLOY
gulp.task('deploy', gulp.parallel('sass', 'scripts', 'imagemin'));

function onError(err) {
	console.log(err);
	this.emit('end');
}

function handleResultsDirectoryPath() {
	if (!fs.existsSync(`${pkg.resultsDirectory}`)) {
		fs.mkdirSync(`${pkg.resultsDirectory}`);
	}
}

function handleTestResults(resultFilePath, htmlOutput) {
	fs.writeFile(resultFilePath, htmlOutput, function(err) {
		if (err) throw err;
	});
}

function handleUrlsArray(urls) {
	for (let currentIndex = 0; currentIndex < urls.length; currentIndex++) {
		let url = urls[currentIndex];
		let resultFilePath = `${pkg.resultsDirectory}/a11yTest-${currentIndex}.html`

		a11yTest.run(url, function(error, results) {
			if (error) {
				return console.error(error.message)
			}

			let html = htmlReporter.process(results, url);
			handleTestResults(resultFilePath, html)

		});
	}
}
