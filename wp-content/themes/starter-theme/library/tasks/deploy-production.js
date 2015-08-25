module.exports = function(grunt) {
  grunt.registerTask('deploy-production', ['sftp-deploy:production']);
};
