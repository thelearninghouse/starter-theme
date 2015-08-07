module.exports = {
  dist: {
    options: {
      // cssmin will minify later
      style: 'expanded'
    },
    files: {
      'css/build/style.css': 'scss/style.scss',
      'css/build/ie.css': 'scss/ie.scss',
      'css/build/login.css': 'scss/login.scss'
    }
  }
}
