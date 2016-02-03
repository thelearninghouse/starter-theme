module.exports = {
  'sftp-deploy': {
    auth: {
      host: 'pod-31050.wpengine.com',
      port: 2222,
      authKey: 'staging'
    },
    cache: 'sftpCache.json',
    src: '/Applications/MAMP/htdocs/starter/wp-content/themes/starter-theme',
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
