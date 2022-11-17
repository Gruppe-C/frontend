<template>
  <div v-if="user">
    <user-image :user="user" />
  </div>
</template>

<script>
import UserImage from "@/components/user/Image";
export default {
  name: "UserCard",
  components: {UserImage},
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
