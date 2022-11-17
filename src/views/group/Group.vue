<template>
  <v-container>
    <v-responsive>
      <h1>Meine Gruppen</h1>
      <group-list :list="groups"></group-list>
      <v-btn
        @click="$router.push({ name: 'GroupAdd'})"
        class="float"
        icon
        size="60"
        color="primary"
      >
        <v-icon size="30">mdi-plus</v-icon>
      </v-btn>
    </v-responsive>
    <navigation />
  </v-container>
</template>

<script>
import GroupList from "@/components/group/GroupList";
import groupService from "@/services/group.service";
import Navigation from "@/components/Navigation";
export default {
  name: "Group",
  components: {Navigation, GroupList},
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
  bottom:70px;
  right:10px;
  text-align:center;
}
</style>
