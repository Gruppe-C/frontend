<template>
  <v-container>
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-img
        contain
        height="200"
        src="src/assets/logo.svg"
      />

      <h1>Welcome back</h1>

      <v-form class="mt-3" @submit.prevent="onSubmit">
        <v-text-field v-model="username" label="Username" variant="outlined"></v-text-field>
        <v-text-field v-model="password" label="Password" variant="outlined" type="password"></v-text-field>
        <v-alert v-if="message" type="error" density="compact" variant="outlined" class="mb-5"> {{ message }}</v-alert>
        <v-btn width="100%" color="primary" type="submit">Login</v-btn>
        <div class="mt-2">
          No Account? <span class="text-blue-accent-1" @click="$router.push({ name: 'Register'})">Register</span>
        </div>
      </v-form>
    </v-responsive>
  </v-container>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: '',
      password: '',
      message: ''
    }
  },
  created() {
    if (this.$store.getters.isLoggedIn) {
      this.$router.push({name: 'Group'});
    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('login', { username: this.username, password: this.password }).then(() => {
        this.$router.push({name: 'Home'});
      }, error => {
        this.errorHandling(error);
      });
    },
    errorHandling(response) {
      console.error(response);
      this.message = response?.data?.message || 'Something went wrong';
    }
  }
}
</script>

<style scoped>

</style>
