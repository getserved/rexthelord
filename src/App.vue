<template>
  <div id="app">
    <grids></grids>
  </div>
</template>

<script>
import Grids from './components/grids.vue'

export default {
  name: 'App',
  components: {
    grids: Grids
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,600,700&display=swap');

html, #app{
  overflow:hidden;
}
</style>
