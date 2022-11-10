<template>
  <v-container>
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-img
        contain
        height="200"
        src="src/assets/logo.svg"
      />

      <h1>Welcome back</h1>

      <v-form class="mt-3">
        <v-text-field label="Username" variant="outlined"></v-text-field>
        <v-text-field label="Password" variant="outlined" type="password"></v-text-field>
        <v-btn width="100%" color="primary">Login</v-btn>
        <div class="mt-2">
          No Account? <span class="text-blue-accent-1" @click="$router.push({ name: 'Register'})">Register</span>
        </div>
      </v-form>
    </v-responsive>
  </v-container>
</template>

<script>
export default {
  name: "Login"
}
</script>

<style scoped>

</style>
