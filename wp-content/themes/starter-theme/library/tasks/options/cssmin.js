module.exports = {
  combine: {
    files: {
      'css/build/minified/style.css': ['css/build/prefixed/style.css'],
      'css/build/minified/ie.css': ['css/build/prefixed/ie.css'],
      'css/build/minified/lp-style.css': ['css/build/prefixed/lp-style.css'],
      'css/build/minified/lp-critical.css': ['css/build/prefixed/lp-critical.css'],
      'css/build/minified/home-critical.css': ['css/build/prefixed/home-critical.css'],
      'css/build/minified/interior-critical.css': ['css/build/prefixed/interior-critical.css'],
      'css/build/minified/launch-lp-style.css': ['css/build/prefixed/launch-lp-style.css']
    }
  }
}
