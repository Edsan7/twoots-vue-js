<template>
  <div>
    <h1><router-link :to="`/user/${user.id}`">{{ user.username }}</router-link></h1>
    <hr />
    <p>{{ user.email }}</p>
    <div class="user-badge" v-if="user.isAdmin">Admin</div>
    <strong>Followers: {{ user.followers }}</strong>
  </div>
</template>

<script>
export default {
  name: "UserPanel",
  props: {
    user: Object
  },
};
</script>

<style scoped>
.user-badge {
  background-color: #007bff;
  border-radius: 5px;
  padding: 2px 10px;
  color: #ffffff;
  font-weight: bold;
  margin-right: 335px;
}

hr {
  border: 0;
  margin: 0;
  background-color: #d4d4d4;
  height: 1px;
}
</style>