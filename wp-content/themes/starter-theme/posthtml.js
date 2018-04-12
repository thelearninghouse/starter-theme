const fs = require('fs')
const readFileSync = fs.readFileSync
const posthtml = require('posthtml')
const posthtmlrc = require('posthtml-load-config')

const sml = readFileSync('components/button.sml', 'utf8')

const ctx = { ext: '.sml' }

// posthtmlrc(ctx).then(({ plugins, options }) => {
//   posthtml(plugins)
//     .process(sml, options)
//     .then((result) => console.log(result.html))
// })

const result = posthtml()
  .use(require('posthtml-custom-elements')())
  .process(sml, {
    directives: [
      { name: '?php', start: '<', end: '>' }
    ]
  })
  .then((result) => {
    console.log(result);
    fs.writeFile('components/button.php', result.html, function (err) {
      if (err) throw err;
      console.log('Saved!');
    });
  })

// console.log(result)
