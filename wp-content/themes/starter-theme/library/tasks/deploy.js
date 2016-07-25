module.exports = function(grunt) {
  grunt.registerTask('deploy', ['sass', 'criticalcss', 'autoprefixer', 'cssmin', 'concat', 'uglify', 'imagemin', 'sassdoc']);
};
