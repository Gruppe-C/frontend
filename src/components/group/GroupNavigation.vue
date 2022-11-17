<template>
  <v-bottom-navigation :elevation="0" grow>
    <v-btn @click="$router.push({ name: 'GroupDetail', params: { id: $store.state.currentGroupId } })">
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn @click="$router.push({ name: 'GroupUser' })">
      <v-icon>mdi-folder</v-icon>
    </v-btn>

    <v-btn @click="$router.push({ name: 'Chat' })">
      <v-icon>mdi-chat</v-icon>
    </v-btn>


    <v-btn @click="$router.push({ name: 'Profile' })">
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: "GroupNavigation"
}
</script>

<style scoped>

</style>
