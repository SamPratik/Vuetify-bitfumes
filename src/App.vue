<template>
  <div id="app">
    <app-toolbar></app-toolbar>
    <router-view/>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import AppToolbar from './components/AppToolbar.vue'
  import AppFooter from './components/AppFooter.vue'

  export default {
    name: 'App',
    components: {
      AppToolbar,
      AppFooter
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
