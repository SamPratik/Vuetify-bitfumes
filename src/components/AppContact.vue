<template>
  <v-layout>
    <v-flex xs12 sm8 offset-sm2 mt-4 mb-4 class="elevation-6">
      <v-card>
        <v-card-media src="https://vuetifyjs.com/static/doc-images/cards/desert.jpg" height="200px">
        </v-card-media>
        <v-card-text primary-title>
          <div class="text-md-center">
            <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
            <v-avatar
              size="80"
              color="grey lighten-4"
            >
              <img src="https://vuetifyjs.com/static/apple-touch-icon-180x180.png" alt="avatar">
            </v-avatar>
            <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
  export default {
    data () {
      return {
        card_text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.'
      }
    }
  }
</script>
<style scoped>
</style>
