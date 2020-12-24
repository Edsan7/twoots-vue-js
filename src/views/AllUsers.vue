<template>
  <b-container class="mt-5">
    <b-row>
      <b-col cols="6" offset="3">
        <h1>List of Users</h1>
        <div v-for="user in users" :key="user.id" class="user-panel">
          <user-panel
            :user="user"
          ></user-panel>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from "vuex";
import UserPanel from "../components/UserPanel.vue";

export default {
  components: { UserPanel },
  data() {
    return {};
  },
  computed: {
    ...mapState(["users"]),
  },
};
</script>

<style scoped>
.user-panel {
  min-width: 300px;
  background-color: #ffffff;
  margin: 10px 5px;
  padding: 30px;
}
</style>
