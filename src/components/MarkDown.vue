<template>
  <Editor :value="value" :plugins="plugins" @change="handleChange" />
</template>

<script>
import 'bytemd/dist/index.css'
import { Editor } from '@bytemd/vue-next'
// import gfm from '@bytemd/plugin-gfm'

const plugins = [
  // gfm(),
  // Add more plugins here
]

export default {
  components: { Editor },
  data() {
    return { value: '', plugins }
  },
  methods: {
    handleChange(v) {
      this.value = v
    },
  },
}
</script>