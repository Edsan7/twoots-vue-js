<template>
  <div id="app">
    <default-navbar />
    <router-view />
  </div>
</template>

<script>
import DefaultNavbar from './components/DefaultNavbar.vue'
export default {
  components: { DefaultNavbar }
}
</script>

<style>
#app {
  min-height: 800px;
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #f1f1f1;
}
</style>
