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
    handleKeyPress (event) {
      // You can put code here to handle the keypress.
      // document.getElementById("last-keypress").innerText = event.key
      // console.log(`You pressed ${event.keyCode},${event.ctrlKey}`)
      if(event.ctrlKey&&event.keyCode==83){
        // eslint-disable-next-line
        // debugger
        // save(this.value)
        // 向IPC通道发送信号，此时主线程收到信号立即执行相对应的响应函数
        console.log(window.electron,this.value);
        window.electron.ipcRenderer.send('open-save-chart-dialog',this.value);
      }
    },

  },
  mounted(){
    window.addEventListener('keyup', this.handleKeyPress, true)
  }
}
</script>