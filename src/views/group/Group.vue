<template>
  <v-container>
    <v-responsive>
      <h1>Meine Gruppen</h1>
      <group-list :list="groups"></group-list>
      <v-btn
        @click="$router.push({ name: 'GroupAdd'})"
        class="float"
        variant="outlined"
        icon
        size="60"
        color="primary"
      >
        <v-icon size="30">mdi-plus</v-icon>
      </v-btn>
    </v-responsive>
  </v-container>
</template>

<script>
import GroupList from "@/components/group/GroupList";
import groupService from "@/services/group.service";
export default {
  name: "Group",
  components: {GroupList},
  data() {
    return {
      groups: []
    }
  },
  async created() {
    this.groups = (await groupService.getList()).data
  }
}
</script>

<style scoped>
.float{
  position:fixed;
  bottom:30px;
  right:30px;
  text-align:center;
}
</style>
