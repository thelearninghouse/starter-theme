<template lang="html">
  <button v-on:click="count++">You clicked me {{ count }} times.</button>
</template>

<script>
export default {
  name: 'ButtonCounter',
  data: () => {
    return {
      count: 0
    }
  }
}
</script>
