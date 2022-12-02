<template>
  <v-card elevation="0" class="card" @click="$router.push({ name: 'SubjectDetail', params: {groupId: $route.params.groupId, yearId: $route.params.yearId, subjectId: subject.id}})">
    <v-card-title :style="'color: ' + subject.color">{{ subject.name }}</v-card-title>
    <v-card-subtitle>
      Test
    </v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  name: "SubjectCard",
  props: {
    subject: {
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
