module.exports = {
  scripts: {
    files: ['js/*.js', 'js/**/*.js'],
    tasks: ['jshint', 'concat', 'uglify'],
  },
  css: {
    files: ['scss/*.scss', 'scss/**/*.scss'],
    tasks: ['sass', 'autoprefixer', 'cssmin'],
  },
  images: {
    files: ['images/**/*.{png,jpg,gif}', 'images/*.{png,jpg,gif}'],
    tasks: ['imagemin'],
  }
}
