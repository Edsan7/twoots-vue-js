<template>
  <b-container class="mt-5">
    <h2>New User</h2>
    <hr />
    <b-container class="mt-3 pb-5">

      <b-form @submit.prevent="onSubmit">
        <b-form-group id="input-group-1" label="First Name" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="formFields.firstName"
            placeholder="Enter your name"
            type="text"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Last Name" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="formFields.lastName"
            type="text"
            placeholder="Enter your last name"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Username" label-for="input-3">
          <b-form-input
            id="input-3"
            v-model="formFields.username"
            type="text"
            placeholder="Enter username"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Email" label-for="input-3">
          <b-form-input
            id="input-4"
            v-model="formFields.email"
            type="email"
            placeholder="Enter a valid email:"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-4" label="User type" label-for="input-4">
          <b-form-select
            id="input-4"
            v-model="formFields.isAdmin"
            :options="selectOptions"
            required
          ></b-form-select>
        </b-form-group>

        <b-button type="submit" variant="primary">Create new user</b-button>
      </b-form>
    </b-container>
  </b-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      selectOptions: [
        { value: false, text: "Not Admin" },
        { value: true, text: "Admin" },
      ],
      formFields: {
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        isAdmin: false,
      },
    };
  },
  methods: {
    ...mapActions(["addUser"]),
    onSubmit() {
      const { firstName, lastName, email, username, isAdmin } = this.formFields;
      const id = this.usersCount + 1;
      const user = {
        id,
        firstName,
        lastName,
        email,
        username,
        isAdmin,
        twoots: [],
      };
      this.addUser(user);
      this.clearFormFields();
    },
    clearFormFields() {
      this.formFields = {
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        isAdmin: false,
      };
    },
  },
  computed: {
    ...mapGetters(["usersCount"]),
  },
};
</script>

<style>
</style>
