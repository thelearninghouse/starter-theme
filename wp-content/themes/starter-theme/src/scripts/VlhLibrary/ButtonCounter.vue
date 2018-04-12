<template lang="html">
  <div v-on:click="count++"><span>You clicked me {{ count }} times.</span>
    <div v-html="content"></div>
  </div>
</template>

<script>
import posthtml from 'posthtml'

const html = `
  <component>
    <h2>Super Title</h2>
    <p>Awesome Text</p>
    <div class="php"><?php echo 'TEST1'; ?></div>
  </component>
`

const result = posthtml()
  .use(require('posthtml-custom-elements')())
  .process(html, {
    // sync: true,
    directives: [
      { name: '?php', start: '<', end: '>' }
    ]
  })
  .then((result) =>  console.log(result.html))
// result.html
console.log(result)

export default {
  name: 'ButtonCounter',
  data: function () {
    return {
      count: 0,
      content: result
    }
  }
}
</script>
