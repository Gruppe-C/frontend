<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-img
        contain
        height="300"
        src="src/assets/logo.svg"
      />

      <div class="text-body-2 font-weight-light mb-n1">Welcome to</div>

      <h1 class="text-h2 font-weight-bold">Gruppe C</h1>

      <div class="mt-3">
        <v-btn color="secondary" @click="$router.push({ name: 'Login'})">Login</v-btn>
        <v-btn color="primary" @click="$router.push({ name: 'Register'})" class="ml-5">Register</v-btn>
      </div>
    </v-responsive>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  created() {
    if (this.$store.getters.isLoggedIn) {
      this.$router.push({name: 'Group'});
    }
  }
}
</script>

<style scoped>

</style>
