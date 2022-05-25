<template>
  <Editor :value="value" :plugins="plugins" :fullscreen="true" @change="handleChange" />
</template>

<script>
import 'bytemd/dist/index.css'
import 'github-markdown-css/github-markdown.css'
import { Editor } from '@bytemd/vue-next'
import gfm from '@bytemd/plugin-gfm'
import mediumZoom from '@bytemd/plugin-medium-zoom'
import frontmatter from '@bytemd/plugin-frontmatter'
import highlight from '@bytemd/plugin-highlight'
import mermaid from '@bytemd/plugin-mermaid'
const plugins = [
  gfm(),
  mediumZoom(),
  frontmatter(),
  mermaid(),
  highlight()
  // Add more plugins here
]

export default {
  components: { Editor },
  data() {
    return { value: '', plugins }
  },
  methods: {
    handleChange(v) {
      console.log(v);
      this.value = v
    },
  },
}
</script>