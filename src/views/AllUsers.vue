<template>
  <b-container>
    <h1>List of Users</h1>
    <ul>
      <router-link v-for="user in users" :key="user.id" :to="`/user/${user.id}`"
        ><li>{{ user.username }}</li></router-link
      >
    </ul>
  </b-container>
</template>

<script>
import users from "../data/users";

export default {
  data() {
    return {
      users,
    };
  },
};
</script>

<style>
</style>