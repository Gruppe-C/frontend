<template>
  <v-row>
    <v-col v-for="group in list" :key="group.id" cols="12" md="4" lg="3">
      <group-card class="mb-1" :group="group"></group-card>
    </v-col>
  </v-row>
</template>

<script>
import GroupCard from "@/components/group/GroupCard";

export default {
  name: "GroupList",
  components: {GroupCard},

  props: {
    list: {
      type: Array,
      required: true
    }
  }
}
</script>
