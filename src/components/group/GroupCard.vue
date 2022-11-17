<template>
  <v-card elevation="0" class="card" @click="$router.push({ name: 'GroupDetail', params: {id: group.id}})">
    <v-card-title :style="'color: ' + group.color">{{ group.name }}</v-card-title>
    <v-card-subtitle>
      {{ group.members.length }} Mitglieder
    </v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  name: "GroupCard",
  props: {
    group: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.card {
  border: solid black 1px;
}
</style>
