<template>
  <div id="app">
    <app-head></app-head>
    <router-view/>
  </div>
</template>

<script>
  import AppHead from '@/components/header.vue'

  export default {
    name: 'app',
    components: {
      'app-head': AppHead
    }
  }
</script>

<style>
  body {
    background: url(./assets/index-bg.jpg);
    background-size: 100%;
  }
  * {margin: 0;padding: 0;}
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
