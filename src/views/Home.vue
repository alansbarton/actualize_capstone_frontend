<template>
  <div class="home">
    <h1>Users</h1>
    <div v-for="user in users">
      <p>{{ user.name }}</p>
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      users: []
    };
  },
  created: function() {
    this.indexUsers();
  },
  methods: {
    indexUsers:function() {
      axios.get("/api/users").then(response => {
        console.log("Users index", response);
        this.users = response.data;
      });
    }
  }
};
</script>