<template>
  <v-app>
    <v-main>
      <router-view />
      <group-navigation v-if="groupNavigation" />
    </v-main>

  </v-app>
</template>
<script>
import GroupNavigation from "@/components/group/GroupNavigation";
export default {
  components: {GroupNavigation},
  computed: {
    groupNavigation() {
      return this.$route.path.startsWith('/group/') && this.$route.params.groupId || this.$store.state.currentGroupId && this.$store.getters.isLoggedIn;
    }
  }
}
</script>
