module.exports = {
  'sftp-deploy': {
    build: {
      auth: {
        host: '11.11.11.11',
        port: 22,
        authKey: 'staging' 
      },
      cache: 'sftpCache.json',
      src: '/Users/user/Sites/starter-theme/wp-content/themes/starter-theme',
      dest: 'wp-content/themes/starter-theme',
      exclusions: [
        '.ftppass',
        '.git',
        '.gitignore',
        'node_modules',
        '.sass-cache',
        'npm-debug.log',
        '.DS_Store',
        '.sftpcache.json'
      ],
      concurrency: 4,
      progress: true
    }
  }
}
