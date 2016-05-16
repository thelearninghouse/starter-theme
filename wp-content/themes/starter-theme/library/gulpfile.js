// Require Modules
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

// BROWSERSYNC
gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "starter-gulp.loc"
    });
});

// SASS
gulp.task('sass', function() {
  return gulp.src(['scss/**/*.scss', 'scss/*.scss'])
    .pipe(sourcemaps.init()) // Initialize sourcemap plugin
    .pipe(sass()) // Using gulp-sass
    .on('error', onError)
    .pipe(autoprefixer())
    .pipe(sourcemaps.write()) // Writing sourcemaps
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.stream())
});

// MINIFY CSS AFTER COMPILING AND PREFIXING
gulp.task('minify-css', function() {
  return gulp.src('css/*.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('css/min/'))
});

// CONCAT JS FILES
gulp.task('scripts', function() {
  return gulp.src(['js/libs/*.js', 'js/scripts.js'])
    .pipe(concat('production.js'))
    .pipe(uglify())
    .pipe(gulp.dest('js/build/'))
    .pipe(browserSync.stream())
});

// IMAGEMIN
gulp.task('imagemin', function () {
    return gulp.src('images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('images/'));
});

// WATCH
gulp.task('watch', ['browser-sync'], function(){
  gulp.watch(['scss/**/*.scss', 'scss/*.scss'], ['sass', 'minify-css']);
  gulp.watch(['js/libs/*.js', 'js/scripts.js'], ['scripts']);
  gulp.watch('*.php').on('change', browserSync.reload);
});

function onError(err) {
  console.log(err);
  this.emit('end');
}
