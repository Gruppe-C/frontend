<template>
  <v-row>
    <v-col v-for="subject in list" :key="subject.id" cols="12" md="4" lg="3">
      <subject-card class="mb-1" :subject="subject"></subject-card>
    </v-col>
  </v-row>
</template>

<script>
import SubjectCard from "@/components/subject/SubjectCard";

export default {
  name: "SubjectList",
  components: {SubjectCard},

  props: {
    list: {
      type: Array,
      required: true
    }
  }
}
</script>
