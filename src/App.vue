<template>
  <div id="app">
    <default-navbar />
    <user-profile />
  </div>
</template>

<script>
import DefaultNavbar from './components/DefaultNavbar.vue'
import UserProfile from './components/UserProfile.vue'

export default {
  components: { UserProfile, DefaultNavbar },
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
