<template>
  <div class="user-twoots" @click="favouriteTwoot(twoot.id)">
    <div class="twoot-content">
      @{{ username }}<br />
      {{ twoot.content }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Twoots',
  props: {
    username: String,
    twoot: {
      type: Object,
      required: true
    }
  },
  methods: {
    favouriteTwoot (id) {
      this.$emit('favourite', id)
    }
  }
}
</script>

<style scoped>
.user-twoots {
  margin-top: 20px;
  padding: 15px 5px;
  border: 2px solid #dfe3e8;
  border-radius: 5px;
  background-color: #ffffff;
  cursor: pointer;
}

.user-twoots:hover {
  background-color: #bebebe;
}

.twoot-content {
  padding-left: 5px;
  text-align: left;
}
</style>
