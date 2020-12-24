<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="dark">

      <b-container>
      <b-navbar-brand ><router-link class="link" to="/">Twotter</router-link></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item ><router-link class="link" to="/allusers/">Users List</router-link></b-nav-item>
          <b-nav-item><router-link class="link" to="/newuser">New user</router-link></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'DefaultNavbar'
}
</script>

<style scoped>

.link:hover{
  text-decoration: none;
  color: #FFFFFF;
}
</style>
