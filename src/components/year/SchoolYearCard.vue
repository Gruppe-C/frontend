<template>
  <v-card elevation="0" class="card" @click="$router.push({ name: 'SchoolYearDetail', params: {yearId: schoolYear.id}})">
    <v-card-title>{{ schoolYear.startYear }}/{{ schoolYear.endYear }}</v-card-title>
    <v-card-subtitle class="pb-1">
      8 Fächer
    </v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  name: "SchoolYearCard",
  props: {
    schoolYear: {
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
