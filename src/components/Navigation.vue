<template>
  <v-bottom-navigation :elevation="0" grow>
    <v-btn @click="$router.push('/')">
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn @click="$router.push({ name: 'GroupAdd' })">
      <v-icon>mdi-plus</v-icon>
    </v-btn>

    <v-btn @click="$router.push({ name: 'Profile' })">
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: "Navigation"
}
</script>

<style scoped>

</style>
