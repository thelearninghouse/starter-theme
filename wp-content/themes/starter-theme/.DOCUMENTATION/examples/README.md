---
sidebar: auto
---

# Examples

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

## Basic Setup

```html
<template>
   <div id="app">
     <vue-editor v-model="content"></vue-editor>
   </div>
 </template>

 <script>
   import { VueEditor } from 'vue2-editor'

   export default {

   components: {
      VueEditor
   },

   data() {
       return {
         content: '<h1>Some initial content</h1>'  
       }
     }
   }
 </script>
```

## Custom Image Handler

If you choose to use the custom image handler, an event is emitted when a a photo is selected.
You can see below that 3 parameters are passed.

1.  It passes the file to be handled however you need
2.  The Editor instance
3.  The cursor position at the time of upload so the image can be inserted at the correct position on success

**NOTE** In addition to this example, I have created a [ example repo](https://github.com/davidroyer/vue2editor-images) demonstrating this new feature with an actual server.

```
<template>
  <div id="app">
    <vue-editor id="editor"
      useCustomImageHandler
      @imageAdded="handleImageAdded" v-model="htmlForEditor">
    </vue-editor>
  </div>
</template>

<script>
  import { VueEditor } from 'vue2-editor'
  import axios from 'axios'
  export default {
    components: {
      VueEditor
    },

    data() {
      return {
        htmlForEditor: ''  
      }
    },

    methods: {
      handleImageAdded: function(file, Editor, cursorLocation, resetUploader) {
        // An example of using FormData
        // NOTE: Your key could be different such as:
        // formData.append('file', file)

        var formData = new FormData();
        formData.append('image', file)

        axios({
          url: 'https://fakeapi.yoursite.com/images',
          method: 'POST',
          data: formData
        })
        .then((result) => {
          let url = result.data.url // Get url from response
          Editor.insertEmbed(cursorLocation, 'image', url);
          resetUploader();  

        })
        .catch((err) => {
          console.log(err);
        })
      }
    }
  }
</script>
```

## Set Contents After Page Load

```html
<template>
  <div id="app">
    <button @click="setEditorContent">Set Editor Contents</button>
    <vue-editor v-model="htmlForEditor"></vue-editor>
  </div>
</template>

<script>
  import { VueEditor } from 'vue2-editor'

  export default {
    components: {
      VueEditor
    },

    data() {
      return {
        htmlForEditor: null  
      }
    },

    methods: {
      setEditorContent: function() {
        this.htmlForEditor = '<h1>Html For Editor</h1>'
      }
    }
  }
</script>
```

## Using Multiple Editors

```html
<template>
  <div id="app">
    <vue-editor id="editor1" v-model="editor1Content"></vue-editor>
    <vue-editor id="editor2" v-model="editor2Content"></vue-editor>
  </div>
</template>

<script>
  import { VueEditor } from 'vue2-editor'

  export default {
    components: {
      VueEditor
    },

    data() {
      return {
        editor1Content: '<h1>Editor 1 Starting Content</h1>',
        editor2Content: '<h1>Editor 2 Starting Content</h1>',
      }
    }
  }
</script>

<style>
  #editor1, #editor2 {
    height: 350px;
  }
</style>
```

## Custom Toolbar

```html
<template>
  <div id="app">
    <vue-editor v-model="content" :editorToolbar="customToolbar"></vue-editor>
  </div>
</template>

<script>
  import { VueEditor } from 'vue2-editor'

  export default {
    components: {
      VueEditor
    },

    data() {
      return {
        content: '<h1>Html For Editor</h1>',
        customToolbar: [
            ['bold', 'italic', 'underline'],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            ['image', 'code-block']
          ]
      }
    }
  }
</script>
```

## Saving The Content

```html
<template>
  <div id="app">
    <button @click="saveContent"></button>
    <vue-editor v-model="content"></vue-editor>
  </div>
</template>

<script>
  import { VueEditor } from 'vue2-editor'

  export default {
    components: {
      VueEditor
    },

    data () {
      return {
        content: '<h3>Initial Content</h3>'
      }
    },

    methods: {
      handleSavingContent: function() {
        // You have the content to save
        console.log(this.content)
      }
    }  
  }
</script>
```

## Use a Live Preview

```html
<template>
  <div id="app">
    <vue-editor v-model="content"></vue-editor>
    <div v-html="content"></div>
  </div>
</template>

<script>
  import { VueEditor } from 'vue2-editor'

  components: {
    VueEditor
  },

  export default {
    data() {
      return {
        content: '<h1>Initial Content</h1>'  
      }
    }
  }
</script>
```
