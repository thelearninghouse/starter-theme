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
var rename = require('gulp-rename');

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

// BROWSERSYNC
gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "starter.loc"
    });
});

// SASS
gulp.task('sass', function() {
  return gulp.src(paths.sass.src)
    .pipe(sass()) // Using gulp-sass
    .on('error', onError)
    .pipe(autoprefixer())
    .pipe(gulp.dest(paths.sass.dest))
    .pipe(minifyCss({compatibility: 'ie9'}))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.sass.dest))
    .pipe(browserSync.stream());
});

// CONCAT JS FILES
gulp.task('scripts', function() {
  return gulp.src(paths.scripts.src)
    .pipe(concat('production.js'))
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe(browserSync.stream());
});

// IMAGEMIN
gulp.task('imagemin', function () {
    return gulp.src(paths.imagemin.src)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(paths.imagemin.dest));
});

// WATCH STYLES
 gulp.task('watch:styles', function () {
   gulp.watch(paths.sass.src, gulp.series('sass'));
});

// WATCH SCRIPTS
 gulp.task('watch:scripts', function () {
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
