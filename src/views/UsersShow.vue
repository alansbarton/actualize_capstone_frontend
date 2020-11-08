<template>
  <div class="users-show">
    <div>
      <h3>{{ user.name }}</h3>
      
      <p>Climbing experiance: {{ user.years_experiance }} years</p>
      <p>skill level: {{ user.font_scale }} and {{ user.victor_scale }}</p>
        <!-- <p v-for="climbing_style in climbing_styles">{{ climbing_style.name }}</p> -->
      <p>area: {{ user.location }}</p>
      <p>{{ user.description }}</p>
      <router-link v-bind:to="`/messages/${user.id}`">message</router-link> | 
      <router-link v-bind:to="`/`">All users</router-link>
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
      climbing_style: [],
      user: [],
    };
  },
  created: function() {
    axios.get("/api/users/" + this.$route.params.id).then(response => {
      console.log("user show", response);
      this.user = response.data;
    });
  },
  methods: {}
};
</script>