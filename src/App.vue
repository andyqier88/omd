<template>
  <MarkDown msg="Welcome to Your Vue.js App"/>
</template>

<script>
import MarkDown from './components/MarkDown.vue'

export default {
  name: 'App',
  components: {
    MarkDown
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
