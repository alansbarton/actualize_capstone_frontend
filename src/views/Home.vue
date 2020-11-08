<template>
  <div class="home">
    <h1>Users</h1>
    <div v-for="user in users">
      <h3>{{ user.name }}</h3>
      <img v-bind:src="user.images.image_url">
      <p>Climbing experiance: {{ user.years_experiance }} years</p>
      <p>skill level: {{ user.font_scale }} and {{ user.victor_scale }}</p>
      <p>area: {{ user.location }}</p>
      <p>{{ user.description }}</p>
      <router-link v-bind:to="`/users/${user.id}`">More details</router-link>
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