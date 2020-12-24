<template>
  <b-container class="mt-5 pb-5">
    <b-row>
      <b-col cols="5" class="user-profile">
        <div class="user-panel">
          <h1>{{ user.username }}</h1>
          <hr>
          <p>{{user.github }}</p>
          <div class="user-badge" v-if="user.isAdmin">Admin</div>
          <div class="follower-count">
            <strong>Followers: {{ followers }}</strong>
          </div>
          <br />
          <b-form @submit.prevent="createNewTwoot">
            <b-form-group label="Write your twoot:">
              <b-form-textarea
                v-model="newTwoot"
                rows="4"
                required
              ></b-form-textarea>
              <div :class="{'length-limit-exceed': newTwootLength > 150 }">
                <p v-show="newTwootLength > 150"> Limit Exceed!</p>
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
      <b-col cols="7">
        <h3 style="text-align: left">Twoot's List</h3>
        <hr />
        <twoots
          @favourite="toogleFavourite"
          v-for="twoot in user.twoots"
          :key="twoot.id"
          :twoot="twoot"
          :username="user.username"
        />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Twoots from '../components/Twoots'
export default {
  name: 'UserProfile',
  components: { Twoots },
  data () {
    return {
      followers: 0,
      newTwoot: '',
      typeOfTwoot: 'instant',
      twootOptions: [
        { value: 'draft', text: 'Draft' },
        { value: 'instant', text: 'Instant' }
      ],
      user: {
        id: 1,
        username: 'edsan7',
        firstName: 'Edson',
        lastName: 'Junior',
        github: 'github.com/Edsan7',
        isAdmin: true,
        twoots: [
          { id: 1, content: 'My first twoot!' },
          { id: 2, content: "I'm learning Vue" },
          { id: 3, content: 'This is a list of twoots!' }
        ]
      }
    }
  },
  methods: {
    addFollower () {
      this.followers++
    },
    toogleFavourite (id) {
      console.log('Favourited Tweet ' + id)
    },
    createNewTwoot () {
      if (this.typeOfTwoot !== 'draft' && this.newTwoot) {
        this.user.twoots.unshift({
          id: this.user.twoots.length + 1,
          content: this.newTwoot
        })
      }

      this.newTwoot = ''
    }
  },
  watch: {
    followers (newFollowerCount, oldFollowerCount) {
      if (oldFollowerCount < newFollowerCount) {
        console.log('Gained a follower!')
      }
    }
  },
  mounted () {
    this.addFollower()
  },
  computed: {
    newTwootLength () {
      return this.newTwoot.length
    }
  }
}
</script>

<style scoped>
.user-profile {
  margin: auto;
  max-width: 800px;
}
.user-panel {
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 5px;
  border: 1px solid #dfe3e8;
  text-align: left;
}
.user-badge {
  background-color: #007bff;
  border-radius: 5px;
  padding: 2px 10px;
  color: #ffffff;
  font-weight: bold;
  margin-right: auto;
  margin-bottom: 3px;
}

.length-limit-exceed {
  display: flex;
  justify-content: space-between;
  color: #ff0000;
}

hr {
  border: 0;
  margin: 0;
  background-color:#d4d4d4;
  height: 1px;
}
</style>
