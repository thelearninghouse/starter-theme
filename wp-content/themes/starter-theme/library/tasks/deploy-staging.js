module.exports = function(grunt) {
  grunt.registerTask('deploy-staging', ['sftp-deploy:staging']);
};
