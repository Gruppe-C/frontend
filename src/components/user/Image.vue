<template>
  <v-avatar :size="size" v-if="user.image && user.image.url" style="border: solid;">
    <v-img :src="user.image.url"></v-img>
  </v-avatar>
  <v-avatar v-else style="border: solid;" :size="size">
    <h1>{{ user.username.at(0) + user.username.at(user.username.length - 1) }}</h1>
  </v-avatar>
</template>

<script>
export default {
  name: "UserImage",
  props: {
    user: {
      type: Object,
      required: true
    },
    size: {
      type: Number,
      required: false,
      default: 60
    }
  }
}
</script>

<style scoped>

</style>
