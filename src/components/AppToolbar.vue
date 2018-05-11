<template>
  <v-toolbar color="indigo" dark>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title class="white--text">TheSoftKing</v-toolbar-title>
    <v-spacer></v-spacer>
    <div class="hidden-sm-and-down">
      <router-link to="/" style="text-decoration:none;">
        <v-btn flat>Home</v-btn>
      </router-link>
      <v-btn flat>About</v-btn>
      <v-btn flat>Contact</v-btn>
      <router-link to="/login" style="text-decoration:none;">
        <v-btn flat color="text--white">
          Login
        </v-btn>
      </router-link>
      <!-- <v-btn flat>Login</v-btn> -->
    </div>
  </v-toolbar>
</template>

<script>
export default {
  name: '',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
