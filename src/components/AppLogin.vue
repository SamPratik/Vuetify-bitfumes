<template>
  <v-app>
	  <v-container>
		  <v-form v-model="valid">
		    <v-text-field
		      v-model="name"
		      :rules="nameRules"
		      :counter="10"
		      label="Name"
		      required
		    ></v-text-field>
		    <v-text-field
		      v-model="password"
		      :rules="passwordRules"
		      label="Password"
		      type="password"
		      required
		    ></v-text-field>
		    <v-btn color="success" @click="Login">Success</v-btn>
		  </v-form>
	  </v-container>	
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      valid: false,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters'
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length<=8 || 'Password must be less than 8 characters'
      ]
    }),
    methods: {
    	Login() {
    		console.log(`Name is ${this.name} and password is ${this.password}`);
    	}
    }
  }
</script>

<style scoped>
	
</style>