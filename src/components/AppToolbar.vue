<template>
  <div>
    <v-toolbar color="indigo" dark>
      <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <router-link to="/" style="text-decoration:none;">
        <v-toolbar-title class="white--text">TheSoftKing</v-toolbar-title>
      </router-link>
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
      </div>
    </v-toolbar>

    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="mini"
      temporary
      class="blue-grey darken-4"
      dark
      absolute
      hidden-md-and-up
    >
      <v-list class="pa-1">
        <v-list-tile v-if="mini" @click.stop="mini = !mini">
          <v-list-tile-action>
            <v-icon>chevron_right</v-icon>
          </v-list-tile-action>
        </v-list-tile>
        <v-list-tile avatar tag="div">
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg" >
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>John Leider</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn icon @click.stop="mini = !mini">
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
      <v-list class="pt-0" dense>
        <v-divider light></v-divider>
        <v-list-tile v-for="item in items" :key="item.title">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <router-link :to="item.link" class="white--text" style="text-decoration:none;">
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </router-link>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        drawer: null,
        items: [
          { title: 'Home', icon: 'dashboard', link: '/' },
          { title: 'About', icon: 'question_answer', link: '' },
          { title: 'Contact', icon: 'question_answer', link: '' },
          { title: 'Login', icon: 'question_answer', link: '/login' },
        ],
        mini: false,
        right: null
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
