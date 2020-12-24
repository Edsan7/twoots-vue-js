<template>
  <div id="app">
    <default-navbar />
    <router-view />
  </div>
</template>

<script>
import DefaultNavbar from './components/DefaultNavbar.vue'
export default {
  components: { DefaultNavbar },
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #ececec;
}
</style>
