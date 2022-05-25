<template>
  <MarkDown />
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
.bytemd{
  height: calc(100vh - 20px) !important;
}
</style>
