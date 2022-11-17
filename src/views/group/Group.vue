<template>
  <v-container>
    <v-responsive class="d-flex align-center text-center fill-height">
      <h1>My Groups</h1>
      <group-list :list="groups"></group-list>
    </v-responsive>
  </v-container>
</template>

<script>
import GroupList from "@/components/group/GroupList";
export default {
  name: "Group",
  components: {GroupList},
  data() {
    return {
      groups: [
        {
          id: '1defvbgnhz',
          name: 'Test Group 1'
        },
        {
          id: '2defvbgnhz',
          name: 'Test Group 2'
        },
        {
          id: '3defvbgnhz',
          name: 'Test Group 3'
        },
        {
          id: '4defvbgnhz',
          name: 'Test Group 4'
        }
      ]
    }
  },
}
</script>

<style scoped>

</style>
