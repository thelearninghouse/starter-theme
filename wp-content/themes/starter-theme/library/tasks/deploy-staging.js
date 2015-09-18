module.exports = function(grunt) {
  grunt.registerTask('deploy', ['sftp-deploy:staging']);
};
