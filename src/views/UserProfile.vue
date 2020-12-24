<template>
  <b-container class="mt-5 pb-5">
    <b-row>
      <b-col sm="12" lg="5">
        <div class="user-panel">
          <UserPanel
            :user="user"
          />
          <br />
          <b-form @submit.prevent="createNewTwoot">
            <b-form-group label="Write your twoot:">
              <b-form-textarea
                v-model="newTwoot"
                rows="4"
                required
              ></b-form-textarea>
              <div :class="{ 'length-limit-exceed': newTwootLength > 150 }">
                <p v-show="newTwootLength > 150">Limit Exceed!</p>
                <p>{{ newTwootLength }}/150</p>
              </div>
              <b-select
                v-model="typeOfTwoot"
                :options="twootOptions"
              ></b-select>
            </b-form-group>
            <b-button type="submit" variant="primary">Send</b-button>
          </b-form>
        </div>
      </b-col>

      <b-col sm="12" lg="7">
        <h3 style="text-align: left" class="mt-5">Twoot's List</h3>
        <hr />
        <div v-if="user.twoots.length > 0">
          <twoots
            v-for="twoot in user.twoots"
            :key="twoot.id"
            :twoot="twoot"
            :username="user.username"
          />
        </div>
        <div v-else>Nothing in here</div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from "vuex";
import Twoots from "../components/Twoots";
import UserPanel from "../components/UserPanel.vue";

export default {
  components: {
    Twoots,
    UserPanel,
  },
  data() {
    return {
      user: {},
      followers: 0,
      newTwoot: "",
      typeOfTwoot: "instant",
      twootOptions: [
        { value: "draft", text: "Draft" },
        { value: "instant", text: "Instant" },
      ],
    };
  },
  methods: {
    createNewTwoot() {
      if (this.typeOfTwoot !== "draft" && this.newTwoot) {
        this.user.twoots.unshift({
          id: this.user.twoots.length + 1,
          content: this.newTwoot,
        });
      }

      this.newTwoot = "";
    },
  },
  mounted() {
    const user = this.users[this.$route.params.userId - 1];
    this.user = user;
  },
  computed: {
    ...mapState(["users"]),
    newTwootLength() {
      return this.newTwoot.length;
    },
  },
};
</script>

<style scoped>
.user-panel {
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 5px;
  border: 1px solid #dfe3e8;
  text-align: left;
}

.length-limit-exceed {
  display: flex;
  font-weight: bold;
  justify-content: space-between;
  color:#cf0000;
}
</style>
